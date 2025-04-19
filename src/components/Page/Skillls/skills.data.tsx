import {PiFlag, PiGear, PiMonitor, PiStack} from "react-icons/pi"
import {Techstack} from "./skills.type"

export const techstackItems: Techstack[] = [
    {
        name: "Frontend",
        icon: <PiMonitor />,
        desc: "HTML, CSS, JavaScript, ReactJs, NextJs, TailwindCSS, TypeScript, Responsive Design",
        color: "text-blue-400",
    },
    {
        name: "Backend",
        icon: <PiStack />,
        desc: "PostgreSQL, MongoDB, ExpressJs, DrizzleORM, PrismaORM",
        color: "text-red-400",
    },
    {
        name: "Tools & Technologies",
        icon: <PiGear />,
        desc: "Git, Agile Development, UI/UX Design, Debugging, ABAC/RBAC, DAL",
        color: "text-violet-400",
    },
    {
        name: "Soft Skills",
        icon: <PiFlag />,
        desc: "Communication, Critical Thinking, Analytical Skills, Problem Solving, Collaboration",
        color: "text-green-400",
    },
]
