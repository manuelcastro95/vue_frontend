import { createRouter, createWebHistory } from 'vue-router';
import Writers from '../components/Writers.vue';
import Books from '../components/Books.vue';

const routes = [
  { path: '/writers', component: Writers },
  { path: '/books', component: Books },
  { path: '/', redirect: '/writers' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;