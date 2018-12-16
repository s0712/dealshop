<template>
  <section class="mydeposit">
    <section class="mydeposit_top">
      <el-tabs v-model="activeName">
        <el-tab-pane label="我要提现"
                     name="first"></el-tab-pane>
        <el-tab-pane label="提现记录"
                     name="second"></el-tab-pane>
      </el-tabs>
    </section>
    <div class="first"
         v-if="activeName=='first'">
      <p>提现用户账户</p>
      <section class="first_table">
        <el-table :data="tableData"
                  style="width: 100%"
                  height="250"
                  align="center"
                  header-align="center">
          <el-table-column prop="date"
                           width="50">
            <template slot-scope="scope">
              <span>
                <el-checkbox v-model="scope.row.check"></el-checkbox>
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="100">
          </el-table-column>
          <el-table-column prop="date"
                           label="手机号">
          </el-table-column>
          <el-table-column prop="name"
                           label="银行卡号"
                           width="200">
          </el-table-column>
          <el-table-column prop="address"
                           label="开户行">
          </el-table-column>
          <el-table-column prop="address"
                           label="操作">
            <template slot-scope="scope">
              <span>
                <el-button type="text">删除</el-button>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </section>
      <section class="first_add"
               @click="addCard">
        <img src="../../assets/img/self/depos1.png"
             alt="">
        添加银行卡（还可以添加3个）
      </section>
      <section class="first_form">
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="120px"
                 class="demo-ruleForm">
          <el-form-item label="可提现金额:"
                        prop="name"
                        class="keti">
            <span>5000.00元</span>
          </el-form-item>
          <el-form-item label="提现金额:"
                        prop="name"
                        class="tixian">
            <el-input v-model="ruleForm.name"
                      placeholder="请输入提现金额"></el-input><span>单笔最少提现五元</span>
          </el-form-item>
          <el-form-item class="tishi">
            <p>
              <span>提现操作平台将收取0.2%的手续费，手续费最低2元/笔，不足2元的，按照2元收取</span>
              <span>预计2个工作日内（国家法定节假日和双休日顺延）平台完成提现操作</span>
              <span>到账时间以各大银行为准，预计3-5工作日左右</span></p>
          </el-form-item>
          <el-form-item label="手机号:"
                        prop="name"
                        class="keti">
            <span>199****7726</span>
          </el-form-item>
          <el-form-item label="验证码:"
                        prop="name"
                        class="yanzheng">
            <el-input v-model="ruleForm.name"
                      placeholder="请输入验证码"></el-input><span>获取验证码</span><span class="yan">倒计时16s</span>
          </el-form-item>
        </el-form>
      </section>
      <section class="first_btn">
        申请提现
      </section>
    </div>
    <div class="second"
         v-if="activeName=='second'">
      <el-table :data="tableData"
                style="width: 100%"
                height="700"
                align="center"
                header-align="center">
        <el-table-column prop="name"
                         label="姓名">
        </el-table-column>
        <el-table-column prop="address"
                         label="开户行">
        </el-table-column>
        <el-table-column prop="address"
                         label="银行卡号">
        </el-table-column>
        <el-table-column prop="date"
                         label="提现申请时间">
        </el-table-column>
        <el-table-column prop="name"
                         label="提现申请时间">
        </el-table-column>
        <el-table-column prop="address"
                         label="状态">
          <template slot-scope="scope">
            <!-- <p class="yes"><span>审核通过</span></p> -->
            <p class="no"><span>审核不通过 原因：基地基底上...</span></p>
          </template>

        </el-table-column>
      </el-table>
      <page></page>
    </div>
    <el-dialog title="添加银行卡"
               :visible.sync="alert.addCard"
               width="630"
               center>
      <div class="form">
        <el-form ref="form"
                 :model="form"
                 label-width="110"
                 :rules="rules">
          <el-form-item label="姓名:"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      placeholder="请输入姓名"></el-input>
          </el-form-item>

          <el-form-item label="选择银行"
                        prop="name">
            <el-select v-model="form.name"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行卡号:"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      placeholder="请输入银行卡号"></el-input>
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
      </div>
      <p class="footer">
        <span>确认添加</span><span>取消退出</span>
      </p>
    </el-dialog>
  </section>
</template>
<script>
import page from "../parts/page";
export default {
  data() {
    return {
      activeName: "second",
      input: "1",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "中国农业银行",
          check: true
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "中国农业银行",
          check: true
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "中国农业银行",
          check: true
        }
      ],
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
      alert: {
        addCard: true
      },
      rules: {
        name: [{ required: true, message: "请输入提现金额", trigger: "blur" }]
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
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
      ]
    };
  },
  components: {
    page
  },
  created() {},
  methods: {
    addCard() {}
  }
};
</script>
<style lang="scss">
.mydeposit {
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
  .first {
    > p {
      padding-left: 11px;
      font-size: 18px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(53, 57, 76, 1);
      text-align: left;
      margin-top: 10px;
      margin-bottom: 20px;
    }
    &_table {
      .el-table {
        border: 1px solid rgba(255, 235, 226, 1);
        border-bottom: 10px solid rgba(255, 235, 226, 1);
      }
      .el-table td,
      .el-table th {
        padding: 0;
        height: 60px;
        text-align: center;
      }
    }
    &_add {
      margin: 20px 0;
      height: 60px;
      border: 1px dashed rgba(255, 218, 201, 1);
      border-radius: 4px;
      display: flex;
      align-items: center;
      border: 1px solid red;
      cursor: pointer;
      img {
        margin-right: 18px;
        margin-left: 30px;
      }
    }
    &_form {
      .el-form {
        .el-form-item {
          margin-bottom: 12px;
        }
        .el-form-item__label {
          font-size: 18px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(62, 62, 62, 1);
        }
        .el-form-item__content {
          text-align: left;
        }
        .keti {
          .el-form-item__content {
            > span {
              font-size: 18px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(62, 62, 62, 1);
            }
          }
        }
        .tixian {
          .el-form-item__content {
            > span {
              font-size: 18px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(170, 170, 170, 1);
              margin-left: 20px;
            }
          }
          .el-input {
            width: 360px;
            font-size: 18px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(171, 171, 171, 1);
          }
        }
        .tishi {
          .el-form-item__content {
            > p {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(62, 62, 62, 1);
              display: flex;
              flex-direction: column;
              color: rgba(255, 47, 82, 1);
              span:first-child {
                color: #3e3e3e;
              }
              span {
                height: 20px;
              }
            }
          }
        }
        .yanzheng {
          .el-form-item__content {
            display: flex;
            .el-input {
              width: 200px;
              font-size: 18px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(171, 171, 171, 1);
            }
            > span {
              width: 136px;
              height: 40px;
              background: rgba(255, 125, 66, 1);
              border-radius: 4px;
              font-size: 18px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              text-align: center;
              margin-left: 20px;
            }
            .yan {
              background: rgba(193, 193, 193, 1);
            }
          }
        }
      }
    }
    &_btn {
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
      margin-left: 119px;
      margin-top: 40px;
      cursor: pointer;
    }
  }
  .second {
    margin-top: 20px;
    .el-table {
      border: 1px solid rgba(255, 235, 226, 1);
      border-bottom: 10px solid rgba(255, 235, 226, 1);
      th {
        background: rgba(255, 235, 226, 1);
        text-align: center;
      }
      td {
        .yes {
          color: #ff7d42;
        }
        .no {
          color: #ff2f52;
        }
      }
    }
    .el-table td,
    .el-table th {
      padding: 0;
      height: 60px;
      text-align: center;
    }
  }
  .el-dialog {
    .el-dialog__header {
      background: rgba(255, 235, 226, 1);
      height: 62px;
      padding: 0;
      line-height: 62px;

      .el-dialog__title {
        font-size: 22px;
        font-family: MicrosoftYaHei;
        font-weight: bold;
        color: rgba(255, 125, 66, 1);
      }
      .el-dialog__headerbtn {
        top: 15px;
        font-size: 22px;
      }
    }
    .el-dialog__body {
      background: rgba(255, 252, 244, 1);
      .form {
        width: 460px;
        margin: 0 auto;
        .el-form {
          .el-form-item {
            display: flex;
            .el-form-item__label {
              width: 100px;
            }
            .el-form-item__content {
              flex: 1;
              display: flex;
              > span {
                display: flex;
                align-items: center;
                img {
                  margin-right: 5px;
                  cursor: pointer;
                }
              }
              .el-select {
                flex: 1;
                .el-scrollbar,
                .el-input__inner {
                  background: rgba(255, 252, 244, 1);
                }
              }
              .el-input__inner {
                background: rgba(255, 252, 244, 1);
              }
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
                width: 200px;
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
                margin-left: 20px;
                cursor: pointer;
                display: flex;
                justify-content: center;
              }
              .yan {
                background: rgba(193, 193, 193, 1);
              }
            }
          }
        }
      }
      .footer {
        display: flex;
        justify-content: space-around;
        margin-top: 60px;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          height: 50px;
          background: rgba(255, 138, 85, 1);
          border-radius: 8px;
          font-size: 22px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
        }
        span:last-child {
          background: rgba(189, 189, 189, 1);
        }
      }
    }
  }
}
</style>