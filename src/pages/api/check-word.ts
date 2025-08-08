import type { APIRoute } from "astro";
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const response = await fetch(
    `https://scs7xuuadxsagxft.public.blob.vercel-storage.com/words_dictionary.json`
  );
  const words: any = await response.json();
  const guess = url.searchParams.get("q") || "123";

  return new Response(JSON.stringify({ exists: words[guess] ? true : false }));
};
