import Vue from 'vue'
import Router from 'vue-router'
import NestedRoute from '@/components/NestedRoute'
import ProgrammingRouting from '@/components/ProgrammingRouting'
import NamingRouting from '@/components/NamingRouting'

import Title1 from '@/view/title1'
import Title2 from '@/view/title2'
import Goods from '@/view/goods'
Vue.use(Router)

export default new Router({
  routes: [{
     /* url 动态传参
     path: '/test/:hehe/hh/:haha',*/
      path: '/test',
      name: 'test',
      component: NamingRouting,
      children: [{
          path:'title1',
          name:'title1',
          component:Title1
      },
        {
          path:'title2',
          name:'title2',
          component:Title2
      }]
    },
    {
      path:"/goods",
      name:"goods",
      component:Goods
    }
    ]
})
