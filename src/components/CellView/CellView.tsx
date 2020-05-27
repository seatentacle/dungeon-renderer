import * as React from 'react';
import {
  Cell,
  CellFace,
} from './CellView.styled';
import {
  cellSide,
  CellViewProps,
} from './CellView.types';

const CellView: React.FC<CellViewProps> = ({
  position,
  sides = [],
}) => sides.length > 0
  ? (
    <Cell { ...position }>
      {
        sides.map((side: cellSide, index: number) => (
          <CellFace
            side={ side }
            key={ index }
          />
        ))
      }
    </Cell>
  )
  : <></>;

export default CellView;
