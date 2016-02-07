# bem-primer
Unstyled classes and markup for your next project.

- Semantic
- Low-specificity
- [BEM](http://bem.info) style classes
- Blank HTML templates

## Purpose
This is primarily a toolkit to help speed up personal project development. Feel free to use, distribute or contribute back to the project if you are so inclined.

## Classes
There are two types of class: **core** and **common**.
- Core classes are for the nuts-and-bolts elements that are native to the browser. Things like buttons, checkboxes, text inputs etc.
- Common classes are for relatively conventional UI patterns like comments, navbars, modals etc.

## Templates
Quick copy-and-paste markup with appropriate classes already applied.

#### e.g [comment.html](https://github.com/msisto/bem-primer/blob/master/templates/comment.html)
```
<div class="comment">
  <div class="comment__avatar">
    <img class="avatar avatar--small" src="#">
  </div>
  <div class="comment__content">
    <div class="comment__header"></div>
    <div class="comment__body"></div>
    <div class="comment__footer"></div>
  </div>
</div>
```

## Development
bem-primer uses [cssnext](http://cssnext.io/) and [Gulp](http://gulpjs.com/) for `@import` support and automated vendor prefixes.

- Run `git clone git@github.com:msisto/bem-primer.git`
- Run `cd bem-primer`
- Run `npm install` in the project directory
- Run `gulp` to compile styles to `/dist`

## To-dos
- Drop cssnext, use [postcss-import](https://github.com/postcss/postcss-import) and [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
