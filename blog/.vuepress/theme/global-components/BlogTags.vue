<template>
  <div class="blog-tags">
    <h1>文章标签汇总</h1>
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
  </div>
</template>

<script>
export default {
  props: ["tags"]
};
</script>

<style lang="stylus">
.blog-tags {
  width: 100%;
}

@media screen and (max-width: 1000px) {
  .blog-tags {
    width: 90%;
  }
}
</style>
