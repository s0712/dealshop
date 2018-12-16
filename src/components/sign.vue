<template>
  <section class="sign">
    <div class="banner">
      <div class="inner">
        <div class="left">
          <p class="title"><img src="../assets/img/login/logo.png"
                 alt=""></p>
          <p class="zhu">欢迎您注册,已有账号?请<span>登录</span></p>
          <div class="form">
            <el-form ref="form"
                     :model="form">
              <el-form-item>
                <el-input v-model="form.user"
                          placeholder="请输入您的用户名">
                  <i slot="prefix"><img src="../assets/img/sign/s1.png"
                         alt=""></i>
                </el-input>
                <span class="ti">用户名为2-20位，由汉字、字母（不分大小写），数字或下划线组成！</span>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.user"
                          placeholder="请输入手机号">
                  <i slot="prefix"><img src="../assets/img/sign/s2.png"
                         alt=""></i>
                </el-input>
                <span class="ti">请填写常用手机号码</span>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.user"
                          placeholder="请输入QQ号">
                  <i slot="prefix"><img src="../assets/img/sign/s3.png"
                         alt=""></i>
                </el-input>
                <span class="ti">请填写常用QQ号</span>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.user"
                          placeholder="请输入密码">
                  <i slot="prefix"><img src="../assets/img/sign/s4.png"
                         alt=""></i>
                </el-input>
                <span class="ti">密码为6-12位，由字母、数字和字符组成，字母区分大小写</span>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.user"
                          placeholder="请确认密码">
                  <i slot="prefix"><img src="../assets/img/sign/s4.png"
                         alt=""></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.user"
                          placeholder="请输入验证码">
                  <i slot="prefix"><img src="../assets/img/sign/syan.png"
                         alt=""></i>
                </el-input>
                <span class="yan">7769</span>
              </el-form-item>

            </el-form>

            <div class="btns">
              <p class="btn">登 录</p>

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
.sign {
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
      width: 1000px;
      height: 860px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 1);
      .left {
        flex: 1;

        .title {
          margin-top: 47px;
          margin-bottom: 20px;
        }
        .zhu {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: #ff8226;
          margin-bottom: 50px;
          span {
            color: #333;
            text-decoration: underline;
          }
        }
        .form {
          margin: 0 auto;
          margin-left: 312px;
          .el-form {
            .el-form-item {
              display: flex;
              .el-form-item__content {
                flex: 1;
                margin-left: 0 !important;
                display: flex;
                height: 46px;
                .yan {
                  width: 100px;
                  height: 46px;
                  background: rgba(255, 214, 184, 1);
                  border-radius: 3px;
                  margin-left: -100px;
                  z-index: 100;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                }
                .el-input {
                  max-width: 360px;
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
                    height: 46px;
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
                .ti {
                  display: flex;
                  align-items: center;
                  font-size: 12px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(179, 179, 179, 1);
                  text-align: left;
                  line-height: 20px;
                  width: 230px;
                  margin-left: 15px;
                }
              }
            }
          }

          .btns {
            margin-top: 8px;
            .btn {
              width: 360px;
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
          }
        }
      }
    }
  }
}
</style>