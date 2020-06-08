import {
  useEffect,
  useRef,
} from 'react';
import { UsePrevious } from './usePrevious.types';

const usePrevious: UsePrevious = <T>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
