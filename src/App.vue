
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      istrue:false
    }
  },
  computed:{
    appname(){
      return this.$store.state.appname
    }
  }
}
</script>
<style lang="scss">
body{
  width:100%;
  height:100%;
  -webkit-text-size-adjust:none;
}
*{padding:0;margin:0}
</style>
