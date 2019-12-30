<template>
  <div class="myView" v-infinite-scroll="load">
    <div class="cardView" v-for="(item,index) in list">
      <div class="topView">
        <div class="topLeftView">
          <img :src="item.userPhoto" class="txView">
        </div>
        <div class="topRightView">
          <div class="upView">
            <span>{{item.userName}}</span>
            <span class="dateView">围观于 {{item.createTime}}</span>
          </div>
          <div class="downView">
            <div>
              <img src="/static/img/04.png" class="tipView">
              {{item.goalName}}
            </div>
            <div>
              <img v-if="item.isSuccess==1" src="/static/img/21.png" class="tipView">
              <img v-if="item.isSuccess==2" src="/static/img/22.png" class="tipView">
              <img v-if="item.isSuccess==0" src="/static/img/23.png" class="tipView">
              {{item.isSuccess==1?'对方打卡成功':item.isSuccess==2?'对方打卡失败':'进行中'}}
            </div>
          </div>
        </div>
      </div>
      <div class="bottomView">
        <div class="botItemView">
          <img src="/static/img/20.png" class="icon4View iconView">
          <div>押金￥{{item.goalMoney}}</div>
        </div>
        <div class="botItemView">
          <img src="/static/img/16.png" class="icon1View iconView">
          <div>总评论{{item.countComment}}人</div>
        </div>
        <div class="botItemView">
          <img src="/static/img/17.png" class="icon2View iconView">
          <div>总围观{{item.countWatch}}人</div>
        </div>
        <div class="botItemView">
          <img src="/static/img/18.png" class="icon3View iconView">
          <div>被{{item.countThumbsUp}}人点赞</div>
        </div>
      </div>
    </div>
    <div class="more" v-if="pageNum <= Math.ceil(total / pageSize)">上拉加载更多...</div>
  </div>
</template>

<script>
import {getMyWatchList} from '@/api/index'
export default {
  name: 'myView',
  data(){
    return{
      list:[],// 围观列表
      pageNum:1,
      pageSize:3,
      total:0,
    }
  },
  created () {
    this.getList()
  },
  methods:{
    // 获取围观列表
    getList(){
      let data = {
        pageNum:this.pageNum,
        pageSize:this.pageSize
      }
      getMyWatchList(data).then(res=>{
        if(res.code=='OK'){
          this.list = this.list.concat(res.data.page.rows)
          this.total = res.data.page.totalRecords
          this.pageNum = res.data.page.curPage + 1
        }
      })
    },
    // 上拉加载更多
    load(){
      var that = this
      // 到底了-业务逻辑
      if (that.pageNum <= Math.ceil(that.total / that.pageSize)) {
        that.getList()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .myView{
    margin-bottom: 50px;
    box-sizing: border-box;
    padding: 0 20px 20px 20px;
    height: 100vh;
    overflow: auto;
    .cardView{
      width: 100%;
      height: 140px;
      background:#fff;
      box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
      border-radius: 40px;
      margin-top: 20px;
      .topView{
        display: flex;
        flex-direction: row;
        padding: 5px 10px;
        box-sizing: border-box;
        .topLeftView{
          background: #fff;
          width: 60px;
          height: 60px;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          .txView{
            width: 52px;
            height: 52px;
            border-radius: 26px;
          }
        }
        .topRightView{
          width: 75%;
          .upView{
            font-size: 20px;
            border-bottom: 1px solid #818181;
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .dateView{
              font-size: 10px;
            }
          }
          .downView{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .tipView{
              width: 13px;
              height: 13px;
              margin-right: 3px;
            }
          }
        }
      }
      .bottomView{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 75%;
        margin: 5px auto 0 auto;
        .botItemView{
          color: #535353;
          font-size: 10px;
          text-align: center;
          .iconView{
            margin-bottom: 5px;
          }
          .icon1View{
            width: 25px;
            height: 25px;
          }
          .icon4View{
            width: 27px;
            height: 25px;
          }
          .icon2View{
            width: 35px;
            height: 25px;
          }
          .icon3View{
            width: 30px;
            height: 25px;
          }
        }
      }
    }
    .more{
      color: #CBCBCB;
      text-align: center;
      font-size: 12px;
    }
  }
</style>
