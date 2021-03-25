<script>
  let videoElement;

  const videoSrc = `/videos/zoom_${Math.floor(Math.random() * 5)}.mp4`;

  export function play() {
    videoElement.play();
  }
</script>

<video
  width="1280"
  height="720"
  class="media"
  muted={true}
  preload="auto"
  disablePictureInPicture="true"
  bind:this={videoElement}
>
  <source src={videoSrc} type="video/mp4" />
</video>

<style>
  .media {
    max-width: 100%;
    height: auto;
  }
</style>
