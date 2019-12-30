<template>
  <div class="challengeGoldPage">
    <div class="challengeGold">
      <div class="title">
        <div class="tip"></div>
        打卡周期
      </div>
      <div class="goldList">
        <div class="cards" @click="cycle='Day'">
          <div class="goldCard">
            <img v-if="cycle=='Day'" class="icon" src="/static/img/day2.png" />
            <img v-else class="icon" src="/static/img/day.png" />
          </div>
          <div>每日</div>
        </div>
        <div class="cards" @click="cycle='Weak'">
          <div class="goldCard">
            <img v-if="cycle=='Weak'" class="icon" src="/static/img/week2.png" />
            <img v-else class="icon" src="/static/img/week.png" />
          </div>
          <div>每周</div>
        </div>
        <div class="cards" @click="cycle='Month'">
          <div class="goldCard">
            <img v-if="cycle=='Month'" class="icon" src="/static/img/month2.png" />
            <img v-else class="icon" src="/static/img/month.png" />
          </div>
          <div>每月</div>
        </div>
      </div>
      <div class="title ">
        <div class="tip"></div>
        打卡次数
      </div>
      <div class="clockBoxList">
        <div class="clockBox" v-for="item in numList" @click="clockNumber = item.num">
          {{item.num}}<span class="num">次</span>
        </div>
      </div>
      <div class="moneyBox customNum">
        自定义次数
        <div class="money">
          <input v-model="clockNumber" auto-focus placeholder=""/>
        </div>
        次
      </div>
      <div class="title ">
        <div class="tip"></div>
        休假次数
      </div>
      <div class="moneyBox customNum">
        希望休假次数
        <div class="money">
          <input v-model="restNumber" auto-focus placeholder=""/>
        </div>
        次
      </div>

    </div>
    <div class="nextStep" @click="goComplete">
      完成，开启目标
    </div>
  </div>
</template>

<script>
import {planGoals3} from '@/api/habit'
export default {
  name: 'clockCycle',
  data () {
    return {
      cycle: '',
      clockNumber: '', // 打卡次数
      restNumber: '', // 休假次数
      numList:[
        {
          num:1,
        },
        {
          num:4,
        },
        {
          num:7,
        },
        {
          num:12,
        },
        {
          num:30,
        }
      ]
    }
  },
  methods: {
    goComplete () {
      if (this.cycle && this.clockNumber) {
        let data = {
          cycle: this.cycle,
          clockNumber: this.clockNumber,
          restNumber: this.restNumber?this.restNumber:0,
          userGoalId: this.$route.query.targetId2
        }
        planGoals3(data).then(res => {
          if (res.code == 'OK') {
            this.$router.push({path: '/complete', query: {targetId3: res.message}})
          }
        })
      } else {
        let info = ''
        if (!this.cycle) {
          info = '请选择周期'
        }
        if (this.cycle && !this.clockNumber) {
          info = '请输入或选择打卡次数'
        }
        this.$weui.dialog({
          title: '提示',
          content: info,
          buttons: [
            {
              label: '确定',
              type: 'primary',
              onClick: function () {

              }
            }
          ]
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .challengeGoldPage{
    box-sizing: border-box;
    padding: 20px;
    .challengeGold{
      background: #fff;
      height: 450px;
      border-radius: 40px;
      box-sizing: border-box;
      padding: 20px;
      .title{
        color: #535353;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
        .tip{
          width: 16px;
          height: 16px;
          border-radius: 8px;
          margin-right: 10px;
          background:linear-gradient(133deg,rgba(249,164,122,1),rgba(251,98,98,1));
        }
      }
      .goldList{
        display: flex;
        flex-direction: row;
        box-sizing: border-box;width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 30px;
        .cards{
          text-align: center;
          width: 70px;
          height: 90px;
          .goldCard{
            width: 70px;
            height: 70px;
            border-radius: 24px;
            color: #fff;
            background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
            box-shadow:0px 16px 24px 3px rgba(220,220,220,0.75);
            text-align: center;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;
            .icon{
              width: 46px;
              height: 47px;
            }
          }
        }
      }
      .moneyBox{
        display: flex;
        flex-direction: row;
        color: #535353;
        font-size: 16px;
        font-weight: bold;
        .money{
          width: 80px;
          border-bottom: 2px solid #535353;
          box-sizing: border-box;
          input{
            width: 80px;
            padding: 0 10px;
            border: unset;
            font-size: 16px;
          }
        }
      }
      .customNum{
        box-sizing: border-box;
        padding: 20px 10px;
      }
      .clockBoxList{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 20px 10px;
        .clockBox{
          width: 40px;
          height: 40px;
          border-radius: 20px;
          background:linear-gradient(111deg,rgba(252,172,149,1),rgba(230,91,96,1));
          box-shadow:0px 16px 24px 3px rgba(220,220,220,0.75);
          font-size: 16px;
          text-align: center;
          line-height: 40px;
          color: #696969;
          .num{
            font-size: 12px;

          }

        }
      }
    }
    .nextStep{
      margin: 20px auto 50px auto;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      width: 240px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
    }
  }
</style>
