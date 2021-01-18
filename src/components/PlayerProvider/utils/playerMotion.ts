import {
  Move,
  Turn,
} from './playerMotion.types';
import {
  direction,
  motion,
} from 'constants/directions';

export const move: Move = (viewDirection, positionState, idleState) => motionDirection => {
  const [position, setPosition] = positionState;
  const [isIdle, setIdle] = idleState;

  if (isIdle) {
    setIdle(false);

    switch (true) {
      case viewDirection === direction.NORTH && motionDirection === motion.FORWARD:
      case viewDirection === direction.SOUTH && motionDirection === motion.BACKWARD:
      case viewDirection === direction.WEST && motionDirection === motion.RIGHT:
      case viewDirection === direction.EAST && motionDirection === motion.LEFT:
        setPosition({
          ...position,
          y: position.y - 1,
        });
        break;
      case viewDirection === direction.EAST && motionDirection === motion.FORWARD:
      case viewDirection === direction.WEST && motionDirection === motion.BACKWARD:
      case viewDirection === direction.NORTH && motionDirection === motion.RIGHT:
      case viewDirection === direction.SOUTH && motionDirection === motion.LEFT:
        setPosition({
          ...position,
          x: position.x + 1,
        });
        break;
      case viewDirection === direction.SOUTH && motionDirection === motion.FORWARD:
      case viewDirection === direction.NORTH && motionDirection === motion.BACKWARD:
      case viewDirection === direction.EAST && motionDirection === motion.RIGHT:
      case viewDirection === direction.WEST && motionDirection === motion.LEFT:
        setPosition({
          ...position,
          y: position.y + 1,
        });
        break;
      case viewDirection === direction.WEST && motionDirection === motion.FORWARD:
      case viewDirection === direction.EAST && motionDirection === motion.BACKWARD:
      case viewDirection === direction.SOUTH && motionDirection === motion.RIGHT:
      case viewDirection === direction.NORTH && motionDirection === motion.LEFT:
        setPosition({
          ...position,
          x: position.x - 1,
        });
        break;
      default:
        setPosition(position);
    }
  }
};

export const turnRight: Turn = (viewDirection, setViewDirection, idleState) => () => {
  const [isIdle, setIdle] = idleState
  const newDirection = (viewDirection + 1) > 3 ? 0: viewDirection + 1;

  if (isIdle) {
    setIdle(false);
    setViewDirection(newDirection);
  }
}

export const turnLeft: Turn = (viewDirection, setViewDirection, idleState) => () => {
  const [isIdle, setIdle] = idleState
  const newDirection = (viewDirection - 1) < 0 ? 3: viewDirection - 1;

  if (isIdle) {
    setIdle(false);
    setViewDirection(newDirection);
  }
}
