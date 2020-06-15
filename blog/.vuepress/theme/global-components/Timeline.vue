<template>
  <div class="blog-timeline">
    <h1>时间归档</h1>
    <div v-for="(isv,iskey,i) in archiveData" :key="i">
      <h1>{{iskey}}</h1>
      <div v-for="(item,i1) in isv" :key="i1">
        <strong>{{i1+1}}.</strong>
        <span>{{item.frontmatter.date | dateFormat}}</span>
        <span>
          <router-link :to="item.path">{{item.title}}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      archiveData: {}
    };
  },
  filters: {
    // 定义私有过滤器    过滤器有两个 条件  【过滤器名称 和 处理函数】
    // 过滤器调用的时候，采用的是就近原则，如果私有过滤器和全局过滤器名称一致了，这时候 优先调用私有过滤器
    dateFormat: function(dateStr, pattern = "") {
      // 根据给定的时间字符串，得到特定的时间
      var dt = new Date(dateStr);

      //   yyyy-mm-dd
      var y = dt.getFullYear();
      var m = (dt.getMonth() + 1).toString().padStart(2, "0");
      var d = dt
        .getDate()
        .toString()
        .padStart(2, "0");
      if (pattern.toLowerCase() === "yyyy-mm-dd") {
        return `${y}-${m}-${d}`;
      } else {
        var hh = dt
          .getHours()
          .toString()
          .padStart(2, "0");
        var mm = dt
          .getMinutes()
          .toString()
          .padStart(2, "0");
        var ss = dt
          .getSeconds()
          .toString()
          .padStart(2, "0");

        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
      }
    }
  },
  computed: {},
  created() {
    this.getArchiveData();
  },
  methods: {
    getArchiveData() {
      let posts = {};
      this.$site.pages.forEach(post => {
        if (post.id && post.id === "post") {
          let date = this.dateFormeat(post);
          const year = date.getFullYear();
          const month = date.getMonth();
          if (posts[year] === undefined) {
            posts[year] = [];
          }
          posts[year].push(post);
        }
      });
      let newposts = this.jsonSort(posts);
      this.archiveData = newposts;
    },
    //博客文章时间字符串转换为时间格式
    dateFormeat(post) {
      if (post.frontmatter.date) {
        let date = new Date(post.frontmatter.date);
        return date;
      }
      return new Date();
    },
    //对象按照key排序，注意当key是数字格式时默认就是从小到大排序函数失效
    //解决：字符串拼接，加一个中文字符。测试：空格符，空串等转化方式失效
    jsonSort(obj) {
      var keys = Object.keys(obj).reverse();
      var newObj = {};
      for (var i = 0; i < keys.length; i++) {
        var index = keys[i];
        newObj[index + "年"] = obj[index];
      }
      return newObj;
    }
  }
};
</script>

<style lang="stylus"></style>
