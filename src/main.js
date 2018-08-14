import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

const booted = require.context('./bootstrap', false, /\w+\.js$/)
let bootedPromise = []

booted.keys().forEach(fileName => {
  let bootedModule = booted(fileName)
  if (
    bootedModule &&
    bootedModule.default &&
    bootedModule.default.constructor === Promise
  ) {
    bootedPromise.push(bootedModule.default)
  }
})

Vue.config.productionTip = false

Promise.all(bootedPromise).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
