import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
 
}).$mount('#app')
