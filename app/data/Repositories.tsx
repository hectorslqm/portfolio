import { Tags } from "@/app/data/Tags";

export type RepositoriesType = {
    title: string;
    description: string;
    tags: (keyof typeof Tags)[];
    type: "public" | "private";
    url: string;
}[];

export const Repositories : RepositoriesType = [
    {
        title: "Portfolio",
        description: "This website I made to show my profile. I used with NextJS, Typescript and Tailwind",
        tags: ["NextJS", "Tailwind", "TypeScript", "Clickup"],
        url: "https://github.com/hectorslqm/portfolio",
        type: "public"
    },
    {
        title: "Users API",
        description:"This API is a simple CRUD API built using Node.js and Express.js. The API is used to perform CRUD operations on a MongoDB database",
        tags: ["JavaScript", "CSS", "HTML", "Express"],
        url: "https://github.com/hectorslqm/users-API",
        type: "public"
    },
    {
        title: "Authentication Playground",
        description: "A simple authentication system using NodeJS, MongoDB, Express, JWT and BCrypt",
        tags: ["NodeJS", "MongoDB", "Express", "JavaScript"],
        url: "https://github.com/hectorslqm/auth-playground",
        type: "public"
    },
    {
        title: "Basic Express API",
        description: "An Express API with basic CRUD operations with no database",
        url: "https://github.com/hectorslqm/Basic-Express-API",
        tags: ["NodeJS", "Express", "JavaScript"],
        type: "public"
    },
    {
        title: "TAILWIND SAMPLES",
        description: "A playground project to show how Tailwind works",
        url: "https://github.com/hectorslqm/tailwind-samples",
        tags: ["NextJS","Tailwind", "HTML", "CSS", "TypeScript"],
        type: "public"
    },
    {
        title: "Custom ORM",
        description: "An ORM made with Python, that can connect to PostgreSQL and SQLServer",
        url: "https://github.com/hectorslqm/PGO_PYO_ORM",
        tags: ["Python", "PostgreSQL", "SQLServer"],
        type: "public"
    },
    {
        title: "Configure WSL",
        description: "I just this project to configure my entire WSL Environment with bash scripts",
        url: "https://github.com/hectorslqm/configureWSL",
        tags: ["Bash", "Linux"],
        type: "public"
    },
    {
        title: "UDP Listener",
        description: "This script creates multiple threads to listen to UDP packets, decodes them and prints them",
        url: "https://github.com/hectorslqm/udpListener",
        tags: ["Python"],
        type: "public"
    }
] 