// themePath/index.js
// module.exports = (options, ctx) => ({
//     extend: '@vuepress/theme-blog',
//     // extend: '@vuepress/theme-default',
// })
const removeMd = require('remove-markdown')
const path = require('path')
const pick = require('lodash/pick')

module.exports = themeConfig => {
    /**
     * Default theme configuration
     */

    themeConfig = Object.assign(themeConfig, {
        logo: themeConfig.logoimg,
        nav: themeConfig.nav || [
            {
                text: 'Blog',
                link: '/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
            {
                text: 'Category',
                link: '/categories/',
            },
            {
                text: 'Timeline',
                link: '/timeline/',
            },
        ],
        summary: themeConfig.summary === undefined ? true : themeConfig.summary,
        summaryLength:
            typeof themeConfig.summaryLength === 'number'
                ? themeConfig.summaryLength
                : 200,
        pwa: !!themeConfig.pwa,
    })

    /**
     * Configure blog plugin
     */
    const defaultBlogPluginOptions = {
        directories: [
            {
                id: 'post',
                dirname: '_posts',
                path: '/',
                title: themeConfig.homeTitle ? themeConfig.homeTitle : ''
            },
        ],
        frontmatters: [
            {
                id: 'tag',
                keys: ['tags'],
                path: '/tag/',
                title: themeConfig.tagTitle ? themeConfig.tagTitle : '标签'
            },
            {
                id: 'categories',
                keys: ['categories'],
                path: '/categories/',
                title: themeConfig.categoriesTitle ? themeConfig.categoriesTitle : '分类'
            },
            {
                id: 'timeline',
                keys: ['timeline'],
                path: '/timeline/',
                title: themeConfig.timelineTitle ? themeConfig.timelineTitle : '时间轴'
            }
        ],
        globalPagination: {
            lengthPerPage: 5,
        },
    }

    let resolvedFeedOptions
    const isFeedEnabled = themeConfig.feed && themeConfig.feed.canonical_base
    if (isFeedEnabled) {
        const {
            rss = true,
            atom = false,
            json = false,
            ...feedOptions
        } = themeConfig.feed
        resolvedFeedOptions = Object.assign({}, feedOptions, {
            feeds: {
                rss2: { enable: rss },
                atom1: { enable: atom },
                json1: { enable: json },
            },
        })
    }

    const properties = [
        'directories',
        'frontmatters',
        'globalPagination',
        'sitemap',
        'comment',
        'newsletter',
    ]
    const themeConfigPluginOptions = {
        ...pick(themeConfig, properties),
        feed: resolvedFeedOptions,
    }

    const blogPluginOptions = Object.assign(
        {},
        defaultBlogPluginOptions,
        themeConfigPluginOptions
    )

    /**
     * Integrate plugins
     */

    const enableSmoothScroll = themeConfig.smoothScroll === true

    const plugins = [
        '@vuepress/plugin-nprogress',
        '@nines/vuepress-plugin-back-to-top',
        {
            '@vuepress/medium-zoom': {
                selector: 'img.zoom-custom-imgs',
                options: {
                    margin: 24,
                    background: '#BADA55',
                    scrollOffset: 0,
                    container: '#zoom-container',
                    template: '#zoom-template',
                }
            }
        },
        [
            '@vuepress/search',
            {
                searchMaxSuggestions: 10,
            },
        ],
        ['@vuepress/blog', blogPluginOptions],
        ['smooth-scroll', enableSmoothScroll],
    ]

    /**
     * Enable pwa
     */
    if (themeConfig.pwa) {
        plugins.push([
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true,
            },
        ])
    }

    const config = {
        plugins,
        define: {
            THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
                ? themeConfig.paginationComponent
                : 'Pagination',
        },
        alias: {
            fonts: path.resolve(__dirname, 'fonts'),
        },
        /**
         * Generate summary.
         */
        extendPageData(pageCtx) {
            const strippedContent = pageCtx._strippedContent
            if (!strippedContent) {
                return
            }
            if (themeConfig.summary) {
                pageCtx.summary =
                    removeMd(
                        strippedContent
                            .trim()
                            .replace(/^#+\s+(.*)/, '')
                            .slice(0, themeConfig.summaryLength)
                    ) + ' ...'
                pageCtx.frontmatter.description = pageCtx.summary
            }
            if (pageCtx.frontmatter.summary) {
                pageCtx.frontmatter.description = pageCtx.frontmatter.summary
            }
        },
    }

    return config
}
