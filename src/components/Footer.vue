<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img style="height:60px;width:auto;" src="@/assets/img/logo_white.png" alt="logo图">
       <!-- <img style="height:60px;width:auto;" src="@/assets/img/logo-text.png" alt="logo图"> -->
    </div>
    <!-- #6A3906 rgb(186, 154, 81)-->
    <p class="title" style="color:rgb(186, 154, 81);padding-top:20px">森舟猎头 — 服务于全国的大型综合性人力资源服务企业！</p>
    <p class="address_tel_fax">
      <span>地址：重庆高新区虎溪街道景阳路26号15幢10-10、10-11、10-12</span>
      
    </p>
    <p class="email_wx">
      <span>邮箱：675209079@qq.com</span>
    </p>
     <p class="email_wx">
      <span>Tel：15178726577</span>
    </p>
    <p class="copy">Copyright &copy; 2022 重庆森舟企业管理咨询有限公司</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #222428;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

