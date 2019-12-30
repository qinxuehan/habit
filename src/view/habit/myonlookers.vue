<template>
  <div>
    <navs :navTitle="type==1?'围观':'点赞'"></navs>
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
            <img v-if="type==1" src="/static/img/17.png" class="img1">
            <img v-if="type==2" src="/static/img/18.png" class="img1">
          </div>
          <div class="row3">
            {{type==1?'（共30条围观）':'（共30条赞）'}}
          </div>
          <div class="list">
            <div v-for="item in 8" class="listItem">
              <div class="itemLeft">
                <img src="/static/img/head.jpg" class="img2">
              </div>
              <div class="itemRight">
                <div class="date">2019/10/14 12:50:31</div>
                <div class="text">
                  {{type==1?'你的好友Peter围观了你':'你的好友Peter赞了你'}}
                </div>
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
  name: 'myonlookers',
  components: {
    navs,
    footers
  },
  data () {
    return {
      type: 1
    }
  },
  created () {
    this.type = this.$route.query.type
    console.log('hhh', this.$route.query.type)
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
    width: 40px;
    position: absolute;
    right: 10px;
  }
  .comments .card .row3{
    text-align: right;
  }
  .comments .card .list{
    height: 300px;
    overflow: auto;
    width: 70%;
    margin: 0 auto;
  }
  .comments .card .list .listItem{
    height: 40px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .comments .card .list .listItem .itemLeft{
    margin-right: 10px;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:7px 2px 9px 2px rgba(220,220,220,0.75);
  }
  .comments .card .list .listItem .itemLeft .img2{
    height: 36px;
    width: 36px;
    border-radius: 18px;
  }
  .comments .card .list .listItem .itemRight .date{
    font-size: 10px;
    height: 20px;
    line-height: 20px;
  }
  .comments .card .list .listItem .itemRight .text{
    height: 20px;
    line-height: 20px;
  }
</style>
