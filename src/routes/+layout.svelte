<script>
  import "../app.css";
  import Footer from "../components/common/footer/footer.svelte";
  import AppBar from "../components/common/header/appBar.svelte";
</script>

<AppBar />
<div class="relative flex flex-col justify-between">
  <slot />
  <Footer />
</div>

<style>
</style>
