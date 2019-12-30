<!--习惯主页-->
<template>
  <div class="habitPage" v-infinite-scroll="load">
    <div class="habitPageTop" @click="addTarget">
      +
    </div>
    <div class="habitListBox" >
      <div v-for="(item,index) in list"  class="cardBox">
        <div class="cardCon" @click="getState(item)">
          <div class="cardBoxLeft">
            <div class="cardTitle">
              {{item.name}}
            </div>
            <div class="cardProgress">
              <span class="progressText">进度</span>({{item.haveLock?item.haveLock:0}}/{{item.clockNumber?item.clockNumber:0}})
              <div class="progressbar">
                <progressbar :percentage="Number(item.haveLock) / Number(item.clockNumber)" :index="index"></progressbar>
              </div>
            </div>
            <div class="leftBot">
              <div class="botItem">
                <img class="icon" src="/static/img/praise.png"/>
                {{item.counthumbsUp}}
              </div>
              <div class="botItem">
                <img class="icon" src="/static/img/onlookers.png"/>
                {{item.countWatch}}
              </div>
              <div class="botItem">
                <img class="icon" src="/static/img/reward.png"/>
                {{item.countComment}}
              </div>
            </div>
          </div>
          <!--目标习惯设置完成-->
          <div class="cardBoxRight" v-if="item.step==3">
            <!--进行中-->
            <div v-if="!item.isSuccess">
              <div v-if="item.isLockTody==1">
                <img @click.stop="goclock(item)" class="finger" src="/static/img/finger.png"/>
                <div>打卡</div>
              </div>
              <div v-if="item.isLockTody==-1">
                <img class="finger" src="/static/img/finger3.png"/>
                <div>已打卡</div>
              </div>
              <div v-if="item.isLockTody==2">
                <img class="finger" src="/static/img/finger1.png"/>
                <div style="color: #E3E3E3">打卡</div>
              </div>
            </div>
            <!--已完成的习惯-->
            <div v-if="item.isSuccess">
              <img @click.stop="once(item)" class="finger" src="/static/img/finger2.png"/>
              <div>再来一次</div>
            </div>
          </div>
          <!--目标习惯未设置完成，可继续设置-->
          <div class="cardBoxRight" v-if="item.step!=3">
            <img @click.stop="continues(item)" class="finger" src="/static/img/finger1.png"/>
            <div style="color: #E3E3E3">打卡</div>
          </div>
        </div>
        <div class="tipBox">
          <div class="text">
            <span v-if="item.step==3">
              <span v-if="item.isSuccess==0">
                {{item.isLockTody==1?'继续加油':item.isLockTody==-1?'今日已打卡':'今日无需打卡'}}
              </span>
               <span v-if="item.isSuccess!=0">
                再来一次
              </span>
            </span>
            <span v-if="item.step!=3">目标未设立</span>
          </div>
        </div>
      </div>
    </div>
    <div class="more" v-if="pageNum <= Math.ceil(total / pageSize)">上拉加载更多...</div>
    <div class="habitPageBot">
      <div class="addbtn" @click="addTarget">
        定个目标 开始打卡
      </div>
    </div>
  </div>
</template>

<script>
import {getGoalLit, toClock, planGoals1} from '@/api/habit'
import { getToken, setToken, removeToken } from '@/utils/auth'
import progressbar from '@/components/progressbar'
export default {
  name: 'index',
  components:{
    progressbar
  },
  data () {
    return {
      list: [], // 习惯列表
      pageNum: 1,
      pageSize: 10,
      total: 0,
    }
  },
  created () {
    if (getToken('code')) {
      if (getToken('sessionId')) {
        this.getList()
      } else {
        this.login()
      }
    } else {
      if (window.location.href.indexOf('code') == -1) {
        this.get_auth_code()
      } else {
        this.getMycodes()
      }
    }
  },
  mounted () {

  },
  methods: {
    // 登录
    login () {
      this.$store.dispatch('login').then(res => {
        if (getToken('sessionId')) {
          this.getList()
        }
      })
    },
    // 跳转授权页面授权（注意：需替换掉url中的#）
    get_auth_code () {
      var that = this
      // href: 完整的 URL
      var paths = window.location.href.split('#')
      if (paths) {
        var u = 'http://www.bjchangyukeji.com'
        // 没有返回code，跳转获取
        var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + that.$store.getters.appid + '&redirect_uri=' + u + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
        window.location.href = url
      }
    },
    // 获取code（授权成功后的code在window.location.search中）
    getMycodes () {
      let codePath = window.location.href.split('code=')[1]
      let code = codePath.split('&')[0]
      setToken('code', code)
      let newUrl = window.location.href.split('?')[0] + '#/'
      window.location.href = newUrl
    },
    // 获取习惯列表
    getList () {
      let data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      getGoalLit(data).then(res => {
        if (res.code == 'OK') {
          this.list = this.list.concat(res.data.rows)
          this.total = res.data.totalRecords
          this.pageNum = res.data.curPage +1
        } else {
          alert(res)
        }
      })
    },
    // 添加目标
    addTarget () {
      this.$router.push({path: '/addTarget'})
    },
    // 打卡
    goclock (item) {
      let data = {
        userGoalId: item.id
      }
      toClock(data).then(res => {
        if (res.code == 'OK') {
          this.$router.push({path: '/clockSuccess', query: {goalId: res.message}})
        }
      })
    },
    // 再来一次
    once (item) {
      let data = {
        name: item.name,
        goalId: item.goalId
      }
      planGoals1(data).then(res => {
        if (res.code == 'OK') {
          this.$router.push({path: '/challengeGold', query: {targetId: res.message}}) //   带参，显示在地址栏中
        }
      })
    },
    // 继续设立目标
    continues (item) {
      if (item.step == 1) {
        this.$router.push({path: '/challengeGold', query: {targetId: item.id}})
      }
      if (item.step == 2) {
        this.$router.push({path: '/clockCycle', query: {targetId2: item.id}})
      }
    },
    // 习惯状态详情
    getState (item) {
      if (item.step == 3) {
        if (item.isSuccess == 0) {
          this.$router.push({path: '/stateDoing', query: {goalId: item.id}})
        } else {
          this.$router.push({path: '/stateComplete', query: {goalId: item.id}})
        }
      } else {
        this.continues()
      }
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
  .habitPage{
    box-sizing: border-box;
    margin: 0 20px 50px 20px;
    height: 100vh;
    overflow: auto;
    .habitPageTop{
      width: 100%;
      text-align: right;
      color: #FB8A62;
      font-size: 34px;
      box-sizing: border-box;
      /*padding-right: 20px;*/
      cursor: pointer;
      /*position: absolute;*/
      /*top: 0;*/
    }
    .habitListBox{
      margin: 0px auto 0 auto;
      .cardBox{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 20px;
        .cardCon{
          width: 94.5%;
          height: 100px;
          box-shadow:9px 8px 11px 1px rgba(220,220,220,0.75);
          border-radius:30px;
          background: #fff;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          padding: 10px 20px;
          z-index: 100;
          justify-content: space-between;
          .cardBoxLeft{
            .cardTitle{
              font-weight:bold;
              color:rgba(83,83,83,1);
              font-size: 20px;
            }
            .cardProgress{
              display: flex;
              flex-direction: row;
              align-items: center;
              margin: 10px 0;
              .progressText{
                margin-right: 5px;
              }
              .progressbar{
                width: 100px;
                height: 10px;
                margin-left: 5px;
              }
            }
            .leftBot{
              display: flex;
              flex-direction: row;
              .botItem{
                width: 50px;
                .icon{
                  width: 12px;
                  height: 12px;
                }
              }
            }
          }
          .cardBoxRight{
            text-align: center;
            .finger{
              width: 50px;
              height: 50px;
            }
          }
        }
        .tipBox{
          z-index: 1;
          display: flex;
          align-items: center;
          width: 10%;
          height: 80px;
          background: #fff;
          font-size: 10px;
          line-height: 12px;
          box-sizing: border-box;
          padding: 0 5px 0 15px;
          border-radius: 15px;
          box-shadow:-19px 11px 17px 4px rgba(220, 220, 220, 0.75);
          position: absolute;
          right: 0;
        }
      }
    }
    .more{
      color: #CBCBCB;
      text-align: center;
      font-size: 12px;
    }
    .habitPageBot{
      .addbtn{
        width:240px;
        height:50px;
        background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
        box-shadow:0px 16px 24px 3px rgba(220,220,220,0.75);
        border-radius:25px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        color: #FFFFFF;
        margin: 10px auto;
        font-weight:bold;
        cursor: pointer;
      }
    }
  }
</style>
