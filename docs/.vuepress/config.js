module.exports = {
  title: 'houliyun',
  description: 'Hello, my friend!',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/favicon.ico`
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '语言',
        items: [
          { text: '中文', link: '/language/chinese' },
          { text: '英文', link: '/language/english' }
        ]
      }
      // { text: 'External', link: 'https://www.baidu.com' }
    ],
    sidebarDepth: 2, //菜单深度2级，它将同时提取h2和h3标题
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: ['/guide/']
      }
    ]
  },
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true
};
