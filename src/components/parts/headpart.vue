<template>
  <section class="headpart s">
    <div class="main">
      <nav class="main_1">
        <img src="../../assets/img/bug/a1.png"
             alt="">
        <img src="../../assets/img/bug/a2.png"
             alt="">
      </nav>
      <nav class="main_2">
        <span v-for="(item,index) in arr.navArr"
              :key="index"
              :class="{'navhover':item.router==$route.fullPath}"
              @click="goRouter(item)">{{item.name}}</span>
      </nav>
      <nav class="main_3">
        <span @click="goRouter(arr.rightnagv[0])">登录</span>
        <em></em>
        <span @click="goRouter(arr.rightnagv[1])">免费注册</span>
      </nav>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      arr: {
        navArr: [
          {
            name: "首页",
            router: "/"
          },
          {
            name: "购买网店",
            router: "/buyshop"
          },
          {
            name: "出售网店",
            router: "/sellshop"
          },
          {
            name: "网店估价",
            router: "/assessshop"
          },
          {
            name: "网店拍卖",
            router: "/auctionshop"
          },
          {
            name: "个人中心",
            router: "/self"
          }
        ],
        rightnagv: [
          {
            name: "登录",
            router: "/login"
          },
          {
            name: "注册",
            router: "/sign"
          }
        ]
      }
    };
  },

  created() {
    // console.log(this.$route);
  },
  methods: {
    goRouter(obj) {
      console.log(obj);
      this.$emit("returnRouter", obj);
    }
  }
};
</script>
<style lang="scss">
.headpart {
  width: 100%;
  height: 70px;
  background: rgba(31, 31, 31, 1);
  box-shadow: 0px 2px 4px 0px rgba(17, 23, 61, 0.2);
  .main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    &_1 {
      padding-left: 10px;
      display: flex;
      align-items: center;
      img:last-child {
        margin-left: 8px;
      }
    }
    &_2 {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      font-size: 16px;
      font-family: SimSun;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      span {
        margin-right: 80px;
        padding-bottom: 15px;
        cursor: pointer;
      }
      .navhover {
        padding-bottom: 13px;
        color: rgba(254, 113, 4, 1);
        border-bottom: 2px solid rgba(254, 112, 4, 1);
      }
    }
    &_3 {
      padding-right: 10px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 15px;
      font-size: 16px;
      font-family: SimSun;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      em {
        width: 1px;
        height: 18px;
        background: rgba(153, 153, 153, 1);
        margin: -3px 17px 0 17px;
      }
      span:hover {
        color: rgba(255, 110, 0, 1);
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>