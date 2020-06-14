<template>
  <li class="post-category">
    <router-link :to="'/categories/' + category">
      <FolderMinusIcon />
      {{ category }}
    </router-link>
  </li>
</template>

<script>
import { FolderMinusIcon } from "vue-feather-icons";
export default {
  name: "PostCategory",
  components: { FolderMinusIcon },
  props: {
    category: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="stylus">
.post-category {
  // background-color: $postTagBgColor;
  border-radius: 3px 3px 3px 3px;
  height: 26px;
  padding: 0 2px 0 2px;
  position: relative;
  cursor: pointer;

  a {
    color: $postTagColor;
    text-decoration: none;
    transition: color 0.2s;
  }
  &:hover {
    background-color: $accentColor;

    &:after {
      border-left-color: $accentColor;
    }

    a {
      color: #fff;
    }
  }
}
</style>
