<script>
  import '@fontsource/roboto/cyrillic-400.css';
  import '@fontsource/roboto/cyrillic-700.css';
  import '@fontsource/roboto/latin-400.css';
  import '@fontsource/roboto/latin-700.css';
  import '@fontsource/roboto/latin-900.css';
  import { EasyrouteProvider, RouterOutlet } from 'svelte-easyroute';
  import router from './router.js';

  router.afterEach((to, from) => {
    window.ym(80316241, 'hit', to.fullPath);
  });
</script>

<EasyrouteProvider {router}>
  <main>
    <RouterOutlet />
  </main>
</EasyrouteProvider>

<style>
  :global(body:not(.pitch)) main {
    padding: 0 40px;
    max-width: 800px;
    margin: 0 auto;
  }
</style>
