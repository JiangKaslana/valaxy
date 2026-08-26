import { defineThemeConfig } from 'valaxy-theme-yun'

export default defineThemeConfig({
  type: 'nimbo',
  banner: {
    enable: true,
    title: { 'zh-CN': 'Junyu 的博客', en: ['Junyu', 'Blog'] },
    siteNameClass: 'bg-gradient-to-r gradient-text from-#1e3c72 to-dark dark:from-#66a6ff dark:to-blue-500',
  },
  notice: { enable: false },
  nav: [
    { text: 'menu.posts', link: '/posts/', icon: 'i-ri-article-line' },
    { text: '关于我', link: '/about', icon: 'i-ri-user-line' },
  ],
  pages: [
    { name: '关于我', url: '/about', icon: 'i-ri-user-line', color: 'var(--va-c-text)' },
  ],
  footer: { icon: { animated: true } },
})
