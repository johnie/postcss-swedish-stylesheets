# <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" alt="Sweden" height="32px" width="auto"> PostCSS Swedish Stylesheets ![test status](https://github.com/johnie/postcss-swedish-stylesheets/actions/workflows/main.yml/badge.svg)

> [PostCSS] plugin for writing Swedish Style Sheets.

[postcss]: https://github.com/postcss/postcss
[swedish values]: https://github.com/johnie/swedish-css-values

## Installation

```console
$ npm install postcss-swedish-stylesheets --save-dev
```

### Quick Start

```js
// Dependencies
const fs = require('fs');
const postcss = require('postcss');
const sweCSS = require('postcss-swedish-stylesheets');

// CSS to be processed
const css = fs.readFileSync('input.css', 'utf8');

// Process our swedish stylesheets css using postcss-swedish-stylesheets
const output = postcss().use(sweCSS(options)).process(css).css;

console.log('\n===>Output CSS:\n', output);
```

Or just:

```js
const output = postcss(sweCSS()).process(css).css;
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
  nivå: 1000 !viktigt;
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
  z-index: 1000 !important;
}
```

#### [Here you can see the full list of Swedish CSS Properties](https://github.com/johnie/swedish-css-properties)

#### [Here you can see the full list of Swedish CSS Values](https://github.com/johnie/swedish-css-values)

## Contributing

Fork, work on a branch, install dependencies & run tests before submitting a PR.

```console
$ git clone https://github.com/YOU/postcss-swedish-stylesheets.git
$ git checkout -b your-branch
$ npm install
$ npm test
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
