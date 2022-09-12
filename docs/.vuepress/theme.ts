import { hopeTheme } from 'vuepress-theme-hope'

import navbar from './navbar.js'
import sidebar from './sidebar.js'

export default hopeTheme({
  logo: '/logo.png',
  hostname: 'https://chinvoxel.github.io',

  author: {
    name: 'Chinvoxel',
    url: 'https://chinvoxel.github.io'
  },

  iconAssets: 'iconfont',

  repo: 'vuepress-theme-hope/vuepress-theme-hope',

  docsDir: 'demo/src',

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: '',

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    description: '一个前端开发者',
    intro: '/intro.html',
    medias: {
      GitHub: 'https://github.com/Chinvoxel',
      Zhihu: 'https://www.zhihu.com/people/trustme-58',
      Dingding: 'https://juejin.cn/user/1996368848364616?utm_source=gold_browser_extension'
    }
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234']
    }
  },

  plugins: {
    blog: {
      autoExcerpt: true
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: 'Giscus',
      repo: 'Chinvoxel/comment',
      repoId: 'R_kgDOH9hZSg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOH9hZSs4CRUpZ'
    },

    mdEnhance: {
      enableAll: false,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
})
