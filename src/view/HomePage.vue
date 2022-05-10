<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图">
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <h1>{{item.title}}</h1>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev yl-swiper-prev"></div>
        <div class="swiper-button-next yl-swiper-next"></div>
      </div>
    </div>

    <!-- 第二部分 主营业务-->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>主营业务</p>
          <p>—— WE ARE MOST PROUD OF, IT IS HAS BEEN “FOCUS”——</p>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3 server-wrapper" v-for="(item,index) in serverList" :key="index">
            <div class="server-block wow slideInUp" style="height:332px;background:#ffffff;" onmouseenter="this.style.color='rgb(186, 154, 81)';this.style.borderColor='rgb(186, 154, 81)'" onmouseleave="this.style.color='rgb(186, 154, 81)';this.style.borderColor='rgb(186, 154, 81)'">
              <img class="center-block" :src="item.logo" alt="logo">
              <p class="text-center">{{item.title}}</p>
              <div class="text-center" v-html="item.content" onmouseenter="this.style.color='rgb(186, 154, 81)'" onmouseleave="this.style.color='#666666'"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第三部分 公司优势-->
    <div id="bigData" class="container-fuild">
      <div class="whyChooseUs-title text-center">
        <p class="">公司优势</p>
        <p>—— WE ARE MOST PROUD OF, IT IS HAS BEEN “FOCUS”——</p>
      </div>
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-4 tip-group">
          <div class="tip-item">
            <div class="tip-img">
              <img src="@/assets/img/icon1.png" alt="">
            </div>
            <div class="tip-text">
              <div class="tip-title">服务流程快</div>
              <div class="tip-subtitle">服务流程快服务流程快服务服务流程快服务流程快服务流程快流程快</div>
            </div>
          </div>
          <div class="tip-item">
            <div class="tip-img">
              <img src="@/assets/img/icon1.png" alt="">
            </div>
            <div class="tip-text">
              <div class="tip-title">服务流程快</div>
              <div class="tip-subtitle">服务流程快服务流程快服务服务流程快服务流程快服务流程快流程快</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 wow zoomIn">
          <img class="img-responsive" style="height:350px;margin:0 auto" src="@/assets/img/bg2.png" alt="">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 tip-group">
          <div class="tip-item">
            <div class="tip-img">
              <img src="@/assets/img/icon1.png" alt="">
            </div>
            <div class="tip-text">
              <div class="tip-title">服务流程快</div>
              <div class="tip-subtitle">服务流程快服务流程快服务服务流程快服务流程快服务流程快流程快</div>
            </div>
          </div>
          <div class="tip-item">
            <div class="tip-img">
              <img src="@/assets/img/icon1.png" alt="">
            </div>
            <div class="tip-text">
              <div class="tip-title">服务流程快</div>
              <div class="tip-subtitle">服务流程快服务流程快服务服务流程快服务流程快服务流程快流程快</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第四部分  愿景-->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>发展成为服务于全国的大型综合性人力资源服务企业</h1>
        <h3>—— Comprehensive human resource service enterprise ——</h3>
        <a href="#" class="btn btn-lg btn-block btn-info" style="background:rgb(186, 154, 81);border:none;width:24%;margin:0 auto">联系我们</a>
        <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
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

    <!-- 第七部分 我们的成绩-->
    <div id="ourSuccess">
      <div class="success-item">
        <div>1,000 <i>+</i></div>
        <div>高级猎头顾问</div>
      </div>
      <div class="success-item">
        <div>60,000 <i>+</i></div>
        <div>精英人才库</div>
      </div>
      <div class="success-item">
        <div>10,238</div>
        <div>服务客户</div>
      </div>
      <div class="success-item">
        <div>9,016</div>
        <div>职位案例</div>
      </div>
    </div>

    <!-- 第六部分 我们的服务 -->
    <div id="whyChooseUs" class="other conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>我们引以为豪的，是一直以来的“专注”</p>
          <p class="yl-sub-title">—— WE ARE MOST PROUD OF, IT IS HAS BEEN “FOCUS”——</p>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3 server-wrapper" v-for="(item,index) in serverList1" :key="index">
            <div class="yl-img-box">
              <img :src="item.logo" alt="">
            </div>
            <p class="yl-card-text">{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from 'wowjs';
export default {
  name: "HomePage",
  data() {
    return {
      swiperList: [
        {
          img: require("@/assets/img/banner1.png"),
          path: "",
          title: '优化个人职业生涯，助力企业健康发展',
          content: '',
        },
        {
          img: require("@/assets/img/banner2.png"),
          path: "",
          title: '优化个人职业生涯，助力企业健康发展',
          content: '',
        },
        {
          img: require("@/assets/img/banner3.png"),
          path: "",
          title: '优化个人职业生涯，助力企业健康发展',
          content: '',
        },
        {
          img: require("@/assets/img/banner2.png"),
          path: "",
          title: '优化个人职业生涯，助力企业健康发展',
          content: '',
        }
      ],
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
      serverList: [
        {
          logo: require("@/assets/img/tel.png"),
          title: "蓝领用工服务",
          content: "<p>为企业提供蓝领用工整体解决方案"
        },
        {
          logo: require("@/assets/img/computer.png"),
          title: "猎头服务",
          content: "<p>为企业提供中高端人才招聘解决方案"
        },
        {
          logo: require("@/assets/img/qq.png"),
          title: "人事岗位外包服务",
          content: "<p>3、为企业提供专业人资模块解决方案"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "职业咨询服务",
          content: "<p>为个人提供职业咨询、规划服务"
        }
      ],
      serverList1: [
        {
          logo: require("@/assets/img/img11.png"),
          title: "汇集众多优秀人才",
          content: "<p>由专业客服提供人工服务</p>负责疑难问题和故障受理"
        },
        {
          logo: require("@/assets/img/img12.png"),
          title: "职位真实快速反馈",
          content: "<p>利用远程视频工具，提供协助</p>帮助客户进行调试、解决故障"
        },
        {
          logo: require("@/assets/img/img13.png"),
          title: "企业招聘更快更精准",
          content: "<p>利用企业QQ提供在线解答</p>帮助企业快速准确解决问题和故障"
        },
        {
          logo: require("@/assets/img/img14.png"),
          title: "信息认证安全可信",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        }
      ]
    };
  },
  mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: 'fade',
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
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
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
  }
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 轮播图 */
#swiper {
  height: 600px;
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide {
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.434);
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 40px;
  margin-top: 18%;
}
#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}
/* 大数据管理系统 */
#bigData {
  padding: 100px 100px 100px 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#bigData .whyChooseUs-title {
  margin-bottom: 50px;
}
#bigData .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
  color: rgb(186, 154, 81);
}

#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}
#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}
#contactUs .contactUs-container {
  padding-top: 50px;
}
#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}
#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/weibo.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/twitter.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

/* 客户评价 */
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
/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
  background: url("../assets/img/bg1.png") no-repeat center;
}
#whyChooseUs.other {
  background: url("../assets/img/bg3.png") no-repeat center !important;
}
#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
  color: rgb(186, 154, 81);
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}
#whyChooseUs .server-block {
  padding: 70px 20px;
  border: 1px solid rgb(186, 154, 81);
  border-bottom: 5px solid rgb(186, 154, 81);
}
#whyChooseUs .server-block img {
  width: 60px;
  height: 60px;
}
#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}
#whyChooseUs .server-block > div {
  color: #ccc;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }
  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }
  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }
  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 55%;
    height: auto;
  }
  #customer .customer-block {
    padding: 30px 0;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }
  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: #ccc;
  }
    #swiper .banner-swiper .swiper-slide-title > h1{
    font-size: 20px;
    margin-top: 22%;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }
  #bigData {
    padding: 60px;
  }
  #bigData .bigData-title {
    font-size: 30px;
  }
  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }
  #contactUs {
    height: 300px;
  }
  #contactUs .contactUs-container {
    padding-top: 50px;
  }
  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }
  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }
  #customer .customer-title {
    font-size: 24px;
  }
  #whyChooseUs {
    padding: 20px 0;
  }

}

.yl-card-text {
  /* color: #212121; */
  text-align: center;
  font-size: 20px;
  font-family: "微软雅黑";
  margin-top: 20px;
}

.yl-sub-title {
  font-size: 16px !important;
  color: rgb(169, 169, 169);
}

.yl-swiper-prev {
  background-image: url("../assets/img/prev.png");
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}
.yl-swiper-next {
  background-image: url("../assets/img/next.png");
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}

.yl-img-box img {
  margin: 0 auto;
}

.visible-xs > div:nth-of-type(odd) {
  background: #f8f9f9;
}

.tip-group {
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.tip-item {
  display: flex;
  /* margin: 100px 0; */
}

.tip-img {
  margin-right: 20px;
}

.tip-img img {
  width: 50px;
}

.tip-title {
  font-size: 17px;
  color: #333333;
  margin-bottom: 5px;
}
.tip-subtitle {
  font-size: 13px;
  color: #888888;
  max-width: 250px;
  line-height: 22px;
}

#ourSuccess {
  width: 100%;
  height: 160px;
  /* background: #bba574; */
  background: rgb(186, 154, 81);
  display: flex;
  align-items: center;
  justify-content: center;
}
#ourSuccess .success-item {
  width: 18%;
  color: #ffffff;
  text-align: center;
}
#ourSuccess .success-item > div:nth-of-type(1) {
  font-size: 36px;
}
#ourSuccess .success-item > div:nth-of-type(1) i {
  font-size: 18px;
  font-style: normal;
}
#ourSuccess .success-item > div:nth-of-type(2) {
  font-size: 12px;
}
</style>
<style>
.swiper-pagination-bullet-active {
  background: #666666 !important;
}
.swiper-button-next{
  background-image: url('../assets/img/next.png');
}
.swiper-button-prev{
  background-image: url('../assets/img/prev.png');
}
</style>

