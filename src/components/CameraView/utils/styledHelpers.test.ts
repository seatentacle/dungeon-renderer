import { getTurnAnimation } from './styledHelpers';
import {
  turnNorthToEast,
  turnEastToSouth,
  turnSouthToWest,
  turnWestToNorth,
  turnNorthToWest,
  turnWestToSouth,
  turnSouthToEast,
  turnEastToNorth,
  empty,
} from 'animations/camera';
import { cameraDirection } from 'constants/directions';

describe('Utils:styledHelpers', () => {
  describe('getTurnAnimation', () => {
    it('should return the correct rotation property for the camera', () => {
      expect(getTurnAnimation(cameraDirection.NORTH, cameraDirection.EAST).getName()).toBe(turnNorthToEast.getName());
      expect(getTurnAnimation(cameraDirection.EAST, cameraDirection.SOUTH).getName()).toBe(turnEastToSouth.getName());
      expect(getTurnAnimation(cameraDirection.SOUTH, cameraDirection.WEST).getName()).toBe(turnSouthToWest.getName());
      expect(getTurnAnimation(cameraDirection.WEST, cameraDirection.NORTH).getName()).toBe(turnWestToNorth.getName());
      
      expect(getTurnAnimation(cameraDirection.NORTH, cameraDirection.WEST).getName()).toBe(turnNorthToWest.getName());
      expect(getTurnAnimation(cameraDirection.WEST, cameraDirection.SOUTH).getName()).toBe(turnWestToSouth.getName());
      expect(getTurnAnimation(cameraDirection.SOUTH, cameraDirection.EAST).getName()).toBe(turnSouthToEast.getName());
      expect(getTurnAnimation(cameraDirection.EAST, cameraDirection.NORTH).getName()).toBe(turnEastToNorth.getName());
      
      expect(getTurnAnimation(cameraDirection.NORTH, cameraDirection.NORTH).getName()).toBe(empty.getName());
    });
  });
});
