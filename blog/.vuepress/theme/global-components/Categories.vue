<template>
  <div class="blog-tags">
    <h1>文章分类汇总</h1>
    <Category v-for="category in categories" :key="categories.name" :category="category" />
  </div>
</template>

<script>
export default {
  props: ["categories"]
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
