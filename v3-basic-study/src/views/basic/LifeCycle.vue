<!--
 * @Description: 
 * @FilePath: \Vue3Study\v3-basic-study\src\views\basic\LifeCycle.vue
 * @Author: Jamboy
 * @Date: 2022-08-25 10:20:14
 * @LastEditTime: 2022-08-25 10:44:04
-->

<script lang="ts" setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';
const test = ref('112');

onBeforeMount(() => {
  console.log('%c [ onBeforeMount ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', '组件挂载到节点上之前执行');
});

// https://cn.vuejs.org/api/composition-api-lifecycle.html#onmounted
onMounted(() => {
  console.log('%c [ onMounted ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', '组件挂载完成后执行');
});

onBeforeUpdate(() => {
  console.log('%c [ onBeforeUpdate ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', '组件更新之前执行');
});

onUpdated(() => {
  console.log('%c [ onUpdated ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', '组件更新完成之后执行');
  console.log('[ count ] >', count);
  console.log('[ count ] >', document.getElementById('count'));
});

onBeforeUnmount(() => {
  console.log('%c [ onUnmounted ]-22', 'font-size:13px; background:pink; color:#bf2c9f;', '组件卸载之前执行');
});

onUnmounted(() => {
  console.log('%c [ onUnmounted ]-22', 'font-size:13px; background:pink; color:#bf2c9f;', '组件卸载完成后执行');
});

onErrorCaptured((err) => {
  console.log(
    '%c [ onErrorCaptured ]-30',
    'font-size:13px; background:pink; color:#bf2c9f;',
    '当捕获一个来自子孙组件的异常时激活钩子函数',
    err
  );
});

const count = ref(1);
</script>
<template>
  <div>
    LifeCycle
    <div @click="() => (test = '121312')">{{ test }}</div>
    <div id="count" @click="count++">{{ count }}</div>
  </div>
</template>
<style lang="less" scoped></style>
