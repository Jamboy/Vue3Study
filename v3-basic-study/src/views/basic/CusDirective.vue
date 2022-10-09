<!--
 * @Description: 
 * @FilePath: \Vue3Study\v3-basic-study\src\views\basic\CusDirective.vue
 * @Author: Jamboy
 * @Date: 2022-10-09 13:51:40
 * @LastEditTime: 2022-10-09 14:17:37
-->
<script lang="ts" setup>
import { ref } from 'vue';

const vHightLight = {
  mounted: (el, binding) => {
    el.style.backgroundColor = typeof binding.value === 'string' ? binding.value : 'unset';
  },
};

const msg = ref<string>('CusDirective');
</script>
<template>
  <div v-hight-light="`yellow`">{{ msg }}</div>
</template>
<style lang="less" scoped></style>
