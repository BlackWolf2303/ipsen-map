<template>
  <div id="header-button">
    <button class="btn btn-info">Pin list</button>
    <button class="btn btn-info">Search history</button>
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
  .btn-info {
    background-color: white;
    border: 1px solid black;
    border-radius: 0px;
    color: black;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: bold;
    &:hover {
      background-color: lightgray;
    }
  }
}
</style>
