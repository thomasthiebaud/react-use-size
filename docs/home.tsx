import * as React from 'react';

import { useComponentSize } from '../src';

const Home = () => {
  const { ref, width, height } = useComponentSize();

  return (
    <div ref={ref}>
      <p>{width}</p>
      <p>{height}</p>
    </div>
  );
};

export default Home;
