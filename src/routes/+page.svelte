<script lang="ts">
  export let data;

  function handleAddToCart(product: any) {
    console.log(product);
  }
</script>

<h1 class="text-3xl font-bold underline">Hello E-Commerce!</h1>
<div class="mx-auto max-w-7xl">
  <div class="grid grid-cols-4 gap-4">
    {#each data.products as product}
      <div class="shadow-sm p-2">
        <img src={product.imageURL} alt={product.displayName} width="100%" />
        <p class="text-lg">{product.displayName}</p>
        <p class="text-2xl">Price : {product.price}</p>

        <div class="flex justify-end">
          <button
            on:click={() => handleAddToCart(product)}
            class="p-2 bg-blue-100 rounded hover:bg-blue-200"
            >Add to cart</button
          >
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.white);
  }
</style>
