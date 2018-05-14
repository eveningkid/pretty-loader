# pretty-loader
Webpack loader for [`pretty-components`](https://github.com/eveningkid/pretty-components).

```unix
yarn add --dev pretty-loader
```
```unix
npm install --save-dev pretty-loader
```

```js
// inside webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.pss$/,
        use: {
          loader: 'pretty-loader',
        },
      },
    ],
  },
};
```
