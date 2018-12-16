<template>
  <section class="assessShop">
    <section class="banner">
      <div>
        <span>已成功估价店铺数量</span>
        <p>
          <img src="../assets/img/assess/n_1.png"
               alt="">
          <img src="../assets/img/assess/n_3.png"
               alt="">
          <img src="../assets/img/assess/n_5.png"
               alt="">
          <img src="../assets/img/assess/n_7.png"
               alt="">
          <img src="../assets/img/assess/n_7.png"
               alt="">
          <img src="../assets/img/assess/n_9.png"
               alt="">
        </p>
      </div>
    </section>
    <section class="content">
      <p class="title">
        <img src="../assets/img/assess/a1.png"
             alt="">淘气宝网店估价
      </p>
      <p class="tab">
        <span :class="{'active':tabIndex==0}"
              @click="tabIndex=0">天猫商城价值评估</span>
        <span :class="{'active':tabIndex==1}"
              @click="tabIndex=1">淘宝网店价值评估</span>
      </p>
      <div class="form">
        <el-form ref="form"
                 :model="form"
                 label-width="80px">
          <el-form-item>
            <el-input v-model="form.name"
                      placeholder="请输入店铺链接或旺旺名">
              <i slot="suffix">必填</i>
              <i slot="prefix"><img src="../assets/img/assess/t1.png"
                     alt=""></i>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="form.name"
                      placeholder="请输入年营业额">
              <i slot="suffix">万元</i>
              <i slot="prefix"><img src="../assets/img/assess/t2.png"
                     alt=""></i>
            </el-input>
          </el-form-item>

          <el-form-item v-if="tabIndex==0">
            <el-input v-model="form.name"
                      placeholder="请输入近90天营业额">
              <i slot="suffix">万元</i>
              <i slot="prefix"><img src="../assets/img/assess/m3.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item v-if="tabIndex==0">
            <el-input v-model="form.name"
                      placeholder="请输入店铺保证金">
              <i slot="suffix">万元</i>
              <i slot="prefix"><img src="../assets/img/assess/m4.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item v-if="tabIndex==0">
            <el-select v-model="value"
                       placeholder="请确定店铺一级类目">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
              <i slot="prefix"><img src="../assets/img/assess/t5.png"
                     alt=""></i>
            </el-select>
          </el-form-item>
          <el-form-item v-if="tabIndex==0">
            <el-select v-model="value"
                       placeholder="请确定店铺类型">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
              <i slot="prefix"><img src="../assets/img/assess/a2.png"
                     alt=""></i>
            </el-select>
          </el-form-item>
          <el-form-item v-if="tabIndex==0">
            <el-input v-model="form.name"
                      placeholder="请输入店铺授权品牌">
              <i slot="suffix">选填</i>
              <i slot="prefix"><img src="../assets/img/assess/m5.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item v-if="tabIndex==0">
            <el-input v-model="form.name"
                      placeholder="请输入店铺技术年费">
              <i slot="suffix">万元</i>
              <i slot="prefix"><img src="../assets/img/assess/m6.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item v-if="tabIndex==1">
            <el-input v-model="form.name"
                      placeholder="请输入近30天营业额">
              <i slot="suffix">万元</i>
              <i slot="prefix"><img src="../assets/img/assess/t3.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item v-if="tabIndex==1">
            <el-input v-model="form.name"
                      placeholder="请输入客单价">
              <i slot="suffix">元</i>
              <i slot="prefix"><img src="../assets/img/assess/t4.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item v-if="tabIndex==1">
            <el-select v-model="value"
                       placeholder="请确定店铺主营类目">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
              <i slot="prefix"><img src="../assets/img/assess/t5.png"
                     alt=""></i>
            </el-select>
          </el-form-item>
          <el-form-item v-if="tabIndex==1">
            <el-input v-model="form.name"
                      placeholder="请输入店铺信誉值">
              <i slot="suffix">选填</i>
              <i slot="prefix"><img src="../assets/img/assess/t6.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item v-if="tabIndex==1">
            <el-input v-model="form.name"
                      placeholder="请输入店铺好评率">
              <i slot="suffix">%</i>
              <i slot="prefix"><img src="../assets/img/assess/t7.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item v-if="tabIndex==1">
            <el-input v-model="form.name"
                      placeholder="请输入虚拟占比">
              <i slot="suffix">%</i>
              <i slot="prefix"><img src="../assets/img/assess/t8.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.name"
                      placeholder="请输入QQ号">
              <i slot="suffix">必填</i>
              <i slot="prefix"><img src="../assets/img/assess/t9.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.name"
                      placeholder="请输入手机号">
              <i slot="suffix">必填</i>
              <i slot="prefix"><img src="../assets/img/assess/t10.png"
                     alt=""></i>
            </el-input>
          </el-form-item>
          <p class="btn">
            快捷估价
          </p>
        </el-form>
      </div>
    </section>
    <foot></foot>
  </section>
</template>
<script>
import foot from "../components/parts/foot";
export default {
  data() {
    return {
      tabIndex: 0,
      form: {
        name: ""
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  components: {
    foot
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss">
.assessShop {
  .banner {
    width: 100%;
    height: 390px;
    overflow: hidden;
    background: url("../assets/img/assess/banner.png") no-repeat center center;
    > div {
      //   width: 380px;
      margin: 0 auto;
      margin-top: 75px;
      span {
        font-size: 22px;
        font-family: MicrosoftYaHei;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      p {
        margin-top: 18px;
        height: 50px;
        img {
          margin-right: 10px;
        }
      }
    }
  }
  .content {
    width: 1200px;
    height: 1064px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 6px 0px rgba(33, 33, 33, 0.2);
    border-radius: 10px;
    margin: -102px auto 0;
    .title {
      font-size: 38px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      height: 102px;
      background: rgba(254, 112, 4, 1);
      border-radius: 10px 10px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        margin-right: 20px;
      }
    }
    .tab {
      height: 83px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 172px;
      border-bottom: 1px solid rgba(229, 229, 229, 1);
      span {
        cursor: pointer;
        font-size: 28px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(62, 62, 62, 1);
        padding-bottom: 20px;
      }
      span.active {
        padding-bottom: 18px;
        border-bottom: 2px solid #fe7004;
      }
    }
    .form {
      width: 520px;
      margin: 56px auto 70px;
      .el-form {
        .el-form-item {
          display: flex;
          .el-form-item__content {
            flex: 1;
            margin-left: 0 !important;
            .el-input {
              font-size: 16px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(127, 127, 127, 1);
              .el-input__inner {
                padding-left: 63px;
                width: 520px;
                height: 46px;
                border: 1px solid rgba(229, 229, 229, 1);
                border-radius: 6px;
              }
              .el-input__prefix {
                left: 20px;
                display: flex;
                align-items: center;
                i {
                  display: flex;
                  align-items: center;
                }
              }
              .el-input__suffix {
                right: 20px;
              }
            }
          }
        }
      }
      .btn {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: rgba(254, 113, 4, 1);
        border-radius: 6px;
        font-size: 22px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
        margin-top: 40px;
      }
    }
  }
}
.el-select-dropdown {
  .popper__arrow {
    left: 63px !important;
  }
  .el-select-dropdown__item {
    padding-left: 63px;
  }
}
</style>