<template>
  <div class="clockSuccessPage">
    <div class="clockSuccessPageimgBox1">
      <img class="clockSuccessPagebg" src="/static/img/05.png" />
      <img class="clockSuccessPagesuccess" src="/static/img/06.png" />
    </div>
    <div class="clockSuccessPagebox">
      <div class="clockSuccessPageinfoBox">
        <div class="clockSuccessPagetopInfo">
          <div class="clockSuccessPagetxBox">
            <img class="clockSuccessPagetx" :src="detail.photo" />
          </div>
          <div class="clockSuccessPagenameBox">
            <div class="clockSuccessPagename">
              {{detail.userName}}
            </div>
            <div class="clockSuccessPagetipBox2">
              <img class="clockSuccessPagetip" src="/static/img/08.png" />
              {{detail.goalName}}
            </div>
          </div>
        </div>
        <div class="clockSuccessPagebotBox">
          <div class="clockSuccessPageleftBox">
            <div class="clockSuccessPageline">
              <div class="clockSuccessPagetxt">已打卡{{detail.countClockSecuess}}次</div>
              <div class="clockSuccessPageprogress">
                <progressbar :percentage="percentage1" :index="'success1'" :colorBg="'#E47E58'" :colorBar="'#F8D2A2'"></progressbar>
              </div>
            </div>
            <div class="clockSuccessPageline">
              <div class="clockSuccessPagetxt">已坚持{{detail.upholdDay}}天</div>
              <div class="clockSuccessPageprogress">
                <progressbar :percentage="percentage2" :index="'success2'" :colorBg="'#E47E58'" :colorBar="'#F8D2A2'"></progressbar>
              </div>
            </div>
          </div>
          <div class="clockSuccessPagerightBox">
            <img class="clockSuccessPagerightImg" src="/static/img/02.png" />
            <div>被{{detail.countWatch}}人见证</div>
          </div>
        </div>
      </div>
      <div class="clockSuccessPageconBox">
        又一次战胜了自己，快快邀请好友一起见证
        您的改变吧
      </div>
    </div>
    <div class="clockSuccessPagebtn">
      邀请好友一起见证我的改变
    </div>
  </div>
</template>

<script>
import {goalSucess} from '@/api/habit'
import progressbar from '@/components/progressbar'
export default {
  name: 'clockSuccess',
  components:{progressbar},
  data () {
    return {
      detail: {},// 打卡成功详情
      percentage1:0,
      percentage2:0,
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      let data = {
        userGoalId: this.$route.query.goalId
      }
      goalSucess(data).then(res => {
        if (res.code == 'OK') {
          this.detail = res.data
          this.percentage1  = res.data.countClockSecuess / res.data.upholdDay
          this.percentage2  = res.data.countClockSecuess / res.data.upholdDay
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .clockSuccessPage{
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 50px;
    .clockSuccessPageimgBox1{
      position: relative;
      .clockSuccessPagebg{
        width: 100%;
        height: 300px;
      }
      .clockSuccessPagesuccess{
        width: 80px;
        height: 80px;
        position: absolute;
        left: 40%;
        top: 30%;
      }
    }
    .clockSuccessPagebox{
      position: relative;
      height: 210px;
      .clockSuccessPageinfoBox{
        background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
        box-shadow:0px 5px 10px 2px rgba(220,220,220,0.75);
        height: 150px;
        width: 100%;
        border-radius: 40px;
        box-sizing: border-box;
        padding: 10px;
        z-index: 999;
        position: absolute;
        .clockSuccessPagetopInfo{
          display: flex;
          flex-direction: row;
          .clockSuccessPagetxBox{
            margin-right: 10px;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            .clockSuccessPagetx{
              width: 52px;
              height: 52px;
              border-radius: 26px;
            }
          }
          .clockSuccessPagenameBox{
            width: 180px;
            .clockSuccessPagename{
              font-size: 20px;
              font-weight: bold;
              color: #fff;
              border-bottom: 2px solid #fff;
              box-sizing: border-box;
              width: 100%;
              height: 30px;
              line-height: 30px;
            }
            .clockSuccessPagetipBox2{
              height: 20px;
              line-height: 20px;
              display: flex;
              align-items: center;
              margin-top: 5px;
              color: #fff;
              .clockSuccessPagetip{
                width: 14px;
                height: 14px;
                margin-right: 5px;
              }
            }
          }
        }
        .clockSuccessPagebotBox{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .clockSuccessPageleftBox{
            margin-top: 10px;
            .clockSuccessPageline{
              width: 190px;
              display: flex;
              flex-direction: row;
              height: 24px;
              align-items: center;
              justify-content: space-between;
              .clockSuccessPagetxt{
                width: 70px;
                text-align: right;
              }
              .clockSuccessPageprogress{
                width: 110px;
              }
            }
          }
          .clockSuccessPagerightBox{
            width: 80px;
            text-align: center;
            position: relative;
            .clockSuccessPagenum{
              position: absolute;
              left: 40%;
              top:10px;
              color: #fff;
            }
            .clockSuccessPagerightImg{
              width:50px;
            }
          }
        }
      }
      .clockSuccessPageconBox{
        height: 60px;
        background: #fff;
        border-radius: 20px;
        width: 87%;
        text-align: center;
        box-sizing: border-box;
        padding: 20px 10px 0 10px;
        margin: 0 auto;
        position: absolute;
        top:140px;
        left: 8%;
        color: #535353;
      }
    }
    .clockSuccessPagebtn{
      background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
      height: 50px;
      border-radius: 25px;
      color: #fff;
      font-size: 16px;
      text-align: center;
      line-height: 50px;
      margin: 0 auto;
      width: 80%;
    }
  }
</style>
