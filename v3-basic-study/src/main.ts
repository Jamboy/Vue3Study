/*
 * @Description:
 * @FilePath: \Vue3Study\v3-basic-study\src\main.ts
 * @Author: Jamboy
 * @Date: 2022-08-24 09:49:11
 * @LastEditTime: 2022-10-09 15:02:37
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
