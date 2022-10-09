<!--
 * @Description: 
 * @FilePath: \Vue3Study\v3-basic-study\src\views\basic\Slot.vue
 * @Author: Jamboy
 * @Date: 2022-10-09 15:06:26
 * @LastEditTime: 2022-10-09 15:11:18
-->
<script lang="ts" setup>
import Child from './comp/Child.vue';
</script>
<template>
  <div>slot</div>
  <Child>
    默认插槽
    <template #title>标题</template>
    <template #content>内容</template>
  </Child>
</template>
<style scoped></style>
