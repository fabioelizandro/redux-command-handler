const parallelizeCommandHandlers = require('./parallelize-command-handlers');
const createCommandDispatcher = require('./create-command-dispatcher');
const createCommandMap = require('./create-command-map');
const createRootCommandHandler = require('./create-root-command-handler');

module.exports = {
  parallelizeCommandHandlers,
  createCommandDispatcher,
  createCommandMap,
  createRootCommandHandler
};
