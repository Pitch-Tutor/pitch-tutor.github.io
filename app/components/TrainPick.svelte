<script>
  import { get, set } from 'idb-keyval';
  import * as pdfjs from 'pdfjs-dist';
  import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
  import router from '../router.js';

  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  let mode;
  let pdf;
  let inputPdf;
  let pdfCanvas;

  get('pdf').then((res) => {
    pdf = res;
  });

  $: {
    if (inputPdf) {
      pdf = inputPdf[0];
      set('pdf', pdf);
    }
  }

  $: {
    if (pdf) {
      let reader = new FileReader();
      reader.onload = function (evt) {
        const data = new Uint8Array(evt.target.result);
        pdfjs.getDocument(data).promise.then((doc) => {
          doc.getPage(1).then((page) => {
            const scale = pdfCanvas.width / page.getViewport({ scale: 1 }).width;
            const renderContext = {
              canvasContext: pdfCanvas.getContext('2d'),
              viewport: page.getViewport({ scale }),
            };
            page.render(renderContext);
          });
        });
      };
      reader.readAsArrayBuffer(pdf);
    }
  }

  function submit() {
    router.push(`/set-time?mode=${mode}`);
  }
</script>

<h1>PITCH TUTOR</h1>

<h2>Выберите режим тренировки</h2>
<form on:submit|preventDefault={submit}>
  <div class="modes">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="modesItem">
      <svg class="preview" width="333" viewBox="0 0 333 186" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="333" height="185.462" fill="black" />
        <circle cx="116.897" cy="157.597" r="2.42812" fill="#C4C4C4" />
        <circle cx="116.897" cy="157.597" r="1.69687" fill="#FF0000" stroke="black" />
        <rect x="46.25" y="154.938" width="6.24375" height="4.625" rx="2.3125" fill="#23D959" />
        <path
          d="M49.6099 155.74C49.4146 155.545 49.0981 155.545 48.9028 155.74L45.7208 158.922C45.5256 159.117 45.5256 159.434 45.7208 159.629C45.9161 159.825 46.2327 159.825 46.4279 159.629L49.2563 156.801L52.0848 159.629C52.28 159.825 52.5966 159.825 52.7919 159.629C52.9871 159.434 52.9871 159.117 52.7919 158.922L49.6099 155.74ZM49.7563 158.406L49.7563 156.094L48.7563 156.094L48.7563 158.406L49.7563 158.406Z"
          fill="black"
        />
        <rect x="266.863" y="154.706" width="19.8875" height="6.475" rx="3.2375" fill="#FF0000" />
        <rect x="46.25" y="20.1187" width="240.5" height="128.575" fill="#C4C4C4" />
      </svg>

      <span class="modeTitle"><input type="radio" name="mode" value="one" bind:group={mode} /> Один на один</span>
    </label>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="modesItem">
      <svg class="preview" width="333" viewBox="0 0 333 186" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="333" height="185.462" fill="black" />
        <circle cx="116.897" cy="157.597" r="2.42812" fill="#C4C4C4" />
        <circle cx="116.897" cy="157.597" r="1.69687" fill="#FF0000" stroke="black" />
        <rect x="46.25" y="154.938" width="6.24375" height="4.625" rx="2.3125" fill="#23D959" />
        <path
          d="M49.6099 155.74C49.4146 155.545 49.0981 155.545 48.9028 155.74L45.7208 158.922C45.5256 159.117 45.5256 159.434 45.7208 159.629C45.9161 159.825 46.2327 159.825 46.4279 159.629L49.2563 156.801L52.0848 159.629C52.28 159.825 52.5966 159.825 52.7919 159.629C52.9871 159.434 52.9871 159.117 52.7919 158.922L49.6099 155.74ZM49.7563 158.406L49.7563 156.094L48.7563 156.094L48.7563 158.406L49.7563 158.406Z"
          fill="black"
        />
        <rect x="266.863" y="154.706" width="19.8875" height="6.475" rx="3.2375" fill="#FF0000" />
        <rect x="46.25" y="32.375" width="80.0125" height="58.0438" fill="#C4C4C4" />
        <rect x="46.25" y="90.6499" width="80.0125" height="58.0438" fill="#C4C4C4" />
        <rect x="126.494" y="32.375" width="80.0125" height="58.0438" fill="#C4C4C4" />
        <rect x="126.494" y="90.6499" width="80.0125" height="58.0438" fill="#C4C4C4" />
        <rect x="206.737" y="32.375" width="80.0125" height="58.0438" fill="#C4C4C4" />
        <rect x="206.737" y="90.6499" width="80.0125" height="58.0438" fill="#C4C4C4" />
      </svg>
      <span class="modeTitle"><input type="radio" name="mode" value="all" bind:group={mode} /> Все на одного</span>
    </label>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="modesItem">
      <label>
        <svg class="preview" width="333" viewBox="0 0 333 186" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="333" height="185.462" fill="black" />
          <rect x="46.25" y="41.625" width="240.5" height="128.575" fill="#C4C4C4" />
          <rect x="46.75" y="8.82495" width="39.0062" height="28.1375" fill="#C4C4C4" stroke="black" />
          <rect x="86.7559" y="8.82495" width="39.2375" height="28.1375" fill="#C4C4C4" stroke="black" />
          <rect x="126.994" y="8.82495" width="39.0062" height="28.1375" fill="#C4C4C4" stroke="black" />
          <rect x="167" y="8.82495" width="39.0062" height="28.1375" fill="#C4C4C4" stroke="black" />
          <rect x="207.006" y="8.82495" width="39.2375" height="28.1375" fill="#C4C4C4" stroke="black" />
          <rect x="247.244" y="8.82495" width="39.0062" height="28.1375" fill="#C4C4C4" stroke="black" />
          <circle cx="116.897" cy="176.097" r="2.42812" fill="#C4C4C4" />
          <circle cx="116.897" cy="176.097" r="1.69687" fill="#FF0000" stroke="black" />
          <rect x="46.25" y="173.438" width="6.24375" height="4.625" rx="2.3125" fill="#23D959" />
          <path
            d="M49.6094 174.24C49.4142 174.045 49.0976 174.045 48.9023 174.24L45.7203 177.422C45.5251 177.617 45.5251 177.934 45.7203 178.129C45.9156 178.325 46.2322 178.325 46.4274 178.129L49.2559 175.301L52.0843 178.129C52.2795 178.325 52.5961 178.325 52.7914 178.129C52.9867 177.934 52.9867 177.617 52.7914 177.422L49.6094 174.24ZM49.7559 176.906L49.7559 174.594L48.7559 174.594L48.7559 176.906L49.7559 176.906Z"
            fill="black"
          />
          <rect x="266.862" y="173.206" width="19.8875" height="6.475" rx="3.2375" fill="#FF0000" />
          <path
            d="M122.259 110H120.562V98.5918H114.252V110H112.564V97.2031H122.259V110ZM133.113 105.351C133.113 106.798 132.782 107.964 132.12 108.849C131.458 109.733 130.562 110.176 129.431 110.176C128.276 110.176 127.368 109.81 126.706 109.077V113.656H125.08V100.49H126.565L126.645 101.545C127.307 100.725 128.227 100.314 129.404 100.314C130.547 100.314 131.449 100.745 132.111 101.606C132.779 102.468 133.113 103.666 133.113 105.201V105.351ZM131.487 105.166C131.487 104.094 131.259 103.247 130.802 102.626C130.345 102.005 129.718 101.694 128.921 101.694C127.937 101.694 127.198 102.131 126.706 103.004V107.548C127.192 108.415 127.937 108.849 128.938 108.849C129.718 108.849 130.336 108.541 130.793 107.926C131.256 107.305 131.487 106.385 131.487 105.166ZM139.134 110.176C137.845 110.176 136.796 109.754 135.987 108.91C135.179 108.061 134.774 106.927 134.774 105.509V105.21C134.774 104.267 134.953 103.426 135.311 102.688C135.674 101.943 136.178 101.363 136.822 100.947C137.473 100.525 138.176 100.314 138.932 100.314C140.168 100.314 141.129 100.722 141.814 101.536C142.5 102.351 142.843 103.517 142.843 105.034V105.711H136.4C136.424 106.648 136.696 107.407 137.218 107.987C137.745 108.562 138.413 108.849 139.222 108.849C139.796 108.849 140.282 108.731 140.681 108.497C141.079 108.263 141.428 107.952 141.727 107.565L142.72 108.339C141.923 109.563 140.728 110.176 139.134 110.176ZM138.932 101.65C138.275 101.65 137.725 101.891 137.279 102.371C136.834 102.846 136.559 103.514 136.453 104.375H141.217V104.252C141.17 103.426 140.947 102.787 140.549 102.336C140.15 101.879 139.611 101.65 138.932 101.65ZM149.962 103.092C149.962 102.646 149.792 102.295 149.452 102.037C149.112 101.773 148.646 101.642 148.055 101.642C147.48 101.642 147 101.791 146.613 102.09C146.232 102.389 146.042 102.74 146.042 103.145H144.425C144.425 102.318 144.771 101.642 145.462 101.114C146.153 100.587 147.018 100.323 148.055 100.323C149.168 100.323 150.035 100.563 150.656 101.044C151.277 101.519 151.588 102.198 151.588 103.083C151.588 103.511 151.459 103.903 151.201 104.261C150.943 104.618 150.577 104.902 150.103 105.113C151.21 105.488 151.764 106.227 151.764 107.328C151.764 108.201 151.427 108.893 150.753 109.402C150.079 109.912 149.18 110.167 148.055 110.167C146.959 110.167 146.054 109.9 145.339 109.367C144.63 108.828 144.275 108.102 144.275 107.188H145.893C145.893 107.65 146.098 108.049 146.508 108.383C146.924 108.711 147.439 108.875 148.055 108.875C148.676 108.875 149.177 108.731 149.558 108.444C149.938 108.157 150.129 107.785 150.129 107.328C150.129 106.795 149.968 106.414 149.646 106.186C149.329 105.951 148.834 105.834 148.16 105.834H146.534V104.463H148.301C149.408 104.434 149.962 103.977 149.962 103.092ZM157.819 110.176C156.53 110.176 155.481 109.754 154.673 108.91C153.864 108.061 153.46 106.927 153.46 105.509V105.21C153.46 104.267 153.639 103.426 153.996 102.688C154.359 101.943 154.863 101.363 155.508 100.947C156.158 100.525 156.861 100.314 157.617 100.314C158.854 100.314 159.814 100.722 160.5 101.536C161.186 102.351 161.528 103.517 161.528 105.034V105.711H155.086C155.109 106.648 155.382 107.407 155.903 107.987C156.431 108.562 157.099 108.849 157.907 108.849C158.481 108.849 158.968 108.731 159.366 108.497C159.765 108.263 160.113 107.952 160.412 107.565L161.405 108.339C160.608 109.563 159.413 110.176 157.819 110.176ZM157.617 101.65C156.961 101.65 156.41 101.891 155.965 102.371C155.52 102.846 155.244 103.514 155.139 104.375H159.902V104.252C159.855 103.426 159.633 102.787 159.234 102.336C158.836 101.879 158.297 101.65 157.617 101.65ZM171.188 110H169.562V105.939H165.193V110H163.559V100.49H165.193V104.612H169.562V100.49H171.188V110ZM180.873 101.809H177.683V110H176.057V101.809H172.928V100.49H180.873V101.809ZM188.186 110C188.092 109.812 188.016 109.479 187.957 108.998C187.201 109.783 186.299 110.176 185.25 110.176C184.312 110.176 183.542 109.912 182.938 109.385C182.341 108.852 182.042 108.178 182.042 107.363C182.042 106.373 182.417 105.605 183.167 105.061C183.923 104.51 184.983 104.234 186.349 104.234H187.931V103.487C187.931 102.919 187.761 102.468 187.421 102.134C187.081 101.794 186.58 101.624 185.918 101.624C185.338 101.624 184.852 101.771 184.459 102.063C184.066 102.356 183.87 102.711 183.87 103.127H182.235C182.235 102.652 182.402 102.195 182.736 101.756C183.076 101.311 183.533 100.959 184.107 100.701C184.688 100.443 185.323 100.314 186.015 100.314C187.11 100.314 187.969 100.59 188.59 101.141C189.211 101.686 189.533 102.438 189.557 103.399V107.776C189.557 108.649 189.668 109.344 189.891 109.859V110H188.186ZM185.487 108.761C185.997 108.761 186.48 108.629 186.938 108.365C187.395 108.102 187.726 107.759 187.931 107.337V105.386H186.656C184.664 105.386 183.668 105.969 183.668 107.135C183.668 107.645 183.838 108.043 184.178 108.33C184.518 108.617 184.954 108.761 185.487 108.761ZM192.246 100.49H193.881V108.673H198.258V100.49H199.884V108.673H201.018L200.859 112.821H199.4V110H192.246V100.49ZM208.928 100.49H210.554V110H208.928V103.065L204.542 110H202.916V100.49H204.542V107.434L208.928 100.49ZM220.433 100.49V110H218.798V106.3H216.346L214.104 110H212.347L214.737 106.054C214.128 105.831 213.659 105.488 213.331 105.025C213.009 104.557 212.848 104.012 212.848 103.391C212.848 102.523 213.173 101.826 213.823 101.299C214.474 100.766 215.344 100.496 216.434 100.49H220.433ZM214.482 103.408C214.482 103.871 214.641 104.246 214.957 104.533C215.273 104.814 215.692 104.958 216.214 104.964H218.798V101.809H216.46C215.856 101.809 215.376 101.958 215.019 102.257C214.661 102.55 214.482 102.934 214.482 103.408Z"
            fill="black"
          />
        </svg>
        <span class="modeTitle"
          ><input type="radio" name="mode" value="demo" bind:group={mode} />
          Демонстрация экрана</span
        >
      </label>
      <div class="upload" class:disabled={mode !== 'demo'}>
        Загрузите презентацию
        <input type="file" bind:files={inputPdf} accept="application/pdf" disabled={mode !== 'demo'} />
        <canvas bind:this={pdfCanvas} class="pdfCanvas" />
      </div>
    </div>
  </div>

  <div class="time"><button type="submit" class="btn" disabled={!mode}>Установить время</button></div>
</form>

<style>
  h1 {
    font-size: 24px;
    font-weight: 900;
  }

  h2 {
    color: #4487ec;
    text-align: center;
  }

  .modes {
    display: flex;
    flex-flow: row;
  }

  .modesItem {
    width: 100%;
    border: 10px solid transparent;
    overflow: hidden;
    vertical-align: top;
  }

  .pdfCanvas {
    max-width: 100%;
    margin-top: 10px;
  }

  .modeTitle {
    font-size: 120%;
    display: inline-block;
    padding-top: 12px;
  }

  .modesItem input {
    vertical-align: top;
    margin-top: 4px;
  }

  .preview {
    max-width: 100%;
  }

  .upload {
    margin-top: 18px;
    text-align: center;
  }

  .upload.disabled {
    color: #ccc;
  }

  .time {
    text-align: center;
    margin-top: 40px;
  }
</style>
