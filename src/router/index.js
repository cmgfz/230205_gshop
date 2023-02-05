import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
const Router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            meta:{
                showFooter:true
            }           
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }              
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }              
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }              
        },
        {
            path:'/login',
            component:Login           
        },
    ]
})

export default Router;