<script>
  import { onDestroy, onMount } from 'svelte';
  import useCurrentRoute from 'svelte-easyroute/useCurrentRoute';
  import router from '../../router.js';
  import AllLayout from './AllLayout.svelte';
  import OneLayout from './OneLayout.svelte';
  import PresentLayout from './PresentLayout.svelte';

  let layout;
  let startTimeCount = 5;
  let progressTimeCount;
  let playCounterTimeout;
  let progressCounterTimeout;
  let numPages;
  let currentPageNum;
  let mode;

  const unsubscribe = useCurrentRoute((currentRoute) => {
    progressTimeCount = +currentRoute.query.time * 60;
    mode = currentRoute.query.mode;
  });

  function playCounter() {
    startTimeCount--;
    if (startTimeCount) {
      playCounterTimeout = setTimeout(playCounter, 1000);
    } else {
      videoPlay();
    }
  }

  function videoPlay() {
    layout.play();
    progressCounter();
  }

  function progressCounter() {
    progressTimeCount--;
    if (progressTimeCount) {
      progressCounterTimeout = setTimeout(progressCounter, 1000);
    } else {
      setTimeout(exit, 1000);
    }
  }

  function exit() {
    router.push('/feedback');
  }

  onMount(async () => {
    document.body.classList.add('pitch');
    playCounter();
  });

  onDestroy(() => {
    document.body.classList.remove('pitch');
    unsubscribe();
    clearTimeout(progressCounterTimeout);
    clearTimeout(playCounterTimeout);
  });
</script>

<svelte:head
  ><style>
    html {
      background-color: #000;
    }
  </style>
</svelte:head>

<main>
  <h1>PITCH TUTOR</h1>

  <div class="video">
    {#if startTimeCount}
      <div class="startTimeCount">{startTimeCount}</div>
    {/if}
    {#if mode === 'one'}
      <OneLayout bind:this={layout} />
    {:else if mode === 'all'}
      <AllLayout bind:this={layout} />
    {:else if mode === 'demo'}
      <PresentLayout bind:numPages bind:currentPageNum bind:this={layout} />
    {/if}
  </div>
  <div class="controls">
    <div class="controlsPages">
      {#if numPages}
        {#if numPages > 1}
          <button on:click={layout.prev} disabled={currentPageNum === 1}>←</button>
        {/if}
        {currentPageNum} / {numPages}
        {#if numPages > 1}
          <button on:click={layout.next} disabled={currentPageNum === numPages}>→</button>
        {/if}
      {/if}
    </div>
    <div class="controlsRight">
      {Math.floor(progressTimeCount / 60)
        .toString()
        .padStart(2, '0')}:{(progressTimeCount % 60).toString().padStart(2, '0')}
      <button type="button" class="exit" on:click={exit}>Выйти</button>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    height: 100vh;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
  }

  h1 {
    font-size: 24px;
    font-weight: 900;
    color: #fff;
  }

  .video {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .startTimeCount {
    display: flex;
    font-size: 300%;
    font-weight: 900;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    position: absolute;
    text-align: center;
    height: 100%;
    width: 100%;
  }

  .controls {
    font-size: 120%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 0 20px;
    color: #fff;
  }

  .controlsPages {
    width: 33%;
    text-align: center;
  }

  .controlsRight {
    text-align: right;
    width: 33%;
  }

  .exit {
    cursor: pointer;
    font-size: 75%;
    vertical-align: top;
    background: #ff0000;
    border-radius: 7px;
    border: 0;
    color: #fff;
    padding: 2px 10px 3px;
    margin-left: 14px;
  }
</style>
