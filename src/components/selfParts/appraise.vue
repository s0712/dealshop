<template>
  <section class="appraise">
    <section class="appraise_top">
      <div class="title">
        <el-tabs v-model="activeName">
          <el-tab-pane label="我的投诉"
                       name="first"></el-tab-pane>
          <el-tab-pane label="我的评价"
                       name="second"></el-tab-pane>
        </el-tabs>
        <span @click="addEdit"><img src="../../assets/img/self/app1.png"
               alt="">添加</span>
      </div>

    </section>
    <div class="first"
         v-if="activeName=='first'">
      <el-table :data="tableData"
                style="width: 100%"
                height="700"
                align="center"
                header-align="center">
        <el-table-column prop="name"
                         label="充值时间">
        </el-table-column>
        <el-table-column prop="address"
                         label="业务列表">
        </el-table-column>
        <el-table-column prop="address"
                         label="投诉内容">
        </el-table-column>
        <el-table-column prop="date"
                         label="回复内容">
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

    </div>
    <div class="second"
         v-if="activeName=='second'">
      <el-table :data="tableData"
                style="width: 100%"
                height="700"
                align="center"
                header-align="center">
        <el-table-column prop="name"
                         label="充值时间">
        </el-table-column>
        <el-table-column prop="address"
                         label="业务列表">
        </el-table-column>
        <el-table-column prop="address"
                         label="我的评价">
        </el-table-column>
        <el-table-column prop="date"
                         label="评价内容">
          <template slot-scope="scope">
            <span>
              <img src="../../assets/img/self/star1.png"
                   alt="">
              <img src="../../assets/img/self/star1.png"
                   alt="">
              <img src="../../assets/img/self/star1.png"
                   alt="">
              <img src="../../assets/img/self/star2.png"
                   alt="">
              <img src="../../assets/img/self/star2.png"
                   alt="">
            </span>
          </template>
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
    </div>
    <page></page>
    <el-dialog :title="other.title"
               :visible.sync="alert.add"
               width="630"
               center>
      <div class="form">
        <el-form ref="form"
                 :model="form"
                 label-width="110">
          <el-form-item label="选择业务列表">
            <el-select v-model="form.name"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="评价星级"
                        v-if="activeName=='second'">
            <span>
              <img src="../../assets/img/self/star1.png"
                   alt="">
              <img src="../../assets/img/self/star1.png"
                   alt="">
              <img src="../../assets/img/self/star1.png"
                   alt="">
              <img src="../../assets/img/self/star2.png"
                   alt="">
              <img src="../../assets/img/self/star2.png"
                   alt="">
            </span>
          </el-form-item>
          <el-form-item label="评价内容">
            <el-input type="textarea"
                      :maxlength="200"
                      placeholder="请输入内容"
                      v-model="textarea">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <p class="footer">
        <span>确认提交</span><span>取消退出</span>
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
      centerDialogVisible: true,
      textarea: "",
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
      ],
      alert: {
        add: false
      },
      other: {
        title: "我的投诉"
      }
    };
  },
  components: { page },
  created() {},
  methods: {
    addEdit() {
      this.activeName == "first"
        ? (this.other.title = "我的投诉")
        : (this.other.title = "我的评价");
      this.alert.add = true;
    }
  }
};
</script>
<style  lang="scss">
.appraise {
  width: 890px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  &_top {
    margin: 0 auto;
    width: 890px;
    .title {
      position: relative;
      > span {
        position: absolute;
        right: 0;
        top: 20px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 125, 66, 1);
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          margin-right: 5px;
        }
      }
    }
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
  .first,
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
        text-align: center;
      }
    }
    .el-table td,
    .el-table th {
      padding: 0;
      height: 55px;
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
              .el-textarea {
                height: 200px;
                display: flex;
                flex-direction: column;

                .el-textarea__inner {
                  flex: 1;
                  background: rgba(255, 252, 244, 1);
                }
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