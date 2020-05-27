import { cameraDirection } from 'constants/directions';
import {
  cellSide,
  CellViewProps,
} from '../../components/CellView/CellView.types';

export type Position = {
  x: number;
  y: number;
};

export type Cell = Position & {
  sides: Array<cellSide>;
};

export type CameraCells = Array<CellViewProps>;

export type GetCameraStand = (
  direction: cameraDirection,
  position: Position,
  cells: Array<Cell>,
) => Array<CellViewProps>;
