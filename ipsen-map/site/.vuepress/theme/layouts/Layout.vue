<template>
  <div id="layout">
    <div class="container">
    <Header/>
    <Content/>
    <Footer/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Header from "../components/Header.vue";

import Footer from "../components/Footer.vue";

export default {
  components: { Footer, Header },
};
</script>

<style lang="scss" >
@import "~@theme/styles/_normalize";
@import "~@theme/styles/bootstrap/bootstrap";
// @import url("https://fonts.googleapis.com/css?family=Gidugu|Playfair+Display");

</style>