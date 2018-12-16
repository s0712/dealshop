<template>
  <section class="mysell">
    <section class="mysell_top">
      <el-tabs v-model="activeName">
        <el-tab-pane label="我出售的网店"
                     name="first"></el-tab-pane>
        <el-tab-pane label="我购买的网店"
                     name="second"></el-tab-pane>
        <el-tab-pane label="我收藏的网店"
                     name="third"></el-tab-pane>
      </el-tabs>
    </section>
    <section class="mysell_bottom">
      <div class="box"
           v-for="n in 5"
           :key="n">
        <p class="title">
          <span>网店编号：234664849943454544554</span>
          <span>售出日期：2018-11-11 19：27</span>
        </p>
        <div class="content">
          <div class="content_l">
            <img src="../../assets/img/self/sell1.png"
                 alt="">
            <div class="text">
              <p><span>标题：每日心情护理美妆标题：每日心情护理美妆标题：每日心情护理美妆标题：每日心情护理美妆标题：每日心情护理美妆标题：每日心情护理美妆</span><a v-if="activeName=='second'">查看订单</a><a v-if="activeName=='first'">付款</a><a v-if="activeName=='first'">取消</a></p>
              <div><span>网店链接：</span>
                <div>https://run.mockplus.cn/9LWLQvdpXHcSQyjU/index.html?to=9FD</div>
              </div>
            </div>
          </div>
          <div class="
                   content_r">
            <p><span>消保金额：0</span><span>销售状态：待售</span><span>审核状态：待审核</span><span>交易状态：无</span></p>
            <p><span>到手价：<font>￥4.5</font></span><span>￥5</span></p>
          </div>
        </div>
      </div>
      <page></page>
    </section>
  </section>
</template>
<script>
import page from "../parts/page";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    page
  },
  created() {},
  methods: {}
};
</script>
<style  lang="scss">
.mysell {
  width: 100%;

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
  &_bottom {
    width: 890px;
    margin: 0 auto;
    .box {
      width: 884px;
      height: 230px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(232, 232, 232, 1);
      box-shadow: 0px 1px 6px 1px rgba(189, 189, 189, 0.25);
      border-radius: 2px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
        height: 50px;
        background: rgba(255, 240, 234, 1);
        border-radius: 2px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
      }
      .content {
        flex: 1;
        display: flex;

        &_l {
          display: flex;
          align-items: center;
          > img {
            width: 120px;
            height: 120px;
            margin: 0 28px 0 33px;
          }
          .text {
            height: 120px;
            display: flex;
            flex-direction: column;
            width: 312px;
            justify-content: space-between;
            p:first-child {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              span {
                width: 227px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 18px;
                font-family: MicrosoftYaHei;
                font-weight: bold;
                color: rgba(102, 102, 102, 1);
              }
              a {
                font-size: 14px;
                font-family: MicrosoftYaHei;
                font-weight: bold;
                text-decoration: underline;
                color: rgba(254, 112, 4, 1);
              }
            }
            > div {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-start;
              span {
                margin-bottom: 5px;
              }
              > div {
                width: 312px;
                word-wrap: break-word;
                text-align: left;
              }
            }
          }
        }
        &_r {
          margin-left: 200px;
          p:first-child {
            display: flex;
            flex-direction: column;
            span {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              font-weight: bold;
              color: rgba(153, 153, 153, 1);
              text-align: left;
              margin-top: 8px;
            }
          }
          p:last-child {
            margin-top: 16px;
            span:first-child {
              text-align: left;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              font-weight: bold;
              color: rgba(254, 112, 4, 1);
              font {
                font-size: 18px;
              }
            }
            span:last-child {
              display: inline-block;
              width: 32px;
              margin-left: 10px;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              font-weight: bold;
              color: rgba(143, 143, 143, 1);
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>