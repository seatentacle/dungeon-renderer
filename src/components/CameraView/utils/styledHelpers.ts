import { Keyframes } from 'styled-components';
import {
  empty,
  moveNorthForward,
  moveEastForward,
  moveSouthForward,
  moveWestForward,
  moveNorthBackward,
  moveEastBackward,
  moveSouthBackward,
  moveWestBackward,
  moveNorthRight,
  moveEastRight,
  moveSouthRight,
  moveWestRight,
  moveNorthLeft,
  moveEastLeft,
  moveSouthLeft,
  moveWestLeft,
  turnNorthToEast,
  turnEastToSouth,
  turnSouthToWest,
  turnWestToNorth,
  turnNorthToWest,
  turnWestToSouth,
  turnSouthToEast,
  turnEastToNorth,
} from 'animations/camera';
import {
  cameraDirection,
  motionDirection,
} from 'constants/directions';

export const getMovtionAnimation = (
  direction: cameraDirection,
  motion: motionDirection,
): Keyframes => {
  switch (true) {
    case motion === motionDirection.NORTH && direction === cameraDirection.NORTH:
      return moveNorthForward;
    case motion === motionDirection.EAST && direction === cameraDirection.EAST:
      return moveEastForward;
    case motion === motionDirection.SOUTH && direction === cameraDirection.SOUTH:
      return moveSouthForward;
    case motion === motionDirection.WEST && direction === cameraDirection.WEST:
      return moveWestForward;

    case motion === motionDirection.SOUTH && direction === cameraDirection.NORTH:
      return moveNorthBackward;
    case motion === motionDirection.WEST && direction === cameraDirection.EAST:
      return moveEastBackward;
    case motion === motionDirection.NORTH && direction === cameraDirection.SOUTH:
      return moveSouthBackward;
    case motion === motionDirection.EAST && direction === cameraDirection.WEST:
      return moveWestBackward;

    case motion === motionDirection.EAST && direction === cameraDirection.NORTH:
      return moveNorthRight;
    case motion === motionDirection.SOUTH && direction === cameraDirection.EAST:
      return moveEastRight;
    case motion === motionDirection.WEST && direction === cameraDirection.SOUTH:
      return moveSouthRight;
    case motion === motionDirection.NORTH && direction === cameraDirection.WEST:
      return moveWestRight;

    case motion === motionDirection.WEST && direction === cameraDirection.NORTH:
      return moveNorthLeft;
    case motion === motionDirection.NORTH && direction === cameraDirection.EAST:
      return moveEastLeft;
    case motion === motionDirection.EAST && direction === cameraDirection.SOUTH:
      return moveSouthLeft;
    case motion === motionDirection.SOUTH && direction === cameraDirection.WEST:
      return moveWestLeft;

    default:
      return empty;
  }
};

export const getRotationAnimation = (
  from: cameraDirection,
  to: cameraDirection,
): Keyframes => {
  switch (true) {
    case from === cameraDirection.NORTH && to === cameraDirection.EAST:
      return turnNorthToEast;
    case from === cameraDirection.EAST && to === cameraDirection.SOUTH:
      return turnEastToSouth;
    case from === cameraDirection.SOUTH && to === cameraDirection.WEST:
      return turnSouthToWest;
    case from === cameraDirection.WEST && to === cameraDirection.NORTH:
      return turnWestToNorth;
    case from === cameraDirection.NORTH && to === cameraDirection.WEST:
      return turnNorthToWest;
    case from === cameraDirection.WEST && to === cameraDirection.SOUTH:
      return turnWestToSouth;
    case from === cameraDirection.SOUTH && to === cameraDirection.EAST:
      return turnSouthToEast;
    case from === cameraDirection.EAST && to === cameraDirection.NORTH:
      return turnEastToNorth;
    default:
      return empty;
  }
};
