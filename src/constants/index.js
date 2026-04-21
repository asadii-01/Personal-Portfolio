export const myProjects = [
  {
    id: 1,
    title: "DocSense: AI-Powered Corporate Policy Assistant",
    description:
      "A full-stack Retrieval-Augmented Generation (RAG) application that enables users to query complex corporate documents in plain English and receive accurate, source-cited answers.",
    subDescription: [
      "Engineered a robust RAG pipeline using FastAPI, Groq's Llama 3.1 8B model, and ChromaDB for efficient vector storage and semantic search.",
      "Built a modern, responsive frontend utilizing Next.js 16, React 19, and Tailwind CSS v4 to deliver a conversational interface with an integrated PDF viewer.",
      "Implemented conversational memory and relevance confidence scoring using sentence-transformers (all-MiniLM-L6-v2) for context-aware, highly accurate responses.",
      "Secured the platform with JWT authentication, Argon2 password hashing, and SQLite to enable safe, multi-organization document management and session isolation.",
    ],
    href: "https://github.com/asadii-01/DocSense",
    image: "/assets/projects/docSense.jpg",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 3,
        name: "ChromaDB",
        path: "/assets/logos/chromadb.svg",
      },
      {
        id: 4,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
    ],
  },

  {
    id: 2,
    title: "SocraticCanvas: AI Generative Debate Platform",
    description:
      "An interactive educational platform that transforms passive learning into real-time intellectual debates using distinct AI personas and automated evaluation.",
    subDescription: [
      "Architected a FastAPI backend integrating Groq's Llama 3.3 70B to power dynamic historical personas and a specialized three-judge AI evaluation system.",
      "Implemented Server-Sent Events (SSE) for real-time AI response streaming, coupled with Kokoro TTS and Web Speech API for seamless voice I/O.",
      "Led end-to-end development and deployment, connecting a Next.js frontend with SQLite and JWT authentication to securely manage users and debate history.",
      "Engineered the automated generation of personalized 'Gap Reports' to provide students with actionable feedback on logic, evidence, and rhetoric.",
    ],
    href: "https://gen-ai-hackathon-sigma.vercel.app/",
    image: "/assets/projects/socratic-canvas.webp",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 3,
        name: "Groq",
        path: "/assets/logos/groq.svg",
      },
      {
        id: 4,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
    ],
  },

  {
    id: 3,
    title: "SubFlow: Subscription Management SaaS",
    description:
      "A full-stack SaaS dashboard designed to help freelancers centralize, track, and analyze their software subscription expenses and client billing.",
    subDescription: [
      "Developed a high-performance frontend using Next.js 14 (App Router), TypeScript, and Tailwind CSS to deliver an intuitive user dashboard.",
      "Built a secure backend API with Node.js, Express, and MongoDB, implementing JWT authentication to protect user data and sessions.",
      "Engineered visual analytics to track ongoing spend and implemented an automated alert system to notify users of upcoming subscription renewals.",
      "Created a client-mapping feature to tie tool expenses to specific projects for profitability tracking, alongside an integrated invoice storage hub.",
    ],
    href: "https://subflow-frontend.vercel.app/",
    image: "/assets/projects/subflow.webp",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Express.Js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Browser Fingerprinting Application",
    description:
      "A client-server application designed to generate and analyze unique browser fingerprints for user identification and tracking purposes.",
    subDescription: [
      "Developed a client-side application using JavaScript to collect browser attributes and generate unique fingerprints.",
      "Implemented a server-side application with Node.js and Express to receive, process, and store fingerprint data.",
      "Utilized Web APIs and JavaScript libraries to extract browser characteristics such as user agent, screen resolution, and installed plugins.",
      "Utilized MongoDB for efficient data storage and retrieval.",
    ],
    href: "https://fingerprint-client-test.netlify.app/",
    image: "/assets/projects/fingerprint-app.jpeg",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },

  {
    id: 5,
    title: "TuneItIn - Web-based Music Player",
    description:
      "A fully functional web music player that allows users to stream and manage their music collections online with cloud storage support.",
    subDescription: [
      "Built a responsive frontend using React and Vite, delivering a smooth and intuitive user experience.",
      "Integrated Supabase bucket for efficient storage of music tracks and images.",
      "Optimized PostgreSQL database with PL/pgSQL functions to enhance performance and data retrieval.",
      "Implemented playlist management and playback controls to mimic standard music player features.",
    ],
    href: "https://tune-it-in.vercel.app/",
    image: "/assets/projects/music-player.jpeg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
    ],
  },

  {
    id: 6,
    title: "SocialConnect – Real-Time Social Media Platform",
    description:
      "A full-stack social media application enabling users to create multimedia posts, interact in real-time through likes and comments, and build a social network with friend requests.",
    subDescription: [
      "Developed with a Node.js, Express.js and MongoDB backend, ensuring scalability and performance.",
      "Implemented secure JWT-based authentication for user login and registration.",
      "Integrated real-time interactions using WebSockets for live updates.",
      "Utilized Cloudinary for seamless image uploads and storage.",
      "Designed a responsive and accessible frontend to enhance user experience.",
    ],
    href: "https://github.com/asadii-01/social-connect",
    image: "/assets/projects/social-connect.jpeg",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Cloudinary",
        path: "/assets/logos/cloudinary.svg",
      },
    ],
  },

  {
    id: 7,
    title: "Smart Waste Management System (WMS)",
    description:
      "A full-stack web application designed to streamline waste collection and disposal operations, enhancing efficiency and sustainability.",
    subDescription: [
      "Developed with a Next.js frontend and Node.js backend, ensuring a seamless user experience and robust performance.",
      "Implemented real-time data processing and analytics to monitor waste levels and optimize collection schedules.",
      "Integrated a MrSQl database for reliable data storage and retrieval.",
      "Incorporated authentication and authorization mechanisms to secure user data and access.",
    ],
    href: "https://github.com/asadii-01/WMS",
    image: "/assets/projects/wms.jpeg",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/asadii-01",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/asad-tq/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+923036048225",
    icon: "/assets/socials/whatsapp.svg",
  },
];

export const experiences = [
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2021-Present",
    contents: [
      "Started freelancing by developing and managing several Shopify stores, focusing on e-commerce functionality and user experience.",
      "Completed multiple small-scale web projects for clients, delivering tailored solutions while continuously expanding technical skills through self-driven learning.",
      "Developed a small roll-a-ball game using Unity to explore game development fundamentals and enhance programming versatility.",
      "Designed and built a Point of Sale (POS) system using Electron.js, integrating desktop application capabilities with web technologies for efficient retail management.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
  {
    title: "BSCS Student",
    job: "University of Gujrat",
    date: "2022-Present",
    contents: [
      "Completed a Bachelor’s degree in Computer Science, gaining a strong foundation in software development, algorithms, and systems design.",
      "Studied key subjects including data structures, databases, computer networks, and web technologies.",
      "Undertook practical projects and coursework that enhanced problem-solving skills and hands-on experience with programming languages and frameworks.",
      "Collaborated in team-based assignments to develop applications, strengthening communication and project management abilities.",
    ],
  },
  {
    title: "Web Developer Intern",
    job: "DevZone",
    date: "July 2025 - Aug 2025",
    contents: [
      "Designed and developed frontend business promotion landing pages for three clients, enhancing their online presence and user engagement:",
      "✅ Created responsive, visually appealing landing pages for Starling Peak, Remit Milky, and Royal National College using modern web technologies.",
      "✅ Ensured cross-browser compatibility and optimized page load times to improve user experience and SEO.",
      "Developed a browser fingerprinting tool to enhance client security and user tracking capabilities:",
      "✅ Implemented unique browser identification methods to support client analytics and fraud prevention efforts.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    job: "Arch Technologies",
    date: "July 2025 - Aug 2025",
    contents: [
      "Developed full-stack web applications showcasing diverse functionalities and modern technologies:",
      "✅ Built a web-based music player with cloud storage integration for music and images, optimizing PostgreSQL databases with PL/pgSQL for high performance.",
      "✅ Created a social media platform featuring real-time updates using WebSockets to deliver seamless live interactions.",
      "✅ Designed a 3D personal portfolio leveraging Three.js, React, Vite, and WebAPI to create an interactive and visually immersive user experience.",
      "✅ Developed a task management (to-do) application focusing on usability and responsive design for enhanced productivity.",
    ],
  },
];

export const reviews = [
  {
    name: "Ayesha",
    username: "@ayesha",
    body: "The projects demonstrate a strong grasp of modern web technologies. Very impressive work!",
    img: "https://robohash.org/ayesha_dev",
  },
  {
    name: "Bilal",
    username: "@bilal_codes",
    body: "Clean and efficient coding with attention to detail. Great job on these projects!",
    img: "https://robohash.org/bilal_codes",
  },
  {
    name: "Sophia",
    username: "@sophia_tech",
    body: "A well-rounded developer with excellent backend and frontend skills. Highly recommend!",
    img: "https://robohash.org/sophia_tech",
  },
  {
    name: "Masood",
    username: "@masood_dev",
    body: "Shows great problem-solving skills and dedication to quality. Inspiring portfolio!",
    img: "https://robohash.org/zain_builder",
  },
  {
    name: "Olivia",
    username: "@olivia_hr",
    body: "Innovative projects with practical applications. Looking forward to seeing more!",
    img: "https://robohash.org/olivia_codes",
  },
  {
    name: "Fatima",
    username: "@fatima_creates",
    body: "Amazing work with clean design and thoughtful implementation. Well done!",
    img: "https://robohash.org/fatima_creates",
  },
  {
    name: "Noah",
    username: "@noah",
    body: "Excellent attention to UI/UX and backend performance. Truly impressive.",
    img: "https://robohash.org/noah_dev",
  },
  {
    name: "Hamza",
    username: "@hamza",
    body: "Clear, efficient, and scalable code with great architecture. Keep it up!",
    img: "https://robohash.org/hamza_codes",
  },
];
