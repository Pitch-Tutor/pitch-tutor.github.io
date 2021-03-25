<script>
  import { onDestroy } from 'svelte';

  let videoElements = [];
  let videoUserElement;
  let videoStream;

  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }).then((stream) => {
    videoStream = stream;
    videoUserElement.srcObject = stream;
    videoUserElement.onloadedmetadata = () => {
      videoUserElement.play();
    };
  });

  onDestroy(() => {
    if (videoStream) {
      videoStream.getVideoTracks().forEach((track) => {
        track.stop();
      });
    }
  });

  export function play() {
    for (const videoElement of videoElements) {
      videoElement.play();
    }
  }
</script>

<div class="videoContainer">
  <div class="media">
    <video
      width="128"
      height="72"
      class="mediaVideo"
      muted={true}
      preload="auto"
      disablePictureInPicture="true"
      bind:this={videoElements[0]}
    >
      <source src="/videos/zoom_0.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="media mediaWithCamera">
    <video muted={true} class="mediaCamera" disablePictureInPicture="true" bind:this={videoUserElement} />
  </div>
  <div class="media">
    <video
      width="128"
      height="72"
      class="mediaVideo"
      muted={true}
      preload="auto"
      disablePictureInPicture="true"
      bind:this={videoElements[1]}
    >
      <source src="/videos/zoom_1.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="media">
    <video
      width="128"
      height="72"
      class="mediaVideo"
      muted={true}
      preload="auto"
      disablePictureInPicture="true"
      bind:this={videoElements[2]}
    >
      <source src="/videos/zoom_2.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="media">
    <video
      width="128"
      height="72"
      class="mediaVideo"
      muted={true}
      preload="auto"
      disablePictureInPicture="true"
      bind:this={videoElements[3]}
    >
      <source src="/videos/zoom_3.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="media">
    <video
      width="128"
      height="72"
      class="mediaVideo"
      muted={true}
      preload="auto"
      disablePictureInPicture="true"
      bind:this={videoElements[4]}
    >
      <source src="/videos/zoom_4.mp4" type="video/mp4" />
    </video>
  </div>
</div>

<style>
  .videoContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .media {
    width: 33%;
    margin-bottom: 2px;
  }
  .mediaWithCamera {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
  .mediaVideo {
    object-fit: cover;
    width: 100%;
    height: auto;
    display: block;
  }
  .mediaCamera {
    display: block;
    position: absolute;
    object-fit: contain;
    width: auto;
    height: 100%;
  }
</style>
