<template>
  <div id="Service">
    <div class="container text-center">
      <h3>我们的服务</h3>
      <p style="color:#b2b2b2">The Best Service You Never See</p>
    </div>
    <div class="container">
      <div class="Service-container row">
        <div class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp" v-for="(item,index) in serviceList" :key="index">
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
        </div>
      </div>
    </div>
    <!-- 服务流程 -->
    <div class="container container1" style="margin-bottom:30px">
      <div class="container1 text-center">
        <h3>服务流程</h3>
        <p style="color:#b2b2b2">Company News</p>
      </div>
      <!-- <div class="nav container1 text-center">
                <a href="#" class="active">公司新闻</a>
                <a href="#">行业动态</a>
            </div> -->
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
            <img src="../assets/img/circle.png">
            <i class="line center-block"></i>
          </div>
        </li>
      </ul>
      <div class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
  name: 'Service',
  data() {
    return {
      serviceList: [
        {
          id: 'section-1',
          title: '蓝领用工服务',
          sub_title:'为企业提供蓝领用工整体解决方案',
          eng_title: 'Blue Collar Employment',
          img: require('@/assets/img/service1.jpg')
        }, {
          id: 'section-2',
          title: '猎头服务',
           sub_title:'为企业提供中高端人才招聘解决方案',
          eng_title: 'Headhunting Service',
          img: require('@/assets/img/service2.jpg')
        }, {
          id: 'section-3',
          title: '人事岗位外包服务',
           sub_title:'为企业提供专业人资模块解决方案',
          eng_title: 'Job Outsourcing',
          img: require('@/assets/img/service3.jpg')
        }, {
          id: 'section-4',
          title: '职业咨询服务',
           sub_title:'为个人提供职业咨询、规划服务',
          eng_title: 'Career Counseling',
          img: require('@/assets/img/service4.jpg')
        }
      ],
      newsList:[
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
      ]
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
.SerVice-item-detail{
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
</style>

