import { StaticImageData } from "next/image";

export interface Project {
    title: string;
    desc: string;
    bgColor: string;
    image: StaticImageData;
    features: string[]
    techstack: string[]
}