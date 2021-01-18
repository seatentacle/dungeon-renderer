import * as React from 'react';
import { Keyframes } from 'styled-components';
import {
  memo,
  useEffect,
  useState,
} from 'react';
import {
  cameraDirection,
  motionDirection,
} from 'constants/directions';
import { Camera } from './CameraView.styled';
import {
  getMovtionAnimation,
  getRotationAnimation,
} from './utils/styledHelpers';
import useAnimation from 'hooks/useAnimation';
import usePrevious from 'hooks/usePrevious';
import usePlayer from '../PlayerProvider/usePlayer';
import {
  getCameraStand,
  getCameraMove,
  getCameraTurn,
} from 'lib/camera';
import CellView from '../CellView';
import { empty } from 'animations/camera';

import {
  cameraAnimationType,
  CameraPosition,
  CameraViewProps,
} from './CameraView.types';

const getMotionDirection = (from: CameraPosition, to: CameraPosition): motionDirection => {
  switch (true) {
    case from.x === to.x && from.y > to.y:
      return motionDirection.NORTH;
    case from.x < to.x && from.y === to.y:
      return motionDirection.EAST;
    case from.x === to.x && from.y < to.y:
      return motionDirection.SOUTH;
    case from.x > to.x && from.y === to.y:
      return motionDirection.WEST;
  }
};

const CameraView: React.FC<CameraViewProps> = memo(({
  direction = cameraDirection.NORTH,
  position,
  cells,
}) => {
  const prevDirection = usePrevious(direction);
  const prevPosition = usePrevious(position);
  const [directions, setDirections] = useState({ from: direction, to: direction });
  const [positions, setPositions] = useState<[CameraPosition, CameraPosition]>([position, position]);

  const { setIdle } = usePlayer();
  const [cameraCells, setCameraCells] = useState(getCameraStand(directions.from, position, cells));

  const [animationType, setAnimationType] = useState(cameraAnimationType.STAND);

  const animation = ((): Keyframes => {
    switch (animationType) {
      case cameraAnimationType.ROTATE:
        return getRotationAnimation(directions.from, directions.to);
      case cameraAnimationType.MOVE:
        return getMovtionAnimation(direction, getMotionDirection(...positions));
      default:
        return empty;
    }
   })();
  const [animationStatus, onAnimationEnd] = useAnimation(animation.getName());

  useEffect(() => {
    if (prevDirection !== direction) {
      setDirections({ from: prevDirection, to: direction });
      setAnimationType(cameraAnimationType.ROTATE);

      setCameraCells(getCameraTurn(
        { from: prevDirection, to: direction, ...position },
        cameraCells,
        cells,
      ));
    } else if (prevPosition && (prevPosition.x !== position.x || prevPosition.y !== position.y)) {
      setPositions([prevPosition, position]);
      setAnimationType(cameraAnimationType.MOVE);

      setCameraCells(getCameraMove(
        prevPosition,
        [
          getMotionDirection(prevPosition, position),
          prevDirection,
        ],
        cameraCells,
        cells,
      ));
    }
  }, [direction, position]);

  useEffect(() => {
    if (animationStatus === 'end') {
      setAnimationType(cameraAnimationType.STAND);
      setIdle(true);

      setCameraCells(getCameraStand(direction, position, cells));
    }
  }, [animationStatus]);

  return (
    <Camera
      direction={ directions.to }
      animation={ animation }
      onAnimationEnd={ onAnimationEnd }
    >
      {
        cameraCells.map((props, index) => (
          <CellView
            key={ index }
            { ...props }
          />
        ))
      }
    </Camera>
  );
}, (prev, next) => {
  return (
    prev.direction === next.direction &&
    prev.position.x === next.position.x &&
    prev.position.y === next.position.y
  );
});

export default CameraView;
