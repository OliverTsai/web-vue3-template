import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import BootstrapVue3 from 'bootstrap-vue-3'
import i18n from './i18n'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(BootstrapVue3).use(i18n).use(ElementPlus).use(pinia).mount('#app')
