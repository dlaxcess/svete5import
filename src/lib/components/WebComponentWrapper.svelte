<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  let mounted: boolean = false;

  onMount(async () => {
    if (browser) {
      await Promise.all([
        import("webcomponentsvelte5/components/counter"),
        import("webcomponentsvelte5/components/counterDisplay")
      ]);
      mounted = true;
    }
  });
</script>

{#if mounted}
  <slot />
{/if}
