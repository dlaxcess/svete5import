<script>
  import WebComponentWrapper from "$lib/components/WebComponentWrapper.svelte";
</script>

<WebComponentWrapper>
  <div class="text-column">
    <h1>SSR Webcomponents !!!</h1>

    <counter-component buttonheader="My Counter"></counter-component>
    <counterdisplay-component></counterdisplay-component>
  </div>
</WebComponentWrapper>
