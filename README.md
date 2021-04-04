<p align="center">
  <a href="https://swapform.robertjessemiller.com/">
    <img src="https://swapform.robertjessemiller.com/img/swap-7.gif" alt="Swapform in action" width="320" height="80">
  </a>
</p>

<p align="center">
  A front-end improvement to Bootstrap forms with a Material design.
  <br>
  Supports Bootstrap versions <strong>3</strong>, <strong>4</strong> and <strong>5</strong>.
  <br>
  <a href="https://github.com/runthis/swapform/issues/new">Report bug</a>
  ·
  <a href="https://github.com/runthis/swapform/issues/new">Request feature</a>
</p>



[![license](https://img.shields.io/npm/l/swapform)](https://github.com/runthis/swapform/blob/master/LICENSE)
[![version](https://img.shields.io/github/package-json/version/runthis/swapform)](https://www.npmjs.com/package/swapform)
![bootstrap version](https://img.shields.io/npm/dependency-version/swapform/peer/bootstrap)
[![JS gzip size](https://img.badgesize.io/runthis/swapform/master/dist/js/swapform.min.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/runthis/swapform/blob/master/dist/js/swapform.min.js)
[![CSS gzip size](https://img.badgesize.io/runthis/swapform/master/dist/css/swapform.min.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/runthis/swapform/blob/master/dist/css/swapform.min.css)
[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/swapform)](https://snyk.io/vuln/search?type=npm&q=swapform)





## Table of contents

- [Quick start](#quick-start)
- [What's included](#whats-included)
- [Documentation](#documentation)
- [Screenshots](#screenshots)
- [Builds](#builds)
- [Todo](#todo)
- [Creator](#creator)



## Quick start

- Use a cdn:
  - **JavaScript** *(pick a provider)*:
    - unpkg: <https://unpkg.com/swapform@latest/dist/js/swapform.min.js>
    - jsdelivr: <https://cdn.jsdelivr.net/npm/swapform@latest/dist/js/swapform.min.js>
  - **CSS** *(pick a provider)*:
    - unpkg: <https://unpkg.com/swapform@latest/dist/css/swapform.min.css>
    - jsdelivr: <https://cdn.jsdelivr.net/npm/swapform@latest/dist/css/swapform.min.css>

- Use [npm](https://www.npmjs.com/):
  - `npm install swapform`

- Download a zip:
  - <https://github.com/runthis/swapform/archive/refs/heads/master.zip>



## What's included

```text
swapform/
└── dist/
    ├── css/
    │   ├── swapform.css
    │   ├── swapform.css.map
    │   ├── swapform.min.css
    │   └── swapform.min.css.map
    └── js/
        ├── swapform.js
        ├── swapform.js.map
        ├── swapform.min.js
        └── swapform.min.js.map
```



## Documentation

Quite simply, wrap an input or textarea in a `<div>` element with an `sf-form` class. Then add the `sf-label` class to the `<label>` element. Swapform will automatically perform everything else.


### Input examples

#### Basic
    <div class="sf-form">
        <label class="sf-label">Enter username</label>
        <input type="text" class="form-control">
    </div>

![Basic swap](https://swapform.robertjessemiller.com/img/swap-8.gif)

#### Swapping label when focused
    <div class="sf-form">
        <label class="sf-label" data-description="Who are you?">Enter username</label>
        <input type="text" class="form-control">
    </div>

![Basic swap](https://swapform.robertjessemiller.com/img/swap-9.gif)

#### Swapping multiple labels when focused and when input value is filled
    <div class="sf-form">
        <label class="sf-label" data-description="Who are you?" data-filled="That's what she said">Enter username</label>
        <input type="text" class="form-control">
    </div>

![Basic swap](https://swapform.robertjessemiller.com/img/swap-10.gif)

### Textarea examples

The `<textarea>` element supports the same swapping methods outlined above, and also supports automatic height expansion, fixed heights and multiple sizes. Below is a table listing the available classes for a `<textarea>` depending on the features and size desired.


#### Classes for fixed heights and auto-expanding heights

| Class                 | Suffix     | Sizes               |  Description                                               |
| --------------------- | ---------- | ------------------- | ---------------------------------------------------------- |
| `sf-textarea-`        | sm, md, lg | 160px, 320px, 640px | Automatically expands to a maximum height based on content |
| `sf-textarea-fixed-`  | sm, md, lg | 160px, 320px, 640px | Has a fixed height                                         |


#### Basic, medium, fixed height

*Class:* `sf-textarea-fixed-md`

    <div class="sf-form">
        <label class="sf-label">Tell me a story</label>
        <textarea class="form-control sf-textarea-fixed-md"></textarea>
    </div>


#### Basic, large, expanding height

*Class:* `sf-textarea-lg`

    <div class="sf-form">
        <label class="sf-label">Tell me a story</label>
        <textarea class="form-control sf-textarea-lg"></textarea>
    </div>


#### Basic, large, expanding height, with swapping texts

*Class:* `sf-textarea-lg`

*Focused:* `Surprise me!`

*Filled:* `Cool story bro`


    <div class="sf-form">
        <label class="sf-label" data-description="Surprise me!" data-filled="Cool story bro">Tell me a story</label>
        <textarea class="form-control sf-textarea-lg"></textarea>
    </div>




### Supported classes

#### Basic

| Class     | Description                                                                |
| --------- | ------------------------------------------------------------------------------ |
| `sf-form` | Used to wrap around a `<label>` with an accompanying `<input>` or `<textarea>` |


#### Labels

| Class         | Description                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `sf-label-sm` | Should be used when using **`form-control-sm`** in your input/textarea elements      |
| `sf-label`    | Should be used when using regular **`form-control`** in your input/textarea elements |
| `sf-label-lg` | Should be used when using **`form-control-lg`** in your input/textarea elements      |


#### Textarea

| Class                  | Description                       |
| ---------------------- | --------------------------------- |
| `sf-textarea-sm`       | Auto expanding height up to 160px |
| `sf-textarea-md`       | Auto expanding height up to 320px |
| `sf-textarea-lg`       | Auto expanding height up to 640px |
| `sf-textarea`          | Auto expanding height infinitely  |
| `sf-textarea-fixed-sm` | Fixed height, 160px               |
| `sf-textarea-fixed-md` | Fixed height, 320px               |
| `sf-textarea-fixed-lg` | Fixed height, 640px               |




### Supported data attributes

These are used on `<input>` or `<textarea>` elements. The `color` and `file` input types are not supported at this time.

| Option              | Description                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- |
| `data-description`  | The value is swapped in when a form input or textarea is focused                            |
| `data-filled`       | The value is swapped in when a form input or textarea has a value and is no longer focused  |



## Screenshots



**Basic**

![Basic swap](https://swapform.robertjessemiller.com/img/swap-2.gif)


**Using HTML**

![HTML Swap](https://swapform.robertjessemiller.com/img/swap-4.gif)


**Using emojis**

![Emoji Swap](https://swapform.robertjessemiller.com/img/swap-6.gif)


**Auto expanding textarea**

![Expanding Textarea](https://swapform.robertjessemiller.com/img/swap-5.gif)



## Builds

If you are using the [npm build](https://www.npmjs.com/package/swapform), you can rebuild the compiled assets after making any desired changes by running any of the following commands:


| Option        | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| `css-compile` | Generates a non-minified version of the css and stores it in `./dist/css/swapform.css`      |
| `css-minify`  | Generates a minified version of the css and stores it in `./dist/css/swapform.min.css`      |
| `js-compile`  | Generates a non-minified version of the javascript and stores it in `./js/dist/swapform.js` |
| `js-minify`   | Generates a minified version of the javascript and stores it in `./js/dist/swapform.min.js` |

*All the above commands also generate source maps*



## Todo

- Add a new method to detect errors on form validation and allow handling



## Creator

**Robert Miller**

- <https://www.robertjessemiller.com/>
- <https://github.com/runthis>
