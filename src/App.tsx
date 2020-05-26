import * as React from 'react';
import CellView from './components/CellView';

import {
  Scene,
  Map,
  Camera,
} from './App.styled';
import { cellSide } from './components/CellView/CellView.types';

const App = () => (
  <Scene>
    <Map>
      <Camera>
        <CellView
          position={{ x: 3, y: 3 }}
          sides={[
            cellSide.FRONT,
            cellSide.BACK,
            cellSide.RIGHT,
            cellSide.LEFT,
            cellSide.TOP,
            cellSide.BOTTOM,
          ]}
        />
      </Camera>
    </Map>
  </Scene>
);

export default App;
