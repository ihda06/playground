import {
  SiAirtable,
  SiBootstrap,
  SiExpress,
  SiHtml5,
  SiJest,
  SiNodedotjs,
  SiReact,
  SiTelegram,
  SiTwitter,
  SiTypescript,
} from "react-icons/si";

export const projects = [
  {
    img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1696299112/projects/Screenshot_2023-10-03_091133_ms9u0n.png",
    title: "Telegram Bot",
    subtitle: `Used for search topic (in Indonesian) and bot automenfess twitter "CIANJURFESS"`,
    tools: [
      { icon: <SiNodedotjs className=" text-emerald-500" /> },
      { icon: <SiTelegram className=" text-sky-500" /> },
      { icon: <SiTwitter className=" text-sky-300" /> },
      { icon: <SiExpress className=" dark:text-white" /> },
    ],
    projectLink: "https://t.me/AstraUniverseBot",
    githubLink: "https://github.com/ihda06/bot-telegram-astra",
  },
  {
    img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1696297881/projects/Screenshot_2023-10-03_085104_anw9dn.png",
    title: "Website spotify API (Playlist)",
    subtitle: "Assignment at Generasi Gigih Front End Track Program",
    tools: [
      { icon: <SiReact className="text-sky-400" /> },
      { icon: <SiBootstrap className="text-purple-500" /> },
      { icon: <SiTypescript className=" text-cyan-600" /> },
      { icon: <SiJest className="text-red-800" /> },
    ],
    projectLink: "https://homework-kappa.vercel.app/",
    githubLink: "https://github.com/ihda06/GenGigih-Homework",
  },
  {
    img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1696297717/projects/ihda06-github-io-1200x600desktop50-a69dc1_xbzs31.png",
    title: "First static personal website",
    subtitle: "",
    tools: [
      { icon: <SiHtml5 className="text-yellow-400" /> },
      { icon: <SiBootstrap className="text-purple-500" /> },
    ],
    projectLink: "https://ihda06.github.io/",
    githubLink: "https://github.com/ihda06/ihda06.github.io",
  },
  {
    img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1696297718/projects/fun-coding-sekolahmu-vercel-app-1200x600desktop50-9c1744_ywtetf.png",
    title: "Slicing website Sekolahmu",
    subtitle: "Live coding for internship selection at Sekolah.mu",
    tools: [{ icon: <SiReact className="text-sky-400" /> }],
    projectLink: "https://fun-coding-sekolahmu.vercel.app/",
    githubLink: "https://github.com/ihda06/FunCoding-Sekolahmu",
  },
  {
    img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1696297718/projects/mini-project-rakamin-vercel-app-1200x600desktop50-a780f4_iapuuu.png",
    title: "Website giphy generator",
    subtitle: "Coding challenge for internship selection at Rakamin",
    tools: [{ icon: <SiReact className="text-sky-400" /> }],
    projectLink: "https://mini-project-rakamin.vercel.app/",
    githubLink: "https://github.com/ihda06/MiniProject-Rakamin",
  },
  {
    img: "https://res.cloudinary.com/dy6fdp9ar/image/upload/v1696297716/projects/secreto-ihda-vercel-app-1200x600desktop50-5766a7_k1epsn.png",
    title: "Cloning Secreto Website",
    subtitle: "Utilizes the Airtable API to store anonymous messages",
    tools: [
      { icon: <SiReact className="text-sky-400" /> },
      { icon: <SiBootstrap className="text-purple-500" /> },
      { icon: <SiAirtable className="dark:text-white" /> },
    ],
    projectLink: "https://secreto-ihda.vercel.app/",
    githubLink: "https://github.com/ihda06/no-secret",
  },
];