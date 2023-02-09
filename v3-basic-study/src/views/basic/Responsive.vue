<!--
 * @Description: 
 * @FilePath: \Vue3Study\v3-basic-study\src\views\basic\Responsive.vue
 * @Author: Jamboy
 * @Date: 2023-02-07 09:33:53
 * @LastEditTime: 2023-02-09 15:26:07
-->
<script lang="ts" setup>
// vue2 - 响应式原理
const reactiveVue2 = (obj: object, key: string, value: any) => {
  Object.defineProperty;
};

const person = { name: '林三心', age: 22 };
const animal = { type: 'dog', height: 50 };
let nameStr1 = '';
let nameStr2 = '';
let ageStr1 = '';
let ageStr2 = '';

const effectNameStr1 = () => {
  nameStr1 = `${person.name}是个大菜鸟`;
};
const effectNameStr2 = () => {
  nameStr2 = `${person.name}是个小天才`;
};
const effectAgeStr1 = () => {
  ageStr1 = `${person.age}岁已经算很老了`;
};
const effectAgeStr2 = () => {
  ageStr2 = `${person.age}岁还算很年轻啊`;
};
const effectTypeStr1 = () => {
  ageStr1 = `${person.age}岁已经算很老了`;
};
const effectTypeStr2 = () => {
  ageStr2 = `${person.age}岁还算很年轻啊`;
};
const effectHeightStr1 = () => {
  ageStr1 = `${person.age}岁已经算很老了`;
};
const effectHeightStr2 = () => {
  ageStr2 = `${person.age}岁还算很年轻啊`;
};

const targetMap = new WeakMap();
// 多个对象依赖收集
// 对于targetMap 对象为Key, 对于其值为Map, 对象的属性为Key, 其值为Set
function track(target: object, key: any) {
  let depsMap = targetMap.get(target);
  // 当前对象依赖是否存在，不存在初始化为Map
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }

  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  // 这里先暂且写死
  if (target === person) {
    if (key === 'name') {
      dep.add(effectNameStr1);
      dep.add(effectNameStr2);
    } else {
      dep.add(effectAgeStr1);
      dep.add(effectAgeStr2);
    }
  } else if (target === animal) {
    if (key === 'type') {
      dep.add(effectTypeStr1);
      dep.add(effectTypeStr2);
    } else {
      dep.add(effectHeightStr1);
      dep.add(effectHeightStr2);
    }
  }
}

function trigger(target: object, key: any) {
  const depsMap = targetMap.get(target);
  if (depsMap) {
    const dep = depsMap.get(key);
    if (dep) {
      dep.forEach((effect) => effect());
      // test
    }
  }
}
</script>
<template>
  <h2>响应式</h2>
</template>
<style lang="less" scoped></style>
