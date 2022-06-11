const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    base: '/coffeedoc/',
    lang: 'zh-CN',
    title: 'Coffee Document',
    description: '科学喝咖啡指南',
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        })
    ],
    theme: defaultTheme({
        navbar: [
            { text: 'SCA 咖啡风味轮', link: '/navbar/sca-flavor-wheel/' },
            // { text: '咖啡风味地图', link: '/navbar/sca-flavor-wheel/' },
            { text: '化合物风味轮', link: '/navbar/chemical-substance-flavor-wheel/' },
            // { text: '咖啡豆种族谱', link: '/navbar/chemical-substance-flavor-wheel/' },
            { text: '鸣谢', link: '/navbar/thanks/' },
            { text: '关于', link: '/navbar/about/' },
        ]
    })
}
