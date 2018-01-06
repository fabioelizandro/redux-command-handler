const createCommandHandler = require('./create-command-handler');

describe('create command handler', () => {
  const eventDispatcher = jest.fn();
  const commandHandler1 = jest.fn();
  const commandHandler2 = jest.fn();
  const command = { type: 'DO_SOMETHING' };
  const commandMap = (_commandType) => [commandHandler1, commandHandler2];

  it('passes down the command to all handlers', async () => {
    const commandHandler = createCommandHandler({ commandMap, eventDispatcher });

    await commandHandler(command);

    expect(commandHandler1).toHaveBeenCalledWith({ command, eventDispatcher });
    expect(commandHandler2).toHaveBeenCalledWith({ command, eventDispatcher });
  });
});