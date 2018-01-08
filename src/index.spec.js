const facade = require('./index');
const parallelizeCommandHandlers = require('./parallelize-command-handlers');
const createCommandDispatcher = require('./create-command-dispatcher');
const createCommandMap = require('./create-command-map');
const createCommandHandler = require('./create-command-handler');

describe('library facade', () => {
  it('exports the functions', () => {
    expect(facade).toEqual({
      parallelizeCommandHandlers,
      createCommandDispatcher,
      createCommandMap,
      createCommandHandler
    });
  });
});
