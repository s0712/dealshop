<template>
  <section class="self">
    <main>
      <selfmenu></selfmenu>
      <section class="component">
        <myhouse v-if="alert.myhouse"></myhouse>
        <mysell v-if="alert.mysell"></mysell>
        <recharge v-if="alert.recharge"></recharge>
        <mydeposit v-if="alert.mydeposit"></mydeposit>
        <changeinfo v-if="alert.changeinfo"></changeinfo>
        <changepassword v-if="alert.changepassword"></changepassword>
        <setpaypassword v-if="alert.setpaypassword"></setpaypassword>
        <appraise v-if="alert.appraise"></appraise>
      </section>
    </main>
    <foot></foot>
  </section>
</template>
<script>
import foot from "../components/parts/foot";
import selfmenu from "../components/selfParts/selfMenu"; //个人中心主页左侧菜单
import myhouse from "../components/selfParts/myhouse"; //主页
import mysell from "../components/selfParts/mysell"; //我卖出的->我售出的/我收藏的/我购买的
import recharge from "../components/selfParts/recharge"; //资金管理->我要充值/充值记录
import mydeposit from "../components/selfParts/mydeposit"; //资金管理->我要提现/提现记录
import changeinfo from "../components/selfParts/changeinfo"; //信息管理->修改个人资料
import changepassword from "../components/selfParts/changepassword"; //信息管理->修改登录密码
import setpaypassword from "../components/selfParts/setpaypassword"; //信息管理->修改支付密码
import appraise from "../components/selfParts/appraise"; //投诉评价->我的投诉/我的评价
export default {
  data() {
    return {
      alert: {
        myhouse: true,
        mysell: false,
        recharge: false,
        mydeposit: false,
        changeinfo: false,
        changepassword: false,
        setpaypassword: false,
        appraise: false
      }
    };
  },
  components: {
    foot,
    selfmenu,
    myhouse,
    mysell,
    recharge,
    mydeposit,
    changeinfo,
    changepassword,
    setpaypassword,
    appraise
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss">
.self {
  main {
    width: 1200px;

    margin: 0 auto;
    border: 1px solid blue;

    display: flex;
    .component {
      flex: 1;
      border: 1px solid green;
      margin-left: 24px;
      height: 880px;
      overflow-y: auto;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(255, 240, 201, 1);
      box-shadow: 0px 2px 4px 0px rgba(33, 33, 33, 0.09);
      border-radius: 10px;
    }
  }
}
</style>