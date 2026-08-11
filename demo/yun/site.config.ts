import { $t, defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: $t('siteConfig.title'),
  subtitle: $t('siteConfig.subtitle'),
  description: $t('siteConfig.description'),
  timezone: 'Asia/Shanghai',
  url: 'https://kianakaslana.top/',
  author: {
    name: $t('siteConfig.author.name'),
    avatar: '/avatar.png',
  },
  orderBy: 'date',
  social: [],
  search: { enable: true, provider: 'fuse' },
  fuse: { options: { keys: ['title', 'tags', 'categories', 'excerpt', 'content'] } },
  comment: { enable: false },
  mediumZoom: { enable: true },
  vanillaLazyload: { enable: true },
  statistics: { enable: true },
  sponsor: { enable: false, methods: [] },
  encrypt: { enable: true },
  llms: { enable: true, files: true },
  lastUpdated: false,
})
