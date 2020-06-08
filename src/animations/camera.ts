import { keyframes } from 'styled-components';
import { TRANSLATE_X } from 'constants/dimensions';

export const empty = keyframes``;

export const turnNorthToEast = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 0) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }
`;

export const turnEastToSouth = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }
`;

export const turnSouthToWest = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }
`;

export const turnWestToNorth = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 360deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }
`;

export const turnNorthToWest = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 360deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }
`;

export const turnWestToSouth = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }
`;

export const turnSouthToEast = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }
`;

export const turnEastToNorth = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 0deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }
`;
