<script>
  import router from '../../router.js';
  import Result from './Result.svelte';

  function train() {
    router.push('/train-pick');
  }

  let isShowResult = true;
  function closeResult() {
    isShowResult = false;
  }

  function onDonate() {
    ym(80316241, 'reachGoal', 'click to donate');
  }
</script>

{#if isShowResult}
  <Result on:close={closeResult} />
{/if}
<h1>PITCH TUTOR</h1>

<h2>Мы будем рады обратной связи</h2>

<div class="table">
  <div class="row">
    <div class="column side">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfH7ghWV_C1lKpKYgQbSJzEHNfPZDRtvIwz3Zi8F_dap6g2qg/viewform?usp=sf_link"
        target="_blank"
        class="btn"
        type="button">Пройти опрос</a
      >
    </div>
    <p class="column description">
      Мы хотим улучшать продукт, опираясь на ваши желания и потребности. Пройдите, пожалуйста, короткий опрос. Ваша
      обратная связь – это наша мотивация.
    </p>
  </div>
  <div class="row">
    <div class="column side">
      <a href="https://yoomoney.ru/to/41001225869392" target="_blank" class="btn" on:click={onDonate}
        >Поддержать проект</a
      >
    </div>
    <p class="column description">Если вам тренажер полезен и интересен для вас, вы можете поддержать его.</p>
  </div>
</div>
<p class="continue"><button class="btn" on:click={train}>Продолжить<br />тренироваться</button></p>

<style>
  h1 {
    font-size: 24px;
    font-weight: 900;
    margin: 0;
    padding: 16px;
  }

  h2 {
    color: #4487ec;
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
  }

  .table {
    display: table;
  }

  .row {
    display: table-row;
  }

  .column {
    display: table-cell;
    vertical-align: top;
  }

  .side .btn {
    width: 100%;
    font-size: 100%;
  }

  .description {
    font-size: 120%;
    max-width: 600px;
    padding: 0 0 30px 30px;
  }

  .continue {
    text-align: center;
  }
  .continue .btn {
    padding-top: 0.4em;
    padding-bottom: 0.4em;
  }
</style>
