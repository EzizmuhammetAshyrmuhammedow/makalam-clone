<script lang="ts">
  import { createLabel, melt } from '@melt-ui/svelte';

  const {
    elements: { root },
  } = createLabel();
</script>
<svelte:head>
  <title>Agza bol</title>
</svelte:head>

<div class="flex items-center justify-center h-screen bg-background">
  <form class="p-4 bg-surface rounded-lg flex flex-col gap-5 ">
    <div class="flex flex-col">
      <label use:melt="{$root}" for="username">Ulanyjy ady</label>
      <input type="text" name="username" class="border border-gray-600 rounded p-2 mt-2 bg-surface text-text text-lg pb-1 pt-1 pr-1 pl-1" />
    </div>
    <div class="flex flex-col">
      <label use:melt="{$root}" for="email">Elektron poçta</label>
      <input type="email" name="email" class="border border-gray-600 rounded p-2 mt-2 bg-surface text-text text-lg pb-1 pt-1 pr-1 pl-1" />
    </div>
    <div class="flex flex-col">
      <label use:melt="{$root}" for="password">Parol</label>
      <input type="password" name="password" class="border border-gray-600 rounded p-2 mt-2 bg-surface text-text text-lg pb-1 pt-1 pr-1 pl-1" />
    </div>
    <button class="btn-primary  ">Hasap Aç</button>
  </form>
</div>
