module.exports = {
  title: '一叶知秋',
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    //头像在这里配置，在上面配置无法加载，不知啥原因
    logoimg: "/logo.jpeg",
    //浏览器主页顶部标签的title 空串显示上面配置的title
    homeTitle: '',
    tagTitle: '标签',
    categoriesTitle: '分类',
    timelineTitle: '时间轴',
    music: {
      server: "netease",
      type: "playlist",
      id: 2295125861,
      mutex: true,
      preload: "auto",
      order: "random",
      fixed: true,
      autoplay: true,
      loop: "all",
      volume: 0.7
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     * 根据自己需要定义导航
     */
    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '时间轴',
        link: '/timeline/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '分类',
        link: '/categories/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/xiaoxin-ws',
      },

    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        // {
        //   type: 'github',
        //   link: 'https://github.com/ulivz',
        // },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
}
