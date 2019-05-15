<p align="center">
  <a href="https://github.com/AnakinYuen/progressive-image"><img src="./logo.png" alt="Progressive Image" width="500"></a>
</p>

# progressive-image

[![license](https://img.shields.io/npm/l/@anakinyuen/progressive-image.svg)](https://github.com/AnakinYuen/progressive-image/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@anakinyuen/progressive-image.svg)](https://www.npmjs.com/package/@anakinyuen/progressive-image)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@anakinyuen/progressive-image.svg)]()
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

The customized build-in element that enriches the native `img` element by using multiple Progressive Image Rendering strategies.

![example](./example.gif)

`progressive-image` example in Chrome with Fast 3G throttling

## Installation

### npm

```bash
$ npm install @anakinyuen/progressive-image
```

### Direct include

Simply download and include with a `script` tag and a `link` tag inside the `head` tag.

```html
<head>
  <link rel="stylesheet" type="text/css" href="progressive-image.css" />
  <script src="progressive-image.js"></script>
</head>
```

or

### Using `import` statement

You may also import `progressive-image` directly to your source code

```js
import 'progressive-image';
```

```html
<head>
  <link rel="stylesheet" type="text/css" href="progressive-image.css" />
  <!-- <script src="progressive-image.js"></script> -->
</head>
```

## Usage

### Create `img` in html

```html
<img
  is="progressive-image"
  width="474"
  height="600"
  src="The_Scream.jpg"
  alt="The Scream"
  data-blurry-src="The_Scream-189px.jpg"
  sizes="(min-width: 415px) 50vw, 80vw"
  srcset="
    The_Scream-474px.jpg     474w,
    The_Scream-606px.jpg     606w,
    The_Scream-808px.jpg     808w,
    The_Scream-10025px.jpg 10025w
  "
/>
```

### Create `img` in js

```js
const progressiveImage = document.createElement('img', {
  is: 'progressive-image',
});
progressiveImage.width = 474;
progressiveImage.height = 600;
progressiveImage.src = 'The_Scream.jpg';
progressiveImage.alt = 'The Scream';
progressiveImage.dataset.blurrySrc = 'The_Scream-189px.jpg';
progressiveImage.sizes = '(min-width: 415px) 50vw, 80vw';
progressiveImage.srcset = `
  The_Scream-474px.jpg     474w,
  The_Scream-606px.jpg     606w,
  The_Scream-808px.jpg     808w,
  The_Scream-10025px.jpg 10025w
`;
```

## Key Features

- **no dependency**
- **minimal size:** weighing `1.8KB` only
- **multiple Progressive Image Rendering strategies:** support CSS Placeholder Shimmer and Low quality image placeholder (LQIP)
- **lazy load images:** Intersection Observer is used to trigger image loads
  - you may want to include Intersection Observer polyfill for browsers which not natively support `Intersection Observer`
- **auto fallback:** work exactly the same as `img` do if Custom elements is not supported

## Attributes

### is (is="progressive-image")

Specify that a standard HTML element (`img`) should behave like a registered custom built-in element (`progressive-image`).

> See [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for more details

### src

Same as `src` attribute on the `img` tag.

### srcset

Same as `srcset` attribute on the `img` tag.

### sizes

Same as `sizes` attribute on the `img` tag.

> See [Responsive Images](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images) for usage of sizes and srcset.

### alt

Same as `alt` attribute on the `img` tag.

### data-blurry-src

Optional attribute

The `data-blurry-src` attribute defined the source for Low quality image placeholder(LQIP) of the `img` element. By default, the image of `data-blurry-src` is immediately downloaded and shown in blurry form. The final image will start download after LQIP is shown. Once ready, the LQIP will fade out and show the final image.

### height and width

An **explicit** size of the image, which is used by the `progressive-image` to determine the aspect ratio without fetching the image.

## Compatibility

**[Requires ES2015 classes](https://caniuse.com/es6-class). IE11 and below not supported.**

- **If targeting browsers that natively support ES2015, but not native Web Components:**

  You will also need the [Custom Elements V1 Polyfill](https://github.com/WebReflection/document-register-element).

  See caniuse.com for support on [Custom Elements v1](https://caniuse.com/#feat=custom-elementsv1).

- **If targeting browsers that does not support ES2015:**

  You might want to reconsider since you'll be better off not using Web Components in this case.

## Licensing

[MIT license](https://github.com/AnakinYuen/progressive-image/blob/master/LICENSE)
