import { barco, fidelityinvestments, nucleo } from "../assets/images";
import {
    scratch_app,
    contact,
    css,
    car,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    cucumber,
    mui,
    nextjs,
    nodejs,
    react,
    java,
    playwright,
    c_plusplus,
    selenium,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    task_manager
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: c_plusplus,
        name: "C++",
        type: "Language",
    },
      {
        imageUrl: cucumber,
        name: "Cucumber",
        type: "Testing",
    },
    {
        imageUrl: selenium,
        name: "Selenium",
        type: "Testing",
    },
    {
        imageUrl: playwright,
        name: "Playwright",
        type: "Testing",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "Barco",
        icon: barco,
        iconBg: "#fbc3bc",
        date: "Mar 2023 - May 2023",
        points: [
            "Developed a reporting solution for the WeConnect platform using React for the front-end and Express.js for the back-end.",
            "Optimized RESTful APIs and integrated them with MySQL using Knex.js for efficient data handling.",
            "Utilized Postman for API testing and Git for version control to ensure smooth development and collaboration.",
        ],
    },
    {
        title: "Software Development Engineer in Test (SDET-1)",
        company_name: "Fidelity Investments",
        icon: fidelityinvestments,
        iconBg: "#b7e4c7",
        date: "Oct 2023 - Oct 2024",
        points: [
            "Led automation of functional testing for compliance verification, enhancing efficiency.",
            "Automated the 401(k) plan lifecycle, reducing manual effort and improving accuracy.",
            "Independently executed a POC integrating UI, document automation, and legal workflows for seamless testing.",
            "Developed a comprehensive test strategy, coordinated with cross-functional teams, and managed monthly installations.",
            "Expertise in PRK domain, Agile methodologies, and 401(k) and PEPS products.",
        ],
    },
    {
        title: "Software Development Engineer (SDE-1)",
        company_name: "nucleo",
        icon: nucleo,
        iconBg: "#DCDCDC",
        date: "Oct 2024 - Apr 2025",
        points: [
            "Developing a scalable and responsive user interface for the organization, enabling seamless access for startups and investors",
            "Implemented secure authentication with Google OAuth 2.0 and JWT.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Secured endpoints with Role-Based Access Control (RBAC) and ensured reliability through testing.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Adi-1491',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aditya-singh-209735214/',
    }
];

export const projects = [
    {
        iconUrl: task_manager,
        theme: 'btn-back-green',
        name: 'Task Management Application',
        description: 'Developed a full-stack task manager, enabling users to create, view, update, and delete tasks with due dates and status.',
        link: 'https://github.com/Adi-1491/Task-Manager',
    },
    {
        iconUrl: scratch_app,
        theme: 'btn-back-yellow',
        name: 'Scratch-App',
        description: 'A drag-and-drop visual programming environment inspired by MIT Scratch, allowing users to create animations and interactive programs without writing code.',
        link: 'https://github.com/Adi-1491/Scratch--App',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'AI PR Reviewer',
        description: 'Built an AI assistant to automatically review GitHub PRs using OpenAI and GitHub APIs.',
        link: 'https://github.com/Adi-1491/ai-pr-reviewer',
    },
];