const combineCommandHandlers = require('./combine-command-handlers');

describe('combine command handlers', () => {
  it('executes all combined handlers', async () => {
    const eventDispatcher = jest.fn();
    const command = { type: 'DO_SOMETHING', payload: { foo: 'bar' } };
    const commandPayload = { foo: 'bar' };

    const commandHandler1 = jest.fn();
    const commandHandler2 = jest.fn();

    const combinedHandler = combineCommandHandlers(commandHandler1, commandHandler2);

    await combinedHandler(commandPayload, eventDispatcher);

    expect(commandHandler1).toHaveBeenCalledWith(commandPayload, eventDispatcher);
    expect(commandHandler2).toHaveBeenCalledWith(commandPayload, eventDispatcher);
  });
});
