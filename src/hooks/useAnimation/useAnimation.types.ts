import * as React from 'react';

export type AnimationStatus = 'end' | 'start';

export type UseAnimationProps = {
  animationName: string;
};

export type UseAnimationState = [
  AnimationStatus,
  React.EventHandler<React.AnimationEvent>,
];

export type UseAnimation = (animationName: string) => UseAnimationState;
