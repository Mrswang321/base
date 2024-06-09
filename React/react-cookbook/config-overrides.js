const path = require('path')

const { 
  override, 
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  }),

  addDecoratorsLegacy()
)