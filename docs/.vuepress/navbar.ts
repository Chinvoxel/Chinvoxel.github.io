import { navbar } from 'vuepress-theme-hope'

export default navbar([
  { text: '主页', link: '/', icon: 'home' },
  {
    text: '前端',
    icon: 'overflow',
    children: [
      {
        text: '基石',
        children: [
          {
            text: 'html',
            link: '/web/html/'
          },
          { text: 'css', link: '/web/css/' },
          { text: 'javascript', link: '/web/javascript/' },
          { text: 'typescript', link: '/web/typescript/' }
        ]
      },
      {
        text: '框架',
        children: [
          { text: 'vue3.0', link: '/web/vue3/' },
          { text: 'vue2.0', link: '/web/vue/' },
          { text: 'react', link: '/web/react/' }
        ]
      }
    ]
  },
  {
    text: '移动端',
    icon: 'mobile',
    children: [
      { text: '小程序', link: '/miniProgram/' },
      { text: 'uniapp', link: '/uniapp/' }
    ]
  },
  {
    text: '进阶',
    icon: 'hot',
    children: [
      {
        text: '后端',
        children: [
          {
            text: 'node',
            link: '/node/',
            icon: 'node'
          }
        ]
      },
      {
        text: '打包',
        children: [
          { text: 'vite', link: '/vite/' },
          { text: 'webpack', link: '/webpack/' }
        ]
      },
      { text: '设计模式', link: '/model/' }
    ]
  },
  {
    text: '计算机网络',
    icon: 'computer',
    children: [
      { text: 'http', link: '/http/' },
      { text: 'https', link: '/https/' }
    ]
  },
  {
    text: '更多',
    icon: 'more',
    children: [
      { text: 'linux', link: '/linux/' },
      { text: 'docker', link: '/docker/' },
      { text: '面试问题', link: '/review/' }
    ]
  },
  { text: 'Git', link: '/git/', icon: 'git' },
  { text: 'GitHub', link: 'https://github.com/Chinvoxel' }
])
