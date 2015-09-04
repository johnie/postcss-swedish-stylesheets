# <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" alt="Sweden" height="32px" width="auto"> PostCSS Swedish Stylesheets [![Build Status][ci-img]][ci]

> [PostCSS] plugin for writing Swedish Style Sheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/johnie/postcss-swedish-stylesheets.svg
[ci]:      https://travis-ci.org/johnie/postcss-swedish-stylesheets
[Swedish Values]:      https://github.com/johnie/swedish-css-values

## Installation

```console
$ npm install postcss-swedish-stylesheets --save-dev
```

### Quick Start

```js
// Dependencies
var fs = require('fs');
var postcss = require('postcss');
var sweCSS = require('postcss-swedish-stylesheets');

// CSS to be processed
var css = fs.readFileSync('input.css', 'utf8');

// Process our swedish stylesheets css using postcss-swedish-stylesheets
var output = postcss()
  .use(sweCSS())
  .process(css)
  .css

console.log('\n===>Output CSS:\n', output);
```

Or just:

```js
var output = postcss(sweCSS())
  .process(css)
  .css
```


### Swedish syntax

```css
.foo {
    position: relativ;
    bakgrund-färg: laxrosa;
    bakgrund-bild: ingen;
    typsnitt-familj: Helvetica, Arial;
    färg: vit;
    linje-höjd: 1.68;
    bokstav-mellanrum: 2px;
    flyt: vänster;
    visa: ingen;
    nivå: 1000;
}
```

### CSS output

```css
.foo {
    position: relative;
    background-color: salmon;
    background-image: none;
    font-family: Helvetica, Arial;
    color: white;
    line-height: 1.68;
    letter-spacing: 2px;
    float: left;
    display: none;
    z-index: 1000;
}
```

#### [Here you can see the full list of Swedish CSS Properties](https://github.com/johnie/swedish-css-properties)

#### [Here you can see the full list of Swedish CSS Values](https://github.com/johnie/swedish-css-values)

## Usage

### Gulp

```js
var gulp = require('gulp');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var sweCSS = require('postcss-swedish-stylesheets')
var autoprefixer = require('autoprefixer-core')

gulp.task('default', function () {
    var processors = [
        autoprefixer({ browsers: ['> 0%'] }), //Other plugin
        sweCSS()
    ];
    gulp.src('src/*.css')
        .pipe(postcss(processors))
        .pipe(rename('gulp.css'))
        .pipe(gulp.dest('build'))
});
gulp.watch('src/*.css', ['default']);
```

### Grunt

```js
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({ browsers: ['> 0%'] }).postcss, //Other plugin
          require('postcss-swedish-stylesheets')(),
        ]
      },
      dist: {
        src: ['src/*.css'],
        dest: 'build/grunt.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['postcss']);
}
```

---

## Contributing

Fork, work on a branch, install dependencies & run tests before submitting a PR.

```console
$ git clone https://github.com/YOU/postcss-swedish-stylesheets.git
$ git checkout -b patch-1
$ npm install
$ npm test
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
