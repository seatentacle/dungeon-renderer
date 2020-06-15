import {
  cameraDirection,
  motionDirection,
} from 'constants/directions';
import {
  CameraCells,
  Cell,
  GetCameraMove,
  GetCameraStand,
  GetCameraTurn,
} from './camera.types';

const CAMERA_POSITION = 3;

export const getCameraMove: GetCameraMove = (position, directions, cameraStand, cells) => {
  const [motion, direction] = directions;
  const cellsInCamera: CameraCells = [];

  let column = 4;
  let row = motion as unknown === direction ||
    Math.abs(motion - direction) === 2
    ? -CAMERA_POSITION : 0;

  for (row; row <= CAMERA_POSITION; row++) {
    if (Math.abs(motion - direction) === 2) {
      column = row < -1 || row > 1 ? 1 - Math.abs(row) : 1;
    } else if (motion as unknown !== direction) {
      column = row < 2 ? 2 : column + 1;
    }

    let dx = column;
    let dy = row;
    if (
      motion === motionDirection.NORTH && 
      (direction === cameraDirection.NORTH || direction === cameraDirection.SOUTH) ||
      motion === motionDirection.SOUTH && 
      (direction === cameraDirection.SOUTH || direction === cameraDirection.NORTH) ||
      motion !== motionDirection.EAST && motion !== motionDirection.WEST && 
      (direction === cameraDirection.EAST || direction === cameraDirection.WEST)
    ) {
      dx = row;
      dy = column;
    }

    const dxSigned: number =
      motion === motionDirection.WEST ||
      direction === cameraDirection.WEST &&
      motion !== motionDirection.EAST
      ? -dx : dx;
    const dySigned: number =
      motion === motionDirection.SOUTH ||
      direction === cameraDirection.SOUTH &&
      motion !== motionDirection.NORTH
      ? -dy : dy;

    const cell: Cell | undefined = cells.find(({ x, y }) =>
      x === position.x + dxSigned &&
      y === position.y - dySigned
    );

    if (cell) {
      cellsInCamera.push({
        position: {
          x: CAMERA_POSITION + dxSigned,
          y: CAMERA_POSITION - dySigned,
        },
        sides: cell.sides,
      });
    }
  }

  return [
    ...cameraStand,
    ...cellsInCamera,
  ];
};

export const getCameraStand: GetCameraStand = (direction, position, cells) => {
  const cellsInCamera: CameraCells = [];

  for (let row = 0; row <= CAMERA_POSITION; row++) {
    const columnsLimit: number = row > 1 ? row : 1;
    const dxSigned: number = 
      direction === cameraDirection.SOUTH ||
      direction === cameraDirection.WEST
      ? -row : row;

    for (let column: number = -columnsLimit; column <= columnsLimit; column++) {
      let dx: number = column;
      let dy: number = dxSigned;

      if (direction === cameraDirection.EAST || direction === cameraDirection.WEST) {
        dx = dxSigned;
        dy = column;
      }

      const cell: Cell | undefined = cells.find(({ x, y }) =>
        x === position.x + dx &&
        y === position.y - dy
      );

      if (cell) {
        cellsInCamera.push({
          position: {
            x: CAMERA_POSITION + dx,
            y: CAMERA_POSITION - dy,
          },
          sides: cell.sides,
        });
      }
    }
  }

  return cellsInCamera;
};

export const getCameraTurn: GetCameraTurn = (turnPosition, cameraStand, cells) => {
  const cellsInCamera: CameraCells = [];

  for (let row = 0; row <= CAMERA_POSITION; row++) {
    let columnsLimit: number = row > 1 ? row : 1;
    let columnsStart: number = row > 1 ? -row + 1 : 1;

    if (turnPosition.from === cameraDirection.SOUTH || turnPosition.from === cameraDirection.EAST) {
      columnsLimit = row > 1 ? row - 1 : -1;
      columnsStart = row > 1 ? -row : -1;
    }

    for (let column: number = columnsStart; column <= columnsLimit; column++) {
      let dx: number = column;
      let dy: number = row;

      if (turnPosition.to === cameraDirection.EAST || turnPosition.to === cameraDirection.WEST) {
        dx = row;
        dy = column;
      }

      const dxSigned: number = turnPosition.to === cameraDirection.WEST ? -dx : dx;
      const dySigned: number = turnPosition.to === cameraDirection.NORTH ? -dy : dy;

      const cell: Cell = cells.find(({ x, y }) => x === turnPosition.x + dxSigned && y === turnPosition.y + dySigned);

      if (cell) {
        cellsInCamera.push({
          position: {
            x: CAMERA_POSITION + dxSigned,
            y: CAMERA_POSITION + dySigned,
          },
          sides: cell.sides,
        });
      }
    }
  }

  return [
    ...cameraStand,
    ...cellsInCamera,
  ];
};
