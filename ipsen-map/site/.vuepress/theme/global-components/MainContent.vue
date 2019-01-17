<template>
  <div id="main-content">
    <div>
    <Category />
    </div>
  </div>
  
</template>

<script>
import Category from '@theme/components/Category.vue';

export default {
name:'MainContent',
components:{
  Category,
}
}
</script>

<style lang="scss" scoped>
#main-content {
  min-height: 400px;
  background-color: rgb(243, 243, 243);
}
</style>

