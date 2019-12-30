<template>
    <div class="progressPage">
      <div class="bgBox"></div>
      <div :class="'proBox proBox'+index"></div>
    </div>
</template>

<script>
export default {
  name: 'progressbar',
  props: ['percentage', 'index','colorBg','colorBar'],
  data () {
    return {

    }
  },
  mounted () {
    this.init()
  },
  methods:{
    init(){
      let len1 = $('.progressPage').width()
      let len2 = Number(this.percentage).toFixed(2)
      let width1 = len2 * len1
      $('.proBox' + this.index).css({
        width: width1 + 'px'
      })
      if(this.colorBg){
        $('.bgBox').css({
          background: this.colorBg
        })
      }
      if(this.colorBar){
        $('.proBox').css({
          background: this.colorBar
        })
      }
    }
  },
  watch:{
    percentage(val){
      if(val){
        this.init()
      }
    }
  }
}
</script>

<style lang="less">
.progressPage{
  width: 100%;
  height: 10px;
  position: relative;
  .bgBox{
    background: #E3E3E3;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    position: absolute;
    top: 0;
  }
  .proBox{
    height: 100%;
    border-radius: 5px;
    background-image: linear-gradient(to right, #F9C57A , #FB8A62);
    position: absolute;
    top: 0;
    z-index: 2;
  }
}
</style>
