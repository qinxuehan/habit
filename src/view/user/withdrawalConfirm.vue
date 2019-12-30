<template>
  <div class="withdrawalConfirm">
    <div class="withdrawal">
      <div class="withdrawalCard">
        <div class="top">
          <div class="row1">
            可提现金额
            <img src="/static/img/19.png">
          </div>
          <div class="row2">
            ￥{{myMoney}}
          </div>
        </div>
        <div class="row6">
          <span class="text">输入提现金额</span>
          <input v-model="money" @keyup="enterMoney()">
        </div>
        <div class="textBox">
          提现手续费：{{fee}}元
        </div>
        <div class="textBox">
          实际到账金额：{{realMoney}}元
        </div>
        <div class="row7">
          <div class="btn" @click="withdrawal">
            确定
          </div>
        </div>
      </div>
    </div>
    <div class="tip">
      常见问题
    </div>
    <div class="tipText">
      1、提现金额将在1~7个工作日内到微信账户余额
    </div>
    <div class="tipText">
      2、按照提现金额收取2%的手续费，不足0.01元的手续费按照0.01元收取
    </div>
    <div class="tipText">
      3、每月的首次提现需完成提现验证
    </div>
    <div class="bannerBox">
      banner
    </div>
  </div>
</template>

<script>
import {withDraw, myInfo} from '@/api/index'
import {Decimal} from 'decimal.js'
export default {
  name: 'withdrawalConfirm',
  data () {
    return {
      money: '', // 提现金额
      myMoney: '', // 账户余额
      fee: 0, // 手续费
      realMoney: 0// 实际到账金额
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    // 获取用户信息
    getUserInfo () {
      myInfo({}).then(res => {
        if (res.code == 'OK') {
          this.myMoney = res.data.myMoney
        }
      })
    },
    // 只能输入两位小数
    enterMoney () {
      this.money = this.money.replace(/[^\d.]/g, '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
    },
    // 提现
    withdrawal () {
      let that = this
      if (this.money >= 0) {
        let data = {
          applyMoney: this.money
        }
        withDraw(data).then(res => {
          if (res.code == 'OK') {
            this.$weui.toast('提现成功', {
              duration: 3000,
              className: 'custom-classname',
              callback: function () {
                that.$router.push({path: '/user'})
              }
            })
          } else {
            this.$weui.toast('提现失败', 3000)
          }
        })
      } else {
        this.$weui.dialog({
          title: '提示',
          content: '提现金额必须大于3元',
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
  },
  watch: {
    money (val) {
      // 乘法
      let e = Number(new Decimal(this.money).mul(new Decimal(0.03)))
      this.fee = Math.floor(e * 100) / 100
      // 减法
      let d = Number(new Decimal(this.money).sub(new Decimal(this.fee)))
      this.realMoney = Math.floor(d * 100) / 100
    }
  }
}
</script>

<style lang="less" scoped>
  .withdrawalConfirm{
    .withdrawal{
      box-sizing: border-box;
      padding: 20px;
      .withdrawalCard{
        height: 380px;
        background: #fff;
        border-radius: 30px;
        color: #535353;
        .top{
          box-sizing: border-box;
          padding: 20px;
          .row1{
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            img{
              height: 20px;
              position: relative;
              left: 10px;
            }
          }
          .row2{
            font-size: 45px;
            border-bottom: 1px solid #898989;
            padding: 10px 0 10px 0;
            text-align: center;
            font-weight: 500;
          }
        }
        .row6{
          font-size: 16px;
          color: #818181;
          padding: 0 30px;
          box-sizing: border-box;
          font-weight: 600;
          .text{
            margin-right: 5px;
          }
          input{
            height: 40px;
            line-height: 40px;
            border-radius: 20px;
            background: #EFEFEF;
            border: unset;
            width: 100px;
            font-weight: 500;
            box-sizing: border-box;
            padding: 0 20px;
            font-size: 14px;
            color: #818181;
          }
        }
        .textBox{
          height: 50px;
          line-height: 50px;
          color: #818181;
          padding: 0 30px;
          box-sizing: border-box;
          font-weight: 600;
          font-size: 16px;
        }
        .row7{
          box-sizing: border-box;
          padding: 0 40px;
          margin-top: 10px;
          .btn{
            width: 190px;
            margin: 0 auto;
            height: 50px;
            line-height: 50px;
            border-radius: 25px;
            text-align: center;
            font-size: 20px;
            color: #fff;
            font-weight: 600;
            background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
            box-shadow:0px 7px 9px 2px rgba(220,220,220,0.75);
          }
        }
      }
    }
    .tip{
      box-sizing: border-box;
      padding: 0 50px;
      color: #383838;
      font-weight: 600;
    }
    .tipText{
      margin-bottom: 20px;
      box-sizing: border-box;
      padding: 0 50px;
      color: #383838;
      font-weight: 600;
    }
    .bannerBox{
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #fff;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }

</style>
