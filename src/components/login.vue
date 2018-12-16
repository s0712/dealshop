<template>
  <section class="login">
    <div class="banner">
      <div class="inner">
        <div class="left"></div>
        <div class="right">
          <p class="title"><img src="../assets/img/login/logo.png"
                 alt=""></p>
          <div class="form">
            <el-form ref="form"
                     :model="form">
              <el-form-item>
                <el-input v-model="form.user"
                          placeholder="请输入您的用户名">
                  <i slot="prefix"><img src="../assets/img/login/l1.png"
                         alt=""></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.user"
                          placeholder="请输入密码">
                  <i slot="prefix"><img src="../assets/img/login/l2.png"
                         alt=""></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.user"
                          placeholder="请输入验证码">
                  <i slot="prefix"><img src="../assets/img/login/l3.png"
                         alt=""></i>
                </el-input>
                <span>7769</span>
              </el-form-item>

            </el-form>
            <p class="save">
              <el-checkbox v-model="form.save">记住密码</el-checkbox>
            </p>
            <div class="btns">
              <p class="btn">登 录</p>
              <p class="footbtn"><span>忘记密码</span><span>注册账号</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: "",
        password: "",
        save: ""
      }
    };
  },

  created() {},
  methods: {}
};
</script>
<style  lang="scss">
.login {
  display: flex;
  flex-direction: column;

  .banner {
    flex: 1;
    width: 100%;
    background: url("../assets/img/login/banner.png") no-repeat center center;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      .left {
        background: url("../assets/img/login/left.png") no-repeat center center;
        height: 560px;
        width: 640px;
      }
      .right {
        flex: 1;
        background: rgba(255, 255, 255, 1);
        .title {
          margin-top: 102px;
          margin-bottom: 40px;
        }
        .form {
          width: 320px;
          margin: 0 auto;
          .el-form {
            .el-form-item {
              display: flex;
              .el-form-item__content {
                flex: 1;
                margin-left: 0 !important;
                position: relative;
                > span {
                  width: 100px;
                  height: 46px;
                  background: rgba(255, 214, 184, 1);
                  border-radius: 3px;
                  position: absolute;
                  right: 0;
                  top: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                }
                .el-input {
                  font-size: 16px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(127, 127, 127, 1);
                  .el-input__inner {
                    padding-left: 63px;
                    background: #ffe7d6;
                    height: 46px;
                    border: 1px solid rgba(229, 229, 229, 1);
                    border-radius: 6px;
                    border: none;
                    font-size: 14px;
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(158, 67, 0, 1);
                  }
                  .el-input__inner::-webkit-input-placeholder {
                    font-size: 14px;
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(255, 181, 127, 1);
                  }
                  .el-input__prefix {
                    width: 50px;
                    background: rgba(255, 157, 85, 1);
                    border-radius: 3px 0px 0px 3px;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    i {
                      display: flex;
                      align-items: center;
                    }
                  }
                }
              }
            }
          }
          .save {
            text-align: left;
          }
          .btns {
            margin-top: 8px;
            .btn {
              height: 46px;
              line-height: 46px;
              background: rgba(255, 113, 53, 1);
              box-shadow: 0px 2px 6px 0px rgba(255, 113, 53, 0.58);
              border-radius: 3px;
              font-size: 16px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              cursor: pointer;
            }
            .footbtn {
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              font-family: PingFang-SC-Bold;
              font-weight: bold;
              text-decoration: underline;
              color: rgba(255, 130, 38, 1);
              margin-top: 10px;
              span {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>