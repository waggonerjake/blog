async function GET(request: Request) {
  const response = await fetch('https://scs7xuuadxsagxft.public.blob.vercel-storage.com/words.json');
  const products = await response.json();
  return Response.json(products);
}