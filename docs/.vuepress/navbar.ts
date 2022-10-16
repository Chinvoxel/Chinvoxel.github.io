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
            text: 'HTML',
            link: '/web/html/'
          },
          { text: 'CSS', link: '/web/css/' },
          { text: 'JS', link: '/web/js/' },
          { text: 'TS', link: '/web/ts/' }
        ]
      },
      {
        text: '框架',
        children: [
          { text: 'Vue3.0', link: '/web/Vue3/' },
          { text: 'Vue2.0', link: '/web/Vue/' },
          { text: 'React', link: '/web/React/' }
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
    text: '计算机',
    icon: 'computer',
    link: '/computer'
  },
  { text: 'Git', link: '/git/', icon: 'git' },
  { text: '阅读', link: '/book/', icon: 'repo' },
  { text: '开发', link: '/develop/', icon: 'launch' },
  {
    text: '更多',
    icon: 'more',
    link: '/more',
    children: [
      { text: 'linux', link: '/linux/' },
      { text: 'docker', link: '/docker/' },
      { text: '面试问题', link: '/review/' }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/Chinvoxel' }
])
