import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ccc;
  }
`;

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
