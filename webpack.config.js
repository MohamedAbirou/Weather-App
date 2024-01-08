const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
    // ... other config options ...
    plugins: [
        new DotenvWebpackPlugin()
    ],
};
