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
  let canvasWidth;
  let canvasHeight = 100;
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

  $: renderPdf(canvasWidth);
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

  function renderPdf() {
    if (currentPageDoc) {
      const viewport = currentPageDoc.getViewport({ scale: 1 });
      const scale = pdfCanvas.width / viewport.width;
      canvasHeight = viewport.height * scale;
      const renderContext = {
        canvasContext: pdfCanvas.getContext('2d'),
        viewport: currentPageDoc.getViewport({ scale }),
      };
      currentPageDoc.render(renderContext);
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
<canvas bind:offsetWidth={canvasWidth} width={canvasWidth} height={canvasHeight} bind:this={pdfCanvas} />

<style>
  canvas {
    width: 100%;
  }

  .videoContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 4px;
  }
  .media {
    width: 14.2%;
    /* max-width: 100%; */
    /* height: auto; */
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
