# React starter

This is a work in progress starter for a react application with:

- prop-types (to add types to our props)
- vite (compiler)
- vitest (tests)
- jotai (state management)
- react-transition-group (for animating transitions)
- sass and scss modules
- a mock data system with:
  - json-server (in browser)
  - msw (in tests)
- a command to generate a component with its test and scss module file
- enforcement on using yarn

## Installation

To install this project, we need to have yarn installed or execute the following command:

```
npm install --global yarn
```

Once the project downloaded we can install the node modules:

```
yarn install
```

## Usage

To generate a component we can type the following command:

```
yarn gc ComponentName
```

To launch the application with json server:

```
yarn dev-json
```

To run the test files:

```
yarn test
```
