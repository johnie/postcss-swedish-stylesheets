const _ = require('lodash');
const SEProperties = require('swedish-css-properties');
const SEValues = require('swedish-css-values');

const postcssSwedishStylesheets = (opts = {}) => {
  if (_.isObject(opts.properties)) {
    _.merge(SEProperties, opts.properties);
  }

  if (_.isObject(opts.values)) {
    _.merge(SEValues, opts.values);
  }

  return {
    postcssPlugin: 'postcss-swedish-stylesheets',
    Once(root) {
      root.walkDecls((decl) => {
        // Properties
        _.forEach(SEProperties, (value, key) => {
          if (decl.prop === value) {
            decl.prop = key;
          }
        });

        // Values
        _.forEach(SEValues, (value, key) => {
          decl.value = decl.value.replace(value, key);
        });

        // Important
        if (decl.value.indexOf('!viktigt') >= 0) {
          decl.value = decl.value.replace(/\s*!viktigt\s*/, '');
          decl.important = true;
        }
      });
    },
  };
};

module.exports.postcss = true;
module.exports = postcssSwedishStylesheets;
