<template>
  <div id="container" style="overflow: hidden">
    <Header :subTitle='subTitle'></Header>
    <slot name="page"></slot>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>
<script>
export default {
  props: {
    subTitle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


