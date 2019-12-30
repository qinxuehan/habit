<template>
    <div>
      <navs navTitle="评论"></navs>
      <div class="page">
        <div class="comments">
          <div class="txBox">
            <img src="/static/img/head.jpg" class="tx">
          </div>

          <div class="card">
            <div class="row1">
              秦墨
            </div>
            <div class="row2">
              每天喝八杯水
              <img src="/static/img/16.png" class="img1">
            </div>
            <div class="row3">
              （共30条评论）
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

      <footers></footers>
    </div>
</template>

<script>
import navs from '@/components/nav'
import footers from '@/components/footer'
export default {
  name: 'comments',
  components: {
    navs,
    footers
  }
}
</script>

<style scoped>
  .page{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
  }
  .comments{
  position: relative;
}
  .comments .txBox{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin: 0 auto;
    position: absolute;
    left: 35%;
    z-index: 999;
    box-shadow:0px 7px 14px 2px rgba(220,220,220,0.75);
  }
  .comments .txBox .tx{
    width: 90px;
    height: 90px;
    border-radius: 45px;

  }
  .comments .card{
    background: #fff;
    width: 100%;
    height: 465px;
    border-radius: 40px;
    position: absolute;
    top: 50px;
    z-index: 3;
    box-sizing: border-box;
    padding: 60px 20px 20px 20px;
  }
  .comments .card .row1{
    text-align: center;
    font-size: 16px;
  }
  .comments .card .row2{
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid #898989;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .comments .card .row2 .img1{
    width: 30px;
    position: absolute;
    right: 10px;
  }
  .comments .card .row3{
    text-align: right;
  }
  .comments .card .list{
    height: 300px;
    overflow: auto;
  }
  .comments .card .list .listLeft{
    height: 50px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .comments .card .list .listLeft .left{
    height: 40px;
    width: 40px;
    font-size: 10px;
    text-align: center;
    margin-right: 10px;
  }
  .comments .card .list .listLeft .left .img2{
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .comments .card .list .listLeft .right{
    height: 50px;
  }
  .comments .card .list .listLeft .right .rightCard{
    background: #fff;
    border-radius: 0px 10px 10px 10px;
    border: 1px solid rgba(220,220,220,0.1);
    height: 40px;
    box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
    box-sizing: border-box;
    padding: 5px 10px;
  }
  .comments .card .list .listLeft .right .date{
    text-align: right;
    font-size: 10px;
  }

  .comments .card .list .listRight{
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .comments .card .list .listRight .right{
    height: 40px;
    width: 40px;
    font-size: 10px;
    text-align: center;
    margin-left: 10px;
  }
  .comments .card .list .listRight .right .img2{
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .comments .card .list .listRight .left{
    height: 50px;
  }
  .comments .card .list .listRight .left .rightCard{
    box-sizing: border-box;
    background: #FFECD6;
    border-radius: 10px 0px 10px 10px;
    border: 1px solid rgba(220,220,220,0.1);
    height: 40px;
    box-shadow:0px 13px 19px 2px rgba(220,220,220,0.75);
    padding: 5px 10px;
  }
  .comments .card .list .listRight .left .date{
    text-align: left;
    font-size: 10px;
  }
</style>
