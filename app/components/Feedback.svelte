<script>
  import router from '../router.js';

  function train() {
    router.push('/train-pick');
  }
</script>

<h1>PITCH TUTOR</h1>

<h2>Мы будем рады обратной связи</h2>

<p class="description">
  Мы хотим улучшать продукт, опираясь на ваши желания и потребности. Пройдите, пожалуйста, короткий опрос. Ваша обратная
  связь – это наша мотивация. (Кнопка: пройти опрос)
</p>
<p class="description">
  Если вы оставите нам свои контактные данные, мы уведомим вас о новых версиях тренажера и оповестим о запуске Roobiq.
  (Кнопка: оставить имя и почту) или сразу форму, если не сложно.
</p>
<p class="description">Если вам тренажер полезен и интересен для вас, вы можете поддержать его: (Кнопка: Донат)</p>
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
