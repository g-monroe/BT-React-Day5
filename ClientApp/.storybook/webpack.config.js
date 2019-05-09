const path = require('path');
module.exports = ({ config, mode }) => {
  // note - when updating this you might also need to update config-overrides.js
  config.module.rules.push({
    test: /\.less$/,
    loaders: ["style-loader", "css-loader", {
      loader: "less-loader",
      options: {
        javascriptEnabled: true
      }
    }],
    include: path.resolve(__dirname, "../"),
    exclude: [/node_modules/],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};