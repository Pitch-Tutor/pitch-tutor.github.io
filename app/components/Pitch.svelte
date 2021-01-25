<script>
  import { onMount } from 'svelte';

  let videoElement;
  let startTimeCount = 5;
  let progressTimeCount = 4 * 60;

  function timeoutStart() {
    startTimeCount--;
    if (startTimeCount) {
      setTimeout(timeoutStart, 1000);
    } else {
      videoPlay();
    }
  }

  function videoPlay() {
    videoElement.play();
    timeoutProgress();
  }

  function timeoutProgress() {
    progressTimeCount--;
    if (progressTimeCount) {
      setTimeout(timeoutProgress, 1000);
    }
  }

  onMount(() => {
    timeoutStart();
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
    bind:this={videoElement}>
    <source src="/videos/zoom_1.mp4" type="video/mp4" />
  </video>
</div>
<div class="controls">
  <div class="controlsRight">
    {Math.floor(progressTimeCount / 60)
      .toString()
      .padStart(2, '0')}:{(progressTimeCount % 60).toString().padStart(2, '0')}
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
    background-color: #c4c4c4;
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
    padding-top: 10px;
  }

  .controlsRight {
    text-align: right;
    color: #fff;
  }
</style>
