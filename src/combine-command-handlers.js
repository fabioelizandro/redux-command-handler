module.exports = (...handlers) => (commandPayload, eventDispatcher) => {
  return handlers.reduce((previousHandlerResult, currentHandler) => {
    return previousHandlerResult.then(() => currentHandler(commandPayload, eventDispatcher));
  }, Promise.resolve());
};
