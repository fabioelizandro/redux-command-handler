const parallelizeCommandHandlers = require('./parallelize-command-handlers');
const commandCreator = require('./command-creator');
const createCommandMap = require('./create-command-map');
const createCommandHandler = require('./create-command-handler');

module.exports = {
  parallelizeCommandHandlers,
  commandCreator,
  createCommandMap,
  createCommandHandler
};
