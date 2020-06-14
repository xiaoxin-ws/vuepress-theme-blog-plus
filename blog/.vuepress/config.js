module.exports = {
  title: '一叶知秋',
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    //头像在这里配置，在上面配置无法加载，不知啥原因
    logoimg: "https://img2.woyaogexing.com/2020/06/12/03855dc20d394e0e9c3a65da97c1925a!400x400.jpeg",
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
