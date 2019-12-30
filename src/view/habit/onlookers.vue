<template>
<!--  邀请围观-->
    <div class="lookPage">
      <div class="cardBox">
        <div class="headBox">
          <img src="/static/img/head.jpg" class="head">
        </div>
        <div class="card">
          <div class="cardTop">
            <div>秦墨</div>
            <div>我在习惯打卡~</div>
          </div>
          <div class="item">
            <div class="left">目标名称</div>
            <div class="right">每天喝8杯水</div>
          </div>
          <div class="item">
            <div class="left">挑战金</div>
            <div class="right">￥8.8</div>
          </div>
          <div class="item">
            <div class="left">已打卡次数</div>
            <div class="right">8/56</div>
          </div>
          <div class="item">
            <div class="left">已坚持天数</div>
            <div class="right">1/7</div>
          </div>
          <div class="item">
            <div class="left">开始时间</div>
            <div class="right">2019/10/08</div>
          </div>
          <div class="item">
            <div class="left">结束时间</div>
            <div class="right">2019/10/10</div>
          </div>
        </div>
        <div class="tip">
          打卡失败，挑战金将由围观者瓜分
        </div>
      </div>
      <div class="codeBox">
        <div class="code">
          <img src="/static/img/code.jpg" class="codeImg">
        </div>
        <div class="codeText">
          长按图片识别二维码围观瓜分挑战金
        </div>
      </div>
    </div>
</template>

<script>
import navs from '@/components/nav'
export default {
  name: 'onlookers',
  components: {
    navs
  }
}
</script>

<style>
.lookPage{
  width: 100%;
  height: 100%;
  background: url("/static/img/09.jpg") no-repeat;
  background-size: cover;
  box-sizing: border-box;
  padding: 40px 20px 0 20px;
}
  .cardBox{
    width: 100%;
    height: 400px;
    position: relative;
  }
  .headBox{
    background: #fff;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    box-sizing: border-box;
    padding: 5px;
    margin: 0 auto;
    position: absolute;
    left: 38%;
    z-index: 3;
  }
  .headBox .head{
    width: 70px;
    height: 70px;
    border-radius: 35px;
  }
  .cardBox .card{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
    box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
    height: 310px;
    border-radius: 40px;
    position: absolute;
    top: 40px;
    z-index: 2;
  }
  .card .cardTop{
    color: #535353;
    font-size: 16px;
    font-family:PingFang SC;
    font-weight:500;
    border-bottom: 1px solid #898989;
    text-align: center;
    box-sizing: border-box;
    padding: 20px 0 10px 0;
    margin-bottom: 10px;
  }
  .card .item{
    font-size: 14px;
    font-weight:500;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
  }
  .card .item .left{
     color: #898989;
   }
  .card .item .right{
    color: #535353;
  }
  .cardBox .tip{
    width: 70%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 20px;
    position: absolute;
    left: 15%;
    bottom: 10px;
    background: #fff;
    z-index: 1;
  }
  .codeBox{
    width: 100px;
    margin: 0 auto;
  }
  .codeBox .code{
    width: 100px;
    height: 100px;
    border-radius: 5px;
    margin: 10px 0;
    background: #444444;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .codeBox .code .codeImg{
    width: 90px;
    height: 90px;
    border-radius: 5px;
  }
</style>
