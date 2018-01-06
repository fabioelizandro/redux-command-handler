const parallelizeCommandHandlers = require('./parallelize-command-handlers');
const commandCreator = require('./command-creator');

exports.parallelizeCommandHandlers = parallelizeCommandHandlers;

exports.commandCreator = commandCreator;

exports.createCommandMap = map => commandType => {
  const noopCommand = () => { };
  return map[commandType] || [noopCommand];
};

exports.createCommandHandler = ({ commandMap, eventDispatcher }) => async command => {
  const commandHandlers = commandMap(command.type);

  return commandHandlers.reduce(async (previousHandlerResult, currentHandler) => {
    await previousHandlerResult;
    return currentHandler({ command, eventDispatcher });
  }, Promise.resolve());
};
