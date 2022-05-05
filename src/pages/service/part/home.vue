<template>
  <page-layout>
    <div slot="page" id="Service">
      <div class="container text-center color-orange">
        <h3>我们的服务</h3>
        <p style="color:#b2b2b2">The Best Service You Never See</p>
      </div>
      <div class="container">
        <div class="Service-container row">
          <div class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp" v-for="(item,index) in serviceList" :key="index">
            <router-link :to="`detail?type=${item.title}`">
              <div class="Service-item-wrapper">
                <div class="Service-item-top">
                  <h4>{{item.title}}</h4>
                  <i></i>
                  <p>{{item.eng_title}}</p>
                </div>
                <div class="Service-item-img">
                  <img :src="item.img" alt="服务">
                </div>
                <div class="SerVice-item-detail">{{item.sub_title}}</div>
                <div class="Service-item-border"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 第一个服务 -->
      <div class="container first-container">
        <div class="service-title-box">
          <div class="service-title"><span>蓝领用工服务</span></div>
          <div class="service-sub-title">为企业提供蓝领用工整体解决方案</div>
        </div>
        <div class="service-intro-list">
          <span>代理招聘</span>
          <span>劳务派遣</span>
          <span>产线外包</span>
        </div>
        <div>
          <div class="service-good">
            <div class="service-good-item" v-for="(item,index) in firstList" :key="index">
              <img src="@/assets/img/icon5.png" alt="">
              <!-- <div class="font24">{{item.subtitle}}</div> -->
              <div>{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二个服务 -->
      <div class="container second-container">
        <div class="service-title-box">
          <div class="service-title"><span>猎头服务</span></div>
          <div class="service-sub-title">深耕互联网、电子半导体两大行业，为企业提供中高端人才招聘解决方案</div>
        </div>
        <div class="service-good">
          <div class="service-intro-list" style="justify-content: space-around;">
            <div class="service-intro-item2" v-for="(item,index) in secondList" :key="index">{{item}}</div>
          </div>
        </div>
      </div>

      <!-- 第三个服务 -->
      <div class="container second-container">
        <div class="service-title-box">
          <div class="service-title"><span>人事岗位外包服务</span></div>
          <div class="service-sub-title">为企业提供专业人资模块解决方案</div>
        </div>
        <div class="service-good">
          <div class="service-intro-list ">
            <span v-for="(item,index) in secondList" :key="index">{{item}}</span>
          </div>
        </div>
      </div>

      <!-- 第四个服务 -->
      <div class="container second-container">
        <div class="service-title-box">
          <div class="service-title"><span>职业咨询服务</span></div>
          <div class="service-sub-title">为个人提供职业咨询、规划服务</div>
        </div>
        <div class="service-good">
          <div class="service-intro-list">
            <div class="service-intro-item">服务内容：{{fourList[0]}}</div>
          </div>
        </div>
      </div>

      <!-- 服务流程 -->
      <div class="container container1" style="margin-bottom:30px">
        <div class="container1 text-center color-orange">
          <h3>服务流程</h3>
          <p style="color:#b2b2b2">Company News</p>
        </div>
        <ul class="news-container1 container1-fuild">
          <li v-for="(item,index) in newsList" :key="index" class="wow fadeIn">
            <div class="content">
              <p>{{item.title}}</p>
              <p>{{item.introduce}}</p>
            </div>
            <div class="time">
              <p>{{item.date}}</p>
              <span>ASSESSMENT</span>
            </div>
            <div class="circle">
              <img src="@/assets/img/circle.png">
              <i class="line center-block"></i>
            </div>
          </li>
        </ul>
        <div class="contaianer-fuild text-center more">
          <i class="glyphicon glyphicon-th"></i>
        </div>
      </div>
    </div>
  </page-layout>
</template>
<script>
import pageLayout from '@/components/pageView.vue'
import { WOW } from 'wowjs';
export default {
  name: 'home',
  components: { pageLayout },
  data() {
    return {
      serviceList: [
        {
          id: 'section-1',
          title: '蓝领用工服务',
          sub_title: '为企业提供蓝领用工整体解决方案',
          eng_title: 'Blue Collar Employment',
          img: require('@/assets/img/service1.jpg'),
        }, {
          id: 'section-2',
          title: '猎头服务',
          sub_title: '为企业提供中高端人才招聘解决方案',
          eng_title: 'Headhunting Service',
          img: require('@/assets/img/service2.jpg'),
        }, {
          id: 'section-3',
          title: '人事岗位外包服务',
          sub_title: '为企业提供专业人资模块解决方案',
          eng_title: 'Job Outsourcing',
          img: require('@/assets/img/service3.jpg'),
        }, {
          id: 'section-4',
          title: '职业咨询服务',
          sub_title: '为个人提供职业咨询、规划服务',
          eng_title: 'Career Counseling',
          img: require('@/assets/img/service4.jpg'),
        }
      ],
      newsList: [
        {
          id: '001',
          title: '签定合同',
          introduce: '详细了解客户的企业文化、公司背景、行业和产品特点，与客户进行充分、有效沟通，并与客户共同对所需招聘的岗位进行讨论和分析。',
          date: '01.',
          year: '2019'
        }, {
          id: '002',
          title: '描述人物画像，成立项目组',
          introduce: '详细了解客户的企业文化、公司背景、行业和产品特点，与客户进行充分、有效沟通，并与客户共同对所需招聘的岗位进行讨论和分析。',
          date: '02.',
          year: '2019'
        }, {
          id: '003',
          title: '人才寻访',
          introduce: '详细了解客户的企业文化、公司背景、行业和产品特点，与客户进行充分、有效沟通，并与客户共同对所需招聘的岗位进行讨论和分析。',
          date: '03.',
          year: '2019'
        }, {
          id: '004',
          title: '编写推荐报告',
          introduce: '详细了解客户的企业文化、公司背景、行业和产品特点，与客户进行充分、有效沟通，并与客户共同对所需招聘的岗位进行讨论和分析。',
          date: '04.',
          year: '2019'
        }, {
          id: '005',
          title: '面试安排及面试辅导',
          introduce: '详细了解客户的企业文化、公司背景、行业和产品特点，与客户进行充分、有效沟通，并与客户共同对所需招聘的岗位进行讨论和分析。',
          date: '05.',
          year: '2019'
        }, {
          id: '006',
          title: '背景调查',
          introduce: '详细了解客户的企业文化、公司背景、行业和产品特点，与客户进行充分、有效沟通，并与客户共同对所需招聘的岗位进行讨论和分析。',
          date: '06.',
          year: '2019'
        }, {
          id: '007',
          title: '入职辅导',
          introduce: '详细了解客户的企业文化、公司背景、行业和产品特点，与客户进行充分、有效沟通，并与客户共同对所需招聘的岗位进行讨论和分析。',
          date: '07.',
          year: '2019'
        }
      ],
      firstList: [
        { title: '专业的招聘团队', subtitle: '代理招聘' },
        { title: '丰富的人才资源渠道', subtitle: '劳务派遣' },
        { title: '交付率高，能短时间内解决企业人才缺口', subtitle: '产线外包' },
        { title: '多样的服务方案，可以满足不同企业的用工需求', subtitle: '' }
      ],
      thirdList: ["涵盖该岗位的所有人力资源工作--招聘", "入离职手续办理", "上岗前培训", "薪酬", "社保管理", "档案管理", "在职维护", "出勤", "加班管理", "工伤", "劳动纠纷处理等"],
      secondList: ["6000万+优质活跃人才库", "专业顾问对接精准把控客户需求", "运作流程规范岗位交付快、准、稳"],
      fourList: ["借助专业测评工具全方位自我剖析，专业顾问团队出具具体解决方案并持续跟进完美助力个人职业转型"],
    }
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
  methods: {
    // ServiceClick(id){
    //     this.$router.push({
    //         name: 'servicedetail',
    //         params: {
    //             id: id
    //         }
    //     })
    // }
  }
}
</script>
<style scoped>
.Service-container {
  padding: 30px 50px;
}
.Service-item {
  margin-bottom: 50px;
}
.Service-item-wrapper {
  cursor: pointer;
  background: rgba(244, 244, 244, 1);
  overflow: hidden;
  position: relative;
}
.Service-item-top {
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}
.Service-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #b18147;
}
.Service-item-top > h4 {
  color: #b18147;
}
.Service-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease;
}
.SerVice-item-detail {
  margin: 20px 0;
  text-align: center;
}
.Service-item-img {
  width: 100%;
  overflow: hidden;
}
.Service-item-img img {
  width: 100%;
  transition: all 0.5s ease;
}
.Service-item-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border: 1px solid #b18147;
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i {
  opacity: 0;
}
/* .Service-item-wrapper:hover .Service-item-top > i{
    opacity: 0;
} */
.Service-item-wrapper:hover .Service-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img {
  transform: scale(1.1, 1.1);
}
.Service-item-wrapper:hover > .Service-item-border {
  opacity: 1;
  width: 80%;
  height: 90%;
}

/* 服务流程样式 */
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
  margin-bottom: 10px;
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
}

.first-container {
  background: #3e87ee;
  /* background: #f2f2f2; */
  height: 500px;
  padding: 40px 0;
}

.service-title {
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  font-family: "微软雅黑", microsoft yahei;
  text-align: center;
  position: relative;
}

.service-title span {
  border-bottom: 1px solid #fff;
  padding-bottom: 6px;
}

.service-title-box {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

.service-sub-title {
  font-size: 18px;
  display: inline-block;
  padding: 10px 1em 0;
  display: inline-block;
  /* border-top: 1px solid #ffffff; */
  text-align: center;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

.service-good {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 10%;
}

.service-good-item {
  width: 40%;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.service-good-item .font24 {
  font-size: 24px;
}

.service-intro-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
}

.service-intro-list span {
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #f67c01;
  color: #f67c01;
  margin: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.service-intro-list .service-intro-item {
  color: #fff;
  font-size: 16px;
}

.service-intro-list .service-intro-item2 {
  color: #3e87ee;
  background: #fff;
  width: 30%;
  height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}

.service-intro-list .service-intro-item {
  color: #fff;
  font-size: 16px;
}

.second-container {
  background: #3e87ee;
  height: 500px;
  padding: 40px 0;
}
</style>

