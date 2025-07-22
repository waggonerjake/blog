export const SITE = {
  website: "https://jakewaggoner.com/", // replace this with your deployed domain
  author: "Jake Waggoner",
  profile: "https://jakewaggoner.com/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Jake Waggoner",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Indianapolis", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
