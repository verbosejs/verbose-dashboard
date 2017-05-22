const boot = require('../index');
const verboseApi = require('../lib/verbose-dashboard');

test('Index file to fetch correct lin', () => {
    expect(boot).toEqual(verboseApi);
});