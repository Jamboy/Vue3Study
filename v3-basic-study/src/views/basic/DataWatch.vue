<!--
 * @Description: 
 * @FilePath: \Vue3Study\v3-basic-study\src\views\basic\DataWatch.vue
 * @Author: Jamboy
 * @Date: 2022-09-08 17:33:47
 * @LastEditTime: 2022-10-09 11:52:07
-->
<script lang="ts" setup>
import { computed, ref, watch, watchEffect } from 'vue';

const x = ref(0);
const y = ref(0);
const sumRes = ref(0);
// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`);
});

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
    sumRes.value = sum;
  }
);

2;

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY], [oldX, oldY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
  console.log(`oldx is ${oldX} and oldy is ${oldY}`);
});

// deep
// reactive 强制deep
const obj = ref({
  a: 1,
  b: [1, 2, 3],
});

watch(
  obj,
  (newObj) => {
    console.log('%c [ newObj ]-42', 'font-size:13px; background:pink; color:#bf2c9f;', newObj);
  },
  { deep: true }
);

const message = ref<string>('');
setTimeout(() => {
  message.value = 'fff';
}, 1000);
watch(
  message,
  (newMsg) => {
    console.log('newMsg: ', newMsg);
  },
  {
    immediate: true,
  }
);

const name = ref<string>('gg');
const age = ref<string>('13');
const getUserInfo = (): void => {
  console.log(name.value);
  console.log(age.value);
};

setTimeout(() => {
  name.value = 'ggfff';
}, 2000);

setTimeout(() => {
  age.value = '122';
}, 4000);

const tagsStr = ref<string[]>([]);

const tag = computed({
  get() {
    return tagsStr.value.join(',');
  },
  set(newTag: string) {
    console.log('newTag: ', newTag);
    tagsStr.value = newTag.split(',');
  },
});
// 直接监听调用函数，在每个数据产生变化的时候，它都会自动执行
watchEffect(getUserInfo);
</script>
<template>
  <div class="container">
    <h1>数据监听</h1>
    <h2 @click="x++">改变x</h2>
    <div>{{ x }}</div>
    <div>变化sum：{{ sumRes }}</div>
    <h2 @click="y++">改变y</h2>
    <div>{{ y }}</div>
    <h2>deep</h2>
    <div @click="obj.a++">change obj.a</div>
    <div @click="obj.b[0]++">change obj.b[0]: {{ obj.b }}</div>
    <div @click="obj.b.push(1)">push obj.b[]</div>
    <div>{{ tagsStr }}</div>
    <input type="text" v-model="tag" placeholder="请输入标签，多个标签用英文逗号隔开" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
