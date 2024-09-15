import ecomImage from "@/assets/projects/ecom.jpg"
import taskImage from "@/assets/projects/task.jpg"
import cmsImage from "@/assets/projects/cms.jpg"
import { Project } from "./projects.type"

export const projectsItems: Project[] = [
    {
        title: "Content Management System",
        desc: "",
        bgColor: "bg-black",
        image: cmsImage,
        features: ["Role Based", "Authentication", "Server Actions", "Dashboard", "Responsive"],
        techstack: ["NextJS", "Lucia Auth", "Shadcn UI", "PostgreSQL", "TailwindCSS"]
    },
    {
        title: "Task Scheduler",
        desc: "",
        bgColor: "bg-gray-100",
        image: taskImage,
        features: ["Scheduling System", "Dashboard", "Marking System", "Event Reminder", "Responsive"],
        techstack: ["ReactJS", "TailwindCSS", "React Router", "Capacitor"]
    },
    {
        title: "Ecommerce Clothing Store",
        desc: "",
        bgColor: "bg-white",
        image: ecomImage,
        features: ["Cart System", "Product Customization", "Responsive"],
        techstack: ["ReactJS", "TailwindCSS", "React Router"]
    },
]