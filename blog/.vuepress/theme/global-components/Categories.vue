<template>
  <ol class="blog-categories">
    <h1>文章分类汇总</h1>
    <Category v-for="category in categories" :key="categories.name" :category="category" />
  </ol>
</template>

<script>
export default {
  props: ["categories"]
};
</script>

<style lang="stylus">
.blog-categories {
  width: 100%;
  list-style: none;
}

@media screen and (max-width: 1000px) {
  .blog-categories {
    width: 90%;
  }
}
</style>
