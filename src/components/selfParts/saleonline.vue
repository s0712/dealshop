<template>
  <section class="saleOnline">
    <div class="saleRight">
      <section class="saleProcess">
        <el-tabs v-model="saleonline" @tab-click="handleClick">
          <el-tab-pane label="出售天猫店" name="saleTianmao"></el-tab-pane>
          <el-tab-pane label="出售淘宝店" name="saleTaobao"></el-tab-pane>
        </el-tabs>
        <div class="process">
          <span class="orange">网店购买流程</span>
          <span class="step">1.注册账号 <i class="el-icon-arrow-right"></i> 2.登记网店<i class="el-icon-arrow-right"></i> 3.网站审核<i class="el-icon-arrow-right"></i>4.买家拍下网店并付款<i class="el-icon-arrow-right"></i>5.交接网店并签订合同<i class="el-icon-arrow-right"></i>6.放款提款</span>
        </div>
        <p class="hint">温馨提示：出售网店，交易成功后，易店宝将收取网店成交价格的6%作为手续费</p>
        <el-form :model="form" :rules="rules" ref="form" label-width="90px" class="demo-ruleForm">
          <el-form-item label="信息标题" prop="infoTitle">
            <el-input v-model="form.infoTitle"></el-input>
          </el-form-item>
          <el-form-item label="网店描述" prop="describe" class="describe">
            <el-input v-model="form.describe"></el-input>
          </el-form-item>
          <el-form-item label="网店截图" prop="uploadImg" class="uploadImg">
            <el-upload
              v-for="i in 3" :key="i"
              class="uploadImg"
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <storeInfo :saleonline="saleonline"></storeInfo>

      </section>
    </div>
  </section>
</template>

<script>
  import storeInfo from '../selfParts/storeInfo'
    export default {
       components:{
         storeInfo
       },
      data(){
         return{
           saleonline: 'saleTianmao', //选项卡点击按钮
           form:{
             infoTitle: '',      //信息标题
             describe: '',       //网店描述
             imageUrl: '',        //网店截图上路径
             dialogImageUrl: '',
             dialogVisible: false,

           },

        rules:{
          infoTitle:[
          { required: true, message: '请输入信息标题', trigger: 'change' },
          ],
          describe:[
            { required: true, message: '请输入网店描述', trigger: 'change' },
          ],
          uploadImg:[
            { required: true, message: '请上传网店截图', trigger: 'change' },
          ],
        }
         }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab.name);
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
      },
    }
</script>

<style lang="scss">
  .saleOnline{
      width: 1200px;
      margin: 0 auto;
      text-align: left;
      overflow: hidden;
      padding: 40px 0;
    .el-tabs__item.is-active{
      color: #FF7D42;
    }
    .saleRight{
       float: right;
       width: 960px;
       font-size: 20px;
       .saleProcess{
         background: rgba(255, 255, 255, 1);
         border: 1px solid rgba(33, 33, 33, 0.1);
         box-shadow: 0px 0px 3px 0px rgba(33, 33, 33, 0.2);
         border-radius: 3px;
         padding: 21px 35px;
         box-sizing: border-box;
         .title{
           border-bottom: 1px solid rgba(33, 33, 33, 0.3);
           >span{
             display: inline-block;
             font-size: 20px;
             padding: 10px 0;
             margin-right: 30px;
             font-weight: bold;
           }
         }
         .describe .el-input__inner {
           height: 100px;
         }
         .process{
           margin-top: 30px;
           box-shadow: 0px 0px 11px 0px rgba(33, 33, 33, 0.3);
           border-radius: 3px;
           padding: 10px;
           display: flex;
           height: 130px;
           line-height: 60px;
           justify-content: space-between;
           .orange{
             width: 220px;
             font-size: 20px;
             color: #FE7004;
             margin-right: 10px;
           }
           .step{
             font-size: 16px;
             color: #3E3E3E;
           }
         }
         .hint{
           padding: 20px 10px;
           font-size: 14px;
           color: #EC3B3B;
           font-weight: bold;
         }
         .el-form-item{
           overflow: hidden;
           .el-upload {
             float: left;
             margin-right: 20px;
           }
         }
         .onlineScreenshot{
           display: flex;
           justify-content: flex-start;
           margin-top: 20px;
             section{
             margin: 0 20px;
           }
         }
       }
     }
  }
</style>
