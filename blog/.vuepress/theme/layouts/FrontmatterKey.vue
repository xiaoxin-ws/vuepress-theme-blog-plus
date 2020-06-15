<template>
  <div id="vuepress-theme-blog__tags-layout">
    <BlogTags
      v-if="$frontmatter.title=='Tag'||$frontmatter.title==$themeConfig.tagTitle"
      :tags="$frontmatterKey.list"
    />
    <Categories
      v-else-if="$frontmatter.title=='Categories'||$frontmatter.title==$themeConfig.categoriesTitle"
      :categories="$frontmatterKey.list"
    />
    <Timeline
      v-else-if="$frontmatter.title=='Timeline'||$frontmatter.title==$themeConfig.timelineTitle"
      :timelines="$site.pages"
    />
  </div>
</template>

