<template>
  <section class="buyshop">
    <img src="../../src/assets/img/bug/banner.png"
         alt="">
    <main>
      <selects></selects>
      <li class="list"
          v-for="n in 10"
          :key="n">
        <div class="top">
          <p><img src="../../src/assets/img/bug/a9.png"
                 alt="">
            <span class="title">杭州地区主营枕头旗舰店名字好听优质店铺诚心出售</span><span class="tag">动态全红</span><span class="tag">优质店铺</span><span class="tag">一级类目</span></p>
          <span>30.00万</span>
        </div>
        <div class="bottom">
          <p><span>所属行业:家居用品</span><span>所属地区:家居用品</span><span>商城类型:家居用品</span><span>所属行业:家居用品</span><span>所属行业:家居用品</span></p>
          <p><span>所属行业:家居用品</span><span>所属地区:家居用品</span><span>商城类型:家居用品</span><span>所属行业:家居用品</span></p>
        </div>
      </li>
    </main>

  </section>
</template>
<script>
import selects from "../components/parts/selects";
export default {
  data() {
    return {};
  },
  components: {
    selects
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="scss">
.buyshop {
  > img {
    width: 1920px;
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
            margin-right: 66px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
          }
        }
      }
    }
  }
}
</style>