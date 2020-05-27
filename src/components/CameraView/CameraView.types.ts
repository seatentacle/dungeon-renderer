import { cameraDirection } from 'constants/directions';
import { Cell } from 'lib/camera';

export type CameraPosition = {
  x: number;
  y: number;
};

export type CameraProps = {
  direction: cameraDirection;
};

export type CameraViewProps = {
  direction?: cameraDirection;
  position: CameraPosition;
  cells: Array<Cell>;
};
