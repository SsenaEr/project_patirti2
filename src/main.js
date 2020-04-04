import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import responsive from 'vue-responsive'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(responsive)
Vue.config.productionTip = false
Vue.use(VueRouter)



new Vue({

    render: h => h(App)
}).$mount('#app')