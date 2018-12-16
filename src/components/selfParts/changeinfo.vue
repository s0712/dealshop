<template>
  <section class="changeinfo">
    <section class="changeinfo_top">
      <el-tabs v-model="activeName">
        <el-tab-pane label="修改个人资料"
                     name="first"></el-tab-pane>

      </el-tabs>
    </section>
    <section class="changeinfo_form">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="姓名"
                      prop="name">
          <el-input v-model="ruleForm.name"
                    placeholder="请输入真实姓名，提交后不可修改"></el-input>
        </el-form-item>
        <el-form-item label="性别"
                      prop="name">
          <el-radio v-model="radio"
                    label="1">男</el-radio>
          <el-radio v-model="radio"
                    label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="出生日期"
                      prop="name"
                      class="dateinfo">
          <el-select v-model="value"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号"
                      prop="name">
          <span>19975257726</span>
        </el-form-item>
        <el-form-item label="QQ号码"
                      prop="name">
          <el-input v-model="ruleForm.name"
                    placeholder="请输入QQ号"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="name">
          <el-input v-model="ruleForm.name"
                    placeholder="请输入真实邮箱，提交后不可修改"></el-input>
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
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
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
.changeinfo {
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
      .el-select {
        width: 135px;
      }
    }
    .dateinfo {
      .el-form-item__content {
        justify-content: space-between;
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
      margin-left: 100px;
      margin-top: 50px;
      cursor: pointer;
    }
  }
}
</style>