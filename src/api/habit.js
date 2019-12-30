import request from '@/utils/request'
import qs from 'qs'

// 创建目标第一步
export function planGoals1(data) {
  return request({
    url: '/userGoals/planGoals1',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 获取热门目标
export function getHotGoals(params) {
  return request({
    url: '/goals/getHotGoals',
    method: 'get',
    params
  })
}
// 创建目标第二步
export function planGoals2(data) {
  return request({
    url: '/userGoals/planGoals2',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 创建目标第三步
export function planGoals3(data) {
  return request({
    url: '/userGoals/planGoals3',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 获取目标详情
export function getGoalById(params) {
  return request({
    url: '/userGoals/getGoalById',
    method: 'get',
    params
  })
}
// 获取习惯列表
export function getGoalLit(params) {
  return request({
    url: '/userGoals/getGoalLit',
    method: 'get',
    params
  })
}
// 打卡
export function toClock(data) {
  return request({
    url: '/clocks/toClock',
    method: 'post',
    data: qs.stringify(data)
  })
}
// 打卡成功详情
export function goalSucess(params) {
  return request({
    url: '/userGoals/goalSucess',
    method: 'get',
    params
  })
}
// 习惯详情（已完结）
export function oalInfoSucess(params) {
  return request({
    url: '/userGoals/goalInfoSucess',
    method: 'get',
    params
  })
}
// 习惯详情（进行中）
export function goalInfoProgress(params) {
  return request({
    url: '/userGoals/goalInfoProgress',
    method: 'get',
    params
  })
}
// 习惯详情（进行中）-打卡明细
export function goalProgressClockInfo(params) {
  return request({
    url: '/userGoals/goalProgressClockInfo',
    method: 'get',
    params
  })
}
