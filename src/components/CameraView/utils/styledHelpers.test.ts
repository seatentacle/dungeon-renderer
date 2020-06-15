import {
  getMovtionAnimation,
  getRotationAnimation,
} from './styledHelpers';
import {
  moveNorthForward,
  moveNorthBackward,
  moveNorthRight,
  moveNorthLeft,
  moveEastForward,
  moveEastBackward,
  moveEastRight,
  moveEastLeft,
  moveSouthForward,
  moveSouthBackward,
  moveSouthRight,
  moveSouthLeft,
  moveWestForward,
  moveWestBackward,
  moveWestRight,
  moveWestLeft,
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
import { cameraDirection, motionDirection } from 'constants/directions';

describe('Utils:styledHelpers', () => {
  describe('getTurnAnimation', () => {
    it('should return the correct motion property for the camera', () => {
      expect(getMovtionAnimation(cameraDirection.NORTH, motionDirection.NORTH).getName())
        .toBe(moveNorthForward.getName());
      expect(getMovtionAnimation(cameraDirection.NORTH, motionDirection.SOUTH).getName())
        .toBe(moveNorthBackward.getName());
      expect(getMovtionAnimation(cameraDirection.NORTH, motionDirection.EAST).getName())
        .toBe(moveNorthRight.getName());
      expect(getMovtionAnimation(cameraDirection.NORTH, motionDirection.WEST).getName())
        .toBe(moveNorthLeft.getName());

      expect(getMovtionAnimation(cameraDirection.EAST, motionDirection.EAST).getName())
        .toBe(moveEastForward.getName());
      expect(getMovtionAnimation(cameraDirection.EAST, motionDirection.WEST).getName())
        .toBe(moveEastBackward.getName());
      expect(getMovtionAnimation(cameraDirection.EAST, motionDirection.SOUTH).getName())
        .toBe(moveEastRight.getName());
      expect(getMovtionAnimation(cameraDirection.EAST, motionDirection.NORTH).getName())
        .toBe(moveEastLeft.getName());

      expect(getMovtionAnimation(cameraDirection.SOUTH, motionDirection.SOUTH).getName())
        .toBe(moveSouthForward.getName());
      expect(getMovtionAnimation(cameraDirection.SOUTH, motionDirection.NORTH).getName())
        .toBe(moveSouthBackward.getName());
      expect(getMovtionAnimation(cameraDirection.SOUTH, motionDirection.WEST).getName())
        .toBe(moveSouthRight.getName());
      expect(getMovtionAnimation(cameraDirection.SOUTH, motionDirection.EAST).getName())
        .toBe(moveSouthLeft.getName());

      expect(getMovtionAnimation(cameraDirection.WEST, motionDirection.WEST).getName())
        .toBe(moveWestForward.getName());
      expect(getMovtionAnimation(cameraDirection.WEST, motionDirection.EAST).getName())
        .toBe(moveWestBackward.getName());
      expect(getMovtionAnimation(cameraDirection.WEST, motionDirection.NORTH).getName())
        .toBe(moveWestRight.getName());
      expect(getMovtionAnimation(cameraDirection.WEST, motionDirection.SOUTH).getName())
        .toBe(moveWestLeft.getName());

      expect(getMovtionAnimation(cameraDirection.NORTH, undefined as motionDirection).getName())
        .toBe(empty.getName());
    });

    it('should return the correct rotation property for the camera', () => {
      expect(getRotationAnimation(cameraDirection.NORTH, cameraDirection.EAST).getName())
        .toBe(turnNorthToEast.getName());
      expect(getRotationAnimation(cameraDirection.EAST, cameraDirection.SOUTH).getName())
        .toBe(turnEastToSouth.getName());
      expect(getRotationAnimation(cameraDirection.SOUTH, cameraDirection.WEST).getName())
        .toBe(turnSouthToWest.getName());
      expect(getRotationAnimation(cameraDirection.WEST, cameraDirection.NORTH).getName())
        .toBe(turnWestToNorth.getName());
      
      expect(getRotationAnimation(cameraDirection.NORTH, cameraDirection.WEST).getName())
        .toBe(turnNorthToWest.getName());
      expect(getRotationAnimation(cameraDirection.WEST, cameraDirection.SOUTH).getName())
        .toBe(turnWestToSouth.getName());
      expect(getRotationAnimation(cameraDirection.SOUTH, cameraDirection.EAST).getName())
        .toBe(turnSouthToEast.getName());
      expect(getRotationAnimation(cameraDirection.EAST, cameraDirection.NORTH).getName())
        .toBe(turnEastToNorth.getName());
      
      expect(getRotationAnimation(cameraDirection.NORTH, cameraDirection.NORTH).getName())
        .toBe(empty.getName());
    });
  });
});
