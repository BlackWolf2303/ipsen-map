<template>
  <div id="category">
    <div id="category-lv1">
      <ItemSingle v-for="category in categories" :category="category" :key="category.name"/>
    </div>
  </div>
</template>

<script>
import ItemSingle from "@theme/components/ItemSingle.vue";

export default {
  name: "Category",
  components: {
    ItemSingle
  },
  data() {
    return {
      categories: [
        {
          label: "category Name A",
          nodes: [
            { name: "data A-01/lv2" },
            { name: "data A-02/lv2" },
            { name: "data A-03/lv2" },
            { name: "data A-04/lv2" }
          ]
        },
        {
          label: "category Name B",
          nodes: [
            { name: "data B-01/lv2" },
            { name: "data B-02/lv2" },
            { name: "data B-03/lv2" },
            { name: "data B-04/lv2" }
          ]
        },
        {
          label: "category Name C",
          nodes: [
            { name: "data C-01/lv2" },
            { name: "data C-02/lv2" },
            { name: "data C-03/lv2" },
            { name: "data C-04/lv2" }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#category {
  display: flex;
}
</style>

