import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 习惯
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/view/habit/index.vue'], resolve),
      meta: {
        title: '习惯打卡',
        footerType:1
      },
    },
    // 打卡成功
    {
      path: '/clockSuccess',
      name: 'clockSuccess',
      component: resolve => require(['@/view/habit/clockSuccess.vue'], resolve),
      meta: {
        title: '习惯打卡',
        footerType:1
      },
    },
    // 习惯状态-完成
    {
      path: '/stateComplete',
      name: 'stateComplete',
      component: resolve => require(['@/view/habit/stateComplete.vue'], resolve),
      meta: {
        title: '已完结',
        footerType:1
      },
    },
    // 习惯状态-进行中
    {
      path: '/stateDoing',
      name: 'stateDoing',
      component: resolve => require(['@/view/habit/stateDoing.vue'], resolve),
      meta: {
        title: '进行中',
        footerType:1
      },
    },
    // 习惯状态-进行中-详情
    {
      path: '/stateDoingDetail',
      name: 'stateDoingDetail',
      component: resolve => require(['@/view/habit/stateDoingDetail.vue'], resolve),
      meta: {
        title: '进行中',
        footerType:1
      },
    },
    // 习惯状态-评论
    {
      path: '/comments',
      name: 'comments',
      component: resolve => require(['@/view/habit/comments.vue'], resolve),
      meta: {
        title: '评论',
        footerType:1
      },
    },
    // 习惯状态-围观
    {
      path: '/myonlookers',
      name: 'myonlookers',
      component: resolve => require(['@/view/habit/myonlookers.vue'], resolve),
      meta: {
        title: '围观',
        footerType:1
      },
    },
    // 添加目标
    {
      path: '/addTarget',
      name: 'addTarget',
      component: resolve => require(['@/view/habit/addTarget.vue'], resolve),
      meta: { title: '定个目标', footerType:1},
    },
    // 挑战金设置
    {
      path: '/challengeGold',
      name: 'challengeGold',
      component: resolve => require(['@/view/habit/challengeGold.vue'], resolve),
      meta: { title: '挑战金设置', footerType:1},
    },
    // 目标设置
    {
      path: '/clockCycle',
      name: 'clockCycle',
      component: resolve => require(['@/view/habit/clockCycle.vue'], resolve),
      meta: { title: '目标设置', footerType:1},
    },
    // 目标设置完成
    {
      path: '/complete',
      name: 'complete',
      component: resolve => require(['@/view/habit/complete.vue'], resolve),
      meta: {
        footerType:1
      },
    },
    // 邀请监督
    {
      path: '/supervision',
      name: 'supervision',
      component: resolve => require(['@/view/habit/supervision.vue'], resolve),
      meta:{
        footerType:1
      }
    },
    // 邀请围观-分享
    {
      path: '/onlookers',
      name: 'onlookers',
      component: resolve => require(['@/view/habit/onlookers.vue'], resolve),
      meta:{
        footerType:1
      }
    },
    // 好友查看分享的习惯
    {
      path: '/friendsView',
      name: 'friendsView',
      component: resolve => require(['@/view/habit/friendsView.vue'], resolve),
      meta:{
        footerType:1
      }
    },
    // 我的
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['@/view/user/index.vue'], resolve),
      meta: { title: '我的', footerType:2},
    },
    // 我的围观
    {
      path: '/myView',
      name: 'myView',
      component: resolve => require(['@/view/user/myView.vue'], resolve),
      meta: {
        title: '我的围观',
        footerType:2
      },
    },
    // 我的补签卡
    {
      path: '/myCard',
      name: 'myCard',
      component: resolve => require(['@/view/user/myCard.vue'], resolve),
      meta: {
        title: '补签卡',
        footerType:2
      },
    },
    // 我的监督
    {
      path: '/mySupervision',
      name: 'mySupervision',
      component: resolve => require(['@/view/user/mySupervision.vue'], resolve),
      meta: {
        title: '我的监督',
        footerType:2
      },
    },
    // 提现
    {
      path: '/withdrawal',
      name: 'withdrawal',
      component: resolve => require(['@/view/user/withdrawal.vue'], resolve),
      meta: {
        title: '提现验证',
        footerType:2
      },
    },
    // 提现-确认
    {
      path: '/withdrawalConfirm',
      name: 'withdrawalConfirm',
      component: resolve => require(['@/view/user/withdrawalConfirm.vue'], resolve),
      meta: {
        title: '提现确认',
        footerType:2
      },
    },
    // 明细
    {
      path: '/moneyDetail',
      name: 'moneyDetail',
      component: resolve => require(['@/view/user/moneyDetail.vue'], resolve),
      meta: {
        title: '余额明细',
        footerType:2
      },
    }
  ]
})
