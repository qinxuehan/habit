<template>
    <div class="page">
      <div class="completePage">
        <div class="completeBox">
          <div class="title1">{{targetDeatil.name}}</div>
          <div class="title2">每{{targetDeatil.cycle}}打卡1次，坚持{{targetDeatil.clockNumber}}{{targetDeatil.cycle}}</div>
          <div class="title3">挑战金￥{{targetDeatil.goalMoney}}</div>
          <div class="imgBox">
            <img src="/static/img/complete.png" />
          </div>
          <div class="title4">目标设置完成</div>
        </div>
        <div class="btnBoxs">
          <div class="btns">
            <img style="width:25px;height:20px;" src="/static/img/01.png" />
            <div @click="gosupervision">邀请好友监督</div>
          </div>
          <div class="btns">
            <img style="width:30px;height:20px;" src="/static/img/02.png" />
            <div @click="goonlookers">邀请好友围观</div>
          </div>
        </div>
      </div>
      <div class="tipBox">
        邀请好友督促自己，更快的养成好习惯，您是否完成打
        卡任务将由好友投票决定。
        偷偷告诉您：大多数人都选择了好友监督
      </div>
    </div>
</template>

<script>
import {getGoalById} from '@/api/habit'
export default {
  name: 'complete',
  data(){
    return{
      targetDeatil:{}, // 目标详情
    }
  },
  created(){
    this.getDeatil()
  },
  methods: {
    // 获取目标详情
    getDeatil(){
      let data = {
        userGoalId:this.$route.query.targetId3,
      }
      getGoalById(data).then(res=>{
        if(res.code=='OK'){
          this.targetDeatil = res.data
        }
      })
    },
    // 邀请好友监督
    gosupervision () {
      this.$router.push({path: '/supervision'})
    },
    // 邀请好友围观
    goonlookers () {
      this.$router.push({path: '/onlookers'})
    }
  }
}
</script>

<style lang="less" scoped>
  .page{
    .completePage{
      box-sizing: border-box;
      padding: 20px 20px 0px 20px;
      .completeBox{
        height: 300px;
        width: 100%;
        background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
        box-shadow:0px 16px 24px 3px rgba(220,220,220,0.75);
        color: #fff;
        text-align: center;
        border-radius: 40px;
        box-sizing: border-box;
        padding: 30px 20px;
        .title1{
          font-size: 20px;
        }
        .title2{
          font-size: 14px;
        }
        .title3{
          font-size: 16px;
          margin: 25px 0;
        }
        .title4{
          margin-top: 10px;
        }
        .imgBox img{
          width: 80px;
          height: 80px;
        }
      }
      .btnBoxs{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 20px 0;
        .btns{
          width: 150px;
          height: 60px;
          box-sizing: border-box;
          padding: 8px 0;
          text-align: center;
          color: #fff;
          font-size: 16px;
          background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
          box-shadow:0px 8px 16px 3px rgba(220,220,220,0.75);
          border-radius: 30px;
          div{
            line-height: 20px;
          }

        }
      }
    }
    .tipBox{
      width: 90%;
      background: #F9BA76;
      color: #535353;
      font-size: 12px;
      box-sizing: border-box;
      padding: 5px;
      border-radius: 5px;
      float: right;
      line-height: 16px;
      margin-bottom: 60px;
    }
  }

</style>
