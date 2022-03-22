<template>
  <page-layout>
    <div slot="page" id="NewsInformation">
      <div class="container container1">
        <div class="container1 text-center color-orange">
          <h3>{{title}}</h3>
        </div>
        <div class="detail-box">
          <p>详细了解客户的企业文化、公司背景、行业和产品特点，与客户进行充分、有效沟通，并与客户共同对所需招聘的岗位进行讨论和分析。</p>
          <p>我们拥有强大的本地网络和精深的市场知识，迅速地为客户挖掘最适合的本土资源，为客户提供增值服务。我们接受包括各行各业外资企业和中资企业的委托，在多个业务领域提供高级管理和技术类人才的搜寻，曾成功推荐了首席执行官（CEO）、财务总监（CFO）、副总、外商办事处首席代表、人力资源总监、市场开发总监、销售总监、厂长等年薪百万以上的重要职位。公司以专业的服务流程，保持与客户的畅通交流，同时为客户和应聘人员严格保密。我们的客户行业覆盖面相当广泛，涉及了快速消费品领域、日用品、金融保险、化工、医药保健品、IT·电讯、电子·机械、贸易、物流、机械制造等</p>
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
      title: '服务详情'
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
</style>

