<template>
  <section class="foot">
    <div class="main">
      <p><span>免责声明</span><span>建议与投诉</span><span>联系我们：029-1234556</span></p>

    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {}
};
</script>
<style  lang="scss">
.foot {
  width: 100%;
  height: 220px;
  background: rgba(25, 36, 49, 1);
  .main {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    > p {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      color: #fff;
    }
  }
}
</style>