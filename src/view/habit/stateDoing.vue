<template>
  <div class="stateDoing">
    <div class="stateDoingcard1">
      <div class="stateDoingtop">
        <div class="stateDoingtopLeft">
          <img :src="detail.photo" class="stateDoingtx">
        </div>
        <div class="stateDoingtopRight">
          <div class="stateDoingup">
            {{detail.userName}}
          </div>
          <div class="stateDoingdown">
            <img src="/static/img/08.png" class="stateDoingtip">
            {{detail.goalName}}
          </div>
        </div>
      </div>
      <div class="stateDoingbottom">
        <div class="stateDoingbotItem">
          <img src="/static/img/13.png" class="icon4 icon">
          <div>押金￥{{detail.goalMoney}}</div>
        </div>
        <div class="stateDoingbotItem">
          <img src="/static/img/10.png" class="icon1 icon">
          <div>总评论{{detail.countComment}}人</div>
        </div>
        <div class="stateDoingbotItem">
          <img src="/static/img/11.png" class="icon2 icon">
          <div>总围观{{detail.countWatch}}人</div>
        </div>
        <div class="stateDoingbotItem">
          <img src="/static/img/12.png" class="icon3 icon">
          <div>被{{detail.counthumbsUp}}人点赞</div>
        </div>
      </div>
    </div>
    <div class="stateDoingcard2">
      <div class="stateDoingtitle">监督者{{detail.supervisePhotoList?detail.supervisePhotoList.length:0}}人</div>
      <div class="stateDoingbot">
        <div class="stateDoingleft">
          <img src="/static/img/head.jpg" class="stateDoingtx1">
          <img src="/static/img/head.jpg" class="stateDoingtx2">
          <img src="/static/img/head.jpg" class="stateDoingtx3">
        </div>
        <div class="stateDoingright">
          邀请
        </div>
      </div>
    </div>
    <div class="stateDoingcard3">
      <div class="stateDoingcon">
        <div class="stateDoingtitle">当前打卡任务</div>
        <div class="stateDoingdate">{{detail.clockBeginAndEnd}}</div>
        <div class="stateDoingdoing">
          <progressbar :percentage="Number(detail.secuessClockNumber)/Number(detail.allClockNumber)"></progressbar>
        </div>
        <!--            <div class="doing">进度条2</div>-->
        <div class="stateDoingitems">
          <span>目标总打卡</span>
          <span>{{detail.allClockNumber}}次</span>
        </div>
        <div class="stateDoingitems">
          <span>当前应打卡</span>
          <span>{{detail.thisClockNumber}}次</span>
        </div>
        <div class="stateDoingitems">
          <span>打卡成功</span>
          <span>{{detail.secuessClockNumber}}次</span>
        </div>
        <div class="stateDoingitems">
          <span>打卡失败</span>
          <span>{{detail.failClockNumber}}次</span>
        </div>
      </div>
      <div class="stateDoingbot">
        <span class="stateDoingdetail" @click="goDetail">查看明细，补卡...</span>
      </div>
    </div>
  </div>
</template>

<script>
import navs from '@/components/nav'
import footers from '@/components/footer'
import {goalInfoProgress} from '@/api/habit'
import progressbar from '@/components/progressbar'
export default {
  name: 'stateDoing',
  components: {
    progressbar,
  },
  data(){
    return{
      detail:{},// 习惯详情（进行中）
    }
  },
  created(){
    console.log('ddd')
    this.getInfo()
  },
  methods: {
    // 获取习惯详情
    getInfo(){
      console.log('hhh')
      let data = {
        userGoalId:this.$route.query.goalId
      }
      goalInfoProgress(data).then(res=>{
        if(res.code=='OK'){
          this.detail = res.data
        }
      })
    },
    // 查看明细
    goDetail () {
      this.$router.push({path: '/stateDoingDetail', query: {goalId: this.$route.query.goalId}})
    }
  }
}
</script>

<style lang="less" scoped>
  .stateDoing{
    box-sizing: border-box;
    padding: 20px 20px 70px 20px;
    .stateDoingcard1{
      width: 100%;
      height: 140px;
      background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
      box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
      border-radius: 40px;
      .stateDoingtop{
        display: flex;
        flex-direction: row;
        padding: 10px;
        .stateDoingtopLeft{
          background: #fff;
          width: 60px;
          height: 60px;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
            .stateDoingtx{
              width: 52px;
              height: 52px;
              border-radius: 26px;
            }
        }
        .stateDoingtopRight {
          width: 75%;
          .stateDoingup{
            font-size: 20px;
            color: #fff;
            border-bottom: 1px solid #fff;
            margin-bottom: 5px;
            padding-bottom: 3px;
          }
          .stateDoingdown{
            display: flex;
            flex-direction: row;
            align-items: center;
            color: #fff;
            .stateDoingtip{
              width: 15px;
              height: 15px;
              margin-right: 5px;
            }
          }
        }
      }
      .stateDoingbottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 75%;
        margin: 5px auto 0 auto;
        .stateDoingbotItem{
          color: #535353;
          font-size: 10px;
          text-align: center;
          .icon{
            margin-bottom: 5px;
          }
          .icon1{
            width: 25px;
            height: 25px;
          }
          .icon4{
            width: 27px;
            height: 25px;
          }
          .icon2{
            width: 35px;
            height: 25px;
          }
          .icon3{
            width: 30px;
            height: 25px;
          }
        }
      }
    }
    .stateDoingcard2{
      background:#fff;
      box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
      width: 100%;
      margin: 20px 0;
      height: 90px;
      border-radius: 30px;
      box-sizing: border-box;
      padding: 10px;
      .stateDoingtitle{
        text-align: center;
      }
      .stateDoingbot{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .stateDoingleft{
          width: 75%;
          .stateDoingtx1{
            width: 50px;
            height: 50px;
            border-radius: 25px;
            z-index: 999;
            position: relative;
          }
          .stateDoingtx2{
            width: 50px;
            height: 50px;
            border-radius: 25px;
            z-index: 100;
            position: relative;
            left: -20px;
          }
          .stateDoingtx3{
            width: 50px;
            height: 50px;
            border-radius: 25px;
            z-index: 2;
            position: relative;
            left: -40px;
          }
        }
        .stateDoingright{
          width: 25%;
          background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #fff;
          font-size: 20px;
          font-weight: 500;
          cursor: pointer;
          border-radius: 20px;
        }
      }
    }
    .stateDoingcard3{
      height: 250px;
      background: #fff;
      border-radius: 30px;
      box-sizing: border-box;
      padding: 10px 20px;
      color: #383838;
      box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
      .stateDoingcon{
        width: 80%;
        margin: 0 auto;
        .stateDoingtitle{
          font-size: 20px;
          font-weight: 500;
          text-align: center;
          color:rgba(83,83,83,1);
        }
        .stateDoingdate{
          text-align: center;
          height: 20px;
          line-height: 20px;
          font-size: 10px;
        }
        .stateDoingdoing{
          text-align: center;
        }
        .stateDoingitems{
          display: flex;
          justify-content: space-between;
          height: 30px;
          line-height: 30px;
        }
      }
      .stateDoingbot{
        margin-top: 10px;
        .stateDoingdetail{
          float: right;
          display: inline-block;
          border-bottom: 1px solid;
        }
      }
    }
  }

</style>
