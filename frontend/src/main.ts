import './assets/css/input.css';

import { createApp } from 'vue';
import PiniaConfig from './PiniaConfig';

// @ts-ignore Vue single-file component typing is provided by the Vue tooling.
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(PiniaConfig.init());
app.use(router);

app.mount('#app');
