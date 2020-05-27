import { CameraPosition } from './components/CameraView/CameraView.types';
import { cameraDirection } from 'constants/directions';

export const moveForward = (direction: cameraDirection, position: CameraPosition): CameraPosition => {
  switch (direction) {
    case cameraDirection.NORTH:
      return {
        ...position,
        y: position.y - 1,
      };
    case cameraDirection.EAST:
      return {
        ...position,
        x: position.x + 1,
      };
    case cameraDirection.SOUTH:
      return {
        ...position,
        y: position.y + 1,
      };
    case cameraDirection.WEST:
      return {
        ...position,
        x: position.x - 1,
      };
    default:
      return position;
  }
};

export const moveBackward = (direction: cameraDirection, position: CameraPosition): CameraPosition => {
  switch (direction) {
    case cameraDirection.NORTH:
      return {
        ...position,
        y: position.y + 1,
      };
    case cameraDirection.EAST:
      return {
        ...position,
        x: position.x - 1,
      };
    case cameraDirection.SOUTH:
      return {
        ...position,
        y: position.y - 1,
      };
    case cameraDirection.WEST:
      return {
        ...position,
        x: position.x + 1,
      };
    default:
      return position;
  }
};

export const moveRight = (direction: cameraDirection, position: CameraPosition): CameraPosition => {
  switch (direction) {
    case cameraDirection.NORTH:
      return {
        ...position,
        x: position.x - 1,
      };
    case cameraDirection.EAST:
      return {
        ...position,
        y: position.y - 1,
      };
    case cameraDirection.SOUTH:
      return {
        ...position,
        x: position.x + 1,
      };
    case cameraDirection.WEST:
      return {
        ...position,
        y: position.y + 1,
      };
    default:
      return position;
  }
};

export const moveLeft = (direction: cameraDirection, position: CameraPosition): CameraPosition => {
  switch (direction) {
    case cameraDirection.NORTH:
      return {
        ...position,
        x: position.x + 1,
      };
    case cameraDirection.EAST:
      return {
        ...position,
        y: position.y + 1,
      };
    case cameraDirection.SOUTH:
      return {
        ...position,
        x: position.x - 1,
      };
    case cameraDirection.WEST:
      return {
        ...position,
        y: position.y - 1,
      };
    default:
      return position;
  }
};
