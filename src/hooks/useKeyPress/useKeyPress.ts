import {
  useEffect,
  useState,
} from 'react';
import { UseKeyPress } from './useKeyPress.types';

const useKeyPress: UseKeyPress = (
  targetKey,
  onPressDown = (): void => undefined,
  onPressUp = (): void => undefined,
) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  useEffect(() => {
    const downHandler = ({ code }: KeyboardEvent): void => {
      if (code === targetKey) {
        setKeyPressed(true);
        onPressDown();
      }
    };

    const upHandler = ({ code }: KeyboardEvent): void => {
      if (code === targetKey) {
        setKeyPressed(false);
        onPressUp();
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return (): void => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
};

export default useKeyPress;
