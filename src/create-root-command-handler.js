module.exports = commandMap => async ({ type, payload }, eventDispatcher) => {
  const commandHandler = commandMap(type);
  return await commandHandler(payload, eventDispatcher);
};
