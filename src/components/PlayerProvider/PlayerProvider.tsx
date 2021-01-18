import * as React from 'react';
import PlayerContext from './PlayerContext';
import {
  move,
  turnRight,
  turnLeft,
} from './utils/playerMotion';

const PlayerProvider: React.FC = ({ children }) => {
  const [direction, setDirection] = React.useState(undefined)
  const [position, setPosition] = React.useState(undefined)
  const idleState = React.useState(true);
  
  return (
    <PlayerContext.Provider
      value={{
        position,
        setPosition,
        direction,
        setDirection,
        setIdle: idleState[1],
        playerTurnRight: turnRight(direction, setDirection, idleState),
        playerTurnLeft: turnLeft(direction, setDirection, idleState),
        playerMove: move(direction, [position, setPosition], idleState),
      }}
    >
      { children }
    </PlayerContext.Provider>
  )
};

export default PlayerProvider
