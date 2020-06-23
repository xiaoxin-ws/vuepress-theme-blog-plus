<template>
  <div class="post-meta">
    <div
      v-if="author"
      class="post-meta-author"
      itemprop="publisher author"
      itemtype="http://schema.org/Person"
      itemscope
    >
      <NavigationIcon />
      <span itemprop="name">{{ author }}</span>
      &nbsp;
      <MapIcon />
      <span v-if="location" itemprop="address">{{ location }}</span>
    </div>
    <div v-if="date" class="post-meta-date">
      <ClockIcon />
      <time pubdate itemprop="datePublished" :datetime="date">{{ resolvedDate(date) }}</time>
    </div>
    <ul v-if="categories" class="post-meta-categories">
      <PostCategory v-for="category in resolvedCategories" :key="category" :category="category" />
    </ul>
    <ul v-if="tags" class="post-meta-tags" itemprop="keywords">
      <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </ul>
    <hr>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { NavigationIcon, ClockIcon, MapIcon } from "vue-feather-icons";
import PostTag from "./PostTag.vue";
import PostCategory from "./PostCategory.vue";

export default {
  name: "PostMeta",
  components: { MapIcon, NavigationIcon, ClockIcon, PostTag, PostCategory },
  props: {
    tags: {
      type: [Array, String]
    },
    categories: {
      type: [Array, String]
    },
    author: {
      type: String
    },
    date: {
      type: String
    },
    location: {
      type: String
    }
  },
  methods: {
    resolvedDate(dtae) {
      return dayjs(dtae).format(
        this.$themeConfig.dateFormat || "YYYY-MM-DD hh:mm:ss"
      );
    }
  },
  computed: {
    resolvedTags() {
      if (!this.tags || Array.isArray(this.tags)) return this.tags;
      return [this.tags];
    },
    resolvedCategories() {
      if (!this.categories || Array.isArray(this.categories))
        return this.categories;
      return [this.categories];
    }
  }
};
</script>

<style lang="stylus">
.post-meta {
  &-categories {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    overflow: hidden;
    padding: 0px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    overflow: hidden;
    padding: 0;
    margin: 20px 0;

    > li {
      margin-bottom: 10px;
    }
  }

  > div {
    display: inline-flex;
    line-height: 12px;
    font-size: 12px;
    margin-right: 20px;
  }

  svg {
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }
}
</style>
