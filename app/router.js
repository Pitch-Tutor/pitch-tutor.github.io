import Router from 'svelte-easyroute';
import Homepage from './components/Homepage.svelte';

const router = new Router({
  mode: 'history', // "hash", "history" or "silent"
  routes: [{
    path: '/',
    component: Homepage,
    name: 'Homepage',
  }],
});

export default router;
