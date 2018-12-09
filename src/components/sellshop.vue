<template>
  <section class="sellshop">
    <img src="../../src/assets/img/bug/banner.png"
         alt="">
    <main>
      <h1>简单填写资料后，我们的卖家服务顾问会尽快和您联系 <br>您也可以直接联系我们的销售顾问进行挂店</h1>
      <p class="tishi">请选择您的店铺出售类型：</p>
      <div class="content">
        <el-radio-group v-model="radio2">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
        <div class="selectinput">
          <img src="../assets/img/sellshop/a1.png"
               alt="">
          <el-input placeholder="请输入您的姓名"
                    v-model="input23">
          </el-input>

        </div>
        <div class="selectinput">
          <img src="../assets/img/sellshop/a2.png"
               alt="">
          <el-input placeholder="请输入您的手机号"
                    v-model="input23">
          </el-input>

        </div>
        <div class="selectinput">
          <img src="../assets/img/sellshop/a3.png"
               alt="">
          <el-input placeholder="请输入您的QQ号"
                    v-model="input23">

          </el-input>

        </div>
        <div class="selecttext">
          <img src="../assets/img/sellshop/a4.png"
               alt="">
          <el-input type="textarea"
                    placeholder="请填写您希望出售的网店收益的链接或者旺旺名"
                    v-model="textarea">

          </el-input>
        </div>
        <p class="footer">
          <el-button type="primary">立即提交</el-button>
          <el-button type="primary">在线咨询</el-button>

        </p>
      </div>
    </main>
    <foot></foot>
  </section>
</template>
<script>
import foot from "../components/parts/foot";
export default {
  data() {
    return {
      radio2: 3,
      input23: "",
      textarea: ""
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
.sellshop {
  > img {
    width: 1920px;
  }
  main {
    overflow: hidden;
    width: 1200px;
    height: 646px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 6px 0px rgba(33, 33, 33, 0.2);
    border-radius: 10px;
    margin: 10px auto 200px;
    h1 {
      width: 578px;
      font-size: 24px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(62, 62, 62, 1);
      margin: 0 auto;
      margin-top: 30px;
    }
    .tishi {
      width: 578px;
      height: 17px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin: 0 auto;
      text-align: left;
      margin-top: 28px;
    }
    .content {
      width: 480px;
      margin: 30px auto;
      .el-radio-group {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 30px 0;
      }
      .selectinput,
      .selecttext {
        width: 100%;
        height: 40px;
        border: 1px solid rgba(234, 234, 234, 1);
        display: flex;
        align-items: center;
        margin: 0 auto;
        font-size: 18px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-bottom: 18px;
        > img {
          width: 20px;
          height: 20px;
          margin-right: 15px;
          margin-left: 15px;

          cursor: pointer;
        }
        .el-input {
          padding: 0;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(165, 165, 165, 1);
        }
        .el-input__inner {
          border: none !important;
          padding: 0;
        }
      }
      .selecttext {
        width: 100%;
        display: flex;
        height: 145px;
        align-items: flex-start;
        > img {
          margin-top: 10px;
        }
        .el-textarea__inner {
          border: none !important;
          padding: 0;
          margin-top: 10px;
          height: 135px;
        }
      }
      .footer {
        display: flex;
        justify-content: space-between;
        .el-button {
          width: 150px;
          height: 36px;
          background: rgba(254, 113, 4, 1);
          border-radius: 4px;
          border: none;
        }
        .el-button:last-child {
          width: 150px;
          height: 36px;
          background: rgba(0, 132, 255, 1);
          border-radius: 4px;
        }
      }
    }
  }
}
</style>