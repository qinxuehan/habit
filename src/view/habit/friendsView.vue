<template>
    <div>
      <navs navTitle="习惯打卡"></navs>
      <div class="friendsView">
        <div class="friendsViewCard">
          <div class="box1">
            <div class="box1Left">
              <img src="/static/img/head.jpg" class="tx">
            </div>
            <div class="box1Right">
              <div class="row1">
                Eric
              </div>
              <div class="row2">
                <img src="/static/img/25.png" class="icon1">
                我要坚持打卡，养成好习惯
              </div>
            </div>
          </div>
          <div class="box2">
            <span class="span1">
              目标名称
            </span>
            <span>
              每天喝八杯水
            </span>
          </div>
          <div class="box2">
            <span class="span1">
              挑战金
            </span>
            <span>
              ￥8.8
            </span>
          </div>
          <div class="box2">
            <span class="span1">
              坚持天数
            </span>
            <span>
              7
            </span>
          </div>
          <div class="box3">
            <div class="imgBox">
              <img src="/static/img/28.png" class="icon1">
              总围观30人
            </div>
            <div class="imgBox">
              <img src="/static/img/29.png" class="icon2">
              被21人见证
            </div>
          </div>
          <div class="box4">
            <div class="btn">
              围观分钱
            </div>
            <div class="btn">
              怒赞一个
            </div>
          </div>
          <div class="box5">
            打卡失败，挑战金将由围观者瓜分
          </div>
        </div>
        <div class="btnBox">
          <div class="btn">我也要定个目标</div>
        </div>
        <div class="listBox">
          <div class="titleBox">
            <div>收到的评论</div>
            <div class="title">我也要评论</div>
          </div>
          <div class="list">
            <div class="listLeft">
              <div class="left">
                <img src="/static/img/head.jpg" class="img2">
                peter
              </div>
              <div class="right">
                <div class="rightCard">
                  真的是一个好习惯，我也想坚持试试
                </div>
                <div class="date">2019/02/23 12:11:33</div>
              </div>
            </div>
            <div class="listRight">
              <div class="left">
                <div class="rightCard">
                  真的是一个好习惯，我也想坚持试试
                </div>
                <div class="date">2019/02/23 12:11:33</div>
              </div>
              <div class="right">
                <img src="/static/img/head.jpg" class="img2">
                peter
              </div>

            </div>
            <div class="listLeft">
              <div class="left">
                <img src="/static/img/head.jpg" class="img2">
                peter
              </div>
              <div class="right">
                <div class="rightCard">
                  真的是一个好习惯，我也想坚持试试
                </div>
                <div class="date">2019/02/23 12:11:33</div>
              </div>
            </div>
            <div class="listRight">
              <div class="left">
                <div class="rightCard">
                  真的是一个好习惯，我也想坚持试试
                </div>
                <div class="date">2019/02/23 12:11:33</div>
              </div>
              <div class="right">
                <img src="/static/img/head.jpg" class="img2">
                peter
              </div>

            </div>
            <div class="listLeft">
              <div class="left">
                <img src="/static/img/head.jpg" class="img2">
                peter
              </div>
              <div class="right">
                <div class="rightCard">
                  真的是一个好习惯，我也想坚持试试
                </div>
                <div class="date">2019/02/23 12:11:33</div>
              </div>
            </div>
            <div class="listRight">
              <div class="left">
                <div class="rightCard">
                  真的是一个好习惯，我也想坚持试试
                </div>
                <div class="date">2019/02/23 12:11:33</div>
              </div>
              <div class="right">
                <img src="/static/img/head.jpg" class="img2">
                peter
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import navs from '@/components/nav'
export default {
  name: 'friendsView',
  components: {
    navs
  }
}
</script>

<style scoped>
.friendsView{
  box-sizing: border-box;
  padding: 20px;
}
  .friendsViewCard{
    background: #fff;
    height: 330px;
    border-radius: 40px;
  }
  .box1{
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: row;
  }
.box1 .box1Left{
  margin-right: 10px;
}
.box1 .box1Left .tx{
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.box1 .box1Right{
width: 100%;
}
.box1 .box1Right .row1{
  height: 30px;
  line-height: 30px;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid #535353;
}
.box1 .box1Right .row2{
  height: 16px;
  line-height: 16px;
  vertical-align: bottom;
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.box1 .box1Right .row2 .icon1{
  height: 16px;
  width: 12px;
  margin-right: 5px;
}
  .box2{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
  }
.box2 .span1{
  color: #898989;
}
  .box3{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 40px;
  }
  .box3 .imgBox{
    width: 65px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
.box3 .imgBox .icon1{
  height: 40px;
  margin-bottom: 5px;
}
.box3 .imgBox .icon2{
  height: 40px;
  width: 50px;
  margin-bottom: 5px;
  margin-left: 6px;
}
  .box4{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 30px;
    margin-top: 10px;
  }
  .box4 .btn{
    width: 110px;
    background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
    box-shadow:0px 7px 9px 2px rgba(220,220,220,0.75);
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    text-align: center;
    color: #fff;
    font-size: 20px;
  }
  .box5{
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .btnBox{

  }
.btnBox .btn{
  width: 270px;
  margin: 20px auto;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
  box-shadow:0px 7px 9px 2px rgba(220,220,220,0.75);
}
  .listBox{

  }
  .listBox .titleBox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
  }
.listBox .titleBox .title{
  border-bottom: 1px solid #535353;
}
.listBox .list{
  height: 130px;
  overflow: auto;
  box-sizing: border-box;
  padding: 0 20px;
}
.listBox .list .listLeft{
  height: 50px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.listBox .list .listLeft .left{
  height: 40px;
  width: 40px;
  font-size: 10px;
  text-align: center;
  margin-right: 10px;
}
.listBox .list .listLeft .left .img2{
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.listBox .list .listLeft .right{
  height: 50px;
}
.listBox .list .listLeft .right .rightCard{
  background: #fff;
  border-radius: 0px 10px 10px 10px;
  border: 1px solid rgba(220,220,220,0.1);
  height: 40px;
  box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
  box-sizing: border-box;
  padding: 5px 10px;
}
.listBox .list .listLeft .right .date{
  text-align: right;
  font-size: 10px;
}

.listBox .list .listRight{
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
}
.listBox .list .listRight .right{
  height: 40px;
  width: 40px;
  font-size: 10px;
  text-align: center;
  margin-left: 10px;
}
.listBox .list .listRight .right .img2{
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.listBox .list .listRight .left{
  height: 50px;
}
.listBox .list .listRight .left .rightCard{
  box-sizing: border-box;
  background: #FFECD6;
  border-radius: 10px 0px 10px 10px;
  border: 1px solid rgba(220,220,220,0.1);
  height: 40px;
  box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
  padding: 5px 10px;
}
.listBox .list .listRight .left .date{
  text-align: left;
  font-size: 10px;
}
</style>
