<template>
  <section class="selfmenu">
    <el-menu default-active="2"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             :unique-opened="true">
      <el-submenu index="1">
        <template slot="title">
          <img src="../../assets/img/self/a1.png"
               alt=""
               class="nochoose">
          <img src="../../assets/img/self/a2.png"
               alt=""
               class="choose">
          <span>主页</span>
        </template>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <img src="../../assets/img/self/b1.png"
               alt=""
               class="nochoose">
          <img src="../../assets/img/self/b2.png"
               alt=""
               class="choose">
          <span>我是卖家</span>
        </template>

        <el-menu-item index="1-1">
          <font>我要售出网店</font>
        </el-menu-item>
        <el-menu-item index="1-2">
          <font>我售出的网店</font>
        </el-menu-item>
        <el-menu-item index="1-3">
          <font>合 同 签 署</font>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <img src="../../assets/img/self/c1.png"
               alt=""
               class="nochoose">
          <img src="../../assets/img/self/c2.png"
               alt=""
               class="choose">
          <span>我是买家</span>
        </template>

        <el-menu-item index="1-1">
          <font>我购买的网店</font>
        </el-menu-item>
        <el-menu-item index="1-2">
          <font>我收藏的网店</font>
        </el-menu-item>
        <el-menu-item index="1-3">
          <font>合 同 签 署</font>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <img src="../../assets/img/self/d1.png"
               alt=""
               class="nochoose">
          <img src="../../assets/img/self/d2.png"
               alt=""
               class="choose">
          <span>资金管理</span>
        </template>

        <el-menu-item index="1-1">
          <font>我 要 充 值</font>
        </el-menu-item>
        <el-menu-item index="1-2">
          <font>充 值 记 录</font>
        </el-menu-item>
        <el-menu-item index="1-3">
          <font>我 要 提 现</font>
        </el-menu-item>
        <el-menu-item index="1-4">
          <font>提 现 记 录</font>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <img src="../../assets/img/self/e1.png"
               alt=""
               class="nochoose">
          <img src="../../assets/img/self/e2.png"
               alt=""
               class="choose">
          <span>信息管理</span>
        </template>

        <el-menu-item index="1-1">
          <font>修改个人资料</font>
        </el-menu-item>
        <el-menu-item index="1-2">
          <font>修改登录密码</font>
        </el-menu-item>
        <el-menu-item index="1-3">
          <font>提 现 记 录</font>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <img src="../../assets/img/self/f1.png"
               alt=""
               class="nochoose">
          <img src="../../assets/img/self/f2.png"
               alt=""
               class="choose">
          <span>投诉评价</span>
        </template>
        <el-menu-item index="1-1">
          <font>我的投诉</font>
        </el-menu-item>
        <el-menu-item index="1-2">
          <font>我的评价</font>
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },

  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style  lang="scss">
.selfmenu {
  width: 220px;
  height: 880px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 240, 201, 1);
  box-shadow: 0px 2px 4px 0px rgba(33, 33, 33, 0.09);
  border-radius: 10px;
  .el-menu {
    .el-submenu__title {
      display: flex;
      align-items: center;
      > img {
        width: 30px;
        height: 30px;
        margin-left: 20px;
      }
      .nochoose {
        display: inline-block;
      }
      .choose {
        display: none;
      }
      > span {
        font-size: 18px;
        font-family: "Adobe Heiti Std R";
        font-weight: normal;
        color: rgba(53, 57, 76, 1);
      }
    }
    .is-opened {
      .nochoose {
        display: none;
      }
      .choose {
        display: inline-block;
      }
      span {
        font-size: 20px;
        font-family: "Adobe Heiti Std R";
        font-weight: normal;
        color: rgba(255, 125, 66, 1);
      }
    }
    .el-menu-item {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-family: Adobe Heiti Std R;
      font-weight: normal;
      color: rgba(134, 137, 147, 1);
    }
    .el-menu-item.is-active {
      background-color: rgb(255, 241, 230);
      border-left: 2px solid #ff7d42;
      font {
        margin-left: -2px;
      }
    }
  }
}
</style>