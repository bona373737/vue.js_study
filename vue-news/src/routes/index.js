import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/news'
    },
    {
        path:'/news',
        name:'NewsView',
        // component:NewsView,
        component: createListView('NewsView'),
        beforeEnter:(to,from,next)=>{
          console.log(to)
          console.log(from)
          console.log(next)
        },
    },
    {
        path:'/ask',
        name:'AskView',
        // component:AskView,
        component: createListView('AskView')
    },
    {
        path:'/jobs',
        name:'JobsView',
        // component:JobsView,
        component: createListView('JobsView')
    },
    {
        path:'/item',
        name:'ItemView',
        component:ItemView,
    },
    {
        path:'/user/:id',
        component:UserView,
    }
  ]
});
