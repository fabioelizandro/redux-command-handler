const compose = require('./compose');
const createCommandDispatcher = require('./create-command-dispatcher');
const createCommandMap = require('./create-command-map');
const createRootCommandHandler = require('./create-root-command-handler');

module.exports = compose(
  createCommandDispatcher, 
  createRootCommandHandler, 
  createCommandMap
);
