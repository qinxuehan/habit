import request from '@/utils/request'
import qs from 'qs'

// 获取签名
export function getShareParam(params) {
  return request({
    url: '/shareController/getShareParam',
    method: 'get',
    params
  })
}
// 登陆
export function login (data) {
  return request({
    url: '/logins/toLogin',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 用户信息
export function myInfo(params) {
  return request({
    url: '/users/myInfo',
    method: 'get',
    params
  })
}
// 我的围观
export function getMyWatchList(params) {
  return request({
    url: '/watchs/getMyWatchList',
    method: 'get',
    params
  })
}
// 我的补签卡
export function getMySupplementaryCard(params) {
  return request({
    url: '/supplementaryCards/getMySupplementaryCard',
    method: 'get',
    params
  })
}
// 补签卡-任务列表
export function addSupplementaryCard (data) {
  return request({
    url: '/supplementaryCards/addSupplementaryCard',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 补签卡-兑换码兑换补签卡
export function addSupplementaryCardByCode (data) {
  return request({
    url: '/supplementaryCards/addSupplementaryCardByCode',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 我的监督-等待监督
export function getMySuperviseHistoryIng(params) {
  return request({
    url: '/superviseHistorys/getMySuperviseHistoryIng',
    method: 'get',
    params
  })
}
// 我的监督-完成监督
export function getMySuperviseHistoryFinash(params) {
  return request({
    url: '/superviseHistorys/getMySuperviseHistoryFinash',
    method: 'get',
    params
  })
}
// 我的监督-执行监督
export function doSuperviseHistory (data) {
  return request({
    url: '/superviseHistorys/doSuperviseHistory',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 充值
export function toRecharge (data) {
  return request({
    url: '/rechargeBags/toRecharge',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 提现-验证
export function verifyWithDraw (data) {
  return request({
    url: '/withDraws/verifyWithDraw',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 提现-确认
export function withDraw (data) {
  return request({
    url: '/withDraws/withDraw',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 余额明细
export function getUserlist (data) {
  return request({
    url: '/userBills/getUserlist',
    method: 'post',
    data: qs.stringify(data)
  })
}
