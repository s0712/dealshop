<template>
  <section class="storeInfo">
    <!--店铺信息部分-->
    <main class="storeContainer">
      <p class="title">店铺信息</p>
      <el-form :model="form" :rules="rules" ref="form" label-width="130px" class="demo-ruleForm">
        <el-form-item label="网店地址" prop="storeAddress">
          <el-input v-model="form.storeAddress" @change="log(form.storeAddress)"></el-input>
        </el-form-item>
        <el-form-item label="旺旺名" prop="wangwangName">
          <el-input v-model="form.wangwangName"></el-input>
        </el-form-item>
        <el-form-item label="网店价格" prop="storePrice" class="storePrice">
          <el-input v-model="form.storePrice"></el-input>
          元
        </el-form-item>
        <el-form-item label="消保保证金" prop="cachDeposit">
          <el-radio-group v-model="form.cachDeposit">
            <el-radio label="1">需要退还</el-radio>
            <el-radio label="2">不需要退还</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="注册网店身份证" prop="registerIdentity" v-if="saleonline=='saleTaobao'">
          <el-radio-group v-model="form.registerIdentity">
            <el-radio label="1">本人身份证开的店</el-radio>
            <el-radio label="2">不是本人身份证开的店</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="商城类型" prop="mallType" v-if="saleonline=='saleTianmao'">
          <el-checkbox-group v-model="form.mallType">
            <el-checkbox label="旗舰店"></el-checkbox>
            <el-checkbox label="专营店"></el-checkbox>
            <el-checkbox label="专卖店"></el-checkbox>
            <el-checkbox label="双十一"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="商标类型" prop="brandType" v-if="saleonline=='saleTianmao'">
          <el-radio-group v-model="form.brandType">
            <el-radio label="1">需要退还</el-radio>
            <el-radio label="2">不需要退还</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="可经营的一级类目" prop="manage" class="manage" v-if="saleonline=='saleTianmao'">
          <el-input v-model="form.manage"></el-input>
          <span class="warning">(多个请以逗号分隔)</span>
        </el-form-item>
        <el-form-item label="贷款详情" prop="loans" v-if="saleonline=='saleTianmao'">
          <el-radio-group v-model="form.loans">
            <el-radio label="1">有</el-radio>
            <el-radio label="2">无</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="技术年费" prop="annualFee" class="storePrice" v-if="saleonline=='saleTianmao'">
          <el-input v-model="form.annualFee"></el-input>
          元
        </el-form-item>
        <el-form-item label="完成营业额指标" prop="achieveTarget" v-if="saleonline=='saleTianmao'">
          <el-radio-group v-model="form.achieveTarget">
            <el-radio label="1">有</el-radio>
            <el-radio label="2">无</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="技术年费需要退还" prop="returnFee" v-if="saleonline=='saleTianmao'">
          <el-radio-group v-model="form.returnFee">
            <el-radio label="1">有</el-radio>
            <el-radio label="2">无</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="公司名称" prop="companyName" v-if="saleonline=='saleTianmao'">
          <el-input v-model="form.companyName"></el-input>
        </el-form-item>
        <el-form-item label="公司注册资金" prop="registerFund" class="storePrice" v-if="saleonline=='saleTianmao'">
          <el-input v-model="form.registerFund"></el-input>
          元
        </el-form-item>
        <el-form-item label="扣分情况" prop="score">
          <div class="score">
            <section class="deductScore">
              <span>扣分情况</span>
              <el-input v-model="form.score"></el-input>
              分
            </section>
            <section class="deductScore">
              <span>严重违规扣</span>
              <el-input v-model="form.illegal"></el-input>
              分
            </section>
            <section class="deductScore">
              <span> 出售假冒商品扣</span>
              <el-input v-model="form.saleFales" class="infoInput"></el-input>
              分
            </section>
          </div>
        </el-form-item>
        <el-form-item label="可提供的证件" prop="mallType">
          <el-checkbox-group v-model="form.certificate">
            <el-checkbox label="旗舰店"></el-checkbox>
            <el-checkbox label="专营店"></el-checkbox>
            <el-checkbox label="专卖店"></el-checkbox>
            <el-checkbox label="双十一"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="月利润" prop="profit">
          <el-radio-group v-model="form.profit">
            <el-radio label="1">无</el-radio>
            <el-radio label="2">有</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否提供货源渠道" prop="channal">
          <el-radio-group v-model="form.channal">
            <el-radio label="1">无</el-radio>
            <el-radio label="2">有</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否带团队转让" prop="transfer">
          <el-radio-group v-model="form.transfer">
            <el-radio label="1">无</el-radio>
            <el-radio label="2">有</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否传授运营经验" prop="experience">
          <el-radio-group v-model="form.experience">
            <el-radio label="1">无</el-radio>
            <el-radio label="2">有</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </main>
    <!--联系方式部分-->
    <div class="contact">
      <p>联系方式</p>
      <el-form :model="form" :rules="rules" ref="form" label-width="130px" class="demo-ruleForm">
        <el-form-item label="您的姓名" prop="yourName">
          <el-input v-model="form.yourName"></el-input>
        </el-form-item>
        <el-form-item label="您的手机" prop="yourPhone">
          <el-input v-model="form.yourPhone"></el-input>
        </el-form-item>
        <el-form-item label="您的QQ号" prop="yourQQ">
          <el-input v-model="form.yourQQ"></el-input>
        </el-form-item>
        <span class="button">立即提交</span>
      </el-form>
    </div>
  </section>
</template>

<script>
  export default {
    // name: "storeInfo.vue"
    data() {
      return {
        form: {
          storeAddress: '',          //网店地址
          wangwangName: "",          //旺旺名
          storePrice: "",            //网店价格
          cachDeposit: "1",         //消保保证金
          registerIdentity:"1",       //注册网店身份证
          mallType: ["旗舰店"],     //商城类型
          brandType: "1",            //商标类型
          manage: "",                //可经营的一级类目
          loans: "1",                //贷款详情
          annualFee: "",             //技术年费
          achieveTarget: "1",        //完成营业额指标
          returnFee: "1",            //技术年费需退还
          companyName: "",          //公司名称
          registerFund: "",         //公司注册资金
          score: "",                //扣分情况
          illegal: "",              //严重违规扣
          saleFales: "",            //出售假冒商品售
          certificate: ["旗舰店"],   //可提供的证件
          profit: "1",               //月利润
          channal: "1",               //是否提供货源渠道
          transfer: "1",             //是否带团队转让
          experience: "1",           //是否传授运营经验
          yourName: "",             //您的名字
          yourPhone: ""               //您的手机
        },
        rules: {
          storeAddress: [
            {required: true, message: '请输入网店地址', trigger: 'change'},
          ],
          wangwangName: [
            {required: true, message: '请输入旺旺名', trigger: 'change'},
          ],
          storePrice: [
            {required: true, message: '请输入网店价格', trigger: 'change'},
          ],
          cachDeposit: [
            {required: true, message: '请选择消保保证金', trigger: 'change'},
          ],
          registerIdentity: [
            {required: true, message: '请选择注册网店省份证', trigger: 'change'},
          ],
          mallType: [
            {required: true, message: '请选择商城类型', trigger: 'change'},
          ],
          brandType: [
            {required: true, message: '请选择商标类型', trigger: 'change'},
          ],
          manage: [
            {required: true, message: '请输入可经营的一级类目', trigger: 'change'},
          ],
          loans: [
            {required: true, message: '请选择贷款详情', trigger: 'change'},
          ],
          annualFee: [
            {required: true, message: '请输入技术年费', trigger: 'change'},
          ],
          achieveTarget: [
            {required: true, message: '请选择完成营业额指标', trigger: 'change'},
          ],
          returnFee: [
            {required: true, message: '请选择技术年费需要退还', trigger: 'change'},
          ],
          companyName: [
            {required: true, message: '请输入公司名称', trigger: 'change'},
          ],
          registerFund: [
            {required: true, message: '请输入公司注册资金', trigger: 'change'},
          ],
          score: [
            {required: true, message: '请输入扣分情况', trigger: 'change'},
          ],
          profit: [
            {required: true, message: '请选择月利润', trigger: 'change'},
          ],
          channal: [
            {required: true, message: '请选择是否提供货源渠道', trigger: 'change'},
          ],
          transfer: [
            {required: true, message: '请选择是否带团队转让', trigger: 'change'},
          ],
          experience: [
            {required: true, message: '请选择是否传授运营经验', trigger: 'change'},
          ],
          yourName: [
            {required: true, message: '请输入您的姓名', trigger: 'change'},
          ],
          yourPhone: [
            {required: true, message: '请输入您的手机', trigger: 'change'},
          ],
          yourQQ: [
            {required: true, message: '请输入您的QQ', trigger: 'change'},
          ]
        },
        // saleonline:this.saleonline

      }
    },
    props:['saleonline'],
    watch:{
      saleonline(val){
        // console.log(val)
      }
    },
    created(){
      console.log(this.saleonline)
    },
    methods: {
      log(a) {
        // console.log(a)
      }
    }
  }
</script>

<style lang="scss">
  .storeInfo {
    p {
      font-size: 20px;
      color: #35394C;
      font-weight: bold;
      padding: 10px 0;
      margin-bottom: 20px;
    }
    .storeContainer {
      margin-top: 20px;
      border: 1px solid rgba(33, 33, 33, 0.1);
      box-shadow: 0px 0px 3px 0px rgba(33, 33, 33, 0.2);
      border-radius: 3px;
      padding: 21px 35px;
      box-sizing: border-box;
      .el-form {
        .manage {
          .el-input {
            width: 80%;
          }
        }
        .storePrice {
          .el-input {
            width: 200px;
          }
        }
        .el-form-item {
          .el-radio__input.is-checked .el-radio__inner {
            border-color: #FF7D42;
            background: #FF7D42;
          }
          .el-radio__input.is-checked + .el-radio__label {
            color: #999999;
          }
        }
        .el-checkbox__input.is-checked .el-checkbox__inner {
          border-color: #FF7D42;
          background: #FF7D42;
        }
        .el-checkbox__input.is-checked + .el-checkbox__label {
          color: #999999;
        }
        .manage{
          .warning{
            font-size: 14px;
            color: #EC3B3B;
            width: 180px;
            font-weight: bold;
          }
        }
        .score {
          display: flex;
          justify-content: space-around;
          color: #666;
          font-size: 18px;
          span {
            font-size: 16px;
            color: #999999;
          }
          .el-input {
            width: 80px;
            margin: 0 10px;
          }
        }
      }

    }
    .contact {
      margin-top: 20px;
      border: 1px solid rgba(33, 33, 33, 0.1);
      box-shadow: 0px 0px 3px 0px rgba(33, 33, 33, 0.2);
      border-radius: 3px;
      padding: 21px 35px;
      box-sizing: border-box;
      .button{
        display: block;
        width: 350px;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        font-size: 20px;
        text-align: center;
        background:rgba(224,118,74,1);
        box-shadow:0px 3px 12px 1px rgba(229,136,97,0.78);
        border-radius:4px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
