
module.exports = ({ commandMap, eventDispatcher }) => async command => {
  const commandHandlers = commandMap(command.type);

  return commandHandlers.reduce(async (previousHandlerResult, currentHandler) => {
    await previousHandlerResult;
    return currentHandler({ command, eventDispatcher });
  }, Promise.resolve());
};
