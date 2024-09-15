import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { Techstack } from "./skills.type";

export const techstackItems: Techstack[] = [
    {
        name: "CSS",
        icon: <BiLogoCss3 />,
        desc: "Flexbox, Grid, Responsive Design",
        color: "text-blue-400"
    },
    {
        name: "HTML",
        icon: <BiLogoHtml5 />,
        desc: "Semantic HTML",
        color: "text-orange-400"
    },
    {
        name: "JavaScript",
        icon: <BiLogoJavascript />,
        desc: "DOM manipulation, Basic Programming Algorithms",
        color: "text-yellow-400"
    },
    {
        name: "TypeScript",
        icon: <BiLogoTypescript />,
        desc: "Interfaces, Types",
        color: "text-blue-300"
    },
    {
        name: "ReactJS",
        icon: <BiLogoReact />,
        desc: "Lifecycle, State Management, Hooks",
        color: "text-blue-300"
    },
    {
        name: "NextJS",
        icon: <SiNextdotjs />,
        desc: "CSR, SSR, Server Actions, Search params, App Router",
        color: "text-gray-600"
    },
    {
        name: "TailwindCSS",
        icon: <BiLogoTailwindCss />,
        desc: "Flexbox, Grid, Responsive Design",
        color: "text-purple-400"
    },
]