import * as React from 'react';
import CameraView from './components/CameraView';
import { cells } from './lib/camera/__mocks__/map.template.json';
import { Cell } from './lib/camera/camera.types';

import {
  GlobalStyle,
  Scene,
  Map,
} from './App.styled';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <Scene>
      <Map>
        <CameraView
          direction={ 2 }
          position={{ x: 3, y: 3 }}
          cells={ cells as Array<Cell> }
        />
      </Map>
    </Scene>
  </>
);

export default App;
