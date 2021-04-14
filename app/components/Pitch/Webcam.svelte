<script>
  import * as faceapi from 'face-api.js';
  import { onDestroy } from 'svelte';

  faceapi.nets.ssdMobilenetv1
    .loadFromUri('/weights')
    .then(() => {
      return Promise.all([
        faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
        faceapi.nets.faceExpressionNet.loadFromUri('/weights'),
      ]);
    })
    .then(recognition)
    .catch(console.error);

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

        const canvas = videoStreamOverlay;
        const dims = faceapi.matchDimensions(canvas, videoUserElement, true);
        if (result) {
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
</script>

<video muted={true} class="mediaCamera" disablePictureInPicture="true" playsinline bind:this={videoUserElement} />
<canvas bind:this={videoStreamOverlay} class="recognition" />

<style>
  .recognition,
  .mediaCamera {
    display: block;
    position: absolute;
    object-fit: contain;
    width: auto;
    height: 100%;
  }
</style>
