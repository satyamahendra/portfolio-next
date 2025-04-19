import seeveeImage from "@/assets/projects/seevee-ss.png"
import {Project} from "./projects.type"

export const projectsItems: Project[] = [
    {
        title: "Seevee AI Powered Resume Builder",
        desc: "",
        bgColor: "bg-[#F4F4F5]",
        image: seeveeImage,
        features: ["Generate Resume", "Resume Editor", "Downloadable Resume", "Admin Panel", "Credit System", "Self Hosted"],
        techstack: ["NextJS", "AuthJs", "Shadcn UI", "TailwindCSS", "PostgreSQL", "DrizzleORM", "Jagoan Hosting"],
        link: "https://seevee.svtyv.com/",
    },
    // {
    //     title: "Content Management System",
    //     desc: "",
    //     bgColor: "bg-black",
    //     image: cmsImage,
    //     features: ["Role Based", "Authentication", "Server Actions", "Dashboard", "Responsive"],
    //     techstack: ["NextJS", "Lucia Auth", "Shadcn UI", "PostgreSQL", "TailwindCSS"],
    // },
    // {
    //     title: "Task Scheduler",
    //     desc: "",
    //     bgColor: "bg-gray-100",
    //     image: taskImage,
    //     features: ["Scheduling System", "Dashboard", "Marking System", "Event Reminder", "Responsive"],
    //     techstack: ["ReactJS", "TailwindCSS", "React Router", "Capacitor"],
    // },
    // {
    //     title: "Ecommerce Clothing Store",
    //     desc: "",
    //     bgColor: "bg-white",
    //     image: ecomImage,
    //     features: ["Cart System", "Product Customization", "Responsive"],
    //     techstack: ["ReactJS", "TailwindCSS", "React Router"],
    // },
]
