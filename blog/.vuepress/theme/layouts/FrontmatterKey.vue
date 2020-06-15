<template>
  <div id="vuepress-theme-blog__tags-layout">
    <BlogTags v-if="$frontmatter.title=='Tag'" :tags="$frontmatterKey.list" />
    <Categories v-if="$frontmatter.title=='Categories'" :categories="$frontmatterKey.list" />
    <Timeline v-if="$frontmatter.title=='Timeline'" :timelines="$site.pages" />
  </div>
</template>

