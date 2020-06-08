import * as React from 'react';
import {
  memo,
  useEffect,
  useState,
} from 'react';
import { cameraDirection } from 'constants/directions';
import { Camera } from './CameraView.styled';
import { getTurnAnimation } from './utils/styledHelpers';
import useAnimation from 'hooks/useAnimation';
import usePrevious from 'hooks/usePrevious';
import {
  getCameraStand,
  getCameraTurn,
} from 'lib/camera';
import CellView from '../CellView';

import { CameraViewProps } from './CameraView.types';

const CameraView: React.FC<CameraViewProps> = memo(({
  direction = cameraDirection.NORTH,
  position,
  cells,
}) => {
  const prevDirection = usePrevious(direction);
  const [directions, setDirections] = useState({ from: direction, to: direction });

  const [cameraCells, setCameraCells] = useState(getCameraStand(directions.from, position, cells));

  const animation = getTurnAnimation(directions.from, directions.to);
  const [animationStatus, onAnimationEnd] = useAnimation(animation.getName());

  useEffect(() => {
    if (prevDirection !== direction) {
      setDirections({ from: prevDirection, to: direction });

      setCameraCells(getCameraTurn(
        { from: prevDirection, to: direction, ...position },
        cameraCells,
        cells,
      ));
    }
  }, [direction]);

  useEffect(() => {
    if (animationStatus === 'end') {
      setCameraCells(getCameraStand(direction, position, cells));
    }
  }, [animationStatus, position]);

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
