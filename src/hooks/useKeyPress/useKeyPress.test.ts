import {
  renderHook,
  act,
  RenderHookResult,
} from '@testing-library/react-hooks';
import useKeyPress from './index';
import { UseKeyPsessProps } from './useKeyPress.types';

// eslint-disable-next-line
const events: any = {};
window.addEventListener = jest.fn((event, cb) => {
  events[event] = cb;
});

const onPressDown = jest.fn();
const onPressUp = jest.fn();

function testHook (initialProps: {
  targetKey: string;
  onPressDown?: () => void;
  onPressUp?: () => void;
}): RenderHookResult<UseKeyPsessProps, {}> {
  return renderHook(
    ({ targetKey, onPressDown, onPressUp }) => useKeyPress(targetKey, onPressDown, onPressUp),
    { initialProps }
  );
}

describe('Hooks:useKeyPress', () =>{
  describe('keyboard press events', () => {
    it('should return the correct state for the target key after pressing', () => {
      const { result } = testHook({ targetKey: 'Enter' });
    
      expect(result.current).toBe(false);
    
      act(() => {
        events.keydown({ code: 'Enter' });
      });
      expect(result.current).toBe(true);
    
      act(() => {
        events.keyup({ code: 'Enter' });
      });
      expect(result.current).toBe(false);
    });
  
    it('should return the false state for a non-target key after pressing', () => {
      const { result } = testHook({ targetKey: 'Space' });
  
      expect(result.current).toBe(false);
  
      act(() => {
        events.keydown({ code: 'Enter' });
      });
      expect(result.current).toBe(false);

      act(() => {
        events.keyup({ code: 'Enter' });
      });
      expect(result.current).toBe(false);
    });
  });

  describe('callbacks use', () => {
    it('should call the `onPressDown` function after pressing the target key', () => {
      testHook({ targetKey: 'Space', onPressDown });
  
      expect(onPressDown).toBeCalledTimes(0);
  
      act(() => {
        events.keydown({ code: 'Space' });
      });
      expect(onPressDown).toBeCalledTimes(1);
    });
  
    it('should call the `onPressDown` function after press ups the target key', () => {
      testHook({ targetKey: 'Esc', onPressUp });
  
      expect(onPressUp).toBeCalledTimes(0);
  
      act(() => {
        events.keyup({ code: 'Esc' });
      });
      expect(onPressUp).toBeCalledTimes(1);
    });
  });
});
