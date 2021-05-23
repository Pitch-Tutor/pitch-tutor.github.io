<script>
  import { createEventDispatcher } from 'svelte';
  import Portal from 'svelte-portal';

  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close', '');
  }
</script>

<Portal target={document.body}>
  <div class="popup">
    <div class="window">
      <div class="header">
        <h4>Результат вашей тренировки (DEMO)</h4>
        <div class="headerNote">Данный результат пока генерируется случайным образом для демонстрации функционала.</div>
      </div>
      <div class="content">
        <div class="details">
          <dl>
            <dt>Визуальные критерии:</dt>
            <dd>Уверенность: <strong class="num">38%</strong></dd>
            <dd>Эмоциональность: <strong class="num">75%</strong></dd>
            <dd>Волнение: <strong class="num">93%</strong></dd>
          </dl>
          <dl>
            <dt>Вербальные критерии:</dt>
            <dd>Уверенность: <strong class="num">15%</strong></dd>
            <dd>Эмоциональность: <strong class="num">68%</strong></dd>
            <dd>Волнение: <strong class="num">87%</strong></dd>
          </dl>
        </div>
        <div class="resume">
          <h5>Резюме:</h5>
          Данные визуального треккера и анализа голоса показали, что вы весьма взволнованы и очень спешите. Постарайтейсь
          сконцентрироваться на главном в вашей презентации, расставьте акценты. Не обязательно доностить все, что можно
          рассказать о вашем проекте – донесите самое важное.
          <br />И не забывайте дышать =)
        </div>
      </div>
      <div class="footer">
        <h5>Полезное для вас:</h5>
        <ol>
          <li><a href={'#'}>Упражнения для уверенной речи на презентации</a></li>
          <li><a href={'#'}>Как уверенно донести свою мысль</a></li>
          <li><a href={'#'}>Что самое важное в презентации</a></li>
        </ol>
      </div>
      <button on:click={close} class="close">
        <svg fill="none" height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg"
          ><g stroke="#000"
            ><path d="m.353553.646447 19.000047 18.999953" /><path d="m19.3536 1.35355-19.000047 19.00005" /></g
          ></svg
        >
      </button>
    </div>
  </div>
</Portal>

<style>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.95);
    overflow-x: auto;
  }

  .window {
    position: relative;
    width: 50%;
    margin: 30px auto;
  }

  .header {
    background: #4487ec;
    border-radius: 30px 30px 0 0;
    color: #fff;
    text-align: center;
    padding: 4px 27px 8px;
  }

  .headerNote {
    font-size: 12px;
    width: 50%;
    margin: 0 auto;
  }

  .content {
    background-color: #fff;
    border: 0 solid #c4c4c4;
    border-width: 0 0.5px;
    padding: 16px 27px;
    font-size: 14px;
  }

  .footer {
    color: #fff;
    background: #1b1f1f;
    border-radius: 0 0 30px 30px;
    padding: 4px 27px 8px;
  }

  .details {
    display: flex;
  }

  dl {
    width: 50%;
    margin: 0;
  }

  dd {
    margin: 16px 0;
  }

  ol {
    padding-left: 0;
    list-style-position: inside;
  }

  li {
    padding-left: 0;
  }

  .num {
    color: #4487ec;
  }

  h4,
  h5 {
    font-size: 18px;
    margin: 8px 0;
  }

  h5 {
    font-weight: normal;
  }

  .resume {
    border-top: 1px solid #c4c4c4;
    padding-top: 6px;
  }

  .content dt,
  .content h5 {
    font-size: 18px;
    color: #4487ec;
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: -38px;
    top: -19px;
    background: transparent;
    border: 0;
    padding: 0;
  }
</style>
