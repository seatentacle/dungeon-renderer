import * as React from 'react';
import { cameraDirection } from 'constants/directions';
import { Camera } from './CameraView.styled';
import { getCameraStand } from '../../lib/camera';
import CellView from '../CellView';

import { CellViewProps } from '../CellView/CellView.types';
import { CameraViewProps } from './CameraView.types';

const CameraView: React.FC<CameraViewProps> = ({
  direction = cameraDirection.NORTH,
  position,
  cells,
}) => {
  const cameraCells: Array<CellViewProps> = getCameraStand(direction, position, cells);

  return (
    <Camera direction={ direction }>
      {
        cameraCells.map((props, index) => (
          <CellView
            key={ index }
            { ...props }
          />
        ))
      }
    </Camera>
  );
};

export default CameraView;
