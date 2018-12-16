<template>
  <section class="hello">
    <div class="banner">
      <div class="info">
        <p>
          <el-radio v-model="radio"
                    label="1">天猫店</el-radio>
          <el-radio v-model="radio"
                    label="2">淘宝店</el-radio>
          <el-radio v-model="radio"
                    label="3">其他网站</el-radio>

        </p>
        <div class="input">
          <el-input v-model="input"></el-input>
          <span>立即搜索</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <foot></foot>
  </section>
</template>
<script>
import foot from "../components/parts/foot";
export default {
  data() {
    return {
      radio: "",
      input: ""
    };
  },
  components: {
    foot
  },
  created() {},
  methods: {}
};
</script>
<style  lang="scss">
.hello {
  width: 100%;
  .banner {
    width: 100%;
    background: url("../assets/img/bug/i_banner.png") no-repeat center center;
    height: 666px;
    display: flex;
    align-items: flex-end;
    .info {
      width: 1140px;
      height: 140px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      margin: 0 auto;
      margin-bottom: 90px;
      > p {
        text-align: left;
        padding-left: 32px;
        margin: 24px 0;
        .el-radio {
          margin-right: 67px;
        }
      }
      > div {
        display: flex;
        padding: 0 30px;
        .el-input {
          .el-input__inner {
            height: 50px;
            border: none;
          }
        }
        > span {
          margin-left: 20px;
          width: 189px;
          height: 50px;
          background: rgba(224, 118, 74, 1);
          border-radius: 4px;
          font-size: 18px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 50px;
          cursor: pointer;
        }
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    > div {
      box-sizing: border-box;
      border-right: 1px solid #eee;
      flex: 1;
      height: 212px;
      background: rgba(243, 243, 243, 1);
    }
    div:last-child {
      border: none;
    }
  }
}
</style>