const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
}
