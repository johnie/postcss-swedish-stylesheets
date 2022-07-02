const _ = require('lodash');
const postcss = require('postcss');
const SEProperties = require('swedish-css-properties');
const SEValues = require('swedish-css-values');

const plugin = require('./');

const test = (input, output, opts, done) => {
  postcss([plugin(opts)])
    .process(input, { from: undefined })
    .then((result) => {
      expect(result.css).toEqual(output);
      expect(result.warnings()).toStrictEqual([]);
      done();
    })
    .catch((error) => {
      done(error);
    });
};

const swedishPropertiesTest = (swedish, english, value) => {
  it(`converts ${swedish} to ${english}`, (done) => {
    test(`a{${swedish}: ${value};}`, `a{${english}: ${value};}`, {}, done);
  });
};

const swedishValuesTest = (swedish, english, property) => {
  it(`converts ${english} to ${swedish}`, (done) => {
    test(
      `a{${property}: ${swedish};}`,
      `a{${property}: ${english};}`,
      {},
      done
    );
  });
};

describe('postcss-swedish-stylesheets', () => {
  // Test Properties
  _.forEach(SEProperties, (value, key) => {
    swedishPropertiesTest(value, key, '10px');
  });

  // Test Values
  _.forEach(SEValues, (value, key) => {
    swedishValuesTest(value, key, 'color');
  });

  // Test important
  it('converts !viktigt to !important', (done) => {
    test(
      'a{ color: white !viktigt; }',
      'a{ color: white !important; }',
      {},
      done
    );
  });

  it('custom properties', (done) => {
    test(
      'a{ kulör: white !viktigt; }',
      'a{ color: white !important; }',
      {
        properties: {
          color: 'kulör',
        },
      },
      done
    );
  });

  it('custom values', (done) => {
    test(
      'a{ color: supervit !viktigt; }',
      'a{ color: white !important; }',
      {
        values: {
          white: 'supervit',
        },
      },
      done
    );
  });
});
