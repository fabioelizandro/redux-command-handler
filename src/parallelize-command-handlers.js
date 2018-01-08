module.exports = (...handlers) => {
  return ({ command, eventDispatcher }) => {
    const handlersResults = handlers.map(handler => handler({ command, eventDispatcher }));
    return Promise.all(handlersResults);
  };
};
