import CoxGameShopImage from "../images/projects/coxgameshop.jpg";
import RCHSCAAImage from "../images/projects/rchscaa.png";
import DataCopsImage from "../images/projects/1.jpg";
import SaybrieflyImage from "../images/projects/saybriefly.jpg";

const Projects = [
  {
    id: 1,
    name: "Datacops",
    description:
      "TryDataCops is a first-party analytics and bot protection tool that collects accurate user data and defends any website from bots and fraud.",
    image: DataCopsImage,
    live_link: "https://trydatacops.com/",
    github_link: "",
    used: [
      "Next.JS",
      "Node.JS/express.js",
      "MongoDB",
      "Tailwind CSS",
      "Paddle",
    ],
  },
  {
    id: 2,
    name: "Saybriefly",
    description:
      "SayBriefly is an AI-powered summarization tool that helps you quickly generate concise summaries from long texts, articles, or documents.",
    image: SaybrieflyImage,
    live_link: "https://saybriefly.com",
    github_link: "",
    used: ["Unity", "SketchUp", "3D Modeling", "3D Animation"],
  },
  {
    id: 3,
    name: "CoxGameShop",
    description:
      "Cox Game Shop is your go-to online store for top-up services, gaming accounts, and digital goods tailored for Bangladeshi gamers.",
    image: CoxGameShopImage,
    live_link: "https://coxgameshop.com/",
    github_link: "",
    used: ["Firebase", "React.js", "Node.js", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "RCHSCAA",
    description:
      "Rajshahi College High School Certificate Alumni Association's Official Website. I developed this website entirely by me in the company named Codestudio. It also has an admin panel. ",
    image: RCHSCAAImage,
    live_link: "https://rchscaa.org/",
    github_link: "",
    used: ["Firebase", "React.js", "Node.js", "Tailwind CSS"],
  },
];

export default Projects;
