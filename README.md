# Redux command handler

## Example

```js
import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { createCommandHandler, createCommandMap, commandCreator } from 'redux-command-handler';

const reducer = (state) => state
const store = createStore(reducer);

const commandHandler1 = async ({ command, eventDispatcher }) =>;
const commandHandler2 = ({ command, eventDispatcher }) =>; // not required to be async 

const MAP = {
  'DO_SOMETHING_1': [commandHandler1],
  'DO_SOMETHING_2': [commandHandler2]
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
