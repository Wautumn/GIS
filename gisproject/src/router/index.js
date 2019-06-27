import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

var routes = [];

routes.push({
  path: `/newMonthView`,
  name: 'newMonthView',
  component: () => import(`@/components/newMonthView`),

  
})

export default new Router({
  routes
})