<template>
  <router-link class="blog-tag" :style="{ 'backgroundColor': setColor() }" :to="tag.path">
    <TagIcon />
    &nbsp;
    {{ tag.name }} ({{ tag.pages.length }})
  </router-link>
</template>

<script>
import { NavigationIcon, ClockIcon, TagIcon } from "vue-feather-icons";
export default {
  components: { NavigationIcon, ClockIcon, TagIcon },
  props: ["tag"],
  methods: {
    setColor() {
      const tagColorArr = [
        "#e15b64",
        "#f47e60",
        "#f8b26a",
        "#abbd81",
        "#849b87",
        "#e15b64",
        "#f47e60",
        "#f8b26a",
        "#f26d6d",
        "#67cc86",
        "#fb9b5f",
        "#3498db"
      ];
      const index = Math.floor(Math.random() * tagColorArr.length);
      return tagColorArr[index];
    }
  }
};
</script>

<style lang="stylus">
.blog-tag {
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
  text-align: center;
  box-sizing: border-box;
  transition: background-color 0.3s;
  // border: 1px solid $darkBorderColor;
  text-decoration: none;
  color: #fff;
  transition: all 0.5s;

  &:hover {
    // color: $accentColor !important;
    border: 1px solid $accentColor;
    box-shadow: 0 0 5px $accentColor;
  }
}

@media screen and (max-width: 768px) {
  .blog-tag {
    font-size: 14px;
    padding: 3px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
