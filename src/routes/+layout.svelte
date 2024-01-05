<script>
  import "../app.css";
  import Footer from "../components/common/footer/footer.svelte";
  import AppBar from "../components/common/header/appBar.svelte";
</script>

<AppBar />
<div class="relative flex flex-col justify-between full-screen-height">
  <div class="full-content-height">
    <slot />
  </div>
  <Footer />
</div>

<style>
  .full-screen-height {
    height: 100dvh;
  }
  .full-content-height {
    height: 100dvh;
  }
</style>
