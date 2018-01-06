# Redux command handler

[![Maintainability](https://api.codeclimate.com/v1/badges/d24f5963a7dfa50e8b71/maintainability)](https://codeclimate.com/github/fabioelizandro/redux-command-handler/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d24f5963a7dfa50e8b71/test_coverage)](https://codeclimate.com/github/fabioelizandro/redux-command-handler/test_coverage)

## Example

```js
import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { createCommandHandler, createCommandMap, commandCreator, parallelizeCommandHandlers } from 'redux-command-handler';

const reducer = (state) => state
const store = createStore(reducer);

const commandHandler1 = async ({ command, eventDispatcher }) =>;
const commandHandler2 = async ({ command, eventDispatcher }) =>;

const MAP = {
  'DO_SOMETHING_1': [commandHandler1, commandHandler2],
  'DO_SOMETHING_2': [parallelizeCommandHandlers(commandHandler1, commandHandler2)]
};

const commandHandler = createCommandHandler({ commandMap: createCommandMap(MAP), eventDispatcher: store.dispatch });

const MyComponent = props => {
 return (
   <button onClick={props.dispatch('DO_SOMETHING')}></button>
 );
};

const mapStateToProps = state => state;
const mapDispatchToProps = commandCreator(commandHandler);
const ConnectedMyComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```
