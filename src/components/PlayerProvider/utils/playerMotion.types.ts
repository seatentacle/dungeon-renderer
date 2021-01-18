import {
  SetStateAction,
  Dispatch,
} from 'react';
import {
  direction,
  motion,
} from 'constants/directions';

export type Position = {
  x: number;
  y: number;
};

export type Move = (
  viewDirection: direction,
  positionState: [
    Position,
    Dispatch<SetStateAction<Position>>,
  ],
  idleState: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ],
) => (motionDirection: motion) => void;

export type Turn = (
  viewDirection: direction,
  setDirection: Dispatch<SetStateAction<direction>>,
  idleState: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ],
) => () => void;
