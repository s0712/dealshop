<template>
  <section class="buyshop">

    <div class="banner"></div>
    <main>
      <selects :path="$route.fullPath"
               @returnForm='returnForm'></selects>
      <li class="list"
          v-for="(n,index) in arr.dataList"
          :key="index"
          @click="toInfo(n)">
        <div class="top">
          <p><img :src="n.store_logo"
                 alt="">
            <span class="title">{{n.store_active_title}}</span><span class="tag">动态全红</span><span class="tag">优质店铺</span><span class="tag">一级类目</span></p>
          <span>{{n.store_money/10000}}万</span>
        </div>
        <div class="bottom">
          <p><span>所属行业: {{n.trade_title}}</span><span>所属地区: {{n.store_place_id}}</span><span>商城类型: {{n.type_title}}</span><span>纳税资质： {{n.store_tax}}</span><span>消保金： {{n.store_margin_money}}</span></p>
          <p><span>技术年费： {{n.store_annual_fee}}</span><span>动态评分：<img src="../assets/img/bug/a10.png"
                   alt=""></span><span>违规扣分：{{n.store_part_of}}</span><span>商标类型： {{n.store_brand}}</span></p>
        </div>
      </li>
      <page></page>
    </main>
    <foot></foot>
  </section>
</template>
<script>
import selects from "../components/parts/selects"; //选项
import page from "../components/parts/page"; //分页
import foot from "../components/parts/foot"; //底部
export default {
  data() {
    return {
      form: {},
      arr: {
        dataList: []
      }
    };
  },

  components: {
    selects,
    page,
    foot
  },
  created() {},
  methods: {
    toInfo(obj) {
      console.log(obj);
      //天猫type->1 淘宝->2  /:id/type
      let url = `${location.href}/${obj.store_id}/${obj.store_terr_id}`;
      console.log(url);
      window.open(url);
    },
    returnForm(val) {
      console.log("返回的数据", val);
      this.form = _.clone(val);

      console.log(this.form);
      this.getList();
    },
    getList() {
      this.$axios
        .get(this.$location.storelist, {
          params: {
            ...this.form,
            letter:
              this.form.terr && this.form.terr == 2
                ? this.form.letter.join(",")
                : ""
          }
        })
        .then(res => {
          this.arr.dataList = _.get(res, "data", []);
          console.log(this.arr.dataList);
        });
    }
  }
};
</script>
<style scoped lang="scss">
.buyshop {
  .banner {
    background: url("../assets/img/bug/banner1.jpg") no-repeat center center;
    height: 130px;
    width: 100%;
    border: 1px solid red;
  }
  main {
    margin: 0 auto;
    // border: 1px solid red;
    width: 1200px;
    .list {
      width: 1200px;
      height: 200px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 3px 6px 0px rgba(33, 33, 33, 0.2);
      border-radius: 10px;
      margin-top: 20px;
      list-style: none;
      display: flex;
      flex-direction: column;

      .top {
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px;
        padding: 0 10px;
        border-bottom: 1px solid rgba(230, 230, 230, 1);
        > p {
          display: flex;
          align-items: center;
          img {
            margin-right: 12px;
            height: 22px;
          }
          .title {
            margin-right: 20px;
            font-size: 20px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(62, 62, 62, 1);
          }
          .tag {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 82px;
            height: 24px;
            border: 1px solid rgba(220, 220, 220, 1);
            border-radius: 4px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            margin-right: 16px;
          }
        }
        > span {
          font-size: 28px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 30, 67, 1);
        }
      }
      .bottom {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p:first-child {
          margin-bottom: 29px;
        }
        p {
          display: flex;
          padding: 0 10px;
          margin: 0 20px;
          span {
            width: 160px;
            display: flex;
            align-items: center;
            text-align: left;
            margin-right: 66px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            img {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
</style>