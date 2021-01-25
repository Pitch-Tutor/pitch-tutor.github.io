import Router from 'svelte-easyroute';
import Homepage from './components/Homepage.svelte';
import Pitch from './components/Pitch.svelte';
import SetTime from './components/SetTime.svelte';
import TrainPick from './components/TrainPick.svelte';

const router = new Router({
  mode: 'hash', // "hash", "history" or "silent"
  routes: [{
    path: '/',
    component: Homepage,
    name: 'Homepage',
  }, {
    path: '/train-pick',
    component: TrainPick,
    name: 'TrainPick',
  }, {
    path: '/set-time',
    component: SetTime,
    name: 'SetTime',
  }, {
    path: '/pitch',
    component: Pitch,
    name: 'Pitch',
  }],
});

export default router;
