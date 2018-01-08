const createCommandMap = require('./create-command-map');

describe('create command map', () => {
  it('maps command to handlers', async () => {
    const commandHandler = jest.fn(() => 'command handler return');
    const MAP = { 'DO_SOMETHING': commandHandler };

    const commandMap = createCommandMap(MAP);

    expect(await commandMap('DO_SOMETHING')()).toEqual('command handler return');
  });

  it('returns no operation handler when not found command type', async () => {
    const commandHandler1 = jest.fn();
    const MAP = { 'DO_SOMETHING': commandHandler1 };
    
    const commandMap = createCommandMap(MAP);

    expect(await commandMap('NOT_MAPPED')()).toBeUndefined();
  });

  it('transforms sync commands in async commands', () => {
    const commandHandler = jest.fn();
    const MAP = { 'DO_SOMETHING': commandHandler };

    const commandMap = createCommandMap(MAP);

    expect(commandMap('DO_SOMETHING')()).toEqual(expect.any(Promise));
  });
});
