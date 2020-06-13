import {
  cameraDirection,
  motionDirection,
} from 'constants/directions';
import {
  cellSide,
  CellViewProps,
} from '../../components/CellView/CellView.types';

export type Position = {
  x: number;
  y: number;
};

export type Turn = {
  from: cameraDirection;
  to: cameraDirection;
};

export type Cell = Position & {
  sides: Array<cellSide>;
};

export type CameraCells = Array<CellViewProps>;

export type GetCameraMove = (
  position: Position,
  directions: [motionDirection, cameraDirection],
  cameraStand: CameraCells,
  cells: Array<Cell>,
) => CameraCells

export type GetCameraStand = (
  direction: cameraDirection,
  position: Position,
  cells: Array<Cell>,
) => CameraCells;

export type GetCameraTurn = (
  turnPosition: Turn & Position,
  cameraStand: CameraCells,
  cells: Array<Cell>,
) => CameraCells;
