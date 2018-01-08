const createCommandHandler = require('./create-command-handler');

describe('create command handler', () => {
  it('creates command handler based on command map', async () => {
    const commandHandler1 = jest.fn();
    const commandHandler2 = jest.fn();
    const eventDispatcher = jest.fn();

    const MAP = {
      COMMAND_1: commandHandler1,
      COMMAND_2: commandHandler2
    };

    const commandHandler = createCommandHandler(MAP);
    await commandHandler(eventDispatcher).dispatch('COMMAND_1', { foo: 'bar' });

    expect(commandHandler1).toHaveBeenCalledWith({ foo: 'bar' }, expect.any(Function));
    expect(commandHandler2).not.toHaveBeenCalled();
  });

  it('dispatches commands to event dispatcher in the right shape', async () => {
    const commandHandler1 = (_command, eventDispatcher) => eventDispatcher('SOMETHING_HAPPENED', { foo: 'bar' });
    const eventDispatcher = jest.fn();

    const MAP = { COMMAND_1: commandHandler1 };

    const commandHandler = createCommandHandler(MAP);
    await commandHandler(eventDispatcher).dispatch('COMMAND_1', { foo: 'bar' });

    expect(eventDispatcher).toHaveBeenCalledWith({ type: 'SOMETHING_HAPPENED', payload: { foo: 'bar' } });
  });
});