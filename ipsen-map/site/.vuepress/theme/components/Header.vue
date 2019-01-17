<template>
  <header id="header">
    <div  class="header row">
      <!-- Logo -->
      <a href="#" class="logo col">
        <img src="https://via.placeholder.com/200x100" alt="logo">
      </a>
      <div class="header-button col">
        <HeaderButton />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderButton from '@theme/components/HeaderButton.vue';

export default {
  name: "Header",
  components: {
    HeaderButton,
  }
}
</script>


<style lang="scss" scoped>
#header {
  margin-top: 15px;
}

</style>
