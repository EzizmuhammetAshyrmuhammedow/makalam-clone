<script>
  import { page } from '$app/stores';
  import NavBar from "../components/NavBar.svelte";

  // List of routes to exclude from the layout
  const excludedRoutes = ['/login', '/signup'];
  
  // Check if the current route is excluded
  $: isExcluded = excludedRoutes.includes($page.url.pathname);
</script>

{#if !isExcluded}
  <div class="bg-background m-0 p-0 w-screen h-screen absolute text-text flex justify-center">
    <main class="w75% flex items-start justify-center">
      <NavBar/>
      <slot></slot>
    </main>
  </div>
{:else}
  <div class="bg-background m-0 p-0 w-screen h-screen absolute text-text flex justify-center">
  <slot></slot>
  </div>
{/if}
