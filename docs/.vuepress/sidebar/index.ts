import { sidebar } from 'vuepress-theme-hope'

import { book } from './book'
import { git } from './git'
import { html } from './web'

export default sidebar({
  '/book/': book,
  '/git/': git,
  '/web/html/': html
})
