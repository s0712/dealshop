<template>
  <section class="selects">
    <div class="selectinput">
      <el-input placeholder="填写关键词或网站编号"
                v-model="input23">
      </el-input>
      <img src="../../assets/img/bug/a3.png"
           alt="">
    </div>
    <li class="item">
      <p class="title">所在平台</p>
      <div class="list"><span :class="{'active':true}">天猫商城</span> <span>企业淘宝</span></div>
    </li>
    <li class="item">
      <p class="title">商城类型</p>
      <div class="list"><span :class="{'active':true}">旗舰店</span> <span>专营店</span><span>专卖店</span></div>
    </li>
    <li class="item"
        v-if="other.active==1">
      <p class="title">店铺状态</p>
      <div class="list"><span :class="{'active':true}">全部</span> <span>等待升级企业店铺</span><span>已是企业店铺</span>
      </div>
    </li>
    <li class="item"
        v-if="other.active==1">
      <p class="title">信用等级</p>
      <div class="list xinyong"><span :class="{'active':true}">不限</span>
        <div class="deng">
          <el-slider v-model="value9"
                     range
                     show-stops
                     :min="1"
                     :max="15"
                     :format-tooltip="formatTooltip">
          </el-slider>
          <div class="deng_ke">
            <span>钻<img src="../../assets/img/bug/a6.png"
                   alt=""></span>
            <p class="ke">
              <em></em>
              <em></em>
              <em></em>
              <em></em>
            </p>
            <span>皇冠<img src="../../assets/img/bug/a7.png"
                   alt=""></span>
            <p class="ke">
              <em></em>
              <em></em>
              <em></em>
              <em></em>
            </p>
            <span>金冠<img src="../../assets/img/bug/a8.png"
                   alt=""></span>
            <p class="ke">
              <em></em>
              <em></em>
              <em></em>
              <em></em>
            </p>
          </div>
        </div>
        <font>确认</font>
      </div>
    </li>
    <li class="item">
      <p class="title">所属行业</p>
      <div class="list suoshu"><span><a :class="{'active':true}">全部</a></span><span>服装鞋包</span><span>美容护理</span><span>数码电器</span><span>游戏/话费</span><span>食品/保健</span><span>母婴</span><span>运动户外</span><span>家装家饰</span><span>家居用品</span><span>珠宝/首饰</span><span>汽车配件</span><span>书籍音像</span><span>玩乐/收藏</span><span>手机</span><span>大家电</span><span>其他行业</span></div>
    </li>
    <li class="item">
      <p class="title">更多选项</p>
      <div class="list gengduo">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="可接受带货"></el-checkbox>
          <el-checkbox label="能提供货源"></el-checkbox>
          <el-checkbox label="无扣分"></el-checkbox>
          <el-checkbox label="带团队转让"></el-checkbox>
        </el-checkbox-group>
      </div>
    </li>
    <li class="item">
      <p class="title">全部</p>
      <div class="list quanbu"><span>正在竞拍 ( 0 )</span> <span>等待竞拍 ( 0 )</span><span>竞拍完成 ( 0 )</span></div>
    </li>
    <li class="item"
        v-if="other.active==1">
      <p class="title">价格</p>
      <div class="list"><span :class="{'active':true}">5万-10万</span> <span>10万-20万</span><span>20万-50万</span><span>50万以上</span></div>
    </li>
    <li class="item"
        v-if="other.active==1">
      <p class="title">其他</p>
      <div class="list"><span :class="{'active':true}">地区范围</span> <span>扣分情况</span><span>纳税人资质</span><span>是否带货</span></div>
    </li>
    <li class="item"
        v-if="other.active==1">
      <p class="title">默认排序</p>
      <div class="list moren"><span>出售价格 <span class="s"><img src="../../assets/img/bug/a4.png"
                 alt=""><img src="../../assets/img/bug/a5.png"
                 alt=""></span></span></div>
    </li>

  </section>
</template>
<script>
export default {
  props: ["path"],
  data() {
    return {
      input23: "",
      value9: [4, 8],
      other: {
        active: 1 //1.购买网店 2.网店拍卖
      }
    };
  },

  created() {
    console.log("当前路径是:", this.path);
    //1为购买网店2为网店拍卖
    this.path == "/buyshop" ? (this.other.active = 1) : (this.other.active = 2);
  },
  methods: {
    formatTooltip(val) {
      console.log(val);
      if (val < 6) {
        return `${val}钻`;
      } else if (val < 11) {
        return `${val - 5}皇冠`;
      } else {
        return `${val - 10}金冠`;
      }
      //   return val / 100;
    }
  }
};
</script>
<style lang="scss">
.selects {
  overflow: hidden;
  width: 1200px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 6px 0px rgba(33, 33, 33, 0.2);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 13px;

  .selectinput {
    width: 660px;
    height: 50px;
    border: 1px solid rgba(234, 234, 234, 1);
    border-radius: 25px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    margin-top: 30px;

    > img {
      width: 28px;
      height: 28px;
      margin-right: 26px;
      cursor: pointer;
    }
    .el-input {
      margin-left: 26px;
      padding: 0;
      font-size: 18px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
    .el-input__inner {
      border: none !important;
    }
  }

  .item {
    // border: 1px solid red;
    list-style: none;
    padding: 15px 0;
    margin: 0 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(234, 234, 234, 1);
    .title {
      //   border: 1px solid red;
      display: block;
      width: 56px;
      height: 15px;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(62, 62, 62, 1);
      text-align: justify;
    }
    .title:after {
      content: " ";
      display: inline-block;
      width: 100%;
    }
    .list {
      //   border: 1px solid red;
      margin-left: 37px;
      flex: 1;
      display: flex;
      align-items: center;

      > span {
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-right: 52px;

        // border: 1px solid red;
      }

      .active {
        border-radius: 4px;
        padding: 1px 10px 1px;
        border: 1px solid rgba(254, 112, 4, 1);
        color: rgba(255, 113, 10, 1);
      }
    }
    .suoshu {
      flex-wrap: wrap;
      span {
        width: 93px;
        margin-right: 0;
        text-align: left;
        a.active {
          border-radius: 4px;
          padding: 1px 10px 1px;
          border: 1px solid rgba(254, 112, 4, 1);
          color: rgba(255, 113, 10, 1);
        }
      }
    }
    .moren {
      > span {
        border: 1px solid red;
        display: flex;
        .s {
          margin-left: 5px;
          border: 1px solid blue;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          img {
            cursor: pointer;
          }
        }
      }
    }
    .xinyong {
      .deng {
        font-size: 12px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(70, 70, 70, 1);
        .el-slider__runway {
          //   border: 1px solid green;
          width: 856px;
        }
        .deng_ke {
          width: 880px;
          //   border: 1px solid blue;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .ke {
            // border: 1px solid red;
            box-sizing: border-box;
            width: 178px;
            display: flex;
            justify-content: space-between;
            display: none;
            em {
              display: block;
              width: 2px;
              height: 8px;
              background: rgba(221, 221, 221, 1);
            }
          }

          span {
            flex: 1;
            // border: 1px solid red;
            box-sizing: border-box;
            text-align: left;
            img {
              margin-left: 2px;
            }
          }
          span:last-child {
            // max-width: 55px;
            padding-left: 10px;
          }
        }
      }
    }
    .gengduo {
      display: flex;
      align-items: center;
      height: 100%;
      .el-checkbox__label {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-top: 1px;
      }
    }
    .quanbu {
      display: flex;
      align-items: center;
      margin-top: 1px;
    }
  }
}
</style>