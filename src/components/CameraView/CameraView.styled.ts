import * as React from 'react';
import styled, { Keyframes } from 'styled-components';
import { TRANSLATE_X } from 'constants/dimensions';
import { CameraProps } from './CameraView.types';

export const Camera: React.FC<CameraProps> = styled.div<CameraProps>`
  transform: rotate3d(0, 1, 0, ${({ direction }): number => direction * 90}deg) translate3d(${TRANSLATE_X}rem, 0, 0);
  transform-style: preserve-3d;

  animation: ${({ animation }): Keyframes => animation} 800ms ease-in-out;
`;
