import {
  act,
  renderHook,
  RenderHookResult,
} from '@testing-library/react-hooks';
import usePopupAnimation from './index';
import {
  turnEastToSouth,
  turnNorthToEast,
} from 'animations/camera';
import {
  UseAnimationProps,
  UseAnimationState,
} from './useAnimation.types';

jest.mock('react', () => {
  const React = jest.requireActual('react');

  return {
    ...React,
    useEffect: React.useLayoutEffect,
  };
});

function testHook (): RenderHookResult<UseAnimationProps, UseAnimationState> {
  return renderHook(
    () => usePopupAnimation(turnEastToSouth.getName()),
    { },
  );
}

describe('Hooks:useAnimation', () => {
  describe('animation start and end events', () => {
    it('should be initially in `start` state', () => {
      const { result } = testHook();
    
      const [animationStatus] = result.current;
      expect(animationStatus).toBe('start');
    });

    it('should change state to `end` after ending animation', () => {
      const { result } = testHook();

      act(() => {
        const [, onAnimationEnd] = result.current;
        // eslint-disable-next-line
        (onAnimationEnd as Function)({
          animationName: turnEastToSouth.getName(),
        });
      });
    
      const [animationStatus] = result.current;
      expect(animationStatus).toBe('end');
    });

    it('should not change state to `start` on another animation finish', () => {
      const { result } = testHook();

      act(() => {
        const [, onAnimationEnd] = result.current;
        // eslint-disable-next-line
        (onAnimationEnd as Function)({
          animationName: turnNorthToEast.getName(),
        });
      });
    
      const [animationStatus] = result.current;
      expect(animationStatus).toBe('start');
    });
  });
});
