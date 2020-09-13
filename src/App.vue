<template>
  <div id="app">
    <gnb></gnb>
    <banner></banner>
    <section class="service-area section-padding">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Gnb from "./component/gnb/Gnb";
import Banner from "./component/main/Banner";
export default {
  name: 'app',
  components: {
    Banner,
    Gnb
  },
}
</script>

