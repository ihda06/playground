import { FiFigma } from "react-icons/fi";
import {
  SiAirtable,
  SiJest,
  SiMysql,
  SiNodedotjs,
  SiOracle,
  SiReact,
  SiStorybook,
  SiVuedotjs,
} from "react-icons/si";

export const CareerList = [
  {
    routeName: "avpn-asia",
    company: "AVPN Asia",
    companyUrl: "https://avpn.asia/",
    location: "Singapura (Remote)",
    position: "Front-End Developer Intern",
    companyImg: "/avpn.png",
    period: "Mei 2022 - Agu 2022",
    time: 3,
    details: {
      about:
        "Asian Venture Philanthropy Network Asia (AVPN Asia) is a leading organization dedicated to promoting impactful philanthropy and social investment in Asia. I worked on developing a prototype website that served as a platform connecting investors with recipients of funds. The website included features for negotiation and promotion, enabling fund recipients to showcase their social investment opportunities.",
      jobdesks: [
        "Designed user interface (UI) and user experience (UX) for the website project using Figma design tool.",
        "Created mockup prototypes for the website project using ReactJs, incorporating previously designed UI/UX.",
        "Managed mockup data using the nocode Airtable application to ensure data reliability and consistency throughout the project development",
      ],
      tools: [
        { icon: <FiFigma className="dark:text-white" />, title: "Figma" },
        { icon: <SiAirtable className="dark:text-white" />, title: "Airtable" },
        { icon: <SiReact className="text-sky-400" />, title: "React" },
      ],
    },
  },
  {
    routeName: "sekolahmu",
    company: "Sekolah.Mu",
    companyUrl: "https://www.sekolah.mu/",
    location: "Jakarta Timur",
    position: "Front-End Developer Intern",
    companyImg: "/sekolahmu.png",
    period: "Sep 2022 - Des 2022",
    time: 3,
    details: {
      about:
        "Sekolah.mu is one of the edutech companies that provides schools with the first blended learning system in Indonesia. During my internship at Sekolah.mu as a Front-End Engineer, I was a vital member of both the Design System and Payment Scrum teams. My role involved crafting and refining user interface components, improving existing elements, and ensuring their seamless integration. I also undertook the crucial tasks of documentation creation and unit testing to enhance the overall quality and reliability of the components.",
      jobdesks: [
        "Designed three website components for the front-end design system at Sekolah.mu.",
        "Implemented these components into Storybook to facilitate documentation and team collaboration.",
        "Created unit tests for each component to ensure quality and consistency in development.",
        "Achieved an average of 95% success rate in unit tests for each component, demonstrating design quality and accuracy",
        "Actively participated in the development and improvement of features on the payment page.",
        "Collaborated with the development team to implement changes and ensure the successful launch of new features.",
        "Utilized Vue.js to create dynamic and responsive web components, thereby increasing the application's interactivity and usability",
      ],
      tools: [
        { icon: <FiFigma className="dark:text-white" />, title: "Figma" },
        {
          icon: <SiStorybook className=" text-rose-400" />,
          title: "Storybook",
        },
        { icon: <SiVuedotjs className="text-green-500" />, title: "Vue js" },
        { icon: <SiJest className="text-red-800" />, title: "Jest" },
      ],
    },
  },
  {
    routeName: "antares",
    company: "Antares",
    companyUrl: "https://antares.id/",
    location: "Bandung",
    position: "Developer Intern",
    companyImg: "/antares2.png",
    period: "Jan 2023 - Jun 2023",
    time: 6,
    details: {
      about:
        "Antares.id is a subsidiary of Telkom Indonesia which provides Internet of things services. This internship I was placed in a team working on a project for the state electricity company (PLN) to control the power plants they own through a website that is being developed.",
      jobdesks: [
        "Developed 5 essential sub-menus to fulfill various application requirements, including tasks such as creating databases, establishing APIs, and designing front-end views.",
        "Proactively identified and resolved issues in over 10 sub-menus, resulting in improved functionality and an enhanced user experience.",
        "Utilized Vue.js to create dynamic and responsive web components, thereby increasing the application's interactivity and usability",
      ],
      tools: [
        { icon: <SiMysql className=" text-sky-700" />, title: "MySql" },
        { icon: <SiOracle className=" text-red-800" />, title: "Oracle" },
        { icon: <SiNodedotjs className="text-green-700" />, title: "Node js" },
        { icon: <SiVuedotjs className="text-green-500" />, title: "Vue js" },
      ],
    },
  },
];
