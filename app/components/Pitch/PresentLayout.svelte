<script>
  import { get } from 'idb-keyval';
  import * as pdfjs from 'pdfjs-dist';
  import Webcam from './Webcam.svelte';

  export let numPages;
  export let currentPageNum = 1;
  export function next() {
    currentPageNum++;
  }
  export function prev() {
    currentPageNum--;
  }

  let videoElements = [];
  let pdf;
  let pdfCanvas;
  let canvasWidth = 100;
  let canvasHeight = 100;
  let canvasOutWidth;
  let canvasOutHeight;
  let currentPageDoc;
  let doc;

  get('pdf').then((res) => {
    pdf = res;
    let reader = new FileReader();
    reader.onload = function (evt) {
      const data = new Uint8Array(evt.target.result);
      pdfjs.getDocument(data).promise.then((resultDoc) => {
        doc = resultDoc;
        numPages = doc.numPages;
        changeCurrentPage(currentPageNum);
      });
    };
    reader.readAsArrayBuffer(pdf);
  });

  $: renderPdf(canvasOutWidth);
  $: changeCurrentPage(currentPageNum);

  function changeCurrentPage(num) {
    if (!doc) {
      return;
    }
    doc.getPage(num).then((page) => {
      currentPageDoc = page;
      renderPdf();
    });
  }

  let renderTask;
  function renderPdf() {
    if (renderTask) {
      renderTask.cancel();
    }
    if (currentPageDoc) {
      const viewport = currentPageDoc.getViewport({ scale: 1 });
      canvasHeight = viewport.height;
      canvasWidth = viewport.width;
      const renderContext = {
        canvasContext: pdfCanvas.getContext('2d'),
        viewport: currentPageDoc.getViewport(),
      };
      renderTask = currentPageDoc.render(renderContext);
      renderTask.promise.catch((err) => console.log(err));
    }
  }

  export function play() {
    for (const videoElement of videoElements) {
      videoElement.play();
    }
  }

  function onKeydown(e) {
    // left
    if (e.keyCode === 37 && currentPageNum !== 1) {
      currentPageNum--;
    }
    // right
    if (e.keyCode === 39 && currentPageNum !== numPages) {
      currentPageNum++;
    }
  }
</script>

<svelte:window on:keydown={onKeydown} />

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
    <Webcam />
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
<div class="presentation" bind:offsetWidth={canvasOutWidth} bind:offsetHeight={canvasOutHeight}>
  <canvas width={canvasWidth} height={canvasHeight} bind:this={pdfCanvas} />
</div>

<style>
  .presentation {
    flex: 1;
    width: 100%;
    /* display: flex; */
    position: relative;
  }

  canvas {
    display: block;
    position: absolute;
    object-fit: contain;
    width: auto;
    max-width: 100%;
    height: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .videoContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .media {
    width: 16.5%;
  }

  .mediaVideo {
    object-fit: cover;
    width: 100%;
    height: auto;
    display: block;
  }

  .mediaWithCamera {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
</style>
