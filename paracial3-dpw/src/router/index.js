import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contador from '../views/Contador.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contador', name: 'Contador', component: Contador }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
