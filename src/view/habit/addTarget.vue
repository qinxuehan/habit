<template>
<div class="page">
  <div class="addTargetPage">
    <div class="enterTargetBox">
      <div class="enterTitle">
        填写目标名称
      </div>
      <div class="enterBox">
        <input v-model="targetName" placeholder="请输入您的目标计划，可参考热门目标哟"/>
      </div>
    </div>
    <div class="hotTargetBox">
      <div class="hotTitle">
        热门目标
      </div>
      <div class="hotTargetList">
        <div class="hotTarget" v-for="item in hotTarget" @click="targetName=item.name">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
  <div class="nextStepBox">
    <div class="nextStep" @click="challengeGold">

      下一步
    </div>
  </div>
</div>
</template>

<script>
import {planGoals1,getHotGoals} from '@/api/habit'
export default {
  name: 'addTarget',
  data () {
    return {
      targetName: '', // 目标名称
      hotTarget:[], // 热门目标
    }
  },
  created(){
    this.getHot()
  },
  methods: {
    // 获取热门目标
    getHot(){
      getHotGoals({}).then(res=>{
        if(res.code=='OK'){
          this.hotTarget = res.data
        }
      })
    },
    // 下一步
    challengeGold () {
      if (this.targetName) {
        let data = {
          name: this.targetName
        }
        planGoals1(data).then(res => {
          console.log('res', res)
          if(res.code=='OK'){
            this.$router.push({path: '/challengeGold',query: {targetId: res.message}})    //   带参，显示在地址栏中
          }
        })
      } else {
        // console.log('this.targetName',this.targetName,this.$weui)
        this.$weui.dialog({
          title: '提示',
          content: '请输入目标名称',
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

    },
  }
}
</script>

<style lang="less" scoped>
  .page{
    background: #fff;
    height: 100vh;
    .addTargetPage{
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      .enterTargetBox{
        .enterTitle{
          color: #535353;
          font-size: 16px;
          font-weight: bold;
        }
        .enterBox{
          input{
            box-sizing: border-box;
            width:100%;
            height:50px;
            background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
            border-radius:25px;
            line-height: 50px;
            margin: 10px 0;
            color: #fff;
            font-size: 14px;
            padding-left: 20px;
            border: unset;
          }
          input::-webkit-input-placeholder{
            color: #fff;
          }
        }
      }
      .hotTargetBox{
        margin-top: 40px;
        .hotTitle{
          color: #535353;
          font-size: 16px;
          font-weight: bold;
        }
        .hotTargetList{
          box-sizing: border-box;
          width:100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .hotTarget{
            box-sizing: border-box;
            padding: 0 20px;
            height: 40px;
            line-height: 40px;
            background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
            border-radius:20px;
            color: #fff;
            font-size: 14px;
            margin-top: 20px;
            margin-right: 10px;

          }
        }
      }
    }
    .nextStepBox{
      width: 100%;
      margin-bottom: 70px;
      .nextStep{
        margin: 0 auto;
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
  }

</style>
