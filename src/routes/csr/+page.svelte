<script lang="ts">
  import "webcomponentsvelte5/components/counter";
  import "webcomponentsvelte5/components/counterDisplay";
</script>

<svelte:head>
  <title>Test CSR</title>
  <meta name="description" content="CSR mode" />
</svelte:head>

<div class="text-column">
  <h1>CSR Webcomponents !!!</h1>

  <counter-component buttonheader="My Counter"></counter-component>
  <counterdisplay-component></counterdisplay-component>

  <counterdisplay-component>
    <div slot="description">
      <h3>See your score</h3>
      <p>Reactive display</p>
    </div>
    <div slot="footer">
      <hr />
      <small>Created with WebComponentSvelte5</small>
    </div>
  </counterdisplay-component>
</div>
