<template>
  <section class="selects">
    <div class="selectinput">
      <el-input placeholder="填写关键词或网站编号"
                v-model="form.title"
                @keydown.enter.native='returnSelection'>

      </el-input>
      <img src="../../assets/img/bug/a3.png"
           alt=""
           @click="returnSelection">
    </div>
    <li class="item">
      <p class="title">所在平台</p>
      <div class="list">
        <span v-for="(n,index) in arr.terrArr"
              :key="index">
          <font :class="{'active':n.terr_id==form.terr}"
                @click="form.terr=n.terr_id;arr.typeArr=n.type;returnSelection()">{{n.terr_title+n.terr_id}}</font>
        </span> </div>
    </li>
    <li class="item"
        v-if="form.terr==1">
      <p class="title">商城类型</p>
      <div class="list"><span v-for="(n,index) in arr.typeArr"
              :key="index">
          <font :class="{'active':n.type_id==form.type}"
                @click="form.type=n.type_id;returnSelection()">{{n.type_title}}</font>
        </span> </div>
    </li>
    <li class="item"
        v-if="form.terr==1">
      <p class="title">商标类型</p>
      <div class="list"><span v-for="(n,index) in arr.brandArr"
              :key="index">
          <font :class="{'active':index==form.brand}"
                @click="form.brand=index;returnSelection()">{{n}}</font>
        </span> </div>
    </li>

    <li class="item"
        v-if="form.terr==2">
      <p class="title">店铺状态</p>
      <div class="list dpzt"><span v-for="(n,index) in arr.typeArr"
              :key="index">
          <font :class="{'active':n.type_id==form.type}"
                @click="form.type=n.type_id;returnSelection()">{{n.type_title}}</font>
        </span> </div>
    </li>

    <li class="item"
        v-if="form.terr==2">
      <p class="title">信用等级</p>
      <div class="list xinyong">
        <div class="deng">
          <el-slider v-model="form.letter"
                     range
                     show-stops
                     :min="1"
                     :max="15"
                     :format-tooltip="(val)=>{formatTooltip(val);}">
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
        <font @click="returnSelection()">确认</font>
      </div>
    </li>
    <li class="item">
      <p class="title">所属行业</p>
      <div class="list"><span v-for="(n,index) in arr.trade"
              :key="index">
          <font :class="{'active':n.trade_id==form.trade}"
                @click="form.trade=n.trade_id;returnSelection()">{{n.trade_title}}</font>
        </span> </div>
    </li>
    <li class="item">
      <p class="title">价格</p>
      <div class="list"><span v-for="(n,index) in arr.priceArr"
              :key="index">
          <font :class="{'active':n.content===form.price}"
                @click="form.price=n.content;returnSelection()">{{n.title}}</font>
        </span> </div>
    </li>
    <li class="item">
      <p class="title">其他</p>
      <div class="list"><span v-for="(n,index) in arr.otherArr"
              :key="index">
          <font :class="{'active':index===form.other}"
                @click="form.other=index;returnSelection()">{{n}}</font>
        </span> </div>
    </li>
    <!-- 地区范围 -->
    <li class="item"
        v-if="form.other===0">
      <p class="title"></p>
      <div class="list qt"><span v-for="(n,index) in arr.placeArr"
              :key="index">
          <font :class="{'active':index===form.place}"
                @click="form.place=index;returnSelection()">{{n}}</font>
        </span> </div>
    </li>
    <!-- 扣分情况 -->
    <li class="item"
        v-if="form.other===1">
      <p class="title"></p>
      <div class="list qt"><span v-for="(n,index) in arr.partArr"
              :key="index">
          <font :class="{'active':index===form.part}"
                @click="form.part=index;returnSelection()">{{n}}</font>
        </span> </div>
    </li>
    <!-- 纳税人资质 -->
    <li class="item"
        v-if="form.other===2">
      <p class="title"></p>
      <div class="list qt"><span v-for="(n,index) in arr.tax"
              :key="index">
          <font :class="{'active':index===form.tax}"
                @click="form.tax=index;returnSelection()">{{n}}</font>
        </span> </div>
    </li>
    <!-- 是否带货 -->
    <li class="item"
        v-if="form.other===3">
      <p class="title"></p>
      <div class="list qt"><span v-for="(n,index) in arr.optionArr"
              :key="index">
          <font :class="{'active':index===form.bring}"
                @click="form.bring=index;returnSelection()">{{n}}</font>
        </span> </div>
    </li>
    <!-- 提供货源 -->
    <li class="item"
        v-if="form.other===4">
      <p class="title"></p>
      <div class="list qt"><span v-for="(n,index) in arr.optionArr"
              :key="index">
          <font :class="{'active':index===form.source}"
                @click="form.source=index;returnSelection()">{{n}}</font>
        </span> </div>
    </li>
    <!-- 商标类别 -->
    <li class="item"
        v-if="form.other===5">
      <p class="title"></p>
      <div class="list qt"><span v-for="(n,index) in arr.cate"
              :key="index">
          <font :class="{'active':n.cate_id===form.transter_id}"
                @click="form.transter_id=n.cate_id;returnSelection()">{{n.cate_title}}</font>
        </span> </div>
    </li>
    <!-- 商标过户 -->
    <li class="item"
        v-if="form.other===6">
      <p class="title"></p>
      <div class="list qt"><span v-for="(n,index) in arr.transferArr"
              :key="index">
          <font :class="{'active':index===form.transfer}"
                @click="form.transfer=index;returnSelection()">{{n}}</font>
        </span> </div>
    </li>
    <!-- 提供货源 -->
    <li class="item"
        v-if="form.other===7">
      <p class="title"></p>
      <div class="list qt"><span v-for="(n,index) in arr.optionArr"
              :key="index">
          <font :class="{'active':index===form.group}"
                @click="form.group=index;returnSelection()">{{n}}</font>
        </span> </div>
    </li>
    <!-- <li class="item">
      <p class="title">更多选项</p>
      <div class="list gengduo">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="可接受带货"></el-checkbox>
          <el-checkbox label="能提供货源"></el-checkbox>
          <el-checkbox label="无扣分"></el-checkbox>
          <el-checkbox label="带团队转让"></el-checkbox>
        </el-checkbox-group>
      </div>
    </li> -->
    <!-- <li class="item">
      <p class="title">全部</p>
      <div class="list quanbu"><span>正在竞拍 ( 0 )</span> <span>等待竞拍 ( 0 )</span><span>竞拍完成 ( 0 )</span></div>
    </li> -->
    <!-- <li class="item">
      <p class="title">价格</p>
      <div class="list"><span :class="{'active':true}">5万-10万</span> <span>10万-20万</span><span>20万-50万</span><span>50万以上</span></div>
    </li> -->
    <!-- <li class="item">
      <p class="title">其他</p>
      <div class="list"><span :class="{'active':true}">地区范围</span> <span>扣分情况</span><span>纳税人资质</span><span>是否带货</span><span>提供货源</span><span>商标类别</span> <span>商标过户</span><span>团队转让</span></div>
    </li> -->
    <li class="item">
      <p class="title">默认排序</p>
      <div class="list moren"><span>
          <font>出售价格</font> <span class="s"><img src="../../assets/img/bug/a4.png"
                 alt=""
                 @click="returnSelection()"><img src="../../assets/img/bug/a5.png"
                 alt=""
                 @click="returnSelection()"></span>
        </span></div>
    </li>

  </section>
</template>
<script>
export default {
  props: ["path"],
  data() {
    return {
      input23: "",
      value9: [1, 1],
      other: {
        active: 0, //0.天猫 1.淘宝
        type: 0 //0,购买网店 1.网店拍卖
      },
      form: {
        page: 1, // 页数，默认1
        limit: 15, //每一页的条数，默认15
        title: "", //搜索框搜索信息
        terr: "", //所在平台  0.天猫 1.淘宝
        type: "", //商城类型
        trade: "", //所属行业
        brand: "", //商标类型
        price: "", //价格    如：10000，50000
        place: "", //所属地区范围    0不限1华北2东北3华南4西北5华中6西南7海外
        part: "", //扣分情况 0不限1全无2一般3严重4出售假违规扣分
        tax: "", //纳税人资质    0不限1一般2小规模
        bring: "", //是否带货    0不限1是2否
        source: "", //提供货源  0不限1是2否
        transfer: "", //商标过户  0不限1可以过户2只能授权
        group: "", //团队转让 0不限1是2否
        transter_id: "", //商标类型   如：1，2，3
        sort: "", //排序  1id倒叙2价格倒叙
        letter: [1, 1], //信誉等级  后端要字符串,
        other: "" //其他
      },
      arr: {
        terrArr: [], //平台类型
        typeArr: [], //商城类型
        trade: [], //所属行业
        cate: [], //其他->商标类别
        brandArr: ["无", "R标", "TM标"], //商标类型
        // priceArr: ["5W-10W", "10W-20W", "20W-50W", "50W+"], //价格类型
        priceArr: [
          {
            title: "5W-10W",
            content: "50000,100000"
          },
          {
            title: "10W-20W",
            content: "100000,200000"
          },
          {
            title: "20W-50W",
            content: "200000,500000"
          },
          {
            title: "50W-500W",
            content: "500000,5000000"
          }
        ], //价格类型
        otherArr: [
          "地区范围",
          "扣分情况",
          "纳税人资质",
          "是否带货",
          "提供货源",
          "商标类别",
          "商标过户",
          "团队转让"
        ], //其他类型
        optionArr: ["不限", "是", "否"], //普遍选项
        transferArr: ["不限", "可以过户", "只能授权"], //商标过户
        tax: ["不限", "一般", "小规模"], //纳税人资质
        placeArr: [
          "不限",
          "华北",
          "东北",
          "华南",
          "西北",
          "华中",
          "西南",
          "海外"
        ], //所属地区范围
        partArr: ["不限", "全无", "一般", "严重", "出售假违规扣分"] //扣分情况
      }
    };
  },

  created() {
    console.log("当前路径是:", this.path);
    //0为购买网店1为网店拍卖
    this.path == "/buyshop" ? (this.other.type = 0) : (this.other.type = 1);
    this.getSelection();
    this.returnSelection();
  },
  methods: {
    formatTooltip(val) {
      console.log(val, this.value9);

      if (val < 6) {
        return `${val}钻`;
      } else if (val < 11) {
        return `${val - 5}皇冠`;
      } else {
        return `${val - 10}金冠`;
      }
      //   return val / 100;
    },
    //获取筛选条件
    getSelection() {
      this.$axios.get(this.$location.condition).then(res => {
        console.log(res);
        this.arr.terrArr = _.get(res, "data.terr", []);
        this.arr.trade = _.get(res, "data.trade", []);
        this.arr.cate = _.get(res, "data.cate", []);
        console.log(this.arr.cate);
      });
    },
    returnSelection() {
      console.log(123);
      this.$emit("returnForm", this.form);
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
    list-style: none;
    padding: 15px 0;
    margin: 0 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(234, 234, 234, 1);
    .title {
      display: block;
      width: 56px;
      height: 15px;
      line-height: 15px;
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
      flex-wrap: wrap;
      align-items: center;

      > span {
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        // margin-right: 52px;
        width: 100px;
        padding: 1px 0;
        // border: 1px solid red;
        text-align: left;

        font {
          cursor: pointer;
          padding-left: 10px;
        }
      }

      .active {
        border-radius: 4px;
        padding: 1px 9px 1px;
        border: 1px solid rgba(254, 112, 4, 1);
        color: rgba(255, 113, 10, 1);
      }
    }
    .dpzt {
      border: 1px solid red;
      > span {
        width: 140px;
      }
      span:first-child {
        width: 100px;
      }
    }
    .qt {
      span:last-child {
        border: 1px solid red;
        width: 130px;
      }
    }
    .moren {
      > span {
        display: flex;
        .s {
          margin-left: 5px;
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
      > font {
        cursor: pointer;
        width: 50px;
        height: 18px;
        background: rgba(255, 113, 10, 1);
        border-radius: 9px;
        font-size: 12px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
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
  }
}
</style>