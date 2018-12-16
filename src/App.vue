<template>
  <div id="app">

    <headpart v-on:returnRouter="returnRouter"></headpart>
    <router-view class="view" />
  </div>
</template>

<script>
import headpart from "../src/components/parts/headpart";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    headpart
  },
  methods: {
    //返回编辑后的数据
    returnRouter(val) {
      console.log("返回的数据", val);
      this.$router.push(val.router);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;

  height: 100%;
  display: flex;
  flex-direction: column;
  .view {
    flex: 1;
    overflow-y: auto;
    background: #fffcf4;
  }
}
</style>
