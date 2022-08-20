module.exports = {
  title: 'Chinvoxel的博客',
  description: '专注前端自我成长',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    sidebar: 'auto', //自动生成当前页面标题的侧边栏
    nav: [
      { text: '主页', link: '/' },
      { text: 'node', link: '/node/' },
      {
        text: '前端',
        items: [
          { text: 'typescript', link: '/web/typescript/' },
          { text: 'javascript', link: '/web/javascript/' },
          { text: 'html', link: '/web/html/' },
          { text: 'css', link: '/web/css/' }
        ]
      },
      { text: '小程序', link: '/weChat/' },
      { text: 'git', link: '/git/' },
      { text: 'android', link: '/android/' },
      { text: '面试问题', link: '/interview/' }
    ]
  },
  //插件
  plugins: [
    ['@vuepress/back-to-top'], // 返回顶部
    ['@vuepress/nprogress'] // 加载进度条
  ]
}
