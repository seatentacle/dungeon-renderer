export enum cellSide {
  FRONT = 'front',
  BACK = 'back',
  RIGHT = 'right',
  LEFT = 'left',
  TOP = 'top',
  BOTTOM = 'bottom',
}

type Position = {
  x: number;
  y: number;
};

export type CellFaceProps = {
  side: cellSide;
};

export type CellProps = Position;

export type CellViewProps = {
  position: Position;
  sides?: Array<cellSide>;
};
