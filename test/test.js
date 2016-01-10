var _ = require('lodash');
var postcss = require('postcss');
var expect  = require('chai').expect;
var SEProperties = require('swedish-css-properties');
var SEValues = require('swedish-css-values');

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

var swedishPropertiesTest = function (swedish, english, value) {
    it('converts ' + swedish + ' to ' + english, function (done) {
        test(
            'a{ ' + swedish + ': ' + value + '; }',
            'a{ ' + english + ': ' + value + '; }',
            {},
            done
        );
    });
};

var swedishValuesTest = function (swedish, english, property) {
    it('converts ' + swedish + ' to ' + english, function (done) {
        test(
            'a{ ' + property + ': ' + swedish + '; }',
            'a{ ' + property + ': ' + english + '; }',
            {},
            done
        );
    });
};

describe('postcss-swedish-stylesheets', function () {

    // Test Properties
    _.forEach(SEProperties, function (value, key) {
        swedishPropertiesTest(value, key, '10px');
    });

    // Test Values
    _.forEach(SEValues, function (value, key) {
        swedishValuesTest(value, key, 'color');
    });

    // Test important
    it('converts !viktigt to !important', function (done) {
        test(
            'a{ color: white !viktigt; }',
            'a{ color: white !important; }',
            {},
            done
        );
    });

    it('custom properties', function (done) {
        test(
            'a{ kulör: white !viktigt; }',
            'a{ color: white !important; }',
            {
                properties: {
                    color: 'kulör'
                }
            },
            done
        )
    });

    it('custom values', function (done) {
        test(
            'a{ color: supervit !viktigt; }',
            'a{ color: white !important; }',
            {
                values: {
                    white: 'supervit'
                }
            },
            done
        )
    });

});
