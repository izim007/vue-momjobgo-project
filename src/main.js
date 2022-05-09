import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import mixins from './mixins'

Vue.config.productionTip = false

Vue.mixin(mixins)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
