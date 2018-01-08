module.exports = (...handlers) => {
  return async ({ command, eventDispatcher }) => {
    const handlersResults = handlers.map(handler => handler({ command, eventDispatcher }));
    return await Promise.all(handlersResults);
  };
};
