import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "scada",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'kif-ui-common', link: '/kif-ui-common/dashboard' }
    ],

    sidebar: [
      {
        text: 'kif-ui-common',
        items: [
          { text: 'Dashboard config', link: '/kif-ui-common/dashboard' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
