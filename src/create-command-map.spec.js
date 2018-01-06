const createCommandMap = require('./create-command-map');

describe('create command map', () => {
  it('maps command to handlers', () => {
    const commandHandler1 = jest.fn();
    const commandHandler2 = jest.fn();
    const MAP = { 'DO_SOMETHING': [commandHandler1, commandHandler2] };

    const commandMap = createCommandMap(MAP);

    expect(commandMap('DO_SOMETHING')).toEqual([commandHandler1, commandHandler2]);
  });

  it('returns no operation handler when not found command type', () => {
    const commandHandler1 = jest.fn();
    const MAP = { 'DO_SOMETHING': [commandHandler1] };
    
    const commandMap = createCommandMap(MAP);

    expect(commandMap('NOT_MAPPED')).toEqual([expect.any(Function)]);
  });
});