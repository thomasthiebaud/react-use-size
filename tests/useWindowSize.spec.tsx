import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useWindowSize } from '../src';

describe('useWindowSize', () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should return the window size', () => {
    const Component = () => {
      const { width, height } = useWindowSize();

      return (
        <>
          <p id="height">{height}</p>
          <p id="width">{width}</p>
        </>
      );
    };

    act(() => {
      ReactDOM.render(<Component />, container);
    });

    const height = container.querySelector('#height');
    const width = container.querySelector('#width');

    expect(height && height.textContent).toEqual('768');
    expect(width && width.textContent).toEqual('1024');

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 200,
    });

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(height && height.textContent).toEqual('200');
    expect(width && width.textContent).toEqual('500');
  });
});
