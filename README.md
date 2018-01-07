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
  eventDispatcher('FETCHING_USER'); //dispatch event { type: 'FETCHING_USER' } into redux store
  const userId = commandPayload.id;
  const user = await fetch(`/user/${userId}`).then(response => response.json());
  eventDispatcher('FETCHED_USER', user); // event { type: 'FETCHED_USER', payload: {...}}
};
```

`command-handler.js`
```js
import getUserCommand from './get-user-command';
import { createCommandHandler } from 'redux-command-handler';

const MAP = { 'GET_USER': [getUserCommand] };

export default createCommandHandler(MAP);
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