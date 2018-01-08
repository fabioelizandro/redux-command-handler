# Redux command handler

[![Build Status](https://travis-ci.org/fabioelizandro/redux-command-handler.svg?branch=master)](https://travis-ci.org/fabioelizandro/redux-command-handler)
[![Maintainability](https://api.codeclimate.com/v1/badges/d24f5963a7dfa50e8b71/maintainability)](https://codeclimate.com/github/fabioelizandro/redux-command-handler/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d24f5963a7dfa50e8b71/test_coverage)](https://codeclimate.com/github/fabioelizandro/redux-command-handler/test_coverage)


`redux-command-handler` is a library that aims to separate commands from events instead of have just actions. Using this libraries all redux actions becames events and events are generate just by commands. 

Commands with side effects are not a problem at all.

## How to use

`get-user-command.js`
```js
export default async (commandPayload, eventDispatcher) => {
  eventDispatcher('USER_REQUESTED'); //dispatch event { type: 'USER_REQUESTED' } into redux store
  const userId = commandPayload.id;
  const user = await fetch(`/user/${userId}`).then(response => response.json());
  eventDispatcher('USER_LOADED', user); // event { type: 'USER_LOADED', payload: {...}}
};
```

`command-handler.js`
```js
import getUserCommand as GET_USER from './get-user-command';
import { createCommandHandler } from 'redux-command-handler';

export default createCommandHandler({ GET_USER });
```

`show-user-button.js`
```js
import React from 'react';
import commandHandler from './command-handler';

const ShowComponent = props => {
 return (<button onClick={props.dispatch('GET_USER', { id: props.userId })}>Show User</button>);
};

const mapStateToProps = state => state;
export default connect(mapStateToProps, commandHandler)(ShowComponent);
```

## Combine commands

`command-handler.js`
```js
import payBillCommand from './pay-bill-command';
import showReceiptCommand from './show-receipt-command';
import { createCommandHandler, combineCommandHandler } from 'redux-command-handler';

const PAY_BILL = combineCommandHandler(payBillCommand, showReceiptCommand);

export default createCommandHandler({ PAY_BILL });
```

## Parallelize commands

`command-handler.js`
```js
import getUserCommand from './get-user-command';
import trackGetUserCommand from './track-get-user-command';
import { createCommandHandler, parallelizeCommandHandler } from 'redux-command-handler';

const GET_USER = parallelizeCommandHandler(getUserCommand, trackGetUserCommand);

export default createCommandHandler({ GET_USER });
```