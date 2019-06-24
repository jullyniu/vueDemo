import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from '../components/tabbar/homeContainer'
import memberContainer from '../components/tabbar/memberContainer'
import shopCarContainer from '../components/tabbar/shopCarContainer'
import searchContainer from '../components/tabbar/searchContainer'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/member',component:memberContainer},
    {path:'/shopcar',component:shopCarContainer},
    {path:'/search',component:searchContainer},
    
  ],
  linkActiveClass:'mui-active'
})
