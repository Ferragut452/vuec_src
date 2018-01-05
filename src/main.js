// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {store} from './store';

import Catalog from '@/components/Catalog'
import Checkout from '@/components/Checkout'
import Cart from '@/components/Cart'

Vue.config.productionTip = false

Vue.component('Catalog', Catalog);
Vue.component('Checkout', Checkout);
Vue.component('Cart', Cart);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
