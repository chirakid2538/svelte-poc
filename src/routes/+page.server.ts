import { error } from "@sveltejs/kit";
import axios from "axios";

export async function load({ params }: any) {
  const { data } = await axios.get(
    "https://6597c6d5668d248edf235f39.mockapi.io/products"
  );

  if (data?.length > 0) {
    return { products: data };
  }

  error(404, "Not found");
}

/**
 * ref https://kit.svelte.dev/docs/routing#page
 */
export const ssr = false;
