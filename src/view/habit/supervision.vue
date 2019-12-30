<template>
<div>
  <navs navTitle="习惯打卡"></navs>
  <div class="supervisionPages">
    <div class="card">
      <div class="imgBox">
        <img class="img" src="/static/img/03.png" />
      </div>
      <div class="title">
        请监督我，完成打卡任务
      </div>
      <div class="txBox">
        <div class="tx">
          <img class="tximg" src="/static/img/03.png" />
        </div>
        <div class="nameBox">
          <div class="name">
            秦墨
          </div>
          <div class="nameTip">
            <img class="tipIcon" src="/static/img/04.png" />
            我要坚持打卡，养成好习惯
          </div>
        </div>
      </div>
      <div class="itemBox">
        <div class="text1">目标名称</div>
        <div class="text2">每天喝八杯水</div>
      </div>
      <div class="itemBox">
        <div class="text1">挑战金</div>
        <div class="text2">￥8.8</div>
      </div>
      <div class="itemBox">
        <div class="text1">每日打卡次数</div>
        <div class="text2">7</div>
      </div>
      <div class="itemBox">
        <div class="text1">坚持天数</div>
        <div class="text2">7</div>
      </div>
      <div class="btnBox">
        <div class="btn">我要监督</div>
        <div class="btn">考虑一下</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import navs from '@/components/nav'
export default {
  name: 'supervision',
  components: {
    navs
  }
}
</script>

<style>
  .supervisionPages{
    box-sizing: border-box;
    padding: 40px 20px 0 20px;
  }
  .card{
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
    height: 480px;
    border-radius: 40px;
  }
  .imgBox{
    text-align: center;
  }
  .img{
    width: 80px;
    height: 80px;
  }
  .title{
    color: #535353;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  .txBox{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .tx{
    margin-right: 10px;
  }
  .tximg{
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .nameBox{
    width: 100%;
  }
  .name{
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #535353;
    color: #535353;
    font-size: 20px;
    font-weight: bold;
  }
  .nameTip{
    color: #535353;
    height: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .tipIcon{
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
  .itemBox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .text1{
    color: #898989
  }
  .text2{
    color: #535353
  }
  .btnBox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    margin-top: 20px;
  }
  .btn{
    width: 100px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
    box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
  }
</style>
