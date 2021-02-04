<script>
  import router from '../router.js';

  function train() {
    router.push('/train-pick');
  }
</script>

<h1>PITCH TUTOR</h1>

<h2>Мы будем рады обратной связи</h2>
<p class="description">Здесть внешняя страница лендинга, где будет форма обратной связи.</p>
<p class="continue"><button class="btn" on:click={train}>Продолжить<br />тренироваться</button></p>

<style>
  h1 {
    font-size: 24px;
    font-weight: 900;
  }

  h2 {
    color: #4487ec;
    text-align: center;
  }

  .description {
    font-size: 120%;
    max-width: 600px;
    margin: 30px auto;
  }

  .continue {
    text-align: center;
  }
</style>
