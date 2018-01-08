const createRootCommandHandler = require('./create-root-command-handler');

describe('create root command handler', () => {
  const eventDispatcher = jest.fn();
  const mappedCommandHandler = jest.fn();
  const command = { type: 'DO_SOMETHING', payload: { foo: 'bar' } };
  const commandMap = (_commandType) => mappedCommandHandler;

  it('passes down the command\'s payload to the mapped handler', async () => {
    const rootCommandHandler = createRootCommandHandler(commandMap);

    await rootCommandHandler(command, eventDispatcher);

    expect(mappedCommandHandler).toHaveBeenCalledWith({ foo: 'bar' }, eventDispatcher);
  });
});
