<template>
  <page-layout>
    <div slot="page" id="NewsInformation">
      <div class="container container1">
        <div class="container1 text-center color-orange">
          <h3>行业动态</h3>
          <p style="color:#b2b2b2">Industry Dynamics</p>
        </div>
        <div class="news-top3">
          <div class="news-card" v-for="(item,index) in 3" :key="index">
            <div class="news-card-img">
              <img src="@/assets/img/img12.png" alt="">
            </div>
            <div class="news-card-content">
              <div class="news-card-tilte">Vue.js 是一个用于构建客户端应用的框架</div>
              <div class="news-card-sub">默认情况下，Vue 组件在浏览器中生成和操作 DOM 作为输出。然而，我们也可以将相同的组件在服务端渲染成 HTML 字符串，直接返回给浏览器</div>
            </div>
          </div>
        </div>
        <div class="news-list">
          <div class="news-item" v-for="(item,index) in 6" :key="index">
            <div class="news-item-img">
              <img src="@/assets/img/img11.png" alt="">
            </div>
            <div class="news-item-content">
              <div class="news-title">Vue.js 是一个用于构建客户端应用的框架</div>
              <div class="news-detail">默认情况下，Vue 组件在浏览器中生成和操作 DOM 作为输出。然而，我们也可以将相同的组件在服务端渲染成 HTML 字符串，直接返回给浏览器，最后再将静态的 HTML “激活” (hydrate) 为完全交互式的客户端应用。</div>
            </div>
            <div class="news-item-time">
              <span>18</span>
              <span>2022/03</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page-layout>
</template>
<script>
import pageLayout from '@/components/pageView.vue'
import { WOW } from 'wowjs';
export default {
  name: 'NewsInformation',
  components: { pageLayout },
  data() {
    return {

    }
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
}
</script>
<style scoped>
.nav {
  margin: 20px 0;
}
.nav > a {
  display: inline-block;
  text-decoration: none;
  width: 120px;
  height: 45px;
  line-height: 45px;
  color: #333;
  border: 1px solid #333;
}
.nav > a.active {
  color: #f67c01;
  border-color: #f67c01;
}
.nav > a:hover {
  color: #f67c01;
  border-color: #f67c01;
}
.news-container1 {
  overflow: hidden;
  margin-bottom: 0;
}
.news-container1 > li {
  width: 55.6%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.news-container1 > li:hover {
  color: #f67c01;
  border: 1px solid #f67c01;
  cursor: pointer;
}
.news-container1 > li:nth-of-type(2n) {
  float: right;
  text-align: left;
}
.news-container1 > li > .content {
  width: 60%;
  float: left;
  padding: 20px 0;
}
.news-container1 > li > .content p:nth-child(1) {
  font-size: 20px;
  color: #666666;
  font-family: "微软雅黑";
}
.news-container1 > li > .content p:nth-child(2) {
  color: #888888;
}
.news-container1 > li > .time {
  width: 20%;
  float: left;
  padding: 10px 0;
}
.news-container1 > li > .time span {
  color: #888888;
}
.news-container1 > li > .time > p {
  font-size: 50px;
  margin: 5px 0;
  font-family: Tahoma;
  color: #b18147;
}
.news-container1 > li > .circle {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}
.news-container1 > li > .circle > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}
.news-container1 > li > .circle > i {
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}
.news-container1 > li:nth-of-type(2n) > .content {
  float: right;
}
.news-container1 > li:nth-of-type(2n) > .time {
  float: right;
}
.news-container1 > li:nth-of-type(2n) > .circle {
  float: right;
}
.news-container1 > li:nth-of-type(1) > .circle > i {
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.more {
  font-size: 25px;
  color: #707070;
}
.more > i {
  cursor: pointer;
}

.news-list {
  width: 100%;
  background: #f8f8f8;
  border-radius: 4px;
  margin-bottom: 50px;
  box-sizing: border-box;
}

.news-item {
  height: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px dashed #e5e5e5;
  padding: 40px 20px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: all 0.4s;
  overflow: hidden;
}

.news-item:hover {
  background: rgba(177, 129, 71, 0.3);
}

.news-list .news-item:last-of-type {
  border-bottom: none;
}

.news-item-img {
  width: 200px;
  height: 100%;
}

.news-item-img img {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}

.news-item-img img:hover {
  transform: scale3d(1.1, 1.1, 1);
}

.news-item-content {
  width: calc(100% - 300px);
  height: 100%;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  line-height: 25px;
  font-size: 13px;
  font-family: "微软雅黑";
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
}

.news-item-content .news-title {
  font-size: 16px;
  color: #333333;
  margin-bottom: 10px;
}

.news-item-time {
  width: 100px;
  height: 100%;
  font-size: 14px;
  background: #f2f2f2;
  text-align: center;
  color: #666666;
  width: 84px;
  height: 84px;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -42px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: arial;
}
.news-item-time span {
  display: block;
}
.news-item-time span:nth-child(1) {
  font-size: 25px;
  line-height: 25px;
}

.news-top3 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
    margin: 40px 0 50px 0;
}

.news-top3 .news-card {
  width: 30%;
  height: 360px;
  background: #f8f8f8;
  border-radius: 2px;
  transition: all 0.3s;
  cursor: pointer;
  overflow: hidden;
}

.news-top3 .news-card:hover{
  transform: scale3d(1.1,1.1,1);
}

.news-card .news-card-img {
  width: 100%;
  height: 60%;
}

.news-card .news-card-img img {
  width: 100%;
  height: 100%;
}
.news-card-content {
  padding: 20px;
  box-sizing: border-box;
}
.news-card-content .news-card-tilte {
  font-size: 17px;
  color: #333333;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-card-content .news-card-sub {
  font-size: 13px;
  color: #666666;
  line-height: 22px;
  text-align: justify;
}

@media screen and (max-width: 767px) {
  .news-container1 > li {
    width: 100%;
  }
  .news-container1 > li > .content {
    width: 70%;
    text-align: left;
    float: right;
  }
  .news-container1 > li > .time {
    width: 30%;
    text-align: left;
    float: right;
  }
  .news-container1 > li > .circle {
    display: none;
  }

  .news-item{
    height: 150px;
  }
  .news-item .news-item-img{
    width: 100px;
  }
  .news-item .news-item-content{
    width: calc(100% - 100px);
  }
  .news-item .news-detail{
    display: none;
  }
  .news-item .news-item-time{
    width: 60px;
    height: 60px;
    font-size: 12px;
    right: 0px;
  }

  .news-top3{
    flex-direction: column;
  }
  .news-top3 .news-card{
    width: 82%;
    margin-bottom: 30px;
  }
}
</style>

