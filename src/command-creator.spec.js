const commandCreator = require('./command-creator');

describe('command creator', () => {
  it('passes the command to command handler with the right shape', async () => {
    const commandHandler = jest.fn();
    const { dispatch } = commandCreator(commandHandler);

    await dispatch('DO_SOMETHING', { foo: 'bar' });

    expect(commandHandler).toHaveBeenCalledWith({ type: 'DO_SOMETHING', payload: { foo: 'bar' } })
  });
});