# Kana Familiarizer

A web extention that replaces all text on pages you visit with kana using Hepburn, so you can familiarize yourself with reading kana-only text.

It's an experiment to see if I can speed up my recognition of kana by using it every day in some form using this method.

## Getting Started

### Building

- `npm install` to install dependencies
- `npm start` to create the extension in the `dist/` folder

### Installing

#### Firefox

- Go to `about:debugging`
- Click `Load Temporary Add-on`
- Navigate to the `dist` folder

#### Chrome

- Go to `chrome://extensions`
- Click `Developer mode` on the top right
- Click `Load unpacked`
- Navigate to the `dist` folder

## Acknowledgments

* Big thanks to the authors of the [hepburn](https://www.npmjs.com/package/hepburn) NPM package - at the moment this project is little more than a wrapper around it.
