const parallelizeCommandHandlers = require('./parallelize-command-handlers');
const commandCreator = require('./command-creator');
const createCommandMap = require('./create-command-map');

exports.parallelizeCommandHandlers = parallelizeCommandHandlers;

exports.commandCreator = commandCreator;

exports.createCommandMap = createCommandMap;

exports.createCommandHandler = ({ commandMap, eventDispatcher }) => async command => {
  const commandHandlers = commandMap(command.type);

  return commandHandlers.reduce(async (previousHandlerResult, currentHandler) => {
    await previousHandlerResult;
    return currentHandler({ command, eventDispatcher });
  }, Promise.resolve());
};
