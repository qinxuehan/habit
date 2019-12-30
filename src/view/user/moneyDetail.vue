<template>
    <div>
<!--      <navs navTitle="余额明细"></navs>-->
      <div class="detailPage">
        <div class="detailList">
          <div v-for="item in 8" class="detail">
            <div class="row1">
              定目标，余额支付
            </div>
            <div class="row2">
              <span class="span1">
                2019/05/22 12:20:31
              </span>
              <span class="span2">
                -1.0
              </span>
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
import {getUserlist} from '@/api/index'
export default {
  name: 'moneyDetail',
  components: {
    navs,
    footers
  },
  data(){
    return{
      list:[],// 围观列表
      pageNum:1,
      pageSize:10,
      total:0,
    }
  },
  created () {
    this.getList()
  },
  methods:{
    // 余额明细
    getList(){
      let data = {
        pageNum:this.pageNum,
        pageSize:this.pageSize
      }
      getUserlist(data).then(res=>{
        if(res.code=='OK'){
          this.list = res.data.rows
          this.total = res.data.totalRecords
        }
      })
    }
  }
}
</script>

<style scoped>
.detailPage{
  box-sizing: border-box;
  padding: 20px;
}
  .detailList{
    height: 520px;
    overflow: auto;
    color: #383838;
  }
  .detail{
    height: 50px;
    border-bottom: 1px solid #535353;
    margin-bottom: 10px;
  }
  .detail .row2{
    height: 20px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
.detail .row2 .span2{
  font-size: 20px;
}
</style>
