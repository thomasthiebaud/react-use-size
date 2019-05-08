import * as React from "react";
import ResizeObserver from "resize-observer-polyfill";

export function useComponentSize() {
  const [size, setSize] = React.useState({
    height: 0,
    width: 0,
  });
  const ref = React.useRef<HTMLElement>();

  const onResize = React.useCallback(() => {
    if (!ref.current) {
      return;
    }

    const newHeight = ref.current.offsetHeight;
    const newWidth = ref.current.offsetWidth;

    if (newHeight !== size.height || newWidth !== size.width) {
      setSize({
        height: newHeight,
        width: newWidth,
      });
    }
  }, [ref.current]);

  React.useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => onResize());
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref.current]);

  return {
    ref,
    ...size,
  };
}
