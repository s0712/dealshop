<template>
  <section class="auctionpart">
    <main class="a">
      <section class="a_top">
        <div class="title">
          <p><img src="../../assets/img/auction/a1.png"
                 alt="">杭州地区主营枕头旗舰店名字好听优质店铺诚心出售</p>
          <p><span>公司认证</span><span>可当面交易</span><span>公司认证</span></p>
        </div>
        <div class="info">
          <span>商城编号 : 2334344534535345</span>
          <span>拍卖未开始!记录拍卖开始还剩 <font>20</font>时<font>49</font>分<font>39</font>秒 </span>
        </div>
        <div class="text">
          <p>
            <span>商家类型： 专营店</span><span>货源渠道： 不提供</span><span>严重违规： 0分</span><span>严重违规： 0分</span>
          </p>
          <p>
            <span>纳税资质： 一般纳税人</span><span>是否带货：否</span><span>守家违规：0分</span><span>技术年费：<font>3万（需退还）</font></span>
          </p>
          <p>
            <span>商标归属： -</span><span>团队转让： 否</span><span>团队转让： 否</span><span>消保金：<font>3万（需退还）</font></span>
          </p>
          <p>
            <span>所属行业： 其他行业</span><span>一般违规： 5分</span><span>商标类型： -</span>
          </p>
          <p>
            <span>
              <font>25</font>次围观
            </span> <span>
              <font>0</font>人已报名
            </span>
          </p>
        </div>
        <div class="programe">
          <p>起拍价 <font>￥255600</font>（每天14:00-16:00可以此价格出价竞拍）</p>
          <p>一口价 <font>￥332280</font>（可不参与竞拍，提前购买）</p>
        </div>
        <div class="btns">
          <span>一口价购买</span>
          <span>立即报名</span>
        </div>
      </section>
      <section class="a_center">

        <span>竞拍流程</span>
        <p>
          <span><img src="../../assets/img/auction/a2.png"
                 alt="">1.交保证金</span>
          <font>></font>
          <span><img src="../../assets/img/auction/a3.png"
                 alt="">2.出价竞拍</span>
          <font>></font>
          <span><img src="../../assets/img/auction/a4.png"
                 alt="">3.竞拍成功</span>
          <font>></font>
          <span><img src="../../assets/img/auction/a5.png"
                 alt="">4.支付余额</span>
          <font>></font>
          <span><img src="../../assets/img/auction/a6.png"
                 alt="">5.网店交接</span>
        </p>
      </section>
      <section class="a_foot">
        <p class="title">
          <span v-for="(item,index) in arr.titleArr"
                :key="index"
                :class="{'is_active':index==other.isActive}"
                @click="other.isActive=index">{{item}}</span>
        </p>
        <div class="content">
          <section class="content_0"
                   v-if="other.isActive==0">
            <p class="title">
              店铺描述
            </p>
            <p class="t">以我在网上购物的经验，大家最先看重的是质量，然后是价格，接着是服务，还有就是店铺的评分及物品的评论。可以根据前三个依据 来写比</p>
            <p class="title">
              店铺首页链接
            </p>
            <p class="t">skjdfglkasjglkjasflkgjaslkgjkalsjglkasfjgilajsgoiljasoilgjalsjflkasdjgkljasklgjalkjglaskdglkasdjglkaslkglaskflkasjglkasjglkasjgkljaslkgasklgklasjgilaksd</p>
            <p class="title">
              店铺截图
            </p>
            <p class="t">
              <img src="../../assets/img/auction/a7.png"
                   alt="">
            </p>
          </section>
          <section class="content_1"
                   v-if="other.isActive==1">
            <p class="title">
              出价记录
            </p>
            <div class="table">
              <el-table :data="tableData"
                        style="width: 100%"
                        height="500"
                        align="center"
                        header-align="center">
                <el-table-column prop="date"
                                 label="状态">
                </el-table-column>
                <el-table-column prop="name"
                                 label="竞拍人">
                </el-table-column>
                <el-table-column prop="name"
                                 label="价格">
                </el-table-column>
                <el-table-column prop="address"
                                 label="时间">
                </el-table-column>
              </el-table>
            </div>
          </section>
          <section class="content_2"
                   v-if="other.isActive==2">
            <p class="title">
              出价基本规则
            </p>
            <p class="t">
              <span>确认出价金额，点击“我要出价”按钮进行竞拍；竞拍规则如下</span>
              <span>1.第一个出价可以出起拍价，也可以自主输入任意不低于起拍价的全额进行出价</span>
              <span>2.出价最高者领先，价低着竞拍记录出局，出局着可以再次出价</span>
              <span>3.当出价全额大于5个加幅度时，为了避免您的误操作，系统会做出提示，让您确认是否以该就出价</span>
            </p>
            <p class="title">
              出价延时介绍
            </p>
            <p class="t">
              <span class="q">1. 出价延时的概念</span>
              <span>出价延时是指，当拍品的竞拍时间只剩最后两分钟时，如果有用户出价竞拍，那么系统将会自动延长拍品的竞拍时间。、</span>
              <span class="q">2. 出价延时的基本规则</span>
              <span>在拍品竞拍结束的前两分钟（以系统接受竞价的时间显示为准），如果有用户出价竞拍，那么以最后一次出价的时间点为准，进入五分钟延时的</span>
              <span class="q">3. 出价延时举例说明</span>
              <span>假设某网店的拍卖结束时间是5月18日22点整，如果在5月18日21点58分整到21点59分59秒期间，有客户出价，那么系统将在最后一次出价的时间点自
                动延长5分钟；比如最后一次出价时间是21点59分整，则拍卖结束时间自动延长至22点04分整；如果在22点03分整有客户出价，那么系统将自动延时到
                22点08分整……以此类推，直到最后两分钟没有新的用户出价，那么该网店竞拍结束。</span>
              <span class="q">4. 出价延时的效果</span>
              <span>出价延时给拍卖用户带来的便利包括以下几点：</span>
              <span>1. 将给到用户更加充分的参与竞拍的机会。</span>
              <span>2. 避免因为网络或者电脑原因导致的延迟而错失出价机会。</span>
            </p>
            <p class="title">
              保证金介绍
            </p>
            <p class="t">
              <span class="q">1. 什么是拍卖保证金？</span>
              <span>拍卖保证金是易店宝为了防止买家恶意扰乱拍卖秩序而设置的一个参与门槛，额度为起拍金额的20%。只有您的舞泡账户资金可用余额不少于保证金金
                额，才可以参与拍卖。</span>
              <span class="q">2. 保证金释放</span>
              <span>1）当您的出价处于领先状态，保证金将会被冻结，如果最终竞拍成功，您的保证金将自动转成定金；</span>
              <span>2）只要您的出价处于出局状态，您的保证金就会在5分钟内解冻释放；</span>
              <span class="q">3. 保证金扣除</span>
              <span>凡是竞拍成功的买家，在竞拍结束后的7天内未付款，易店宝将视为违约并扣除保证金款项</span>
            </p>
            <p class="title">其他常见问题</p>
            <p class="t">
              <span class="q">1. 付款期限</span>
              <span>拍卖不同于一口价，是一种严谨的交易方式，成功竞拍后，买家务必在竞拍成功后7天内付款，否则买家保证金将因为违约被扣除且不予退还。</span>
              <span class="q">2. 拍品加价幅度设置的太低了，我能任意幅度加价吗？</span>
              <span>答：可以，但是加价金额不能低于拍品设置的最低加价幅度。为了防止操作失误，当您的出价金额达到或超过5个加价幅度时，系统会弹出提示框，让
                您进行确认。</span>
              <span class="q">3. 我出的价网店卖家已经同意卖给我了，竞拍可以提前结束吗？</span>
              <span>答：不能。为了保证其他买家的竞拍权力，易店宝会严格遵守拍卖结束时间。</span>
              <span class="q">4. 竞拍成功后如何交易？</span>
              <span>竞拍成功后，可以进入“我的易店宝>我购买的网店”页面里找到等待付款的交易，在竞拍结束后7天内及时付款（如下图）。</span>
            </p>

          </section>
        </div>
      </section>
    </main>
  </section>
</template>
<script>
export default {
  data() {
    return {
      other: {
        type: "", //商店类型 天猫type->1 淘宝->2
        productId: "", //商品id,
        isActive: 1
      },
      arr: {
        titleArr: [
          "店铺描述",
          "出价记录",
          "竞拍规则",
          "竞拍流程",
          "竞拍协议",
          "保证金须知"
        ]
      },
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

  created() {
    console.log(this.$route, 123);
    //天猫type->1 淘宝->2
    this.other.type = this.$route.params.type;
    this.other.productId = this.$route.params.id;
  },
  methods: {}
};
</script>
<style  lang="scss">
.auctionpart {
  .a {
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    &_top {
      width: 1200px;
      height: 515px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 8px 0px rgba(17, 23, 61, 0.3);
      border-radius: 10px;
      .title {
        margin: 0 40px;
        border-bottom: 1px solid rgba(234, 234, 234, 1);
        height: 76px;
        display: flex;
        justify-content: space-between;
        p {
          display: flex;
          align-items: center;
        }
        p:first-child {
          font-size: 22px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(62, 62, 62, 1);
          img {
            width: 24px;
            height: 24px;
            margin-right: 12px;
          }
        }
        p:last-child {
          span {
            width: 82px;
            text-align: center;
            height: 24px;
            line-height: 24px;
            border: 1px solid rgba(220, 220, 220, 1);
            border-radius: 4px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            margin-left: 16px;
          }
        }
      }
      .info {
        height: 60px;
        margin: 0 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .text {
        margin: 0 40px;
        display: flex;
        p {
          display: flex;
          flex-direction: column;
          margin-left: 90px;
          span {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            text-align: left;
            margin-bottom: 20px;
            font {
              color: #fe7004;
            }
          }
        }
        p:first-child {
          margin-left: 0;
        }
        p:last-child {
          flex: 1;
          flex-direction: row;
          justify-content: space-between;
        }
      }
      .programe {
        margin-top: 12px;
        p {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          margin-left: 490px;
          text-align: left;
          font {
            color: #fe7004;
            font-size: 18px;
          }
        }
        p:last-child {
          margin-top: 15px;
          color: #fe7004;
        }
      }
      .btns {
        display: flex;
        margin: 0 40px;
        margin-top: 40px;
        justify-content: flex-end;
        span {
          width: 150px;
          height: 36px;
          line-height: 36px;
          background: rgba(254, 112, 4, 1);
          border-radius: 4px;
          font-size: 18px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        span:last-child {
          background: rgba(0, 132, 255, 1);
          margin-left: 40px;
        }
      }
    }
    &_center {
      display: flex;
      align-items: center;
      width: 1200px;
      height: 92px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 8px 0px rgba(17, 23, 61, 0.3);
      border-radius: 10px;
      margin: 20px 0;
      > span {
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(254, 112, 4, 1);
        margin-left: 40px;
      }
      > p {
        flex: 1;
        margin-right: 40px;
        display: flex;
        justify-content: space-between;
        margin-left: 45px;
        align-items: center;
        span {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            margin-right: 12px;
          }
        }
      }
    }
    &_foot {
      width: 1200px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 8px 0px rgba(17, 23, 61, 0.3);
      border-radius: 10px;
      > .title {
        border-bottom: 1px solid rgba(234, 234, 234, 1);
        height: 76px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 0 50px;
        span {
          cursor: pointer;
          display: inline-block;
          padding-bottom: 22px;
        }
        span.is_active {
          padding-bottom: 20px;
          border-bottom: 2px solid #fe7004;
        }
      }
      .content {
        &_0,
        &_1,
        &_2 {
          padding-bottom: 40px;
          .title {
            text-align: left;
            margin: 30px 0;
            margin-left: 50px;
            border-left: 4px solid #fe7004;
            padding-left: 10px;
            font-size: 20px;
            font-family: Adobe Heiti Std R;
            font-weight: normal;
            color: rgba(62, 62, 62, 1);
          }
          .t {
            text-align: left;
            margin: 0 50px;
            font-size: 18px;
            font-family: Adobe Heiti Std R;
            font-weight: normal;
            color: rgba(153, 153, 153, 1);
            word-break: break-all;
          }
        }
        &_0 {
          .t:last-child {
            text-align: center;
            background: rgba(234, 234, 234, 1);
            border-radius: 4px;
            img {
              margin: 52px 0;
            }
          }
        }
        &_1 {
          .table {
            margin: 0 50px;
            .el-table {
              //   border: 1px solid rgba(255, 235, 226, 1);
              //   border-bottom: 10px solid rgba(255, 235, 226, 1);
              th {
                text-align: center;
              }
              td {
                text-align: center;
              }
            }
          }
        }
        &_2 {
          .t {
            padding-left: 12px;
            display: flex;
            flex-direction: column;
            .q {
              font-size: 16px;
              font-family: Adobe Heiti Std R;
              font-weight: normal;
              color: rgba(62, 62, 62, 1);
              margin-top: 30px;
            }
            .q:first-child {
              margin-top: 0;
            }
            span {
              margin-top: 10px;
              text-align: justify;
              text-justify: newspaper;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>