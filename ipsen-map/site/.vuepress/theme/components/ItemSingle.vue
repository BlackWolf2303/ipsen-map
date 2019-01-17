<template>
  <div class="item-single">
    <li>
      <a href="#">category Name</a>
    </li>
  </div>
</template>

<script>
export default {
  name: "ItemSingle"
};
</script>

<style lang="scss" scoped>
li {
  display: inline-block;
  border: 1px solid #000;
  text-align: center;
      min-width: 300px;

  a {
    display: block;
    text-decoration: none;
    line-height: 30px;
  }
}
</style>


