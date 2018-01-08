module.exports = commandHandler => {
  return eventDispatcher => {
    const eventCreator = (type, payload) => eventDispatcher({ type, payload });
    const dispatch = async (type, payload) => await commandHandler({ type, payload }, eventCreator);
    return { dispatch };
  };
};
