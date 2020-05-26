import * as React from 'react';
import styled from 'styled-components';
import {
  getBackground,
  getHeight,
  getTransform,
  getTranslate,
} from './utils/styledHelpers';
import {
  WIDTH,
  HEIGHT,
} from 'constants/dimensions';
import {
  CellFaceProps,
  CellProps,
} from './CellView.types';

export const Cell: React.FC<CellProps> = styled.div<CellProps>`
  width: ${WIDTH / 2}rem;
  height: ${HEIGHT}rem;
  position: absolute;
  transform-style: preserve-3d;

  transform: ${({ x, y }): string => getTranslate(x, y)};
`;

export const CellFace: React.FC<CellFaceProps> = styled.div<CellFaceProps>`
  position: absolute;
  width: ${WIDTH / 2}rem;
  height: ${({ side }): number => getHeight(side)}rem;
  transform: ${({ side }): string => getTransform(side)};

  background-color: ${({ side }): string => getBackground(side)};
`;
