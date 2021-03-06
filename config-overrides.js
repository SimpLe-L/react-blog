const {
    override,
    fixBabelImports,
    addLessLoader,
} = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#d214a2',
            '@font-size-base':'14px',
        }
    })
)