import { getCameraStand } from './index';
import { cameraDirection } from 'constants/directions';
import { Cell } from './camera.types';
import { cells } from './__mocks__/map.template.json';
import {
  cameraStandToNorth,
  cameraStandToEast,
  cameraStandToSouth,
  cameraStandToWest,
} from './__mocks__/cellsInCamera';

describe('Lib:camera', () => {
  describe('static camera', () => {
    it('should return the correct map cells for the camera facing north', () => {
      const camera = getCameraStand(cameraDirection.NORTH, { x: 3, y: 3 }, cells as Array<Cell>);

      expect(camera).toEqual(cameraStandToNorth);
    });

    it('should return the correct map cells for the camera facing east', () => {
      const camera = getCameraStand(cameraDirection.EAST, { x: 3, y: 3 }, cells as Array<Cell>);

      expect(camera).toEqual(cameraStandToEast);
    });

    it('should return the correct map cells for the camera facing south', () => {
      const camera = getCameraStand(cameraDirection.SOUTH, { x: 3, y: 3 }, cells as Array<Cell>);

      expect(camera).toEqual(cameraStandToSouth);
    });

    it('should return the correct map cells for the camera facing west', () => {
      const camera = getCameraStand(cameraDirection.WEST, { x: 3, y: 3 }, cells as Array<Cell>);

      expect(camera).toEqual(cameraStandToWest);
    });
  });
});
