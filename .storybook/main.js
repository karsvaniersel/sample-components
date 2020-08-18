const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-notes/register'
    ],
    webpackFinal: async(config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        });

        // Return the altered config
        return config;
    },
};