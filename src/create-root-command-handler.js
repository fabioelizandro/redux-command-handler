module.exports = commandMap => ({ type, payload }, eventDispatcher) => {
  const commandHandler = commandMap(type);
  return commandHandler(payload, eventDispatcher);
};
