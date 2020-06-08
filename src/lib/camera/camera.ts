import { cameraDirection } from 'constants/directions';
import {
  CameraCells,
  Cell,
  GetCameraStand,
  GetCameraTurn,
} from './camera.types';

const CAMERA_POSITION = 3;

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
