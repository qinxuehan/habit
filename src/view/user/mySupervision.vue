<template>
  <div class="mySupervision" v-infinite-scroll="load">
    <div class="mySupervisionTop">
      <div class="titleSuper">等待您的监督...</div>
      <div class="listBox1Super">
        <div class="cardSuper" v-for="item in listIng">
          <div class="cardLeftSuper">
            <img :src="item.userPhoto" class="txSuper">
          </div>
          <div class="cardRightSuper">
            <div class="upBoxSuper">
              <span class="nameSuper">{{item.userName}}</span>
              <span>
                <img src="/static/img/25.png" class="iconSuper">
                {{item.userGoalName}}
              </span>
            </div>
            <div class="downBoxSuper" v-if="item.isSecuess==0">
              <div class="btn1Super btnSuper" @click="perform(item,1)">完成了</div>
              <div class="btn2Super btnSuper" @click="perform(item,2)">没完成</div>
            </div>
            <div class="downBox2Super" v-if="item.isSecuess==2">
              <div class="btn3Super">尚未完成打卡目标</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mySupervisionBot">
      <div class="titleSuper">已完成的监督...</div>
      <div class="listBox1Super listBox1Super2">
        <div class="cardSuper" v-for="item in listEd">
          <div class="cardLeftSuper">
            <img :src="item.userPhoto" class="txSuper">
          </div>
          <div class="cardRightSuper">
            <div class="upBoxSuper">
              <span class="nameSuper">{{item.userName}}</span>
              <span>
                <img src="/static/img/04.png" class="iconSuper">
                {{item.userGoalName}}
              </span>
            </div>
            <div class="downBox3Super" v-if="item.isSecuess==1">
              <img src="/static/img/26.png" class="icon3Super">
              对方已完成打卡目标
            </div>
            <div class="downBox3Super" v-if="item.isSecuess==2">
              <img src="/static/img/27.png" class="icon3Super">
              对方未完成打卡目标
            </div>
          </div>
        </div>
        <div class="more" v-if="pageNumEd <= Math.ceil(totalEd / pageSizeEd)">上拉加载更多...</div>
      </div>
    </div>
  </div>
</template>

<script>
import navs from '@/components/nav'
import footers from '@/components/footer'
import {getMySuperviseHistoryIng, getMySuperviseHistoryFinash, doSuperviseHistory} from '@/api/index'
export default {
  name: 'mySupervision',
  components: {
    navs,
    footers
  },
  data () {
    return {
      listIng: [], // 监督列表-等待监督
      pageNumIng: 1,
      pageSizeIng: 10,
      totalIng: 0,
      listEd: [], // 监督列表-已完成的监督
      pageNumEd: 1,
      pageSizeEd: 10,
      totalEd: 0
    }
  },
  created () {
    this.getListIng()
    this.getListEd()
  },
  methods: {
    // 获取等待监督
    getListIng () {
      let data = {
        pageNum: this.pageNumIng,
        pageSize: this.pageSizeIng
      }
      getMySuperviseHistoryIng(data).then(res => {
        if (res.code == 'OK') {
          this.listIng = res.data.page.rows
          this.totalIng = res.data.page.totalRecords
        }
      })
    },
    // 获取完成监督
    getListEd () {
      let data = {
        pageNum: this.pageNumEd,
        pageSize: this.pageSizeEd
      }
      getMySuperviseHistoryFinash(data).then(res => {
        if (res.code == 'OK') {
          this.listEd = this.listEd.concat(res.data.page.rows)
          this.totalEd = res.data.page.totalRecords
          this.pageNumEd = res.data.page.curPage + 1
        }
      })
    },
    // 上拉加载更多
    load () {
      var that = this
      // 到底了-业务逻辑
      if (that.pageNumEd <= Math.ceil(that.totalEd / that.pageSizeEd)) {
        that.getListEd()
      }
    },
    // 执行监督
    perform (item, num) {
      let data = {
        superviseHistoryId: item.id,
        isSecuess: num
      }
      doSuperviseHistory(data).then(res => {
        if (res.code == 'OK') {
          this.$weui.toast('操作成功', 3000)
          this.getListIng()
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mySupervision{
  box-sizing: border-box;
  padding: 10px 20px;
  color: #818181;
  margin-bottom: 50px;
  height: 100vh;
  overflow: auto;
  .mySupervisionBot{
    margin-top: 10px;
  }
  .listBox1Super{
    .cardSuper{
      display: flex;
      flex-direction: row;
      background: #fff;
      height: 110px;
      border-radius: 40px;
      box-sizing: border-box;
      padding: 10px;
      margin-top: 10px;
      box-shadow:0px 5px 9px 2px rgba(220,220,220,0.75);
      .cardLeftSuper{
        margin-right: 10px;
        .txSuper{
          width: 40px;
          height: 40px;
          border-radius: 20px;
        }
      }
      .cardRightSuper{
        width: 100%;
        .upBoxSuper{
          height: 20px;
          line-height: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #818181;
          margin-top: 10px;
          .nameSuper{
            font-size: 20px;
          }
          .iconSuper{
            height: 18px;
            width: 15px;
            vertical-align: bottom;
          }
        }
        .downBoxSuper{
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .btnSuper{
            height: 40px;
            line-height: 40px;
            border-radius: 20px;
            width: 100px;
            font-size: 20px;
            text-align: center;
          }
          .btn1Super{
            background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
            color: #fff;
          }
          .btn2Super{
            background: #EFEFEF;
          }
        }
        .downBox2Super{
          box-sizing: border-box;
          padding: 0 20px;
          .btn3Super{
            height: 40px;
            border-radius: 20px;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            line-height: 40px;
            background: #EFEFEF;
            color: #fff;
            margin-top: 10px;
          }
        }
        .downBox3Super{
          height: 40px;
          display: flex;
          align-items: center;
          font-size: 16px;
          margin-top: 10px;
          font-weight: 500;
          .icon3Super{
            height: 40px;
            margin-right: 20px;
          }
        }
      }
    }
  }
  .listBox1Super2{
    .more{
      color: #CBCBCB;
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>
