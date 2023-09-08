import { BiHomeSmile } from "react-icons/bi";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { GiMountains } from "react-icons/gi";
import {
  BsDiscord as DiscordIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
  BsTwitter as TwitterIcon,
  BsYoutube as YoutubeIcon,
} from "react-icons/bs";

const iconSize = 20;

export const MENU_ITEMS = [
  {
    title: "Home",
    icon: <BiHomeSmile />,
    href: "/",
  },
  {
    title: "About",
    icon: <GiMountains />,
    href: "/about",
  },
  {
    title: "Project",
    icon: <PiProjectorScreenChartLight />,
    href: "/project",
  },
];

export const SOCMED = [
  {
    title: "Github",
    href: "https://github.com/ihda06",
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Github",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/ihda-anwari/",
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Linkedin",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/",
    icon: <TwitterIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: "Social: Twitter",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/ihda.anwari",
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Instagram",
  },
  {
    title: "Discord",
    href: "https://discord.gg/76UFeGdXy6",
    icon: <DiscordIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: "Social: Discord",
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@codebayu",
    icon: <YoutubeIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: "Social: Youtube",
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@codebayu.com",
    icon: <TiktokIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: "Social: Tiktok",
  },
];
