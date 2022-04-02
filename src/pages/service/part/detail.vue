<template>
  <page-layout>
    <div slot="page" id="NewsInformation">
      <div class="container container1" style="margin-bottom:50px">
        <div class="container1 text-center color-orange">
          <h3>{{title}}</h3>
        </div>
        <div class="detail-box">
          <p>详细了解客户的企业文化、公司背景、行业和产品特点，与客户进行充分、有效沟通，并与客户共同对所需招聘的岗位进行讨论和分析。</p>
          <p>我们拥有强大的本地网络和精深的市场知识，迅速地为客户挖掘最适合的本土资源，为客户提供增值服务。我们接受包括各行各业外资企业和中资企业的委托，在多个业务领域提供高级管理和技术类人才的搜寻，曾成功推荐了首席执行官（CEO）、财务总监（CFO）、副总、外商办事处首席代表、人力资源总监、市场开发总监、销售总监、厂长等年薪百万以上的重要职位。公司以专业的服务流程，保持与客户的畅通交流，同时为客户和应聘人员严格保密。我们的客户行业覆盖面相当广泛，涉及了快速消费品领域、日用品、金融保险、化工、医药保健品、IT·电讯、电子·机械、贸易、物流、机械制造等</p>
        </div>
      </div>
      <!-- 服务流程 -->
      <div v-if="title=='猎头服务'" class="container container1" style="margin-bottom:30px">
        <div class="container1 text-center color-orange">
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
  name: 'NewsInformation',
  components: { pageLayout },
  data() {
    return {
      title: '服务详情',
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
      ]
    }
  },
  mounted() {
    var wow = new WOW();
    wow.init();
    const params = window.location.href.split('type=')
    if (params.length > 1) {
      this.title = decodeURI(params[1])
    }
  },
}
</script>
<style scoped>
.detail-box {
  text-indent: 26px;
  font-size: 15px;
  line-height: 28px;
  text-align: justify;
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

