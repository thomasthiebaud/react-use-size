[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# react-use-size

A collection of hooks to measure things in React

## Installation

```
npm i react-use-size
// or
yarn add react-use-size
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

### useBreakpoint

```js
import { useBreakpoint } from "react-use-size";

const YourComponent = () => {
  const isSmall = useBreakpoint(640);

  if (isSmall) {
    return <SmallComponent />
  } else {
    return <DefaultComponent />
  }
};
```

### useBreakpoints

```js
import { useBreakpoints } from "react-use-size";

const YourComponent = () => {
  const [isSmall, isMedium] = useBreakpoint([640, 1024]);

  if (isSmall) {
    return <SmallComponent />
  } else if(isMedium) {
    return <MediumComponent />
  } else {
    return <DefaultComponent />
  }
};
```

## How to contribute?

This repo enforce commit style so the release process is automatic. Commits must look like:

> SUBJECT: message starting with a lowercase

where SUBJECT is one of:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

A commit including `BREAKING CHANGE:` in the body will create a new major release.

More details about the conventions are available [here](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary) and [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

## Found a problem?

Please open an issue or submit a PR, we will be more than happy to help