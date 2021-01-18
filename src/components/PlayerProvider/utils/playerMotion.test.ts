import { move } from './playerMotion';
import {
  direction,
  motion,
} from 'constants/directions';

const setIdle = jest.fn();
const setPosition = jest.fn();

describe('Utils:playerMotion', () => {
  describe('', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should call a function sets the player\'s state to the idle false', () => {
      expect(setIdle).toBeCalledTimes(0);

      move(direction.NORTH, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.FORWARD);

      expect(setIdle).toBeCalledTimes(1);
      expect(setIdle).toHaveBeenCalledWith(false);
    });

    it('should not call the function when the player is in a state of movement', () => {
      expect(setIdle).toBeCalledTimes(0);

      move(direction.NORTH, [{ x: 0, y: 0 }, setPosition], [false, setIdle])(motion.FORWARD);

      expect(setIdle).toBeCalledTimes(0);
    });

    it('should move the player forward', () => {
      expect(setPosition).toBeCalledTimes(0);

      move(direction.NORTH, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.FORWARD);

      expect(setPosition).toBeCalledTimes(1);
      expect(setPosition).toHaveBeenCalledWith({ x: 0, y: -1 });

      move(direction.EAST, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.FORWARD);
      expect(setPosition).toHaveBeenCalledWith({ x: 1, y: 0 });

      move(direction.SOUTH, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.FORWARD);
      expect(setPosition).toHaveBeenCalledWith({ x: 0, y: 1 });

      move(direction.WEST, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.FORWARD);
      expect(setPosition).toHaveBeenCalledWith({ x: -1, y: 0 });
    });

    it('should move the player backward', () => {
      expect(setPosition).toBeCalledTimes(0);

      move(direction.NORTH, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.BACKWARD);

      expect(setPosition).toBeCalledTimes(1);
      expect(setPosition).toHaveBeenCalledWith({ x: 0, y: 1 });

      move(direction.EAST, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.BACKWARD);
      expect(setPosition).toHaveBeenCalledWith({ x: -1, y: 0 });

      move(direction.SOUTH, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.BACKWARD);
      expect(setPosition).toHaveBeenCalledWith({ x: 0, y: -1 });

      move(direction.WEST, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.BACKWARD);
      expect(setPosition).toHaveBeenCalledWith({ x: 1, y: 0 });
    });

    it('', () => {
      expect(setPosition).toBeCalledTimes(0);

      move(direction.WEST, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.RIGHT);

      expect(setPosition).toBeCalledTimes(1);
      expect(setPosition).toHaveBeenCalledWith({ x: 0, y: -1 });
    });

    it('should move the player left', () => {
      expect(setPosition).toBeCalledTimes(0);

      move(direction.EAST, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(motion.LEFT);

      expect(setPosition).toBeCalledTimes(1);
      expect(setPosition).toHaveBeenCalledWith({ x: 0, y: -1 });
    });

    it('', () => {
      expect(setPosition).toBeCalledTimes(0);

      move(direction.WEST, [{ x: 0, y: 0 }, setPosition], [true, setIdle])(undefined);

      expect(setPosition).toBeCalledTimes(1);
      expect(setPosition).toHaveBeenCalledWith({ x: 0, y: 0 });
    });
  });
});
