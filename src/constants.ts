import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconInstagram from "@/assets/icons/IconInstragram.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/waggonerjake",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "X",
    href: "https://x.com/jake_waggoner",
    linkTitle: `${SITE.title} on X`,
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/waggonerjake/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iamjakewaggoner/",
    linkTitle: `${SITE.title} on Instagram`,
    icon: IconInstagram,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
