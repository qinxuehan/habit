<template>
<div class="navPage">
  <span>{{navTitle}}</span>
</div>
</template>

<script>
export default {
  name: 'navs',
  props: ['navTitle']
}
</script>

<style>
.navPage{
  height: 50px;
  line-height: 50px;
  width: 100%;
  background:linear-gradient(111deg,rgba(249,197,122,1),rgba(251,138,98,1));
  text-align: center;
  color: #fff;
  font-size: 16px;
}
</style>
