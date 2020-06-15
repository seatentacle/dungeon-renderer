import { keyframes } from 'styled-components';
import {
  TRANSLATE_X,
  TRANSLATE_Z,
} from 'constants/dimensions';

export const empty = keyframes``;

export const moveNorthForward = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 0) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 0) translate3d(${TRANSLATE_X}rem, 0, ${TRANSLATE_Z * 2}rem)
  }
`;

export const moveEastForward = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(-${TRANSLATE_X}rem, 0, 0);
  }
`;

export const moveSouthForward = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, -${TRANSLATE_Z * 2}rem);
  }
`;

export const moveWestForward = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X * 3}rem, 0, 0);
  }
`;

export const moveNorthBackward = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 0) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 0) translate3d(${TRANSLATE_X}rem, 0, -${TRANSLATE_Z * 2}rem)
  }
`;

export const moveEastBackward = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X * 3}rem, 0, 0);
  }
`;

export const moveSouthBackward = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, ${TRANSLATE_Z * 2}rem);
  }
`;

export const moveWestBackward = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(-${TRANSLATE_X}rem, 0, 0);
  }
`;

export const moveNorthRight = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 0) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 0) translate3d(-${TRANSLATE_X}rem, 0, 0);
  }
`;

export const moveEastRight = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, -${TRANSLATE_Z * 2}rem);
  }
`;

export const moveSouthRight = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X * 3}rem, 0, 0);
  }
`;

export const moveWestRight = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, ${TRANSLATE_Z * 2}rem);
  }
`;

export const moveNorthLeft = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 0) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 0) translate3d(${TRANSLATE_X * 3}rem, 0, 0);
  }
`;

export const moveEastLeft = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(${TRANSLATE_X}rem, 0, ${TRANSLATE_Z * 2}rem);
  }
`;

export const moveSouthLeft = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 180deg) translate3d(-${TRANSLATE_X}rem, 0, 0);
  }
`;

export const moveWestLeft = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  }

  to {
    transform: rotate3d(0, 1, 0, 270deg) translate3d(${TRANSLATE_X}rem, 0, -${TRANSLATE_Z * 2}rem);
  }
`;

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
