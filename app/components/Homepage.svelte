<script>
  import { RouterLink } from 'svelte-easyroute';
</script>

<style>
  h1 {
    font-size: 64px;
    text-align: center;
    color: #4487ec;
  }

  p {
    font-size: 24px;
    text-align: center;
  }

  button {
    background: #4487ec;
    box-shadow: 0px 0px 24px 1px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    color: #fff;
    border: 0;
    padding: 10px 20px;
  }
</style>

<h1>PITCH TUTOR</h1>
<p>Репетируй и прокачивай свои презентационные навыки</p>
<RouterLink to="/start"><button class="btn">Начать тренировку</button></RouterLink>
