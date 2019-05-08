[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# react-use-size

A collection of hooks to measure things in React

## Installation

```
npm i react-use-size
// or
yarn react-use-size
```

## Usage

### useWindowSize

```js
import { useWindowSize } from "react-use-size";

const YourComponent = () => {
  const { height, width } = useWindowSize();

  return (
    <React.Fragment>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </React.Fragment>
  );
};
```

### useComponentSize

```js
import { useComponentSize } from "react-use-size";

const YourComponent = () => {
  const { ref, height, width } = useComponentSize();

  return (
    <React.Fragment>
      <div ref={ref}>
        Component
        <p>Height: {height}</p>
        <p>Width: {width}</p>
      </div>
    </React.Fragment>
  );
};
```
