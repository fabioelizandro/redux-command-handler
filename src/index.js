const parallelizeCommandHandlers = require('./parallelize-command-handlers');

exports.parallelizeCommandHandlers = parallelizeCommandHandlers;

exports.commandCreator = commandHandler => {
  const dispatch = async (type, payload) => await commandHandler({ type, payload });
  return { dispatch };
};

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
