<template>
  <div class="footerPage">
    <div v-for="(item,index) in list" :class="selected == item.index ?'item habitItem'+selected:'item'" @click="switchTab(index)">
      <div><img class="icon" src="/static/img/habit.png" /></div>
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import {getToken} from '../utils/auth'

export default {
  name: 'footers',
  data () {
    return {
      list: [
        {
          index: 1,
          name: '习惯'
        },
        {
          index: 2,
          name: '我的'
        }
      ],
      selected: 1
    }
  },
  methods: {
    switchTab (type) {
      if (type == 0) {
        this.$router.push({path: '/'})
      }
      if (type == 1) {
        this.$router.push({path: '/user'})
      }
    }
  },
  watch:{
    $route(){
      this.selected = getToken('footerType')
    }
  }
}
</script>

<style lang="less" scoped>
  .footerPage{
    width: 100%;
    height: 50px;
    background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: #FFFFFF;
    font-size:10px;
    font-family:PingFang SC;
    font-weight:500;
    position: fixed;
    bottom: 0;
    z-index: 999;
    .item{
      width: 46px;
      height: 46px;
      border-radius: 23px;
      text-align: center;
      box-sizing: border-box;
      padding-top: 6px;
      .icon{
        width: 20px;
        height: 20px;
      }
    }
    .habitItem1{
      background: #FA9C69;
    }
    .habitItem2{
      background: #E77F5A;
    }

  }



</style>
