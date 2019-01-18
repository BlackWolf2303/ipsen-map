<template>
  <div id="main-content">
    <div class="main-content">
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
  .main-content {
  display: flex;
  justify-content: center;
  min-height: 400px;
  background-color: rgb(243, 243, 243);
  }

}
</style>

