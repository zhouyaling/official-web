<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild" :class="subTitle ? 'spec' : ''">
    <!-- 头部顶部 -->
    <!-- <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left">
          <span class="glyphicon glyphicon-earphone"></span>023-65259611
          <span class="glyphicon glyphicon-envelope"></span>邮箱：675209079@qq.com
          <span class="glyphicon glyphicon-time"></span>7x24小时为您服务
        </div>
        <div class="shejiao pull-right">
          <span class="glyphicon glyphicon-hand-right"></span>赶快联系我们吧！
          <span class="glyphicon glyphicon-hand-left"></span>
        </div>
      </div>
    </div> -->
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <a href="index.html">
          <img style="height: 66px" src="@/assets/img/logo_small.png" />
          <img
            style="height: 56px; left: 110px"
            src="@/assets/img/logo-text.png"
          />
        </a>
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="index == navIndex ? 'active' : ''"
          @click="navClick(index, item.name)"
        >
          <!-- <router-link :to="item.path"> -->
          <a :href="item.path" rel="noopener noreferrer">
            {{ item.name }}
            <span
              v-if="item.children.length > 0"
              class="glyphicon glyphicon-menu-down"
            ></span>
            <i class="underline"></i>
          </a>
          <!-- </router-link> -->
        </li>
      </ul>
      <div class="hot-phone">
        <span class="phone-text"
          ><span class="glyphicon glyphicon-earphone"></span>企业咨询热线</span
        >
        <span class="phone-number">023 - 65259611</span>
      </div>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img
          class="center-block"
          src="@/assets/img/logo_small.png"
          alt="logo"
        />
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ menuName }}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="index == navIndex ? 'active' : ''"
            @click="navClick(index, item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <!-- <router-link :to="item.path"> -->
            <a :href="item.path" rel="noopener noreferrer">
              {{ item.name }}
              <i class="underline"></i>
            </a>
            <!-- </router-link> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    subTitle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navIndex: sessionStorage.getItem("navIndex")
        ? sessionStorage.getItem("navIndex")
        : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "index.html",
          children: [],
        },
        {
          name: "公司介绍",
          path: "aboutus.html",
          children: [],
        },
        {
          name: "产品介绍",
          path: "service.html",
          children: [],
        },
        // {
        //   name: "新闻动态",
        //   path: "news.html",
        //   children: [],
        // },
        {
          name: "联系我们",
          path: "contact.html",
          children: [],
        },
      ],
    };
  },
  methods: {
    getURL(url) {
      strURL = url;
      // let strURL = "";
      // if (url.substr(0, 7).toLowerCase() == "http://" || url.substr(0, 8).toLowerCase() == "https://") {
      //   strURL = url;
      // } else {
      //   strURL = "http://" + url;
      // }
      return strURL;
    },
    goHome() {
      this.$router.push("/home");
    },
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem("navIndex", index);
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    },
  },
};
</script>
<style scoped>
/* 顶部 */
#header {
  /* background: #f4f4f4; */
  background-color: rgba(40,40,40,0.35);
  transition: all ease 0.6s;
  background-image: url('../assets/img/bg33.png');
}
.container-fuild.spec {
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: transparent!important;
  background-image: none!important;
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  /* background: rgb(186, 154, 81); */
  display: none;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 110px;
  /* background:rgb(186, 154, 81); */
  position: relative;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: auto;
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 110px;
  float: right;
  margin: 0;
  max-width: 800px;
  position: absolute;
  /* right: 210px; */
  right: 300px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #ffffff;
  font-size: 15px;
  /* font-weight: bold; */
  font-family: "微软雅黑";
  padding: 15px 0;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: rgb(177,129,71);
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: rgb(177,129,71);
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: rgb(177,129,71);
  text-decoration: none;
  border-bottom: 2px solid rgb(177,129,71);
  font-weight: 600;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}
@media screen and (max-width: 997px) {
  .header-nav-logo img:nth-of-type(2) {
    display: none;
  }
}

@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo > img:nth-of-type(1) {
    width: 80px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  #header .header-nav-m .header-nav-m-logo > img:nth-of-type(2) {
    width: auto;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: rgb(186, 154, 81);
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: rgb(186, 154, 81);
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 16px;
    /* font-weight: bold; */
    padding: 15px 0;
    position: relative;
    font-family: "微软雅黑";
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}

.hot-phone {
  color: rgb(177,129,71);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  right: 15px;
  top: 30px;
}

.hot-phone .phone-text {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}

.hot-phone .phone-number {
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.5px;
  background: linear-gradient(180deg, #ffffff 0%, rgb(177,129,71) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
