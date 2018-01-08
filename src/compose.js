module.exports = (...fns) => {
  return (...args) => {
    const [result] = fns.reduceRight((currentArgs, currentFn) => {
      return [currentFn.apply(null, currentArgs)];
    }, args);

    return result;
  };
};