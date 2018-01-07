module.exports = commandHandler => {
  return eventDispatcher => {
    const dispatch = async (type, payload) => await commandHandler({ type, payload }, eventDispatcher);
    return { dispatch };
  };
};
