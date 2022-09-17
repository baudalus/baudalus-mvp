import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueFeather from 'vue-feather';

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component(VueFeather.name, VueFeather);

app.mount('#app')
