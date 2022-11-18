import * as React from 'react';
import {createRoot} from 'react-dom/client';
import { act } from '@testing-library/react';

import { useBreakpoint, useBreakpoints } from '../src';

describe('useBreakpoint', () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should switch component based on a single breakpoint', () => {
    const Component = () => {
      const isSmall = useBreakpoint(500);

      if (isSmall) {
        return <p id="small">Small</p>;
      }

      return <p id="big">Big</p>;
    };

    act(() => {
      const root = createRoot(container)
      root.render(<Component />)
    });

    let big = container.querySelector('#big');
    let small = container.querySelector('#small');
    expect(big && big.textContent).toEqual('Big');
    expect(small).toBeNull();

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 400,
    });

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    big = container.querySelector('#big');
    small = container.querySelector('#small');
    expect(small && small.textContent).toEqual('Small');
    expect(big).toBeNull();
  });

  it('should switch component based on multiple breakpoints', () => {
    const Component = () => {
      const [isSmall, isMedium] = useBreakpoints([500, 700]);

      if (isSmall) {
        return <p id="small">Small</p>;
      }

      if (isMedium) {
        return <p id="medium">Medium</p>;
      }

      return <p id="big">Big</p>;
    };

    act(() => {
      const root = createRoot(container)
      root.render(<Component />)
    });

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 400,
    });
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    let big = container.querySelector('#big');
    let medium = container.querySelector('#medium');
    let small = container.querySelector('#small');
    expect(medium).toBeNull();
    expect(big).toBeNull();
    expect(small && small.textContent).toEqual('Small');

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600,
    });
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    big = container.querySelector('#big');
    medium = container.querySelector('#medium');
    small = container.querySelector('#small');
    expect(small).toBeNull();
    expect(big).toBeNull();
    expect(medium && medium.textContent).toEqual('Medium');

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800,
    });
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    big = container.querySelector('#big');
    medium = container.querySelector('#medium');
    small = container.querySelector('#small');
    expect(small).toBeNull();
    expect(medium).toBeNull();
    expect(big && big.textContent).toEqual('Big');
  });
});
