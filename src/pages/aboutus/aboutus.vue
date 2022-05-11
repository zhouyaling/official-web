<template>
  <page-layout>
    <div slot="page" id="CompanyIntroduction">
      <div class="banner container-fuild text-center">关于我们</div>
      <div class="container">
        <div class="row CompanyIntroduction-container">
          <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
            <img class="img-responsive center-block" src="@/assets/img/about_img.png">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h3 style="color:#333">重庆森舟企业管理咨询有限责任公司</h3>
            <p class="text-justify">森舟企业咨询公司成立于2016年，位于重庆市沙坪坝大学城。主要从事中高端人才代理招聘服务，涵盖全国各省市，致力于为各行业客户挖掘推送优秀人才。确立以IT互联网、电子半导体行业为核心优势行业，服务范围覆盖深圳、广州、上海、北京、重庆、武汉、成都、南京、苏州、杭州、天津、济南、大连、厦门、青岛、沈阳、宁波等17大城市。公司凭借训练有素的顾问团队、海量的高级人才库、专业化的寻猎流程，为客户提供了优质的服务，获得了客户的信赖。</p>
            <p class="text-justify">目前已与国内大型互联网招聘平台猎聘、智联等达成战略合作，同时也为企业提供蓝领招聘、职业咨询规划、人力资源外包等服务。经过数年经营公司已成功转型为综合性人力资源服务机构，同时也培养了一大批优秀年轻骨干员工为公司发展进一步腾飞打下了坚实的基础。欢迎更有有识之士加入森舟企业共同发展、共创辉煌！</p>
          </div>
        </div>
        <div>
          <div class="container customer-container our-news-box">
            <div class="our-news-card" v-for="(item,index) in 8" :key="index">
              <img :src="require(`../../assets/img/img2${index}.jpg`)" alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- <div id="our-news" class="container-fuild">
        <div class="container customer-container our-news-box">
          <div class="our-news-card" v-for="(item,index) in 8" :key="index">
            <img :src="require(`../../assets/img/img2${index}.jpg`)" alt="">
          </div>
        </div>
      </div> -->
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
  padding: 100px 0 50px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 15px;
  line-height: 2.5rem;
  text-indent: 2.5rem;
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
  color: rgb(186, 154, 81);
}

/* #customer .customer-title {
  font-size: 25px;
  color: rgb(186, 154, 81);
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

.our-news-box {
}

.our-news-card {
  width: 24%;
  min-width: 250px;
  height: 220px;
  transition: all 0.3s;
  float: left;
  margin: 5px 0.5%;
  overflow: hidden;
}

.our-news-card:hover {
  transform: scale3d(1.1, 1.1, 1);
}

.our-news-card img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }

  .our-news-card {
    width: 23%;
    min-width: 0;
  }
}

@media screen and (max-width: 768px) {
  .our-news-card {
    width: 23%;
    min-width: 0;
  }
}
</style>

