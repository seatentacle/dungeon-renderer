import * as React from 'react';
import { Keyframes } from 'styled-components';
import { cameraDirection } from 'constants/directions';
import { Cell } from 'lib/camera';

export type CameraPosition = {
  x: number;
  y: number;
};

export type CameraProps = {
  direction: cameraDirection;
  animation?: Keyframes;
  onAnimationEnd?: React.EventHandler<React.AnimationEvent>;
};

export type CameraViewProps = {
  direction?: cameraDirection;
  position: CameraPosition;
  cells: Array<Cell>;
};
