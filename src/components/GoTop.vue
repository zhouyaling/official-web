<template>
  <div id="GoTop" @click="GoTop()">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {
      flag: false
    };
  },
  methods: {
    GoTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 10);
        }
      })();
    }
  }
};
</script>
<style scoped>
#GoTop {
  width: 60px;
  height: 60px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99999999;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 4px;
}
#GoTop:hover{
  transition: all 0.6s;
  background-color: #B18147;
}

#GoTop:hover >span{
    transition: all 0.6s;
  color: #f2f2f2;
}
#GoTop > span {
  display: block;
  width: 34px;
  height: 36px;
  color: #B18147;
  font-size: 34px;
}
</style>
