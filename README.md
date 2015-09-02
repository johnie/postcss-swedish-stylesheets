# <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" alt="Sweden" height="32px" width="auto"> PostCSS Swedish Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Swedish Style Sheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/johnie/postcss-swedish-stylesheets.svg
[ci]:      https://travis-ci.org/johnie/postcss-swedish-stylesheets
[Swedish Values]:      https://github.com/johnie/swedish-css-values


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

```js
postcss([ require('postcss-swedish-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.
