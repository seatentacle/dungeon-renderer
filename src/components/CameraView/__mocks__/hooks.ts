import * as React from 'react';

export function useStateMock<S>(initState:  S): [S, React.Dispatch<React.SetStateAction<S>>] {
  return [initState, jest.fn()];
}

export function useEffectMock(effect: React.EffectCallback, deps?: React.DependencyList): void {
  const firstRun = Symbol();
  const isFirstRun = React.useMemo(() => firstRun, []) === firstRun;
  const ref = React.useMemo(() => ({
    current: deps,
  }), []);
  const last = ref.current;

  const changed = deps && last.some((value, index) => value !== deps[index]);

  if (isFirstRun || changed) {
    ref.current = deps;
    effect();
  }
}
