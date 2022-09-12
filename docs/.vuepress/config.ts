import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyrightPlugin } from 'vuepress-plugin-copyright2'

import theme from './theme.js'

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Chinvoxel's Blog",
  description: 'vuepress-theme-hope 的演示',

  base: '/',

  theme,
  plugins: [
    searchPlugin({}), // 搜索
    copyrightPlugin({}) //版权
  ]
})
