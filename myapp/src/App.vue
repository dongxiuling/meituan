<template>
  <div id="app">
    <!-- 美团外卖 -->
    <!-- <router-link to="/home">首页</router-link> -->
    <router-link :to="{name:'home',params:{name:'zs',age:10}}">首页</router-link>
    <!-- <router-link to="/mine">我的</router-link> -->
    <router-link :to="{path:'/mine',query:{name:'lisi',age:18}}">我的</router-link>
    <!-- 路径跳转传参 -->
    <router-link to="/mine/zs/18">我的</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss">

</style>
