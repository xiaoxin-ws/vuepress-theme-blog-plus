<template>
  <div id="base-list-layout">
    <div class="ui-posts" itemscope itemtype="http://schema.org/Blog">
      <article
        v-for="page in pages"
        :key="page.key"
        class="ui-post"
        itemprop="blogPost"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <meta itemprop="mainEntityOfPage" :content="page.path" />

        <header class="ui-post-title" itemprop="name headline">
          <NavLink :link="page.path">{{ page.title }}</NavLink>
        </header>
        <hr />
        <p class="ui-post-summary" itemprop="description">
          {{ page.frontmatter.summary || page.summary }}
          <!-- <Content :page-key="page.key" slot-key="intro"/>-->
        </p>

        <footer>
          <div
            v-if="page.frontmatter.author"
            class="ui-post-meta ui-post-author"
            itemprop="publisher author"
            itemtype="http://schema.org/Person"
            itemscope
          >
            <UserIcon />
            <span itemprop="name">{{ page.frontmatter.author }}&nbsp; in &nbsp;</span>

            <MapIcon />
            <span
              v-if="page.frontmatter.location"
              itemprop="address"
            >{{ page.frontmatter.location }}</span>
          </div>

          <div v-if="page.frontmatter.date" class="ui-post-meta ui-post-date">
            <ClockIcon />
            <time
              pubdate
              itemprop="datePublished"
              :datetime="page.frontmatter.date"
            >{{ resolvePostDate(page.frontmatter.date) }}</time>
          </div>
          <div
            v-if="page.frontmatter.categories"
            class="ui-post-meta ui-post-tag"
            itemprop="keywords"
          >
            <FolderMinusIcon />
            <router-link
              v-for="categories in resolvePostCategories(page.frontmatter.categories)"
              :key="categories"
              :to="'/categories/' + categories"
            >{{ categories }}</router-link>
          </div>
          <div v-if="page.frontmatter.tags" class="ui-post-meta ui-post-tag" itemprop="keywords">
            <TagIcon />
            <router-link
              v-for="tag in resolvePostTags(page.frontmatter.tags)"
              :key="tag"
              :to="'/tag/' + tag"
            >{{ tag }}</router-link>
          </div>
        </footer>
      </article>
    </div>

    <component :is="paginationComponent" v-if="$pagination.length > 1 && paginationComponent"></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import dayjs from "dayjs";
import {
  NavigationIcon,
  ClockIcon,
  TagIcon,
  FolderMinusIcon,
  UserIcon,
  MapIcon
} from "vue-feather-icons";
import {
  Pagination,
  SimplePagination
} from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: {
    NavigationIcon,
    ClockIcon,
    TagIcon,
    FolderMinusIcon,
    UserIcon,
    MapIcon
  },

  data() {
    return {
      paginationComponent: null
    };
  },

  computed: {
    pages() {
      return this.$pagination.pages;
    }
  },

  created() {
    this.paginationComponent = this.getPaginationComponent();
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT;
      if (n === "Pagination") {
        return Pagination;
      }

      if (n === "SimplePagination") {
        return SimplePagination;
      }

      return Vue.component(n) || Pagination;
    },

    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || "YYYY-MM-DD hh:mm:ss"
      );
    },
    resolvePostCategories(categories) {
      if (!categories || Array.isArray(categories)) return categories;
      return [categories];
    },
    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags;
      return [tags];
    }
  }
};
</script>

<style lang="stylus">
.common-layout {
  .content-wrapper {
    padding-bottom: 80px;
  }
}

.ui-post {
  overflow: hidden;
  border-radius: 0.25rem;
  overflow: hidden;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: all 0.3s;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  margin: 0 auto 20px;
  padding: 16px 20px;
  transition: all 0.5s;

  &:last-child {
    border-bottom: 0px;
    margin-bottom: 0px;
  }

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.1);
  }
}

.ui-post-title {
  font-family: PT Serif, Serif;
  font-size: 28px;
  border-bottom: 0;

  a {
    cursor: pointer;
    color: $darkTextColor;
    transition: all 0.2s;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.ui-post-summary {
  font-size: 14px;
  color: rgba($darkTextColor, 0.54);
  font-weight: 200;
}

.ui-post-meta {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: 12px;

  &:not(:last-child) {
    margin-bottom: 3px;
    margin-right: 20px;
  }

  svg {
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }

  @media (max-width: $MQMobile) {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.ui-post-author {
  color: rgba($darkTextColor, 0.84);
  font-weight: 400;
}

.ui-post-date {
  color: rgba($darkTextColor, 0.54);
  font-weight: 200;
}

.ui-post-tag {
  color: rgba($darkTextColor, 0.54);
  font-weight: 200;

  a {
    color: inherit;
    font-weight: 200;
    text-decoration: none;
    margin-right: 5px;

    &:hover {
      color: $accentColor;
    }
  }
}
</style>
