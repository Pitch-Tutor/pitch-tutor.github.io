import Router from 'svelte-easyroute';
import Feedback from './components/Feedback/Feedback.svelte';
import Homepage from './components/Homepage.svelte';
import Pitch from './components/Pitch/Pitch.svelte';
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
  }, {
    path: '/feedback',
    component: Feedback,
    name: 'Feedback',
  }],
});

export default router;
