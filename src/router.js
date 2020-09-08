import Vue from 'vue'
import Router from 'vue-router'
import addBlog from './views/addBlog.vue';

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/add-blog'
    },
    {
      path: '/add-blog',
      name: 'add-blog',
      component: addBlog
    }
  ]
})
export default router
