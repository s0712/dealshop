<template>
  <section class="myhouse">
    <section class="myhouse_top">
      <div class="div1">
        <p><img src="../../assets/img/self/a3.png"
               alt=""> <span>我出售的网店(<font>1</font>)</span></p>
        <p><img src="../../assets/img/self/a4.png"
               alt=""><span>我购买的网店(<font>1</font>)</span></p>
      </div>
      <div class="div2">
        <span><img src="../../assets/img/self/a5.png"
               alt="">卖家提醒：</span>
        <p>
          <span>审核的网店( <font>1</font> )</span>
          <span>出售中( <font>0</font> )</span>
          <span>正在交易( <font>0</font> )</span>
        </p>
      </div>
      <div class="div3">
        <span><img src="../../assets/img/self/a6.png"
               alt="">买家提醒：</span>
        <p>
          <span>求购待确认( <font>0</font> )</span>
          <span>代付款( <font>0</font> )</span>
          <span>待确认收获( <font>0</font> )</span>
        </p>
      </div>
    </section>
    <section class="myhouse_center">
      <h1><span></span>资金统计</h1>
      <li>
        <p><img src="../../assets/img/self/a11.png"
               alt=""><span>全部余额 : <font>0.00</font> 元</span></p>
        <p><a>查看明细</a><span>我要充值</span><span>我要充值</span></p>
      </li>
      <li>
        <p><img src="../../assets/img/self/a22.png"
               alt=""><span>可用余额 : <font>0.00</font> 元</span></p>
        <p><a>查看明细</a></p>
      </li>
      <li class="thr">
        <p><img src="../../assets/img/self/a44.png"
               alt=""><span>冻结资金 : <font>0.00</font> 元</span></p>
        <p><span>保证金余额 : <font>0.00</font> 元</span></p>
      </li>
      <li>
        <p><img src="../../assets/img/self/a33.png"
               alt=""><span>红包余额 : <font>0.00</font> 元</span></p>
        <p><a>查看明细</a></p>
      </li>
    </section>
    <section class="myhouse_foot">
      <div>
        <h1>买家入门: <a>下载详细流程</a></h1>
        <p>
          选购商品 <font>></font>拍下付款 <font>></font>账户充值 <font>></font>付款成功 <font>></font>交接信息 <font>></font>签订合同 <font>></font>交易完成 <font>></font>售后服务
        </p>
      </div>
      <div>
        <h1>卖家入门: <a>下载详细流程</a></h1>
        <p>
          登记网店 <font>></font>买家拍下 <font>></font>完成付款 <font>></font>交接信息 <font>></font>签订合同 <font>></font>交易完成 <font>></font>申请提现 <font>></font>售后服务
        </p>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },

  created() {},
  methods: {}
};
</script>
<style lang="scss">
.myhouse {
  width: 100%;
  &_top {
    width: 890px;
    margin: 0 auto;
    border-bottom: 1px solid rgba(234, 234, 234, 1);
    div {
      display: flex;
    }
    .div1 {
      justify-content: center;
      margin: 38px auto 55px;
      p {
        display: flex;
        align-items: flex-end;
        span {
          font-size: 20px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(53, 57, 76, 1);
          margin-left: 20px;
          font {
            color: #ff7d42;
          }
        }
      }
      p:last-child {
        margin-left: 120px;
      }
    }
    .div2,
    .div3 {
      width: 530px;
      margin: 0 auto;
    }
    .div2,
    .div3 {
      > span {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 125, 66, 1);
        display: flex;
        align-items: center;
        > img {
          margin-right: 8px;
        }
      }
      > p {
        flex: 1;
        display: flex;
        justify-content: space-between;
        span {
          width: 115px;
          height: 16px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(134, 137, 147, 1);
          font {
            color: rgba(255, 125, 66, 1);
          }
        }
        span:last-child {
          text-align: left;
        }
      }
    }
    .div3 {
      margin-top: 23px;
      margin-bottom: 40px;
      > span {
        color: #868993;
      }
    }
  }
  &_center {
    width: 890px;
    margin: 0 auto;
    margin-bottom: 84px;
    h1 {
      margin-left: 12px;
      margin-top: 42px;
      font-size: 20px;
      font-family: MicrosoftYaHei;
      font-weight: bold;
      color: rgba(53, 57, 76, 1);
      display: flex;
      align-items: center;
      span {
        width: 6px;
        height: 24px;
        background: rgba(255, 125, 66, 1);
        box-shadow: 1px 1px 6px 0px rgba(255, 125, 66, 0.67);
        border-radius: 2px;
        margin-right: 12px;
      }
    }
    li {
      height: 54px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 15px;
      padding: 0 22px 0 6px;
      list-style: none;
      border-bottom: 1px dashed rgba(219, 219, 219, 1);
      p {
        display: flex;
        align-items: center;
      }
      p:first-child {
        span {
          margin-left: 11px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(53, 57, 76, 1);
          font {
            color: #ff7d42;
          }
        }
      }
      p:last-child {
        a {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          text-decoration: underline;
          color: rgba(255, 125, 66, 1);
        }
      }
    }
    li:first-of-type {
      p:last-child {
        span {
          width: 90px;
          height: 32px;
          background: rgba(255, 125, 66, 1);
          border-radius: 4px;
          text-align: center;
          line-height: 32px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 254, 254, 1);
          margin-left: 16px;
        }
        span:last-child {
          background: rgba(66, 88, 243, 1);
        }
      }
    }
    .thr {
      p:last-child {
        span {
          margin-left: 11px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(53, 57, 76, 1);
          font {
            color: #ff7d42;
          }
        }
      }
    }
  }
  &_foot {
    width: 890px;
    margin: 0 auto;
    height: 192px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);
    box-shadow: 0px 2px 6px 0px rgba(17, 23, 61, 0.16);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 45px 0 19px;

      h1 {
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(53, 57, 76, 1);
        text-align: left;
        margin-bottom: 13px;
        a {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          text-decoration: underline;
          color: rgba(254, 112, 4, 1);
          margin-left: 10px;
        }
      }
      p {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(62, 62, 62, 1);
      }
    }
  }
}
</style>