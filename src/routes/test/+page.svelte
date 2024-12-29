<script>
  import WebComponentWrapper from "$lib/components/WebComponentWrapper.svelte";
</script>

<WebComponentWrapper>
  <counter-component buttonheader="My Counter"></counter-component>
  <counterdisplay-component></counterdisplay-component>
</WebComponentWrapper>
