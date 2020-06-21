<template>
  <section id="header-wrapper">
    <header id="page-header">
      <div class="header-wrapper">
        <div class="title">
          <img class="activer" :src="$themeConfig.logo" />
          <NavLink link="/" class="home-link">{{ $site.title }}</NavLink>
        </div>
        <div class="header-right-wrap">
          <ul v-if="$themeConfig.nav" class="nav">
            <li v-for="item in $themeConfig.nav" :key="item.text" class="nav-item">
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
          <SearchBox />
          <Feed />
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import SearchBox from "@SearchBox";
import Feed from "./Feed";

export default {
  components: { SearchBox, Feed },
  data() {
    return {
      scrollAction: {
        x: "undefined",
        y: "undefined"
      },
      scrollDirection: ""
    };
  },
  methods: {
    scrollFunc() {
      if (typeof this.scrollAction.x == "undefined") {
        this.scrollAction.x = window.pageXOffset;
        this.scrollAction.y = window.pageYOffset;
      }
      let diffX = this.scrollAction.x - window.pageXOffset;
      let diffY = this.scrollAction.y - window.pageYOffset;
      if (diffX < 0) {
        // Scroll right
        this.scrollDirection = "right";
      } else if (diffX > 0) {
        // Scroll left
        this.scrollDirection = "left";
      } else if (diffY < 0) {
        // Scroll down
        this.scrollDirection = "down";
      } else if (diffY > 0) {
        // Scroll up
        this.scrollDirection = "up";
      } else {
        // First scroll event
      }
      this.scrollAction.x = window.pageXOffset;
      this.scrollAction.y = window.pageYOffset;
    },
    scrollEvent() {
      const that = this;
      window.onscroll = function(e) {
        that.scrollFunc();
        let scy = $(document).scrollTop();
        if (that.scrollDirection == "down") {
          //页面向下滚动要做的事情
          $("#page-header").removeClass("visible");
          if (scy > 64) {
            $("#page-header").addClass("fixed");
          }
          //$('#page-header').addClass('fixed')
          //console.log("下");
        } else if (that.scrollDirection == "up") {
          //页面向上滚动要做的事情
          //console.log("上");
          if (scy > 64) {
            $("#page-header").addClass("fixed");
          } else {
            $("#page-header").removeClass("visible");
          }
          $("#page-header").addClass("visible");
          if (scy === 0) {
            $("#page-header").removeClass("fixed");
            $("#page-header").removeClass("visible");
          }
          //$('#page-header').removeClass('fixed')
        }
      };
    }
  },
  mounted() {
    //监听页面滚动事件
    this.scrollEvent();
  }
};
</script>

<style lang="stylus">
@import '~@app/style/config';

.activer {
  width: 50px;
  height: 50px;
  border-radius: 30px;
}

#page-header {
  z-index: 12;
  position: absolute;
  top: 0;
  width: 100%;
  height: $headerHeight;
  box-sizing: border-box;
  background-color: $headerBgColor;
  padding: 20px 32px 20px;
  margin: auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05);

  // transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.1);
  }
}

// border-bottom 5px solid lighten(#3eaf7c, 50%)
.header-wrapper {
  display: flex;
  line-height: 40px;
  height: 40px;

  .title {
    /* flex 0 0 200px */
    font-size: 30px;
    margin: 0;
    letter-spacing: 2px;
    display: block;
    text-transform: uppercase;

    a {
      color: $darkTextColor;
      font-weight: bold;
      font-family: PT Serif, Serif;
      text-decoration: none;
    }
  }

  .header-right-wrap {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .nav {
      flex: 0 0 auto;
      display: flex;
      margin: 0;

      .nav-item {
        margin-left: 20px;

        a {
          font-family: PT Serif, Serif;
          font-size: 20px;
          // color lighten(#3eaf7c, 30%)
          text-decoration: none;
          transition: color 0.3s;
        }
      }
    }

    .search-box {
      font-family: PT Serif, Serif;
      margin-left: 20px;

      input {
        border-radius: 5px;
        transition: all 0.5s;
        border: 1px solid #cecece;

        &:hover {
          border: 1px solid $accentColor;
          box-shadow: 0 0 5px $accentColor;
        }
      }

      .suggestions {
        border: 1px solid $darkBorderColor;
        top: 40px;
        right: 0;

        a {
          color: $darkTextColor;
          text-decoration: none;

          &.focused {
            color: $accentColor;
          }
        }
      }
    }
  }
}

/* 滚动时样式 */
#page-header.fixed {
  position: fixed;
  top: -80px;
  z-index: 101;
  background: alpha(#fff, 0.8);
  box-shadow: 0 5px 6px -5px alpha(#fff, 0.6);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

#page-header.visible {
  transition: all 0.5s;
  transform: translate3d(0, 100%, 0);
}

@media (max-width: $MQMobile) {
  #page-header {
    display: none;
  }

  .header-wrapper {
    flex-direction: column;

    .header-right-wrap {
      display: none;
    }
  }
}
</style>
