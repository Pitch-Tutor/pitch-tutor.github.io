<script>
  let videoElement;

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
  <source src="/videos/zoom_1.mp4" type="video/mp4" />
</video>

<style>
  .media {
    max-width: 100%;
    height: auto;
  }
</style>
