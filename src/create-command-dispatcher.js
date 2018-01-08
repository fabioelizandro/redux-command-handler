module.exports = commandHandler => {
  return eventDispatcher => {
    const eventCreator = (type, payload) => eventDispatcher({ type, payload });
    const dispatch = (type, payload) => commandHandler({ type, payload }, eventCreator);
    return { dispatch };
  };
};
