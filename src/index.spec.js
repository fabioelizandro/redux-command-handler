const { createCommandHandler, createCommandMap } = require('./index');

describe('create command handler', () => {
  it('creates the command handler', async () => {
    const commandHandler1 = jest.fn();
    const commandHandler2 = jest.fn();
    const eventDispatcher = jest.fn();
    const command = { type: 'DO_SOMETHING_1' };

    const MAP = {
      'DO_SOMETHING_1': [commandHandler1],
      'DO_SOMETHING_2': [commandHandler2]
    };

    const commandHandler = createCommandHandler({ commandMap: createCommandMap(MAP), eventDispatcher });

    await commandHandler(command);

    expect(commandHandler1).toHaveBeenCalledWith({ command, eventDispatcher });
    expect(commandHandler2).not.toHaveBeenCalled();
  });
});