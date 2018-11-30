<template>
  <div id="app">

    <headpart v-on:returnRouter="returnRouter"></headpart>
    <router-view />
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

<style>
#app {
  border: 1px solid red;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
}
</style>
