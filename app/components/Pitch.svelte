<script>
  import { onDestroy, onMount } from 'svelte';
  import router from '../router.js';

  let videoElement;
  let startTimeCount = 5;
  let progressTimeCount = 4 * 60;
  let playCounterTimeout;
  let progressCounterTimeout;

  function playCounter() {
    startTimeCount--;
    if (startTimeCount) {
      playCounterTimeout = setTimeout(playCounter, 1000);
    } else {
      videoPlay();
    }
  }

  function videoPlay() {
    videoElement.play();
    progressCounter();
  }

  function progressCounter() {
    progressTimeCount--;
    if (progressTimeCount) {
      progressCounterTimeout = setTimeout(progressCounter, 1000);
    }
  }

  function exit() {
    router.push('/feedback');
  }

  onMount(() => {
    playCounter();
  });

  onDestroy(() => {
    clearTimeout(progressCounterTimeout);
    clearTimeout(playCounterTimeout);
  });
</script>

<svelte:head
  ><style>
    html {
      background-color: #000;
    }
  </style></svelte:head
>

<h1>PITCH TUTOR</h1>

<div class="video">
  {#if startTimeCount}
    <div class="startTimeCount">{startTimeCount}</div>
  {/if}
  <video
    width="1280"
    height="720"
    class="media"
    muted={true}
    preload="auto"
    disablePictureInPicture="true"
    bind:this={videoElement}
  >
    <source src="/videos/zoom_1.mp4" type="video/mp4" />
  </video>
</div>
<div class="controls">
  <div class="controlsRight">
    {Math.floor(progressTimeCount / 60)
      .toString()
      .padStart(2, '0')}:{(progressTimeCount % 60).toString().padStart(2, '0')}
    <button type="button" class="exit" on:click={exit}>Выйти</button>
  </div>
</div>

<style>
  h1 {
    font-size: 24px;
    font-weight: 900;
    color: #fff;
  }

  .video {
    /* padding-top: 50%; */
    /* background-color: #c4c4c4; */
    position: relative;
  }

  .media {
    max-width: 100%;
    height: auto;
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
    padding: 10px 0 20px;
  }

  .controlsRight {
    text-align: right;
    color: #fff;
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
