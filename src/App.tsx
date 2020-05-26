import * as React from 'react';

import {
  Scene,
  Cube,
  CubeFaceFront,
  CubeFaceBack,
  CubeFaceRight,
  CubeFaceLeft,
  CubeFaceTop,
  CubeFaceBottom,
} from './App.styled';

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

export default App;
