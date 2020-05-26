import styled from 'styled-components';

export const Scene = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  perspective: 600px;
`;

export const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
`;

const CubeFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

export const CubeFaceFront = styled(CubeFace)`
  background: hsla(0, 100%, 50%, 0.7);
  transform: rotateY(0deg) translateZ(100px);
`;

export const CubeFaceBack = styled(CubeFace)`
  background: hsla(120, 100%, 50%, 0.7);
  transform: rotateY(180deg) translateZ(100px);
`;

export const CubeFaceRight = styled(CubeFace)`
  background: hsla(60, 100%, 50%, 0.7);
  transform: rotateY(90deg) translateZ(100px);
`;

export const CubeFaceLeft = styled(CubeFace)`
  background: hsla(180, 100%, 50%, 0.7);
  transform: rotateY(-90deg) translateZ(100px);
`;

export const CubeFaceTop = styled(CubeFace)`
  background: hsla(240, 100%, 50%, 0.7);
  transform: rotateX(90deg) translateZ(100px);
`;

export const CubeFaceBottom = styled(CubeFace)`
  background: hsla(300, 100%, 50%, 0.7);
  transform: rotateX(-90deg) translateZ(100px);
`;
