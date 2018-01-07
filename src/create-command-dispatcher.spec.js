const createCommandDispatcher = require('./create-command-dispatcher');

describe('create command dispatcher', () => {
  it('dispatches commands down to the command handler', async () => {
    const commandHandler = jest.fn();
    const eventDispatcher = jest.fn();
    const commandDispatcher = createCommandDispatcher(commandHandler);

    await commandDispatcher(eventDispatcher).dispatch('DO_SOMETHING', { foo: 'bar' });

    expect(commandHandler).toHaveBeenCalledWith({ type: 'DO_SOMETHING', payload: { foo: 'bar' } }, eventDispatcher)
  });
});