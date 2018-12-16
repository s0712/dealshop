<template>
  <section class="setpaypassword">
    <section class="setpaypassword_top">
      <el-tabs v-model="activeName">
        <el-tab-pane label="设置支付密码"
                     name="first"></el-tab-pane>

      </el-tabs>
    </section>
    <section class="setpaypassword_form">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="150px"
               class="demo-ruleForm">
        <el-form-item label="支付密码："
                      prop="name">
          <el-input v-model="ruleForm.name"
                    placeholder="请输入支付密码"></el-input>
        </el-form-item>
        <el-form-item label="确认支付密码："
                      prop="name">
          <el-input v-model="ruleForm.name"
                    placeholder="请确认支付密码"></el-input>
        </el-form-item>
        <el-form-item label="手机号"
                      prop="name"
                      class="tel">
          <span>19975257726</span>
        </el-form-item>
        <el-form-item label="验证码"
                      prop="name"
                      class="yanzheng">
          <el-input v-model="ruleForm.name"
                    placeholder="请输入验证码"></el-input>
          <span>获取验证码</span>
          <!-- <span class="yan">倒计时16s</span> -->
        </el-form-item>
      </el-form>
      <p class="btn">确认修改</p>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      radio: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "change" }]
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },

  created() {},
  methods: {}
};
</script>
<style  lang="scss">
.setpaypassword {
  width: 890px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  &_top {
    margin: 0 auto;
    width: 890px;
    .el-tabs {
      .el-tabs__header {
        margin: 0;
      }
      .el-tabs__content {
        display: none;
      }
      .el-tabs__item {
        height: 66px;
        line-height: 66px;
        font-size: 20px;
        font-family: "MicrosoftYaHei";
        font-weight: bold;
        color: #adadad;
      }
      .el-tabs__item.is-active {
        color: rgba(53, 57, 76, 1);
      }
    }
  }
  &_form {
    margin-top: 40px;
    .el-form-item {
      display: flex;
      align-items: center;
      .el-form-item__label {
        font-size: 16px;
      }
    }
    .el-form-item__content {
      margin-left: 0 !important;
      width: 430px;
      text-align: left;
      display: flex;
      align-items: center;
      .el-input {
        font-size: 18px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(171, 171, 171, 1);
      }
    }
    .tel {
      .el-form-item__content {
        > span {
          font-size: 18px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: #666;
        }
      }
    }
    .yanzheng {
      .el-form-item__content {
        display: flex;
        .el-input {
          width: 250px;
          font-size: 18px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(171, 171, 171, 1);
        }
        > span {
          flex: 1;
          height: 40px;
          background: rgba(255, 125, 66, 1);
          border-radius: 4px;
          font-size: 18px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          margin-left: 20px;
          cursor: pointer;
        }
        .yan {
          background: rgba(193, 193, 193, 1);
        }
      }
    }
    .btn {
      width: 320px;
      height: 60px;
      line-height: 60px;
      background: rgba(255, 125, 66, 1);
      box-shadow: 0px 3px 12px 1px rgba(229, 136, 97, 0.78);
      border-radius: 4px;
      font-size: 20px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-left: 130px;
      margin-top: 100px;
      cursor: pointer;
    }
  }
}
</style>