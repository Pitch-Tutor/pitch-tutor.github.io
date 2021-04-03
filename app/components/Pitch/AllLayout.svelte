<script>
  import * as faceapi from 'face-api.js';
  import { onDestroy } from 'svelte';

  Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri('/weights'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
    faceapi.nets.faceExpressionNet.loadFromUri('/weights'),
  ])
    .then(recognition)
    .catch(console.error);

  let videoElements = [];
  let recognitionTimeout;
  let videoUserElement;
  let videoStream;
  let videoStreamOverlay;

  const minConfidence = 0.5;
  const options = new faceapi.SsdMobilenetv1Options({ minConfidence });
  async function recognition() {
    try {
      if (videoStream) {
        const result = await faceapi
          .detectSingleFace(videoUserElement, options)
          .withFaceLandmarks()
          .withFaceExpressions();
        if (result) {
          const canvas = videoStreamOverlay;
          const dims = faceapi.matchDimensions(canvas, videoUserElement, true);

          const resizedResult = faceapi.resizeResults(result, dims);
          faceapi.draw.drawDetections(canvas, resizedResult);
          faceapi.draw.drawFaceExpressions(canvas, resizedResult, minConfidence);
        }
        recognitionTimeout = setTimeout(recognition, 500);
      } else {
        recognitionTimeout = setTimeout(recognition, 500);
      }
    } catch (err) {
      console.error(err);
    }
  }

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
    clearTimeout(recognitionTimeout);
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
    <video muted={true} class="mediaCamera" disablePictureInPicture="true" playsinline bind:this={videoUserElement} />
    <canvas bind:this={videoStreamOverlay} class="recognition" />
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
  .recognition,
  .mediaCamera {
    display: block;
    position: absolute;
    object-fit: contain;
    width: auto;
    height: 100%;
  }
</style>
