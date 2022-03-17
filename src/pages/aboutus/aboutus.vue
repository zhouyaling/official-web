<template>
  <page-layout>
    <div slot="page" id="CompanyIntroduction">
      <div class="banner container-fuild text-center">关于我们</div>
      <div class="container">
        <div class="row CompanyIntroduction-container">
          <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
            <img class="img-responsive center-block" src="@/assets/img/about_img.png">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-5">
            <h3 style="color:#333">重庆森舟企业管理咨询有限责任公司</h3>
            <p class=".text-justify">森舟猎头公司成立于2016年，位于重庆市沙坪坝大学城。从事线上中高端人才代理招聘服务，涵盖全国各省市，致力于为各行业客户挖掘推送优秀人才。目前已与国内大型互联网招聘平台猎聘、智联等达成战略合作。同时也提供蓝领招聘、职业咨询、人力资源外包等服务。公司平台稳定、正处于飞速发展期，团队氛围好期待你的加入！</p>
          </div>
        </div>
      </div>
      <!-- 第五部分 优秀猎头-->
      <div id="customer" class="container-fuild">
        <div class="customer-title text-center">
          <p>优秀猎头</p>
          <p>—— WE ARE MOST PROUD OF, IT IS HAS BEEN “FOCUS”——</p>
        </div>
        <div class="container customer-container">
          <div class="swiper-container customer-swiper hidden-xs">
            <div class="swiper-wrapper">
              <div class="swiper-slide customer-block" v-for="(item,index) in customerList" :key="index">
                <div class="customer-logo">
                  <img class="center-block" :src="item.logo" alt="logo">
                </div>
                <div class="customer-yh">
                </div>
                <div class="customer-content-name">
                  <p>XueHao 高级人力资源师</p>
                </div>
                <div class="customer-content1">
                  <p>人力资源协会执行会长、企业家协
                    会执行会长。曾任上市集团人力资源
                    总监、投资发展总监</p>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div class="row visible-xs customer-block">
            <div class="col-xs-12" v-for="(item,index) in customerList" :key="index">
              <div class="customer-logo">
                <img class="center-block" :src="item.logo" alt="logo">
              </div>
              <div class="customer-yh">
                <img src="@/assets/img/yinhao.png" alt="引号">
              </div>
              <div class="customer-content-name">
                <p>XueHao 高级人力资源师</p>
              </div>
              <div class="customer-content2">
                <small>{{item.title}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page-layout>
</template>
<script>
import { WOW } from 'wowjs';
import Swiper from "swiper";
import pageLayout from '@/components/pageView.vue'
export default {
  name: 'CompanyIntroduction',
  components: { pageLayout },
  data() {
    return {
      customerList: [
        {
          logo: require("@/assets/img/img15.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",

        },
        {
          logo: require("@/assets/img/img15.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",

        },
        {
          logo: require("@/assets/img/img15.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",

        },
        {
          logo: require("@/assets/img/img15.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",

        },
        {
          logo: require("@/assets/img/img15.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",

        },
        {
          logo: require("@/assets/img/img15.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        },
      ],
    }
  },
  mounted() {
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });

    var wow = new WOW();
    wow.init();
  }
}
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../../assets/img/banner1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.6rem;
}

#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}

#customer .customer-title {
  margin-bottom: 50px;
}
#customer .customer-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
  color: #b18147;
}

/* #customer .customer-title {
  font-size: 25px;
  color: #b18147;
  margin: 0 0 30px;
} */
#customer .customer-block {
  background: #fff;
  padding: 40px 30px 30px 30px;
}
#customer .customer-logo img {
  width: auto;
  height: 200px;
  /* border: 1px solid #ccc; */
}
#customer .customer-yh {
  padding-left: 10%;
  box-sizing: border-box;
}
#customer .customer-yh img {
  width: 34px;
  height: 34px;
}
#customer .customer-content-name {
  font-size: 20px;
  color: rgb(33, 33, 33);
  text-align: center;
  margin-top: 20px;
}
#customer .customer-content1 {
  font-size: 14px;
  text-align: center;
  color: #666666;
  padding: 0px 40px 0px 40px;
  line-height: 24px;
  /* border-bottom: 1px solid #0ce9f1; */
}
#customer .customer-content2 {
  padding-top: 20px;
  padding: 0 10%;
}

@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

