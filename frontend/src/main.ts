import './assets/css/input.css'; 

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// @ts-ignore: allow importing Vue single file component without type declarations
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
