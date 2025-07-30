import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './style.css'
import App from './App.vue'
import { router } from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'
const app = createApp(App)
app.use(store)
app.use(router)

app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
import 'virtual:windi.css'

import "./permission"

import "nprogress/nprogress.css"

//写在createApp后
import permission from '~/directives/permission.js'
app.use(permission)


app.mount('#app')
