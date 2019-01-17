<template>
  <div id="category">
    <div class="category">
      <ItemSingle/>
      <ItemSingle/>
      <ItemSingle/>
    </div>
  </div>
</template>

<script>
import ItemSingle from "@theme/components/ItemSingle.vue";

export default {
  name: "Category",
  components: {
    ItemSingle
  }
};
</script>

<style lang="sass" scoped>

</style>

