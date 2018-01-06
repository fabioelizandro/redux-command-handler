const facade = require('./index');
const parallelizeCommandHandlers = require('./parallelize-command-handlers');
const commandCreator = require('./command-creator');
const createCommandMap = require('./create-command-map');
const createCommandHandler = require('./create-command-handler');

describe('library facade', () => {
  it('exports the functions', () => {
    expect(facade).toEqual({
      parallelizeCommandHandlers,
      commandCreator,
      createCommandMap,
      createCommandHandler
    });
  });
});