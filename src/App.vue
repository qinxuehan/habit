<template>
  <div id="app">
    <router-view/>
    <footers></footers>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import footers from '@/components/footer'
export default {
  name: 'App',
  components: {
    footers
  },
  watch: {
    $route () {
      if (this.$route.path !== '/' && !getToken('sessionId')) {
        this.$router.push({path: '/'})
      }
    }
  }
}
</script>

<style lang="less">
  body,html{
    margin: 0;
    padding: 0;
    font-family: robotoregular,PingFang SC,Hiragino Sans GB,Heiti SC,Microsoft YaHei,WenQuanYi Micro Hei,Helvetica,Arial,monospace,serif;
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    font-size: 12px;
    background: #f6f6f6;
    color: #535353;
  }
  input:focus{
    border: unset !important;
    outline-offset: 0px;
  }
  input{
    outline: none;
  }
  .rechargeMoney{
    width:100%;
    input{
      width: 100%;
      height: 40px;
      background: #EFEFEF;
      color: #818181;
      border: unset;
      border-radius: 20px;
      box-sizing: border-box;
      padding: 0 20px;
      font-size: 16px;
      margin: 0 auto;
    }
  }
</style>
