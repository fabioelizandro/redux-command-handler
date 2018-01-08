module.exports = map => commandType => {
  const noopCommand = () => { };
  return map[commandType] || noopCommand;
};
