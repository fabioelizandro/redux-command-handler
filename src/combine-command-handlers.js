module.exports = (...handlers) => async (commandPayload, eventDispatcher) => {
  return handlers.reduce(async (previousHandlerResult, currentHandler) => {
    await previousHandlerResult;
    return currentHandler(commandPayload, eventDispatcher);
  }, Promise.resolve());
};
