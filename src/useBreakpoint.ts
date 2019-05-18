import { useWindowSize } from './useWindowSize';

export function useBreakpoint(breakpoint: number) {
  const { width } = useWindowSize();
  return width < breakpoint;
}

export function useBreakpoints(breakpoints: number[]) {
  const { width } = useWindowSize();

  return breakpoints.map(breakpoint => width < breakpoint);
}
