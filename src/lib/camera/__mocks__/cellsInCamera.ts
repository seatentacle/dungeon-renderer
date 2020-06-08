export const cameraStandToNorth = [
  { position: { x: 3, y: 3 }, sides: ['left', 'top', 'bottom'] },
  { position: { x: 4, y: 3 }, sides: ['top', 'bottom'] },
  { position: { x: 2, y: 2 }, sides: ['front', 'top', 'bottom'] },
  { position: { x: 3, y: 2 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 2 }, sides: ['top', 'bottom'] },
  { position: { x: 1, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 2, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 3, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 1 }, sides: ['right', 'top', 'bottom'] },
  { position: { x: 0, y: 0 }, sides: ['back', 'left', 'top', 'bottom'] },
  { position: { x: 1, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 2, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 3, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 4, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 5, y: 0 }, sides: ['front', 'back', 'top', 'bottom'] },
  { position: { x: 6, y: 0 }, sides: ['front', 'back', 'right', 'top', 'bottom'] },
];

export const cameraStandToEast = [
  { position: { x: 3, y: 4 }, sides: ['top', 'bottom'] },
  { position: { x: 3, y: 3 }, sides: ['left', 'top', 'bottom'] },
  { position: { x: 3, y: 2 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 4 }, sides: ['right', 'top', 'bottom'] },
  { position: { x: 4, y: 3 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 2 }, sides: ['top', 'bottom'] },
  { position: { x: 5, y: 5 }, sides: ['back', 'right', 'top', 'bottom'] },
  { position: { x: 5, y: 3 }, sides: ['front', 'right', 'top', 'bottom'] },
  { position: { x: 5, y: 2 }, sides: ['back', 'right', 'top', 'bottom'] },
  { position: { x: 6, y: 0 }, sides: ['front', 'back', 'right', 'top', 'bottom'] },
];

export const cameraStandToSouth = [
  { position: { x: 3, y: 3 }, sides: ['left', 'top', 'bottom'] },
  { position: { x: 4, y: 3 }, sides: ['top', 'bottom'] },
  { position: { x: 2, y: 4 }, sides: ['front', 'back', 'left', 'top', 'bottom'] },
  { position: { x: 3, y: 4 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 4 }, sides: ['right', 'top', 'bottom'] },
  { position: { x: 3, y: 5 }, sides: ['left', 'top', 'bottom'] },
  { position: { x: 4, y: 5 }, sides: ['top', 'bottom'] },
  { position: { x: 5, y: 5 }, sides: ['back', 'right', 'top', 'bottom'] },
  { position: { x: 3, y: 6 }, sides: ['front', 'left', 'top', 'bottom'] },
  { position: { x: 4, y: 6 }, sides: ['front', 'top', 'bottom'] },
  { position: { x: 5, y: 6 }, sides: ['front', 'right', 'top', 'bottom'] },
];

export const cameraStandToWest = [
  { position: { x: 3, y: 4 }, sides: ['top', 'bottom'] },
  { position: { x: 3, y: 3 }, sides: ['left', 'top', 'bottom'] },
  { position: { x: 3, y: 2 }, sides: ['top', 'bottom'] },
  { position: { x: 2, y: 4 }, sides: ['front', 'back', 'left', 'top', 'bottom'] },
  { position: { x: 2, y: 2 }, sides: ['front', 'top', 'bottom'] },
  { position: { x: 1, y: 2 }, sides: ['front', 'left', 'top', 'bottom'] },
  { position: { x: 1, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 0, y: 1 }, sides: ['front', 'left', 'top', 'bottom'] },
  { position: { x: 0, y: 0 }, sides: ['back', 'left', 'top', 'bottom'] },
];

export const cameraNorthToEast = [
  ...cameraStandToNorth,
  { position: { x: 3, y: 4 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 4 }, sides: ['right', 'top', 'bottom'] },
  { position: { x: 5, y: 2 }, sides: ['back', 'right', 'top', 'bottom'] },
  { position: { x: 5, y: 3 }, sides: ['front', 'right', 'top', 'bottom'] },
  { position: { x: 5, y: 5 }, sides: ['back', 'right', 'top', 'bottom'] },
];

export const cameraNorthToWest = [
  ...cameraStandToNorth,
  { position: { x: 3, y: 4 }, sides: ['top', 'bottom'] },
  { position: { x: 2, y: 4 }, sides: ['front', 'back', 'left', 'top', 'bottom'] },
  { position: { x: 1, y: 2 }, sides: ['front', 'left', 'top', 'bottom'] },
  { position: { x: 0, y: 1 }, sides: ['front', 'left', 'top', 'bottom'] },
];

export const cameraSouthToEast = [
  ...cameraStandToSouth,
  { position: { x: 3, y: 2 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 2 }, sides: ['top', 'bottom'] },
  { position: { x: 5, y: 2 }, sides: ['back', 'right', 'top', 'bottom'] },
  { position: { x: 5, y: 3 }, sides: ['front', 'right', 'top', 'bottom'] },
  { position: { x: 6, y: 0 }, sides: ['front', 'back', 'right', 'top', 'bottom'] },
];

export const cameraSouthToWest = [
  ...cameraStandToSouth,
  { position: { x: 3, y: 2 }, sides: ['top', 'bottom'] },
  { position: { x: 2, y: 2 }, sides: ['front', 'top', 'bottom'] },
  { position: { x: 1, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 1, y: 2 }, sides: ['front', 'left', 'top', 'bottom'] },
  { position: { x: 0, y: 0 }, sides: ['back', 'left', 'top', 'bottom'] },
  { position: { x: 0, y: 1 }, sides: ['front', 'left', 'top', 'bottom'] },
];

export const cameraEastToNorth = [
  ...cameraStandToEast,
  { position: { x: 2, y: 2 }, sides: ['front', 'top', 'bottom'] },
  { position: { x: 1, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 2, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 3, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 1 }, sides: ['right', 'top', 'bottom'] },
  { position: { x: 0, y: 0 }, sides: ['back', 'left', 'top', 'bottom'] },
  { position: { x: 1, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 2, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 3, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 4, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 5, y: 0 }, sides: ['front', 'back', 'top', 'bottom'] },
];

export const cameraEastToSouth = [
  ...cameraStandToEast,
  { position: { x: 2, y: 4 }, sides: ['front', 'back', 'left', 'top', 'bottom'] },
  { position: { x: 3, y: 5 }, sides: ['left', 'top', 'bottom'] },
  { position: { x: 4, y: 5 }, sides: ['top', 'bottom'] },
  { position: { x: 3, y: 6 }, sides: ['front', 'left', 'top', 'bottom'] },
  { position: { x: 4, y: 6 }, sides: ['front', 'top', 'bottom'] },
  { position: { x: 5, y: 6 }, sides: ['front', 'right', 'top', 'bottom'] },
];

export const cameraWestToNorth = [
  ...cameraStandToWest,
  { position: { x: 4, y: 3 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 2 }, sides: ['top', 'bottom'] },
  { position: { x: 2, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 3, y: 1 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 1 }, sides: ['right', 'top', 'bottom'] },
  { position: { x: 1, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 2, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 3, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 4, y: 0 }, sides: ['back', 'top', 'bottom'] },
  { position: { x: 5, y: 0 }, sides: ['front', 'back', 'top', 'bottom'] },
  { position: { x: 6, y: 0 }, sides: ['front', 'back', 'right', 'top', 'bottom'] },
];

export const cameraWestToSouth = [
  ...cameraStandToWest,
  { position: { x: 4, y: 3 }, sides: ['top', 'bottom'] },
  { position: { x: 4, y: 4 }, sides: ['right', 'top', 'bottom'] },
  { position: { x: 3, y: 5 }, sides: ['left', 'top', 'bottom'] },
  { position: { x: 4, y: 5 }, sides: ['top', 'bottom'] },
  { position: { x: 5, y: 5 }, sides: ['back', 'right', 'top', 'bottom'] },
  { position: { x: 3, y: 6 }, sides: ['front', 'left', 'top', 'bottom'] },
  { position: { x: 4, y: 6 }, sides: ['front', 'top', 'bottom'] },
  { position: { x: 5, y: 6 }, sides: ['front', 'right', 'top', 'bottom'] },
];
