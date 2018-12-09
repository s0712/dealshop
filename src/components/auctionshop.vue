<template>
  <section class="auctionshop">
    <img src="../../src/assets/img/bug/banner.png"
         alt="">
    <selects :path="$route.fullPath"></selects>
    <main>

      <li class="list"
          v-for="n in 10"
          :key="n">
        <div class="top">
          <p><img src="../../src/assets/img/bug/a9.png"
                 alt="">
            <span class="title">杭州地区主营枕头旗舰店名字好听优质店铺诚心出售</span><span class="tag">动态全红</span><span class="tag">优质店铺</span><span class="tag">一级类目</span></p>
          <p>
            <font>起拍价</font>
            <span>30.00万</span>
          </p>

        </div>
        <div class="bottom">
          <p><span>所属行业:家居用品</span><span>所属地区:滑动地区</span><span>商城类型:旗舰店</span><span>纳税资质:小规模纳税人</span><span>消保金:5万(退还)</span><span>一口价:43.4万</span></p>
          <p><span>消保金:5万(退还)</span><span>技术年费:6万(退还)</span><span>动态评分: <img src="../assets/img/bug/a10.png"
                   alt=""></span><span>商标类型:R标(第20类)</span><span>商标类型:R标(第20类)</span></p>
        </div>
        <div class="footer">
          <div class="footer_l">
            <font>竞拍时间:</font> <span>1</span><span>1</span>
            <font>月</font><span>2</span><span>8</span>
            <font>日</font>
            <p><span>1</span><span>4</span>
              <font>:</font>
              <span>0</span><span>0</span>
              <font>:</font>
              <span>0</span><span>0</span>

            </p>
          </div>
          <p class="footer_r">
            <font>已有13人报名</font>
            <span>点击报名</span>
          </p>
        </div>
      </li>
      <page></page>
    </main>
    <foot></foot>
  </section>
</template>
<script>
import foot from "../components/parts/foot";
import selects from "../components/parts/selects";
import page from "../components/parts/page";
export default {
  data() {
    return {};
  },
  components: {
    selects,
    page,
    foot
  },
  created() {
    console.log(this.$route);
  },
  methods: {}
};
</script>
<style lang="scss">
.auctionshop {
  > img {
    width: 1920px;
  }
  main {
    width: 1200px;
    margin: 0 auto;
    .list {
      width: 1200px;
      height: 250px;
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
        > p:last-child {
          font {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            margin-right: 15px;
          }
          span {
            font-size: 28px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(255, 30, 67, 1);
          }
        }
      }
      .bottom {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p:first-child {
          margin-bottom: 28px;
        }
        p {
          display: flex;
          padding: 0 10px;
          margin: 0 20px;
          span {
            display: block;
            flex-basis: 180px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            text-align: left;
            display: flex;
            align-items: center;
            img {
              margin-left: 5px;
            }
          }
        }
      }
      .footer {
        margin: 0 20px;
        height: 60px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        &_l {
          display: flex;
          align-items: center;
          font {
            font-size: 18px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(31, 31, 31, 1);
          }
          span {
            width: 18px;
            height: 26px;
            background: rgba(231, 231, 231, 1);
            font-size: 18px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-left: 5px;
          }
          p {
            margin-left: 32px;
            display: flex;
            span {
              display: block;
              width: 18px;
              height: 26px;
              background: rgba(231, 231, 231, 1);
              font-size: 18px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              margin-left: 5px;
            }
            font {
              font-size: 18px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(31, 31, 31, 1);
              margin: 0 7px;
            }
          }
        }
        &_r {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          font {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            background: rgba(255, 237, 224, 1);
            border-radius: 4px;
          }
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 150px;
            background: rgba(254, 112, 4, 1);
            border-radius: 4px;
            font-size: 18px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(254, 254, 254, 1);
          }
        }
      }
    }
  }
}
</style>