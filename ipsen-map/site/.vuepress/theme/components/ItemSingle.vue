<template>
  <div class="item-single">
    <li ><a href="#">{{category.label}}</a></li>
  </div>
</template>

<script>
export default {
  name: "ItemSingle",
  props: ['category','categoryLv2'], 
};
</script>

<style lang="scss" scoped>
.item-single {
  li {
    display: inline-block;
    border: 1px solid #000;
    text-align: center;
    min-width: 300px;

    a {
      display: block;
      text-decoration: none;
      line-height: 30px;
      color: black;
      font-weight: bold;
    }
  }
}
</style>


