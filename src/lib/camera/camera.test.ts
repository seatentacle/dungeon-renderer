import { getCameraStand } from './index';
import { cameraDirection } from 'constants/directions';
import {
  CameraCells,
  Cell,
} from './camera.types';
import { cells } from './__mocks__/map.template.json';
import {
  cameraStandToNorth,
  cameraStandToEast,
  cameraStandToSouth,
  cameraStandToWest,
  cameraNorthToEast,
  cameraNorthToWest,
  cameraSouthToEast,
  cameraSouthToWest,
  cameraEastToNorth,
  cameraEastToSouth,
  cameraWestToNorth,
  cameraWestToSouth,
} from './__mocks__/cellsInCamera';
import { getCameraTurn } from './camera';

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

  describe('rotated camera', () => {
    it('should return the correct map cells for the camera, turned from north to east', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: cameraDirection.NORTH,
        to: cameraDirection.EAST,
      }, cameraStandToNorth as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraNorthToEast);
    });

    it('should return the correct map cells for the camera, turned from north to east', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: cameraDirection.NORTH,
        to: cameraDirection.WEST,
      }, cameraStandToNorth as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraNorthToWest);
    });

    it('should return the correct map cells for the camera, turned from south to east', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: cameraDirection.SOUTH,
        to: cameraDirection.EAST,
      }, cameraStandToSouth as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraSouthToEast);
    });

    it('should return the correct map cells for the camera, turned from south to west', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: cameraDirection.SOUTH,
        to: cameraDirection.WEST,
      }, cameraStandToSouth as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraSouthToWest);
    });

    it('should return the correct map cells for the camera, turned from east to north', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: cameraDirection.EAST,
        to: cameraDirection.NORTH,
      }, cameraStandToEast as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraEastToNorth);
    });

    it('should return the correct map cells for the camera, turned from east to south', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: cameraDirection.EAST,
        to: cameraDirection.SOUTH,
      }, cameraStandToEast as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraEastToSouth);
    });

    it('should return the correct map cells for the camera, turned from west to north', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: cameraDirection.WEST,
        to: cameraDirection.NORTH,
      }, cameraStandToWest as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraWestToNorth);
    });

    it('should return the correct map cells for the camera, turned from west to south', () => {
      const camera = getCameraTurn({
        x: 3,
        y: 3,
        from: cameraDirection.WEST,
        to: cameraDirection.SOUTH,
      }, cameraStandToWest as CameraCells, cells as Array<Cell>);

      expect(camera).toEqual(cameraWestToSouth);
    });
  });
});
