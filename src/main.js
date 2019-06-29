// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/mui/css/mui.css'
import '../static/mui/css/icons-extra.css'
import axios from 'axios'

// 导入时间插件
import moment from 'moment'

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button);
// Vue.use(axios)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>' 
})
