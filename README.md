# Canonical

[![Travis build status](http://img.shields.io/travis/gajus/canonical/master.svg?style=flat-square)](https://travis-ci.org/gajus/canonical)
[![NPM version](http://img.shields.io/npm/v/canonical.svg?style=flat-square)](https://www.npmjs.org/package/canonical)

Library to validate data compliance with the [Canonical Reducer Composition](https://github.com/gajus/canonical-reducer-composition) design pattern.

```js
import {
    validateReducer,
    validateAction
} from 'canonical';

/**
 * @throws Error if input reducerDefinition is not compliant with the spec.
 */
validateReducer(reducerDefinition);

/**
 * @throws Error if input action is not compliant with the spec.
 */
validateAction(action);
```

## Importing

The files in `./src/` are written using ES6 features. Therefore, you need to use a source-to-source compiler to load the module. If you are using webpack to build your project and Babel, make a separate test to compile redux-immutable source, e.g.

```js
let webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    /node_modules\/redux\-immutable/
                ],
                loader: 'babel'
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                loader: 'babel'
            }
        ]
    }
};
```
