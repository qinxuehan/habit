<template>
  <div class="stateDoingDetail">
    <div class="banner">banner</div>
    <div class="detailCon">
      <div class="card1">
        <div class="top">
          <div class="topLeft">
            <img :src="detail.userPhoto" class="tx">
          </div>
          <div class="topRight">
            <div class="up">
              <span class="span1">{{detail.userName}}</span>
              <span class="span2">{{detail.clockBeginAndEnd}}</span>
            </div>
            <div class="down">
              <img src="/static/img/04.png" class="tip">
              {{detail.goalName}}
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="botItem">
            <span class="span1">目标计划总打卡：{{detail.allClockNumber}}次</span>
            <span class="span2">当前应打卡：{{detail.thisClockNumber}}次</span>
          </div>
          <div class="botItem">
            <span class="span1">打卡成功：{{detail.secuessClockNumber}}次</span>
            <span class="span2">打卡失败：{{detail.failClockNumber}}次</span>
          </div>
        </div>
      </div>
      <div class="list" v-infinite-scroll="load">
        <div class="listItem" v-for="(item,index) in list">
          <div class="left">
            <div class="span1">第{{item.number}}次打卡</div>
            <div class="span1">
                  <span v-if="item.statue==4 || item.statue==3 || item.statue==2">
                      {{item.clockTime}}
                  </span>
              <span v-if="item.statue==1 || item.statue==5 || item.statue==6">未打卡</span>
            </div>
          </div>
          <div class="right">
            <div class="btn" v-if="item.statue==1">补卡</div>
            <div class="succ" v-if="item.statue==4">
              <div class="imgBox">
                <img class="img" src="/static/img/14.png">
              </div>
              <div>打卡成功</div>
            </div>
            <div class="succ" v-if="item.statue==3">
              <div class="imgBox">
                <img class="img" src="/static/img/15.png">
              </div>
              <div>被监督者否决</div>
            </div>
            <div class="succ" v-if="item.statue==5">
              <div>休假，免打卡</div>
            </div>
            <div class="succ" v-if="item.statue==6">
              <div class="imgBox">
                <img class="img" src="/static/img/15.png">
              </div>
              <div>打卡失败</div>
            </div>
            <div class="succ" v-if="item.statue==2">
              <div>等待监督</div>
            </div>
          </div>
        </div>
        <div class="more" v-if="pageNum <= Math.ceil(total / pageSize)">上拉加载更多...</div>
      </div>
    </div>
  </div>
</template>

<script>
import navs from '@/components/nav'
import {goalProgressClockInfo} from '@/api/habit'
export default {
  name: 'stateDoingDetail',
  components: {
    navs
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
  created () {
    this.getInfo()
  },
  methods: {
    // 获取习惯详情
    getInfo () {
      let data = {
        userGoalId: this.$route.query.goalId,
        pageNum: this.pageNum,
        pageSize: this.pageSize

      }
      goalProgressClockInfo(data).then(res => {
        if (res.code == 'OK') {
          this.list =  this.list.concat(res.data.clockList.rows)
          this.total = res.data.clockList.totalRecords
          this.detail = res.data
          this.pageNum = res.data.clockList.curPage+1
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
    }
  }
}
</script>

<style lang="less" scoped>
  .stateDoingDetail{
    margin-bottom: 50px;
    .banner{
      height: 50px;
      width: 100%;
      background: #fff;
      text-align: center;
      line-height: 50px;
    }
    .detailCon{
      box-sizing: border-box;
      padding: 20px;
      .card1{
        width: 100%;
        height: 140px;
        background:#fff;
        box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
        border-radius: 40px;
        color: #535353;
        .top{
          display: flex;
          flex-direction: row;
          padding: 10px;
          .topLeft{
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            .tx{
              width: 50px;
              height: 50px;
              border-radius: 25px;
            }
          }
          .topRight{
            width: 75%;
            .up{
              border-bottom: 1px solid;
              margin-bottom: 5px;
              display: flex;
              justify-content: space-between;
              .span1{
                font-size: 20px;
              }
              .span2{
                font-size: 10px;
                display: inline-block;
                height: 20px;
                line-height: 20px;
                align-self: flex-end;
              }
            }
            .down{
              display: flex;
              flex-direction: row;
              align-items: center;
              .tip{
                width: 15px;
                height: 15px;
                margin-right: 5px;
              }
            }
          }
        }
        .bottom{
          width: 85%;
          margin: 0 auto;
          .botItem{
            height: 24px;
            line-height: 24px;
            color: #535353;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .span2{
              display: inline-block;
              width: 100px;
              text-align: left;
            }
          }
        }
      }
      .list{
        color: #535353;
        margin-top: 20px;
        height: 50vh;
        overflow: auto;
        .listItem{
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 60px;
          border-bottom: 1px solid #535353;
          .left{
            width: 80%;
            .span1{
              height: 30px;
              line-height: 30px;
            }
          }
          .right{
            width: 20%;
            .btn{
              color: #fff;
              width: 60px;
              height: 30px;
              border-radius: 15px;
              line-height: 30px;
              text-align: center;
              background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
            }
            .succ{
              font-size: 8px;
              text-align: center;
              .img{
                width: 30px;
                height: 30px;
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
  }
</style>
