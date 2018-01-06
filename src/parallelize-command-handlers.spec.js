const parallelizeCommandHandlers = require('./parallelize-command-handlers');

describe('parallelize command handlers', () => {
  it('parallelizes handlers', async () => {
    const oneMillesecondDelay = () => new Promise(resolve => setTimeout(resolve, 1));
    const eventDispatcher = jest.fn();
    const command = { type: 'DO_SOMETHING' };

    const commandHandler1 = jest.fn(async () => {
      await oneMillesecondDelay();
      return 'handler1';
    });

    const commandHandler2 = jest.fn(async () => {
      await oneMillesecondDelay();
      return 'handler2';
    });

    const parallelizedHandler = parallelizeCommandHandlers(commandHandler1, commandHandler2);
    const result = parallelizedHandler({ command, eventDispatcher });
    
    expect(commandHandler1).toHaveBeenCalledWith({ command, eventDispatcher });
    expect(commandHandler2).toHaveBeenCalledWith({ command, eventDispatcher });
    expect(await result).toEqual(['handler1', 'handler2'])
  });
});