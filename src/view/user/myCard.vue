<template>
  <div class="myCardPage">
    <div class="myCard">
      <div class="txBoxCard">
        <img :src="info.userPhoto" class="txCard">
      </div>
      <div class="cardCard">
        <div class="rowCard">
          <div class="row1Card">
            {{info.userName}}
          </div>
          <div class="row2Card">
            当前补签卡 {{count}}张
          </div>
        </div>
        <div class="btnBoxCard">
          <div class="btn1Card">
            <span @click="exchangeCode">兑换</span>
            <input placeholder="请输入兑换码" v-model="code">
          </div>
          <div class="btnCard">
            完成任务获得更多补签卡
          </div>
        </div>
        <div class="itemBoxCard">
          <div class="itemsCard">
            <div>
              <img src="/static/img/24.png" class="imgCard">
              关注微信公众号
            </div>
            <div>
              去完成
              <img src="/static/img/19.png" class="goCard">
            </div>
          </div>
          <div class="itemsCard firstCard">
            <div>
              <img src="/static/img/24.png" class="imgCard">
              赞助开发者0.1元
            </div>
            <div>
              去支付
              <img src="/static/img/19.png" class="goCard">
            </div>

          </div>
          <div class="itemsCard firstCard">
            <div>
              <img src="/static/img/24.png" class="imgCard">
              关注微信公众号
            </div>
            <div>
              去完成
              <img src="/static/img/19.png" class="goCard">
            </div>

          </div>
          <div class="itemsCard firstCard">
            <div>
              <img src="/static/img/24.png" class="imgCard">
              体验小游戏5分钟
            </div>
            <div>
              去完成
              <img src="/static/img/19.png" class="goCard">
            </div>

          </div>
          <div class="itemsCard firstCard">
            <div>
              <img src="/static/img/24.png" class="imgCard">
              观看精彩广告15秒
            </div>
            <div>
              去完成
              <img src="/static/img/19.png" class="goCard">
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {myInfo, getMySupplementaryCard, addSupplementaryCard, addSupplementaryCardByCode} from '@/api/index'
export default {
  name: 'myCard',
  data () {
    return {
      count: 0, // 补签卡数
      code: '', // 兑换码
      info: {}
    }
  },
  created () {
    this.getUserInfo()
    this.getCard()
    this.getTask()
  },
  methods: {
    // 获取用户信息
    getUserInfo () {
      myInfo({}).then(res => {
        if (res.code == 'OK') {
          this.info = res.data
        }
      })
    },
    // 我的补签卡数
    getCard () {
      getMySupplementaryCard({}).then(res => {
        if (res.code == 'OK') {
          this.count = res.data.countSupplementaryCard
        }
      })
    },
    // 任务列表
    getTask () {
      addSupplementaryCard({}).then(res => {
        if (res.code == 'OK') {

        }
      })
    },
    // 兑换码兑换补签卡
    exchangeCode () {
      let data = {
        code: this.code
      }
      addSupplementaryCardByCode(data).then(res => {
        if (res.code == 'OK') {
          this.code = ''
          this.getCard()
        } else {
          this.$weui.dialog({
            title: '提示',
            content: res.message,
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
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .myCardPage{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    .myCard{
      position: relative;
      .txBoxCard{
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
        .txCard{
          width: 90px;
          height: 90px;
          border-radius: 45px;
        }
      }
      .cardCard{
        background: #fff;
        width: 100%;
        height: 510px;
        border-radius: 40px;
        position: absolute;
        top: 50px;
        z-index: 3;
        box-sizing: border-box;
        padding: 60px 0px 0px 0px;
        margin-bottom: 70px;
        .rowCard{
          box-sizing: border-box;
          padding: 0 20px;
        }
        .row1Card{
          text-align: center;
          font-size: 16px;
        }
        .row2Card{
          text-align: center;
          font-size: 14px;
          border-bottom: 1px solid #898989;
          height: 30px;
          line-height: 30px;
          position: relative;
        }
        .btnBoxCard{
          margin-top: 20px;
          box-sizing: border-box;
          padding: 0 20px;
          border-bottom: 1px solid #898989;
          .btn1Card{
            font-size: 20px;
            line-height: 30px;
            margin-bottom: 10px;
            color: #636363;
            span{
              font-weight: 600;
            }
            input{
              height: 45px;
              line-height: 45px;
              background: #F6F6F6;
              border: unset;
              padding: 0 10px;
              border-radius: 23px;
              width: 72%;
            }
          }
          .btnCard{
            font-size: 14px;
            height: 30px;
            line-height: 30px;
          }
        }
        .itemBoxCard{
          margin-top: 20px;
          .itemsCard{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            font-size: 14px;
            color: #535353;
            font-weight: bold;
            box-sizing: border-box;
            padding: 0 10px;
            div{
              display: flex;
              align-items: center;
            }
            .imgCard{
              height: 30px;
              margin-right: 10px;
            }
            .goCard{
              height: 20px;
              margin-left: 10px;
            }
          }
          .firstCard{
            border-top: 1px solid #EDEDED;
          }
        }
      }
    }
  }
</style>
