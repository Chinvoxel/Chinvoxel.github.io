import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Chinvoxel's Blog",
  description: 'vuepress-theme-hope 的演示',

  base: '/',

  theme
})
