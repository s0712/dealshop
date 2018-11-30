<template>
  <section class="buyshop">
    <img src="../../src/assets/img/bug/banner.png"
         alt="">
    <main>
      <selects></selects>
    </main>

  </section>
</template>
<script>
import selects from "../components/parts/selects";
export default {
  data() {
    return {};
  },
  components: {
    selects
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="scss">
.buyshop {
  > img {
    width: 1920px;
  }
  main {
    margin: 0 auto;
    border: 1px solid red;
    width: 1200px;
  }
}
</style>