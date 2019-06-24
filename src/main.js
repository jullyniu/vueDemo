// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Header,Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/mui/css/mui.css'
import '../static/mui/css/icons-extra.css'
import axios from 'axios'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(axios)

Vue.prototype.$axios = axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>' 
})
