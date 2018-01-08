module.exports = map => commandType => {
  const noopCommand = () => { };
  const commandHandler = map[commandType] || noopCommand
  return (...args) => Promise.resolve(commandHandler.apply(null, args));
};
