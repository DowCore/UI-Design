module.exports = {
  title: "无为之道",
  description: "无为之道",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
        '/',
        '/guide/'
      ]
  },
  plugins: [
    "@vuepress/blog",
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
  ],
};
