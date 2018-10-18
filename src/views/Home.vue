<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to MYYYY Vue.js App"/>
    <!--<h1 :class="$mq">Dies ist der Viewport {{$mq}}</h1>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .mobile {
    color: red;
  }
  .mobileLandscape {
    color: #ff00a7;
  }
  .tablet {
    color: #da00ff;
  }
  .tabletLandscape {
    color: #4e00ff;
  }
  .desktop {
    color: #0079ff;
  }
</style>