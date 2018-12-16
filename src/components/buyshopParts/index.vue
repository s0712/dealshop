<template>
  <section class="buyshoppart">
    <main class="b">
      <section class="b_top">
        <div class="title">
          <p><img :src="info.store_logo"
                 alt="">{{info.store_active_title}}</p>
          <p><span>公司认证</span><span>可当面交易</span><span>公司认证</span><span v-if="info.is_collect==0"
                  @click="changeCollect();other.collect=1"><img src="../../assets/img/buy/a2.png"
                   alt="">收藏</span><span @click="changeCollect();other.collect=0"
                  v-if="info.is_collect==1"
                  :class="{'is_active':info.is_collect}"><img src="../../assets/img/buy/a1.png"
                   alt="">已收藏</span></p>
        </div>
        <div class="info">
          <span>商城编号：{{info.store_number}} </span>
          <span>
            <font>{{info.store_money/10000}}</font>万
          </span>
        </div>
        <div class="text"
             v-if="other.type==1">
          <p>
            <span>商家类型： {{info.type_title}}</span>
            <span>纳税资质： {{['不限','一般纳税人','小规模纳税人'][info.store_tax]}}</span>
            <span>商标过户： {{['不限','可以过户','只能授权'][info.store_transfer]}}</span>
            <span>所属行业： {{info.trade_title}}</span></p>
          <p>
            <span>货源渠道： {{['不限','是','否'][info.store_source]}}</span>
            <span>是否带货：{{['不限','是','否'][info.store_bring]}}</span>
            <span>团队转让： {{['不限','是','否'][info.store_bring]}}</span>
            <span>一般违规： {{info.store_part_of}}分</span>
          </p>
          <p>
            <span>严重违规： {{['不限','全无扣分','有一般违规扣分','有严重违规扣分','有售假违规扣分'][info.store_part]}}</span>
            <span>售假违规： {{['不限','全无扣分','有一般违规扣分','有严重违规扣分','有售假违规扣分'][info.store_part]}}</span>
            <span>所在地区： {{info.store_place_id}}</span>
            <span>商标类型： {{['不限','R标','TM标'][info.store_brand]}}</span>
          </p>
          <p> <span>一级类目： {{info.store_category}}</span></p>
        </div>
        <div class="text"
             v-if="other.type==2">

          <p>
            <span>所属行业： 家居用品</span><span>货源渠道： 不提供</span><span>一般违规： 0分</span><span>卖家信用： 26838</span>
          </p>
          <p>
            <span>纳税资质： 99%以上</span><span>运营经验：不传授 </span><span>严重违规：0分</span>
          </p>
          <p>
            <span>虚拟占比： 0%</span><span>是否带货： 否</span><span>守家违规： 0分</span>
          </p>
          <p>
            <span>创店时间： 2014年</span><span>团队转让： 否</span><span>收藏人气： -</span>
          </p>

        </div>
        <div class="btns">
          <p v-if="other.type==1">
            <span>官方评估：<font>{{info.store_official_fee/10000}}万</font></span>
            <span>技术年费： <font>{{info.store_annual_fee/10000}}万（{{['需退还','不退还'][info.store_back]}}）</font></span>
            <span>消保金： <font>{{info.store_margin_money/10000}}万（{{['需退还','不退还','信用消保'][info.store_margin]}}）</font></span>
          </p>
          <p v-if="other.type==2"><span>官方评估：<font>{{info.store_official_fee/10000}}万</font></span><span>消保金： <font>0.00</font></span></p>
          <p>
            <span>立即购买</span>
            <span>立即预订</span>
          </p>
        </div>
      </section>
      <section class="b_foot">
        <p class="title">
          <span v-for="(item,index) in arr.titleArr"
                :key="index"
                :class="{'is_active':index==other.isActive}"
                @click="other.isActive=index">{{item}}</span>
        </p>
        <div class="content">
          <section class="content_0">
            <p class="title"
               v-if="other.isActive==0">
              店铺描述
            </p>
            <p class="t"
               v-if="other.isActive==0">{{info.store_desc}}</p>
            <p class="title"
               v-if="other.isActive==1">
              店铺首页链接
            </p>
            <p class="t"
               v-if="other.isActive==1">{{info.store_link}}</p>
            <p class="title"
               v-if="other.isActive==2">
              店铺截图
            </p>
            <p class="t back"
               v-if="other.isActive==2">
              <span v-for="(n,index) in imgarr"
                    :key="index"> <img :src="`${$location.showimgURL}${n}`"
                     alt=""> </span>

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
      info: {
        store_logo: ""
      },
      imgarr: [], //网店截图数组
      other: {
        type: "", //商店类型 天猫type->1 淘宝->2
        productId: "", //商品id,
        isActive: 0, //默认选中店铺描述
        collect: 1 //0未收藏,1已收藏
      },
      arr: {
        titleArr: ["店铺描述", "店铺首页链接", "店铺截图"]
      }
    };
  },

  created() {
    console.log(this.$route, 123);
    //天猫type->1 淘宝->2
    this.other.type = this.$route.params.type;
    console.log(this.other.type);
    this.other.productId = this.$route.params.id;
    this.getProductInfo();
  },
  methods: {
    //获取店铺详情
    getProductInfo() {
      this.$axios
        .get(this.$location.storedetail, {
          params: {
            store_id: this.other.productId
          }
        })
        .then(res => {
          this.info = _.get(res, "data", {});
          this.imgarr = this.info.store_img.split(",");
          console.log(this.info, this.imgarr);
        });
    },
    //改变收藏状态
    changeCollect() {
      this.$axios
        .get(this.$location.storekeep, {
          params: {
            store_id: this.other.productId
          }
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style lang="scss">
.buyshoppart {
  .b {
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    &_top {
      width: 1200px;
      height: 408px;
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
          span:last-child {
            cursor: pointer;
            width: 80px;
            height: 24px;
            background: rgba(255, 252, 244, 1);
            border: 1px solid rgba(254, 112, 4, 1);
            border-radius: 4px;
            color: rgba(254, 112, 4, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              margin-right: 6px;
            }
          }
          span.is_active {
            background: rgba(254, 112, 4, 1);
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .info {
        margin: 0 40px;
        height: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(62, 62, 62, 1);
        }
        span:last-child {
          font-size: 20px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 30, 67, 1);
          font {
            font-size: 28px;
          }
        }
      }
      .text {
        margin: 0 40px;
        // display: flex;
        p {
          margin-bottom: 28px;
          display: flex;
          span {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            text-align: left;
            width: 250px;
          }
        }
        p:last-child {
          span {
            width: 100%;
          }
        }
      }
      .btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 40px;
        margin-top: 10px;
        p:first-child {
          span {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            font-weight: 400;

            color: rgba(62, 62, 62, 1);
            margin-right: 35px;
            font {
              color: #fe7004;
            }
          }
          span:first-child {
            font {
              text-decoration: line-through;
            }
          }
        }
        p:last-child {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          span {
            width: 150px;
            height: 36px;
            background: rgba(254, 112, 4, 1);
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
          span:last-child {
            background: rgba(0, 132, 255, 1);
            margin-left: 30px;
          }
        }
      }
    }
    &_foot {
      width: 1200px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 8px 0px rgba(17, 23, 61, 0.3);
      border-radius: 10px;
      margin: 20px 0;
      > .title {
        border-bottom: 1px solid rgba(234, 234, 234, 1);
        height: 76px;
        display: flex;
        align-items: flex-end;

        padding: 0 50px;
        span {
          cursor: pointer;
          display: inline-block;
          padding-bottom: 22px;
          margin-right: 100px;
        }
        span.is_active {
          padding-bottom: 21px;
          border-bottom: 2px solid #fe7004;
        }
      }
      .content {
        &_0 {
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
          .back {
            background: rgba(234, 234, 234, 1);
            border-radius: 4px;
            display: flex;

            flex-direction: column;
            justify-content: center;
            span {
              text-align: center;
            }
            img {
              margin: 52px 0;
            }
          }
        }
      }
    }
  }
}
</style>