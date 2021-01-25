<script>
  import router from '../router.js';

  function start() {
    router.push('/train-pick');
  }
</script>

<style>
  h1 {
    font-size: 64px;
    font-weight: 900;
    text-align: center;
    color: #4487ec;
  }

  p {
    font-size: 24px;
    text-align: center;
    margin-top: 60px;
  }

  .go {
    text-align: center;
  }

  button {
    background: #4487ec;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    color: #fff;
    border: 0;
    font-size: 24px;
    padding: 18px 32px;
  }
</style>

<h1>PITCH TUTOR</h1>
<p>Репетируй и прокачивай свои презентационные навыки</p>
<p class="go"><button class="btn" on:click={start}>Начать тренировку</button></p>
