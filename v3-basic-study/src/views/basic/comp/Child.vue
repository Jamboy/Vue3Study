<!--
 * @Description: 
 * @FilePath: \Vue3Study\v3-basic-study\src\views\basic\comp\Child.vue
 * @Author: Jamboy
 * @Date: 2022-08-25 11:36:57
 * @LastEditTime: 2022-11-25 14:21:39
-->
<script lang="ts" setup>
import { ref, useCssModule } from 'vue';

const fontColor = ref<string>('red');
setTimeout(() => (fontColor.value = 'yellow'), 1000);
// 回退后的 修改
const style = useCssModule();

const content = `<p class="${style.title}">
  111
      <span class="${style.content}">Hello 冲突 World! —— from v-html</span>
    </p>`;

console.log('style: ', style);
</script>
<template>
  <div v-html="content"></div>
  <div>child</div>
  <slot></slot>
  <div :class="$style.title">
    <slot name="title"></slot>
  </div>
  <div :class="$style.content">
    <slot name="content"></slot>
  </div>
</template>
<style module>
.title {
  font-weight: bold;
  color: v-bind(fontColor);
}

.content {
  color: red;
}
</style>
