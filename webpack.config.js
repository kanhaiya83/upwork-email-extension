const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'content-script.js',
    path: path.resolve(__dirname, 'extension'),
  },
};