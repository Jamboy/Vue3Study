<!--
 * @Description: 响应式
 * @FilePath: \Vue3Study\v3-basic-study\src\views\basic\response.vue
 * @Author: Jamboy
 * @Date: 2022-08-25 11:26:45
 * @LastEditTime: 2022-08-25 14:37:55
-->

<script lang="ts" setup>
import { onMounted, reactive, ref, toRef, toRefs } from 'vue';
import type { Ref } from 'vue';
import Child from './comp/Child.vue';

const test1: Ref<string> = ref('1');
const test = ref<number>(1);
const testBol = ref<boolean>(true);
const testArr = ref<any[]>(['12']);
// 声明对象的格式
interface People {
  name: string;
  sex?: string;
}
// 声明对象的格式
const p1 = ref<People>({
  name: '1',
});
// 定义一个成员组
const p1Arr = ref<People[]>([p1.value, { name: 'fa' }]);

// 挂载节点
const divRef = ref<HTMLDivElement | null>(null);
const child = ref<typeof Child | null>(null);

console.log('%c [ divRef ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', divRef);

console.log('%c [ child ]-32', 'font-size:13px; background:pink; color:#bf2c9f;', child);

onMounted(() => {
  console.log('%c [ divRef ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', divRef);

  console.log('%c [ child ]-32', 'font-size:13px; background:pink; color:#bf2c9f;', child);
});

const changeTestArr = () => {
  testArr.value = [{ a: { a: 1 } }];
  testArr.value[0].a.a = 3;

  testArr.value.push('fadf ');
};

interface IUser {
  name: string;
  age?: number;
  list: number[];
  test: any;
}

const user1 = reactive<IUser>({
  name: '1',
  age: 1,
  list: [1, 2, 3, 4],
  test: {
    a: { a: [111] },
  },
});
user1.age = 23;
setTimeout(() => {
  user1.age = 28;
  user1.list = [];
  user1.list.push(1241);
  user1.list.splice(0, 1);
  user1.list = [333, 21];
  user1.test.a.a = [444];
  user1.test.a.a.push(1242);
}, 1000);

const testReactiveArr = reactive<number[]>([1, 2, 3, 4]);

setTimeout(() => {
  testReactiveArr[0] = 333;
  // testReactiveArr.forEach((i) => {
  //   i += 4444;
  //   console.log('%c [ i ]-79', 'font-size:13px; background:pink; color:#bf2c9f;', i);
  // });
  testReactiveArr.push(1);
  console.log('%c [ testReactiveArr ]-81', 'font-size:13px; background:pink; color:#bf2c9f;', testReactiveArr);
}, 1000);

const name = toRef(user1, 'name');
console.log('%c [ name ]-90', 'font-size:13px; background:pink; color:#bf2c9f;', name);
const { name: name2 } = toRefs(user1);
console.log('%c [ toRefsUser ]-92', 'font-size:13px; background:pink; color:#bf2c9f;', name2);
</script>
<template>
  <div ref="divRef">
    {{ test }}
    <div>testArr:{{ testArr }}</div>
    <button @click="changeTestArr">修改testArr</button>
    <div>p1Arr:{{ p1Arr }}</div>
    <div>user1:{{ user1 }}</div>
    <button @click="user1.name = 'fff'">修改name</button>
    <div>toRef(user1,name):{{ name }}</div>
    <button @click="user1.name = 'ffadfa'">修改name</button>
    <div>testReactiveArr:{{ testReactiveArr }}</div>
    <div>toRefsUser name2:{{ name2 }}</div>
    <button @click="name2 = 'fff发的发'">修改name2</button>
    <Child ref="child" />
  </div>
</template>
<style lang="less" scoped></style>
