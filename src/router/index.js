import Vue from 'vue';
import VueRouter from 'vue-router';
import entry from '@/components/entry'
import thanks from '@/components/thanks'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'entry',
    component: entry
  },

  {
  	path: '/thanks',
    name: 'thanks',
    component: thanks
  }
];

const router = new VueRouter({
  routes,
});

export default router;
