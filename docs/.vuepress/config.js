const { nav } = require('./siderbar/index');
const path = require('path');
module.exports = {
  // 相对路径
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@assets': path.resolve(__dirname, '../assets')
  //     }
  //   }
  // },
  title: '小憩时光',
  description: '小憩时光',
  themeConfig: {
    repo: 'http://github.com/laelhou',
    //导航栏链接
    nav: nav,
    sidebarDepth: 2, //菜单深度2级，它将同时提取h2和h3标题
    sidebar: 'auto'
  },
  base: '', //打包出来的路径
  dest: './docs/.vuepress/dist', //打包输入的文件路径前缀
  ga: '',
  evergreen: true
  // lastUpdated: '最后更新时间' // 最后更新时间
};
