module.exports = commandHandler => {
  const dispatch = async (type, payload) => await commandHandler({ type, payload });
  return { dispatch };
};
