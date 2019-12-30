<template>
  <div class="stateComplete">
    <div class="card1">
      <div class="top">
        <div class="topLeft">
          <img :src="detail.photo" class="tx">
        </div>
        <div class="topRight">
          <div class="up">
            {{detail.userName}}
          </div>
          <div class="down">
            <img src="/static/img/08.png" class="tip">
            {{detail.goalName}}
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="botItem">
          <img src="/static/img/10.png" @click="gocomments" class="icon1 icon">
          <div>总评论{{detail.countComment}}人</div>
        </div>
        <div class="botItem">
          <img src="/static/img/11.png" @click="goCheck(1)" class="icon2 icon">
          <div>总围观{{detail.countWatch}}人</div>
        </div>
        <div class="botItem">
          <img src="/static/img/12.png" @click="goCheck(2)" class="icon3 icon">
          <div>被{{detail.counthumbsUp}}人见证</div>
        </div>
      </div>
    </div>
    <div class="card2">
      继续保持，养成好习惯
    </div>
    <div class="card3" v-infinite-scroll="load">
      <div class="listItem" v-for="(item,index) in list">
        <div class="row1">
          <span>第{{index+1}}次坚持</span>
          <span class="time">{{item.startTime}} 至 {{item.endTime}}</span>
        </div>
        <div class="row2">
          <div class="row2Left">
            <div>应打卡{{item.clockNumber}}次</div>
            <div>打卡成功{{item.clockSecussNumber}}次</div>
          </div>
          <div class="row2Right">
            <div class="proRow">
              <progressbar :percentage="Number(item.clockSecussNumber) / Number(item.clockNumber)" :index="'stateComplete'+index"></progressbar>
            </div>
            <div>{{item.isSuccess==1?'本阶段目标完成':'本阶段目标失败'}}</div>
          </div>
        </div>
      </div>
      <div class="more" v-if="pageNum <= Math.ceil(total / pageSize)">上拉加载更多...</div>
    </div>
  </div>
</template>

<script>
import {oalInfoSucess} from '@/api/habit'
import progressbar from '@/components/progressbar'
export default {
  name: 'stateComplete',
  components: {
    progressbar
  },
  data () {
    return {
      pageNum: 1,
      pageSize: 5,
      total:0,
      list:[],
      detail:{},
    }
  },
  created(){
    this.getInfo()
  },
  methods: {
    // 获取信息
    getInfo(){
      let data = {
        userGoalId:this.$route.query.goalId,
        pageNum:this.pageNum,
        pageSize: this.pageSize
      }
      oalInfoSucess(data).then(res=>{
        if(res.code=='OK'){
          this.list =  this.list.concat(res.data.page.rows)
          this.total = res.data.page.totalRecords
          this.detail = res.data
          this.pageNum = res.data.page.curPage+1
        }
      })
    },
    // 上拉加载
    load(){
      var that = this
      // 到底了-业务逻辑
      if (that.pageNum <= Math.ceil(that.total / that.pageSize)) {
        that.getInfo()
      }
    },
    // 去看评论
    gocomments () {
      this.$router.push({path: '/comments'})
    },
    // 去看围观
    goCheck (num) {
      // 1-围观，2-点赞
      this.$router.push({path: '/myonlookers', query: {type: num}})
    }
  }
}
</script>

<style lang="less" scoped>
  .stateComplete{
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 50px;
    .card1{
      width: 100%;
      height: 140px;
      background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
      box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
      border-radius: 40px;
      .top{
        display: flex;
        flex-direction: row;
        padding: 10px;
        .topLeft{
          background: #fff;
          width: 60px;
          height: 60px;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          .tx{
            width: 52px;
            height: 52px;
            border-radius: 26px;
          }
        }
        .topRight{
          width: 75%;
          .up{
            font-size: 20px;
            color: #fff;
            border-bottom: 1px solid #fff;
            margin-bottom: 5px;
            padding-bottom: 3px;
          }
          .down{
            display: flex;
            flex-direction: row;
            align-items: center;
            color: #fff;
            .tip{
              width: 15px;
              height: 15px;
              margin-right: 5px;
            }
          }
        }
      }
      .bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 75%;
        margin: 5px auto 0 auto;
        .botItem{
          color: #535353;
          font-size: 10px;
          text-align: center;
          .icon{
            margin-bottom: 5px;
          }
          .icon1{
            width: 25px;
            height: 25px;
          }
          .icon2{
            width: 35px;
            height: 25px;
          }
          .icon3{
            width: 30px;
            height: 25px;
          }
        }
      }
    }
    .card2{
      background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
      box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
      width: 80%;
      margin: 20px auto;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
    }
    .card3{
      height: 50vh;
      overflow: auto;
      .listItem{
        background: #fff;
        height: 100px;
        border-radius: 30px;
        box-sizing: border-box;
        padding: 10px 20px;
        color: #535353;
        margin-bottom: 20px;
        .row1{
          font-size: 18px;
          .time{
            font-size: 10px;
            margin-left: 5px;
          }
        }
        .row2{
          display: flex;
          flex-direction: row;
          margin-top: 10px;
          .row2Left{
            width: 40%;
            text-align: left;
          }
          .row2Right{
            width: 70%;
            text-align: right;
            .proRow{
              width: 100%;
              height: 10px;
              margin: 5px 0;
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
  }
</style>
