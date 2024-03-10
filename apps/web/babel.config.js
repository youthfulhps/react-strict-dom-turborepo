const styleXBabelPlugin = require('@stylexjs/babel-plugin');

module.exports = function (api) {
  api.cache(true);
  return {
    "presets": ["next/babel", "@babel/preset-flow"],
    "plugins": [
      styleXBabelPlugin({
        importSources: [
          { from: 'react-strict-dom', as: 'css '}
        ]
      })
    ]
  }
};
