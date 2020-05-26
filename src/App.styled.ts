import styled from 'styled-components';

export const Scene = styled.div`
  width: 25rem;
  height: 12.5rem;

  perspective: 20rem;
  perspective-origin: 50% 33.333%;

  transform-style: preserve-3d;
  overflow: hidden;

  background-color: #000;
`;

export const Map = styled.div`
  width: 25rem;
  height: 12.5rem;
  perspective: 40rem;

  transform: translate3d(0, 0, 13.75rem);
  transform-style: preserve-3d;
`;

export const Camera = styled.div`
  transform: rotateY(0deg) translateX(6.25rem);
  transform-style: preserve-3d;
`;
