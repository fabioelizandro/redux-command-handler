exports.parallelizeCommandHandlers = (...handlers) => {
  return async ({ command, eventDispatcher }) => {
    const handlersResults = handlers.map(handler => handler({ command, eventDispatcher }));
    return await Promise.all(handlersResults);
  };
};

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
