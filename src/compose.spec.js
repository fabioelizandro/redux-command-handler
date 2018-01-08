const compose = require('./compose');

describe('compose', () => {
  it('composes functions', () => {
    const fn1 = (a, b) => a + b;
    const fn2 = (a) => a * 2;

    expect(compose(fn2, fn1)(2, 2)).toEqual(8);
  });
});