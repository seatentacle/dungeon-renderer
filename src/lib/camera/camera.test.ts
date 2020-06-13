import {
  getCameraMove,
  getCameraStand,
  getCameraTurn,
} from './index';
import { cameraDirection, motionDirection } from 'constants/directions';
import {
  CameraCells,
  Cell,
} from './camera.types';
import { cells } from './__mocks__/map.template.json';
import {
  cameraStandToNorth,
  cameraStandToNorthSecond,
  cameraStandToEast,
  cameraStandToEastSecond,
  cameraStandToSouth,
  cameraStandToSouthSecond,
  cameraStandToWest,
  cameraStandToWestSecond,
  cameraNorthToEast,
  cameraNorthToWest,
  cameraSouthToEast,
  cameraSouthToWest,
  cameraEastToNorth,
  cameraEastToSouth,
  cameraWestToNorth,
  cameraWestToSouth,
  cameraNorthRight,
  cameraEastRight,
  cameraSouthRight,
  cameraWestRight,
  cameraNorthLeft,
  cameraEastLeft,
  cameraSouthLeft,
  cameraWestLeft,
  cameraNorthForward,
  cameraEastForward,
  cameraSouthForward,
  cameraWestForward,
  cameraNorthBackward,
  cameraEastBackward,
  cameraSouthBackward,
  cameraWestBackward,
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

  describe('moved camera', () => {
    it('should return the correct map cells for the camera, moved from north to right', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.EAST, cameraDirection.NORTH],
        cameraStandToNorth as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraNorthRight);
    });

    it('should return the correct map cells for the camera, moved from east to right', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.SOUTH, cameraDirection.EAST],
        cameraStandToEast as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraEastRight);
    });

    it('should return the correct map cells for the camera, moved from south to right', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.WEST, cameraDirection.SOUTH],
        cameraStandToSouth as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraSouthRight);
    });

    it('should return the correct map cells for the camera, moved from west to right', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.NORTH, cameraDirection.WEST],
        cameraStandToWest as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraWestRight);
    });

    it('should return the correct map cells for the camera, moved from north to left', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.WEST, cameraDirection.NORTH],
        cameraStandToNorth as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraNorthLeft);
    });

    it('should return the correct map cells for the camera, moved from east to left', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.NORTH, cameraDirection.EAST],
        cameraStandToEast as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraEastLeft);
    });

    it('should return the correct map cells for the camera, moved from south to left', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.EAST, cameraDirection.SOUTH],
        cameraStandToSouth as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraSouthLeft);
    });

    it('should return the correct map cells for the camera, moved from west to left', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.SOUTH, cameraDirection.WEST],
        cameraStandToWest as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraWestLeft);
    });

    it('should return the correct map cells for the camera, moved from north to forward', () => {
      const camera = getCameraMove(
        { x: 3, y: 4 },
        [motionDirection.NORTH, cameraDirection.NORTH],
        cameraStandToNorthSecond as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraNorthForward);
    });

    it('should return the correct map cells for the camera, moved from east to forward', () => {
      const camera = getCameraMove(
        { x: 2, y: 3 },
        [motionDirection.EAST, cameraDirection.EAST],
        cameraStandToEastSecond as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraEastForward);
    });

    it('should return the correct map cells for the camera, moved from south to forward', () => {
      const camera = getCameraMove(
        { x: 3, y: 2 },
        [motionDirection.SOUTH, cameraDirection.SOUTH],
        cameraStandToSouthSecond as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraSouthForward);
    });

    it('should return the correct map cells for the camera, moved from west to forward', () => {
      const camera = getCameraMove(
        { x: 4, y: 3 },
        [motionDirection.WEST, cameraDirection.WEST],
        cameraStandToWestSecond as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraWestForward);
    });

    it('should return the correct map cells for the camera, moved from north to backward', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.SOUTH, cameraDirection.NORTH],
        cameraStandToNorth as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraNorthBackward);
    });

    it('should return the correct map cells for the camera, moved from east to backward', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.WEST, cameraDirection.EAST],
        cameraStandToEast as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraEastBackward);
    });

    it('should return the correct map cells for the camera, moved from south to backward', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.NORTH, cameraDirection.SOUTH],
        cameraStandToSouth as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraSouthBackward);
    });

    it('should return the correct map cells for the camera, moved from west to backward', () => {
      const camera = getCameraMove(
        { x: 3, y: 3 },
        [motionDirection.EAST, cameraDirection.WEST],
        cameraStandToWest as CameraCells,
        cells as Array<Cell>
      );

      expect(camera).toEqual(cameraWestBackward);
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
