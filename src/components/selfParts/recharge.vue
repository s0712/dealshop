<template>
  <section class="recharge">
    <section class="recharge_top">
      <el-tabs v-model="activeName">
        <el-tab-pane label="我要充值"
                     name="first"></el-tab-pane>
        <el-tab-pane label="充值记录"
                     name="second"></el-tab-pane>
      </el-tabs>
    </section>
    <div class="first"
         v-if="activeName=='first'">
      <section class="first_center">
        <p>1.因第三方支付受大额交易管控限制，单笔押金充值金额 >1万元选项时，请选择页面其他金额选项进行分配操作完成充值</p>
        <p>2.充值到账可能会有延时，若30分钟为到账请联系<a>在线咨询</a></p>
      </section>
      <section class="first_title">
        <h1>
          <p><img src="../../assets/img/self/recharge1.png"
                 alt="">请选择充值金额 : </p>
          <p>账户余额：20199</p>
        </h1>
      </section>
      <section class="first_btns">
        <span class="btn is_active">
          ￥940
        </span>
        <span class="btn"
              v-for="n in 6"
              :key="n">
          ￥940
        </span>
        <span class="btn">
          <el-input v-if="input"
                    v-model="input"
                    placeholder="请输入内容"></el-input>
          <font v-if="!input">其他内容</font>
        </span>
        <p>提示：单笔押金充值金额>1W时，可以选择多笔充值或是联系在线客服配合线下<a>在线咨询</a></p>
      </section>
      <section class="first_foot">前去支付</section>
    </div>

    <div class="second"
         v-if="activeName=='second'">
      <el-table :data="tableData"
                style="width: 100%"
                height="700"
                align="center"
                header-align="center">
        <el-table-column prop="date"
                         label="日期">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
        </el-table-column>
      </el-table>
    </div>
    <page></page>
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
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components: {
    page
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss">
.recharge {
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
    &_center {
      width: 100%;
      height: 92px;
      border: 1px dashed rgba(255, 228, 216, 1);
      border-radius: 4px;
      background: rgba(255, 245, 240, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 20px;
      p {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(62, 62, 62, 1);
        padding: 0 18px;
        text-align: left;
        margin-top: 10px;
        a {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          text-decoration: underline;
          color: rgba(254, 111, 0, 1);
          margin-left: 12px;
        }
      }
    }
    &_title {
      h1 {
        border-bottom: 1px solid rgba(190, 190, 190, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 56px;
        p:first-child {
          display: flex;
          align-items: center;
        }
        p {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(62, 62, 62, 1);
        }
      }
    }
    &_btns {
      display: flex;
      flex-wrap: wrap;
      padding-left: 20px;
      .btn {
        width: 160px;
        height: 60px;
        background: rgba(255, 255, 255, 1);
        border: 2px solid rgba(202, 202, 202, 1);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        margin-top: 20px;
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        .el-input__inner {
          text-align: center;
          border: none !important;
        }
      }
      .btn.is_active {
        border: none;
        background: url("../../assets/img/self/recharge2.png");
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(53, 57, 76, 1);
      }
      > p {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 94, 94, 1);
        margin-left: -10px;
        margin-top: 30px;
        a {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          text-decoration: underline;
          color: rgba(254, 111, 0, 1);
          margin-left: 12px;
        }
      }
    }
    &_foot {
      width: 350px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      background: rgba(255, 125, 66, 1);
      box-shadow: 0px 3px 12px 1px rgba(229, 136, 97, 0.78);
      border-radius: 4px;
      font-size: 20px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin: 60px auto 0;
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
        text-align: center;
      }
    }
  }
}
</style>