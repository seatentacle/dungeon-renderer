import * as React from 'react';
import {
  useEffect,
  useState,
} from 'react';
import CameraView from './components/CameraView';
import useKeyPress from './hooks/useKeyPress';
import {
  direction,
  motion,
} from 'constants/directions';
import { keyboardKeys } from 'constants/keyboardKeys';
import { cells } from 'lib/camera/__mocks__/map.template.json';
import { Cell } from 'lib/camera';
import PlayerProvider from './components/PlayerProvider';
import usePlayer from './components/PlayerProvider/usePlayer';

import {
  GlobalStyle,
  Scene,
  Map,
} from './App.styled';

const MapView = () => {
  const {
    direction: viewDirection,
    setDirection,
    playerTurnRight,
    playerTurnLeft,
    position,
    setPosition,
    playerMove,
  } = usePlayer();
  const turnLeftPressed = useKeyPress(keyboardKeys.TURN_LEFT);
  const turnRightPressed = useKeyPress(keyboardKeys.TURN_RIGHT);
  const moveForwardPressed = useKeyPress(keyboardKeys.MOVE_FORWARD);
  const moveBackwardPressed = useKeyPress(keyboardKeys.MOVE_BACKWARD);
  const moveRightPressed = useKeyPress(keyboardKeys.MOVE_RIGHT);
  const moveLeftPressed = useKeyPress(keyboardKeys.MOVE_LEFT);

  useEffect(() => {
    setDirection(direction.WEST);
    setPosition({ x: 1, y: 1 });
  }, [])

  useEffect(() => {
    if (turnLeftPressed) {
      playerTurnLeft();
    }

    if (turnRightPressed) {
      playerTurnRight();
    }

    if (moveForwardPressed) {
      playerMove(motion.FORWARD);
    }

    if (moveBackwardPressed) {
      playerMove(motion.BACKWARD);
    }

    if (moveRightPressed) {
      playerMove(motion.RIGHT);
    }

    if (moveLeftPressed) {
      playerMove(motion.LEFT);
    }
  }, [
    turnLeftPressed,
    turnRightPressed,
    moveForwardPressed,
    moveBackwardPressed,
    moveRightPressed,
    moveLeftPressed,
  ]);

  return typeof viewDirection !== 'undefined' && typeof position !== 'undefined'
    ? (
      <Map>
        <CameraView
          direction={ viewDirection }
          position={ position }
          cells={ cells as Array<Cell> }
        />
      </Map>
    )
    : <></>;
}

const App: React.FC = () => {
  

  return (
    <>
      <GlobalStyle />

      <Scene>
        <PlayerProvider>
          <MapView />
        </PlayerProvider>
      </Scene>
    </>
  );
};

export default App;
