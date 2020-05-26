import {
  getBackground,
  getHeight,
  getTransform,
  getTranslate,
} from './styledHelpers';
import {
  HEIGHT,
  TRANSLATE_Z,
} from 'constants/dimensions';
import { cellSide } from '../CellView.types';

describe('Utils:styledHelpers', () => {
  describe('getBackground', () => {
    it('should return the correct background color for a particular side', () => {
      expect(getBackground(cellSide.FRONT)).toBe('hsla(0, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.BACK)).toBe('hsla(120, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.RIGHT)).toBe('hsla(60, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.LEFT)).toBe('hsla(180, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.TOP)).toBe('hsla(240, 100%, 50%, 0.5)');
      expect(getBackground(cellSide.BOTTOM)).toBe('hsla(300, 100%, 50%, 0.5)');

      expect(getBackground(null)).toBe('transparent');
    });
  });

  describe('getHeight', () => {
    it('should return the correct height for a particular side', () => {
      const height = 7.5;

      expect(getHeight(cellSide.FRONT)).toBe(height);
      expect(getHeight(cellSide.BACK)).toBe(height);
      expect(getHeight(cellSide.RIGHT)).toBe(height);
      expect(getHeight(cellSide.LEFT)).toBe(height);

      expect(getHeight(cellSide.TOP)).toBe(HEIGHT);
      expect(getHeight(cellSide.BOTTOM)).toBe(HEIGHT);

      expect(getHeight(null)).toBe(height);
    });
  });

  describe('getTransform', () => {
    it('should return the correct transform for a particular side', () => {
      expect(getTransform(cellSide.FRONT))
        .toBe(`rotate3d(0, 0, 0, 0) translate3d(0, 0, ${TRANSLATE_Z}rem) scale3d(1, 1, 1)`);
      expect(getTransform(cellSide.BACK))
        .toBe(`rotate3d(0, 1, 0, 180deg) translate3d(0, 0, ${TRANSLATE_Z}rem) scale3d(-1, 1, 1)`);
      expect(getTransform(cellSide.RIGHT))
        .toBe(`rotate3d(0, 1, 0, 90deg) translate3d(0, 0, ${TRANSLATE_Z}rem) scale3d(-1, 1, 1)`);
      expect(getTransform(cellSide.LEFT))
        .toBe(`rotate3d(0, -1, 0, 90deg) translate3d(0, 0, ${TRANSLATE_Z}rem) scale3d(-1, 1, 1)`);
      expect(getTransform(cellSide.TOP))
        .toBe(`rotate3d(1, 0, 0, 90deg) translate3d(0, 0, ${TRANSLATE_Z}rem) scale3d(1, -1, 1)`);
      expect(getTransform(cellSide.BOTTOM))
        .toBe(`rotate3d(-1, 0, 0, 90deg) translate3d(0, 0, ${HEIGHT / 10}rem) scale3d(1, -1, 1)`);

      expect(getTransform(null))
        .toBe(`rotate3d(0, 0, 0, 0) translate3d(0, 0, ${TRANSLATE_Z}rem) scale3d(1, 1, 1)`);
    });
  });

  describe('getTranslate', () => {
    it('should return the correct translate property for the cell', () => {
      expect(getTranslate(3, 3)).toBe(`translate3d(0rem, 0, 0rem)`);
      expect(getTranslate(2, 1)).toBe(`translate3d(${-HEIGHT}rem, 0, ${-2 * HEIGHT}rem)`);
      expect(getTranslate(4, -1)).toBe(`translate3d(${HEIGHT}rem, 0, ${-4 * HEIGHT}rem)`);
    });
  });
});
