<template>
  <div id="header-button">
    <button class="btn btn-success">Pin list</button>
    <button class="btn btn-success">Search history</button>
  </div>
</template>

<script>
export default {
  name: 'HeaderButton',

}
</script>

<style lang="scss" scoped>
#header-button {
  float: right;
  .btn-success {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
}
</style>
