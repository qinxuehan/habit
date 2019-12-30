<template>
<div class="withdrawalPage">
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
      <div class="row3">
        为了保障您的账户资金安全，每月首次提现需完成验证，步骤如下：
      </div>
      <div class="row4">
        1、关注微信公众号【小五的茶馆】，微信号：xiaowutalk
      </div>
      <div class="row4">
        2、微信公众号底部菜单点击【活动详情】-【验证码】获取验证码
      </div>
      <div class="row5">
        3、在下面的输入框内输入获取的验证码
      </div>
      <div class="row6">
        <span class="text">验证码</span>
        <input v-model="code">
      </div>
      <div class="row7">
          <div class="btn" @click="withdrawal">
            确定，开始提现
          </div>
      </div>
    </div>
  </div>
  <div class="bannerBox">
    banner
  </div>
</div>
</template>

<script>
import {verifyWithDraw, myInfo} from '@/api/index'

export default {
  name: 'withdrawal',
  data () {
    return {
      myMoney: '', // 账户余额
      code: ''// 验证码
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
    // 提现
    withdrawal () {
      if (this.code) {
        let data = {
          code: this.code
        }
        verifyWithDraw(data).then(res => {
          if (res.code == 'OK') {
            this.$router.push({path: '/withdrawalConfirm'})
          } else {
            this.$weui.alert(res.message, {
              title: '提示',
              buttons: [{
                label: '确定',
                type: 'primary',
                onClick: function () { }
              }]
            })
          }
        })
      } else {
        this.$weui.dialog({
          title: '提示',
          content: '请输入验证码',
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
  .withdrawalPage{
    margin-bottom: 100px;
    .withdrawal{
      box-sizing: border-box;
      padding: 20px;
      .withdrawalCard{
        height: 520px;
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
        .row3{
          box-sizing: border-box;
          padding: 0 30px;
          line-height: 20px;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 10px;
        }
        .row4{
          height: 40px;
          line-height: 20px;
          padding: 10px 30px;
          border-bottom: 1px solid #EDEDED;
          font-weight: 600;
          font-size: 14px;
        }
        .row5{
          height: 20px;
          line-height: 20px;
          padding: 10px 30px;
          font-weight: 600;
          font-size: 14px;
        }
        .row6{
          font-size: 16px;
          color: #818181;
          padding: 0 30px;
          margin-top: 10px;
          .text{
            margin-right: 5px;
          }
          input{
            height: 40px;
            line-height: 40px;
            border-radius: 20px;
            background: #EFEFEF;
            border: unset;
            width: 140px;
            font-weight: 600;
            box-sizing: border-box;
            padding: 0 20px;
          }
        }
        .row7{
          box-sizing: border-box;
          margin-top: 20px;
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
    .bannerBox{
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #fff;
      position: fixed;
      bottom: 50px;
      width: 100%;
    }
  }

</style>
