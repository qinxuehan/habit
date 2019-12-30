<template>
  <div class="challengeGoldPage">
    <div class="challengeGold">
      <div class="title">
        <div class="tip"></div>
        设置目标的挑战金
      </div>
      <div class="goldList" style="margin-bottom: 0">
        <div v-for="(item,index) in moneyList" @click="money=item.money" class="goldCard">
          ￥<span class="gold">{{item.money}}</span>
          <div>{{item.text}}</div>
        </div>
      </div>
      <div class="goldList">
        <div v-for="(item,index) in moneyList2" @click="money=item.money" class="goldCard goldCard2">
          ￥<span class="gold">{{item.money}}</span>
          <div>{{item.text}}</div>
        </div>
      </div>
      <div class="title moneyBox">
        <div class="tip"></div>
        自定义金额
        <div class="money">
          <input v-model="moneyAuto" @keyup="enterMoney()" auto-focus placeholder=""/>
        </div>
        ￥
      </div>
      <div class="goldTipBox">
        挑战金在您目标完成后，会退回
      </div>
      <div class="showMoneyBox">
        ￥<span class="showMoney">{{money?money:0}}</span>
      </div>
    </div>
    <div class="nextStep" @click="goClockCycle">
      支付，下一步
    </div>
  </div>
</template>

<script>
import {planGoals2} from '@/api/habit'
export default {
  name: 'challengeGold',
  data () {
    return {
      moneyAuto: '',
      money: '', // 挑战金额
      moneyList: [
        {
          money: 1,
          text: '小试牛刀'
        },
        {
          money: 3,
          text: '初露锋芒'
        },
        {
          money: 10,
          text: '天道酬勤'
        }
      ],// 目标挑战金列表
      moneyList2: [
        {
          money: 18,
          text: '小试牛刀'
        },
        {
          money: 88,
          text: '初露锋芒'
        },
        {
          money: 188,
          text: '天道酬勤'
        }
      ],// 目标挑战金列表
    }
  },
  methods: {
    // 自定义金额
    enterMoney () {
      this.moneyAuto = this.moneyAuto.replace(/[^\d.]/g, '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
      this.money = this.moneyAuto
    },
    goClockCycle () {
      let that = this
      if (this.money) {
        let data = {
          userGoalId: this.$route.query.targetId,
          goalMoney: this.money
        }
        planGoals2(data).then(res => {
          if(res.code=='OK'){
            this.$router.push({path: '/clockCycle',query: {targetId2: res.message}})
          } else if(res.code=='MONEY_NOT_ENOUGH'){
            WeixinJSBridge.invoke(
              'getBrandWCPayRequest', {
                'appId': res.data.appId, // 公众号名称，由商户传入
                'timeStamp': res.data.timeStamp, // 时间戳，自1970年以来的秒数
                'nonceStr': res.data.nonceStr, // 随机串
                'package': res.data.package,
                'signType': 'MD5', // 微信签名方式：
                'paySign': res.data.paySign // 微信签名
              },
              function (res) {
                if (res.err_msg == 'get_brand_wcpay_request:ok') {
                  // 使用以上方式判断前端返回,微信团队郑重提示：
                  // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                  that.$weui.toast('支付成功', {
                    duration: 3000,
                    className: 'custom-classname',
                    callback: function(){
                      that.goClockCycle()
                    }
                  });

                } else {
                  that.$weui.toast('支付失败', {
                    duration: 3000,
                    className: 'custom-classname',
                    callback: function(){

                    }
                  });
                }
              })
          } else {

          }

        })
      } else {
        this.$weui.dialog({
          title: '提示',
          content: '请设置挑战金额',
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
      height: 400px;
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
        margin-bottom: 20px;
        .goldCard{
          width: 70px;
          height: 70px;
          border-radius: 23px;
          color: #fff;
          background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
          box-shadow:0px 10px 24px 3px rgba(220,220,220,0.75);
          span-align: center;
          box-sizing: border-box;
          padding-top: 3px;
          margin-top: 20px;
          text-align: center;
          .gold{
            font-size: 24px;
          }
        }
        .goldCard2{
          background:linear-gradient(111deg,#FBA993,#E65D61);
        }
      }
      .moneyBox{
        display: flex;
        flex-direction: row;
        .money{
          width: 80px;
          color: #535353;
          border-bottom: 2px solid #535353;
          box-sizing: border-box;
          input{
            width: 80px;
            border: unset;
            padding: 0 10px;
          }
        }
      }
      .goldTipBox{
        background:#F9BA76;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        padding: 0 10px;
        color: #535353;
        font-size: 14px;
        width: 220px;
        border-radius: 10px;
        float: right;
        margin-top: 20px;
        position: relative;
        left: 20px;
      }
      .showMoneyBox{
        color: #535353;
        clear:both;
        font-size: 20px;
        text-align: center;
        .showMoney{
          font-size: 50px;
        }
      }
    }
    .nextStep{
      text-align: center;
      margin: 20px auto 50px auto;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      width: 240px;
      span-align: center;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
    }
  }
</style>
