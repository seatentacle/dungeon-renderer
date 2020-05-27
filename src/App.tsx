import * as React from 'react';
import {
  useEffect,
  useState,
} from 'react';
import CameraView from './components/CameraView';
import { CameraPosition } from './components/CameraView/CameraView.types';
import useKeyPress from './hooks/useKeyPress';
import { cameraDirection } from 'constants/directions';
import { keyboardKeys } from 'constants/keyboardKeys';
import { cells } from 'lib/camera/__mocks__/map.template.json';
import { Cell } from 'lib/camera';

import {
  moveForward,
  moveBackward,
  moveLeft,
  moveRight,
} from './App.utils';

import {
  GlobalStyle,
  Scene,
  Map,
} from './App.styled';

const App: React.FC = () => {
  const [direction, setDirection] = useState<cameraDirection>(cameraDirection.WEST);
  const [position, setPosition] = useState<CameraPosition>({ x: 1, y: 1 });
  const turnLeftPressed = useKeyPress(keyboardKeys.TURN_LEFT);
  const turnRightPressed = useKeyPress(keyboardKeys.TURN_RIGHT);
  const moveForwardPressed = useKeyPress(keyboardKeys.MOVE_FORWARD);
  const moveBackwardPressed = useKeyPress(keyboardKeys.MOVE_BACKWARD);
  const moveRightPressed = useKeyPress(keyboardKeys.MOVE_RIGHT);
  const moveLeftPressed = useKeyPress(keyboardKeys.MOVE_LEFT);

  useEffect(() => {
    if (turnLeftPressed) {
      const newDirection = (direction - 1) < 0 ? 3: direction - 1;
      if (newDirection !== direction)
        setDirection(newDirection);
    }

    if (turnRightPressed) {
      const newDirection = (direction + 1) > 3 ? 0: direction + 1;
      if (newDirection !== direction)
        setDirection(newDirection);
    }

    if (moveForwardPressed) {
      setPosition(moveForward(direction, position));
    }

    if (moveBackwardPressed) {
      setPosition(moveBackward(direction, position));
    }

    if (moveRightPressed) {
      setPosition(moveRight(direction, position));
    }

    if (moveLeftPressed) {
      setPosition(moveLeft(direction, position));
    }
  }, [
    turnLeftPressed,
    turnRightPressed,
    moveForwardPressed,
    moveBackwardPressed,
    moveRightPressed,
    moveLeftPressed,
  ]);

  return (
    <>
      <GlobalStyle />

      <Scene>
        <Map>
          <CameraView
            direction={ direction }
            position={ position }
            cells={ cells as Array<Cell> }
          />
        </Map>
      </Scene>
    </>
  );
};

export default App;
