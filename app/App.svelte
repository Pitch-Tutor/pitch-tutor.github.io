<script>
  import '@fontsource/roboto/cyrillic-500.css';
  import '@fontsource/roboto/latin-500.css';
  import { EasyrouteProvider, RouterOutlet } from 'svelte-easyroute';
  import router from './router.js';
</script>

<EasyrouteProvider {router}>
  <main>
    <RouterOutlet />
  </main>
</EasyrouteProvider>
