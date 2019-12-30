<template>
  <div class="userCenter">
    <div class="txBoxuser">
      <img :src="info.userPhoto" class="txuser">
    </div>
    <div class="carduser">
      <div class="rowuser">
        <div class="row1user">
          {{info.userName?info.userName:'秦墨'}}
        </div>
        <router-link to="/moneyDetail" tag="div">
          <div class="row2user">
            账户余额 ￥{{info.myMoney}}
          </div>
        </router-link>
      </div>
      <div class="btnBoxuser">
        <div class="btnuser" @click="recharge()">充值</div>
        <router-link to="/withdrawal" tag="div" class="btnuser">
          提现
        </router-link>
      </div>

      <div class="itemBoxUser">
        <router-link to="/myView" tag="div">
          <div class="itemsUser">
            <span>我的围观</span>
            <img src="/static/img/19.png" class="goUser">
          </div>
        </router-link>
        <router-link to="/myCard" tag="div">
          <div class="itemsUser firstUser">
            <span>我的补签卡</span>
            <img src="/static/img/19.png" class="goUser">
          </div>
        </router-link>
        <router-link to="/mySupervision" tag="div">
          <div class="itemsUser firstUser">
            <span>我的监督</span>
            <img src="/static/img/19.png" class="goUser">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {myInfo,toRecharge} from '@/api/index'
export default {
  name: 'index',
  data(){
    return{
      info:{},// 用户信息
    }
  },
  created () {
    this.getUserInfo()
  },
  methods:{
    // 获取用户信息
    getUserInfo(){
      myInfo({}).then(res=>{
        if(res.code=='OK'){
          this.info = res.data
        }
      })
    },
    // 充值
    recharge(){
      var that = this
      this.$weui.confirm(` <div class="rechargeMoney"><input id="rechargeMoney" placeholder="请输入充值金额"/></div>`, {
        title: '充值金额',
        buttons: [{
          label: '取消',
          type: 'default',
          onClick: function(){  }
        }, {
          label: '确定',
          type: 'primary',
          onClick: function(){
            let money = $('#rechargeMoney').val()
            if(money){
              toRecharge({ rechargeMoney: money}).then(res=>{
                if(res.code=='OK'){
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
                        that.getUserInfo()
                      } else {
                        this.$weui.toast('充值失败', {
                          duration: 3000,
                          className: 'custom-classname',
                          callback: function(){

                          }
                        });
                      }
                    })
                }
              })
            }
          }
        }]
      });
    }
  }
}
</script>

<style lang="less" scoped>
  .userCenter{
    width: 100%;
    box-sizing: border-box;
    margin: 10px 20px;
    /*position: relative;*/
    .txBoxuser{
      width: 100px;
      height: 100px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      margin: 0 auto;
      position: absolute;
      left: 35%;
      z-index: 999;
      box-shadow:0px 7px 14px 2px rgba(220,220,220,0.75);
      .txuser{
        width: 90px;
        height: 90px;
        border-radius: 45px;

      }
    }
    .carduser{
      width: calc(100vw - 40px);
      background: #fff;
      height: 380px;
      border-radius: 40px;
      position: absolute;
      top: 60px;
      z-index: 3;
      box-sizing: border-box;
      padding: 60px 0px 0px 0px;
      .rowuser{
        box-sizing: border-box;
        padding: 0 20px;
        .row1user{
          text-align: center;
          font-size: 16px;
        }
        .row2user{
          text-align: center;
          font-size: 20px;
          border-bottom: 1px solid #898989;
          height: 40px;
          line-height: 40px;
          position: relative;
        }
      }
      .btnBoxuser{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
        box-sizing: border-box;
        padding: 0 20px;
        .btnuser{
          background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
          box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
          height: 30px;
          border-radius: 25px;
          padding: 10px 40px;
          font-size: 20px;
          color: #fff;
          line-height: 30px;
        }
      }
      .itemBoxUser{
        margin-top: 20px;
        .itemsUser{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          font-size: 16px;
          box-sizing: border-box;
          padding: 0 30px;
          .goUser{
            width: 20px;
          }
        }
        .firstUser{
          border-top: 1px solid #EDEDED;
        }
      }
    }
  }

</style>
