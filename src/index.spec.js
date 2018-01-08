const facade = require('./index');
const parallelizeCommandHandlers = require('./parallelize-command-handlers');
const combineCommandHandlers = require('./combine-command-handlers');
const createCommandHandler = require('./create-command-handler');

describe('library facade', () => {
  it('exports the functions', () => {
    expect(facade).toEqual({
      parallelizeCommandHandlers,
      combineCommandHandlers,
      createCommandHandler
    });
  });
});
