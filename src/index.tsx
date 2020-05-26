import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  Scene,
  Cube,
  CubeFaceFront,
  CubeFaceBack,
  CubeFaceRight,
  CubeFaceLeft,
  CubeFaceTop,
  CubeFaceBottom,
} from './index.styled';

const App = () => (
  <Scene>
    <Cube>
      <CubeFaceFront>front</CubeFaceFront>
      <CubeFaceBack>back</CubeFaceBack>
      <CubeFaceRight>right</CubeFaceRight>
      <CubeFaceLeft>left</CubeFaceLeft>
      <CubeFaceTop>top</CubeFaceTop>
      <CubeFaceBottom>bottom</CubeFaceBottom>
    </Cube>
  </Scene>
);

ReactDOM.render(<App />, document.getElementById('game'));
