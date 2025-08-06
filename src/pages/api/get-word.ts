import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const response = await fetch(
    "https://scs7xuuadxsagxft.public.blob.vercel-storage.com/words.json"
  );
  const products = await response.json();

  return new Response(JSON.stringify(products));
};
