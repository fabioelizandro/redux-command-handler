const createCommandMap = require('./create-command-map');

describe('create command map', () => {
  it('maps command to handlers', () => {
    const commandHandler = jest.fn();
    const MAP = { 'DO_SOMETHING': commandHandler };

    const commandMap = createCommandMap(MAP);

    expect(commandMap('DO_SOMETHING')).toEqual(commandHandler);
  });

  it('returns no operation handler when not found command type', () => {
    const commandHandler1 = jest.fn();
    const MAP = { 'DO_SOMETHING': commandHandler1 };
    
    const commandMap = createCommandMap(MAP);

    expect(commandMap('NOT_MAPPED')()).toBeUndefined();
  });
});
