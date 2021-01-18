import {
  renderHook,
  RenderHookResult,
} from '@testing-library/react-hooks';
import usePrevious from './index';

function testHook <T>(initialProps: T): RenderHookResult<T, {}> {
  return renderHook(value => usePrevious(value), { initialProps });
}

describe('Hooks:usePrevious', () => {
  describe('previous props', () => {
    it('should return the previous property', () => {
      const { result, rerender } = testHook(1);

      expect(result.current).toBe(undefined);

      rerender(3);

      expect(result.current).toBe(1);

      rerender(0);

      expect(result.current).toBe(3);
    });
  });
});
