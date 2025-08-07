import type { APIRoute } from "astro";

function getEasternDate(): string {
  const now = new Date();
  const easternTime = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  const year = easternTime.getFullYear();
  const month = String(easternTime.getMonth() + 1).padStart(2, "0");
  const day = String(easternTime.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export const GET: APIRoute = async () => {
  const todayDate = getEasternDate();
  const response = await fetch(
    `https://scs7xuuadxsagxft.public.blob.vercel-storage.com/words.json?d=${todayDate}`
  );
  const words: any[] = await response.json();

  return new Response(
    JSON.stringify(words.find(word => word.date === todayDate))
  );
};
