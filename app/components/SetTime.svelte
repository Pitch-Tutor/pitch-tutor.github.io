<script>
  import { onDestroy } from 'svelte';
  import useCurrentRoute from 'svelte-easyroute/useCurrentRoute';
  import router from '../router.js';
  import config from './config.js';

  let currentRoute;
  let defaultTime;
  let customTime;
  let isEnable = false;

  const unsubscribe = useCurrentRoute((_currentRoute) => {
    currentRoute = _currentRoute;
  });

  onDestroy(unsubscribe);

  $: isEnable = defaultTime || customTime > 0;

  function submit() {
    const time = defaultTime ? config.traintTimeMin : customTime;
    router.push(`/pitch?mode=${currentRoute.query.mode}&time=${time}${this.counter.checked ? '&useCounter=1' : ''}`);
  }
</script>

<h1>PITCH TUTOR</h1>

<h2>Настройте режим вашей тренировки</h2>
<p class="description">
  Описание того зачем ставить счетчик и какой лучше установить. Что-то про особенности питчинга и важности времени.
</p>
<form on:submit|preventDefault={submit}>
  <div class="options">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="optionsItem">
      <input type="checkbox" name="counter" value="1" />
      <div class="optionsLabel">Показывать<br />счетчик</div>
    </label>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="optionsItem">
      <input type="checkbox" name="defaultTime" bind:checked={defaultTime} />
      <div class="optionsLabel">{config.traintTimeMin} минуты</div>
    </label>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="optionsItem">
      <input type="number" bind:value={customTime} disabled={defaultTime} />
      <div class="optionsLabel">Свое время</div></label
    >
  </div>

  <div class="start"><button type="submit" class="btn" disabled={!isEnable}>Начать тренировку</button></div>
</form>

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

  .options {
    display: flex;
    flex-flow: row nowrap;
  }

  .optionsItem {
    flex-grow: 1;
    flex-basis: 0;
    border: 10px solid transparent;
    vertical-align: top;
    text-align: center;
  }

  .optionsLabel {
    margin-top: 10px;
  }

  .start {
    text-align: center;
    margin-top: 40px;
  }
</style>
