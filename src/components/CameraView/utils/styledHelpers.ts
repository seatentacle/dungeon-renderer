import { Keyframes } from 'styled-components';
import {
  empty,
  turnNorthToEast,
  turnEastToSouth,
  turnSouthToWest,
  turnWestToNorth,
  turnNorthToWest,
  turnWestToSouth,
  turnSouthToEast,
  turnEastToNorth,
} from 'animations/camera';
import { cameraDirection } from 'constants/directions';

export const getTurnAnimation = (from: cameraDirection, to: cameraDirection): Keyframes => {
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
