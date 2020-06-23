<template>
  <li>
    <router-link class="blog-category" :to="category.path">
      <FolderMinusIcon />
      &nbsp;&nbsp;{{ category.name }} ({{ category.pages.length }})
    </router-link>
  </li>
</template>

<script>
import {
  NavigationIcon,
  ClockIcon,
  TagIcon,
  FolderMinusIcon
} from "vue-feather-icons";
export default {
  components: { NavigationIcon, ClockIcon, TagIcon, FolderMinusIcon },
  props: ["category"]
};
</script>

<style lang="stylus">
.blog-category {
  transition: all 0.5s;
  text-decoration: none;
  height: 45px;
  line-height: 45px;
  display: inline-flex;
  align-items: center;
  color: $darkTextColor;

  &:hover {
    color: $accentColor !important;
  }
}

@media screen and (max-width: 768px) {
  .blog-category {
    font-size: 14px;
    padding: 3px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
