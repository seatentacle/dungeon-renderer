import { cameraDirection } from 'constants/directions';
import {
  CameraCells,
  Cell,
  GetCameraStand,
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
