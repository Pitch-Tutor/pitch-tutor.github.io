<script>
  import '@fontsource/roboto/cyrillic-400.css';
  import '@fontsource/roboto/cyrillic-700.css';
  import '@fontsource/roboto/latin-400.css';
  import '@fontsource/roboto/latin-900.css';
  import { EasyrouteProvider, RouterOutlet } from 'svelte-easyroute';
  import router from './router.js';
</script>

<style>
  main {
    padding: 0 40px;
    max-width: 800px;
    margin: 0 auto;
  }
</style>

<EasyrouteProvider {router}>
  <main>
    <RouterOutlet />
  </main>
</EasyrouteProvider>
