<template>
  <router-link class="blog-category" :to="category.path">
    <FolderMinusIcon />
    {{ category.name }} ({{ category.pages.length }})
  </router-link>
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
  display: inline-flex;
  align-items: center;
  height: 45px;
  word-break: break-word;
  font-size: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 0 15px;
  border-radius: 5px;
  font-weight: 300;
  text-align: left;
  box-sizing: border-box;
  transition: background-color 0.3s;
  color: $darkTextColor;
  border: 1px solid $darkBorderColor;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: $accentColor !important;
    border: 1px solid $accentColor;
    box-shadow: 0 0 5px $accentColor;
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
