// Central portfolio data — parsed from Sai_Vishnu_Koduri.pdf (resume) including
// all hyperlink annotations extracted from the PDF in document order.

export const profile = {
  name: "Koduri Sai Vishnu",
  firstName: "Koduri",
  lastName: "Sai Vishnu",
  roles: [
    "Software Engineer",
    "Data Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "Competitive Programmer",
  ],
  tagline:
    "Software Engineer building scalable backends and data systems — currently driving Data Engineering at Dexur.",
  summary:
    "I build scalable pipelines with Apache Airflow, Kafka & AWS — reducing manual workflows by 90% and powering real-time analytics for 2700+ US hospitals. Strong foundations in system design, performance optimization and scalable backend engineering, with 2000+ DSA problems solved.",
  phone: "+91 8639814270",
  phoneHref: "tel:+918639814270",
  email: "kodurisaivishnu@gmail.com",
  emailHref: "mailto:kodurisaivishnu@gmail.com",
  github: "https://github.com/kodurisaivishnu",
  linkedin: "https://www.linkedin.com/in/koduri-sai-vishnu-780b2923b/",
  portfolio:
    "https://portfolio-website-git-main-kodurisaivishnu-gmailcoms-projects.vercel.app/",
};

export const stats = [
  { num: "8.83", label: "CGPA / 10" },
  { num: "2000+", label: "DSA problems" },
  { num: "90%", label: "Workflows automated" },
  { num: "2700+", label: "Hospitals indexed" },
];

// Scrolling highlight ticker shown under the hero
export const highlights = [
  "⚙️ Apache Airflow & Kafka Pipelines",
  "☁️ AWS · S3 · Lambda · EC2",
  "🔍 OpenSearch — 2700+ US Hospitals",
  "🏆 Centific Hackathon — Top 250 / 30,000+",
  "💡 2000+ DSA Problems Solved",
  "⭐ GeeksforGeeks 4★ · Top 5.54%",
  "🚀 90% Manual Workflows Automated",
  "🎓 Wharton (UPenn) Certified",
  "🧩 Distributed Systems & System Design",
  "⚡ Spring Boot · Node.js · React",
];

export const about = {
  quickFacts: [
    { icon: "📍", label: "Based in", value: "Telangana, India" },
    { icon: "🎯", label: "Focus", value: "Software & Data Engineering" },
    { icon: "🟢", label: "Status", value: "Open to opportunities" },
    { icon: "🧠", label: "Currently", value: "Scaling healthcare data @ Dexur" },
  ],
  highlights: [
    {
      icon: "⚙️",
      title: "Data Engineering",
      desc: "Airflow DAGs, Kafka streaming & ETL pipelines at scale.",
    },
    {
      icon: "☁️",
      title: "Cloud & Backend",
      desc: "Event-driven systems on AWS S3, Lambda & EC2.",
    },
    {
      icon: "🔍",
      title: "Search & Analytics",
      desc: "OpenSearch indexing for real-time hospital dashboards.",
    },
    {
      icon: "🛡️",
      title: "Security Aware",
      desc: "Web vulnerability assessments with Burp Suite.",
    },
  ],
};

export const experiences = [
  {
    role: "Software Engineer, Data Engineering",
    company: "Dexur",
    mode: "On-site",
    duration: "Aug 2025 – Present",
    cert: null,
    linkedin: "https://www.linkedin.com/in/koduri-sai-vishnu-780b2923b/",
    points: [
      "Built scalable Apache Airflow & Apache Kafka pipelines to process large-scale healthcare datasets, automating 90% of legacy manual workflows via structured DAGs.",
      "Designed an event-driven ingestion system on AWS S3 + Lambda + EC2 for automated client file uploads with rate limiting to prevent server overload.",
      "Optimized batch processing to cut RAM & disk usage under heavy workloads; used Kafka queues for distributed async task execution.",
      "Indexed analytics data for 2700+ US hospitals in OpenSearch, powering real-time dashboards and significantly reducing direct database query load.",
    ],
  },
  {
    role: "Web Developer",
    company: "Syslabs / Xenlabs Services LLP",
    mode: "Remote",
    duration: "Mar 2025 – Jul 2025",
    cert: "https://drive.google.com/file/d/19cf-9vjGUxFDD5NcXLHSWjawiyUEpwI5/view?usp=sharing",
    points: [
      "Built modular HRMS microservices for Orgofin with scalable backend APIs and responsive frontend components to streamline end-to-end HR workflows.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Cyber Help Initiative Foundation",
    mode: "Hybrid",
    duration: "May 2025 – Jun 2025",
    cert: "https://drive.google.com/file/d/1DRxNSUkd_MM9Zdb6Tm1BPgKQD6l5zlkD/view?usp=sharing",
    points: [
      "Conducted web application vulnerability assessments using Burp Suite, identifying XSS, SSRF and DoS attack vectors across controlled testing environments.",
    ],
  },
];

export const skillGroups = [
  {
    icon: "💻",
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C", "SQL"],
  },
  {
    icon: "🧩",
    title: "Frameworks & Libraries",
    items: [
      "Spring Boot",
      "Django",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    items: [
      "Apache Airflow",
      "Apache Kafka",
      "OpenSearch",
      "Apache Superset",
      "Docker",
      "Redis",
      "AWS (S3, EC2, Lambda)",
      "Git & GitHub",
      "Burp Suite",
    ],
  },
  {
    icon: "📚",
    title: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "System Design",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const projects = [
  {
    title: "Email Writer Assistant",
    type: "Chrome Extension",
    icon: "✉️",
    description:
      "A Gmail-integrated Chrome extension that generates contextual, AI-powered email replies via a Spring Boot backend and the Gemini API.",
    tags: ["Spring Boot", "JavaScript", "Gemini API"],
    live: "https://chrome-extention-email-reply-ai.vercel.app/",
    github:
      "https://github.com/kodurisaivishnu/Chrome_Extention_Email_Reply_AI/tree/master/email-writer-ext",
    image: null,
    accent: "from-amber-500 to-pink-500",
  },
  {
    title: "Emotion-Aware Learning Platform",
    type: "Microservices",
    icon: "🎓",
    description:
      "An e-learning platform with authentication, analytics, notifications, video streaming and real-time facial emotion tracking, built on a microservices architecture.",
    tags: ["Node.js", "Flask", "MongoDB", "Docker", "NGINX", "React"],
    live: null,
    github: "https://github.com/kodurisaivishnu/Emotion-Learning-Microservice",
    image: null,
    accent: "from-emerald-500 to-cyan-500",
  },
  {
    title: "AI Virtual Interview System",
    type: "Full-Stack AI",
    icon: "🎤",
    description:
      "A full-stack AI interview platform generating dynamic, domain-specific questions with real-time voice input and persistent session management.",
    tags: ["MERN", "Firebase", "Gemini API", "TypeScript"],
    live: "https://interview-system.onrender.com/",
    github: "https://github.com/kodurisaivishnu/AI-Mocker-Interview",
    image: "/p1_vitual_interview.png",
    accent: "from-indigo-500 to-fuchsia-500",
  },
  {
    title: "Socket Chat Application",
    type: "Real-time · MERN",
    icon: "💬",
    description:
      "A real-time chat application built with Socket.io and the MERN stack, supporting multiple concurrent users with live messaging and presence.",
    tags: ["MERN", "Socket.io", "MongoDB", "Express"],
    live: "https://socket-chat-app-iyex.onrender.com/",
    github: "https://github.com/kodurisaivishnu/Socket-chat-app",
    image: "/p2_chat_app.png",
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "WanderLust — Airbnb Clone",
    type: "Full-Stack Web",
    icon: "🏠",
    description:
      "A full-stack Airbnb-style listings platform with property CRUD, image uploads and reviews, built to sharpen end-to-end web development skills.",
    tags: ["Node.js", "Express", "MongoDB", "EJS"],
    live: null,
    github: "https://github.com/kodurisaivishnu/wanderlust-mern-project-",
    image: "/p4_air_bnb.png",
    accent: "from-rose-500 to-orange-500",
  },
];

export const codingProfiles = [
  {
    name: "GeeksforGeeks",
    detail: "4★ · Rating 1841 · Top 5.54%",
    link: "https://www.geeksforgeeks.org/user/kodurisaxytp/",
  },
  {
    name: "LeetCode",
    detail: "Rating 1582 · Top 17.71%",
    link: "https://leetcode.com/u/ksv-1288/",
  },
  {
    name: "CodeChef",
    detail: "2★ · Rating 1434",
    link: "https://www.codechef.com/users/ksv_1288",
  },
  {
    name: "HackerRank",
    detail: "3★ Problem Solving",
    link: "https://www.hackerrank.com/profile/kodurisaivishnu",
  },
  {
    name: "Codeforces",
    detail: "Competitive Programmer",
    link: "https://codeforces.com/profile/kodurisaivishnu",
  },
];

export const achievements = [
  {
    big: "Top 250",
    label:
      "Centific Premier Hackathon 2.0 — shortlisted out of 30,000+ applicants nationwide for India's premier AI & ML hackathon.",
    cert: "https://drive.google.com/file/d/1ArxDE0WkuLjNsMve_z19OJ4O8uVfa7kV/view?usp=sharing",
  },
  {
    big: "2000+",
    label:
      "DSA problems solved across LeetCode, GeeksforGeeks, Codeforces and CodeChef.",
    cert: null,
  },
  {
    big: "Top 5.54%",
    label: "Global ranking on GeeksforGeeks (4★, rating 1841).",
    cert: null,
  },
  {
    big: "Wharton",
    label: "UPenn — Machine Learning for Business Analytics certified (2024).",
    cert: "https://drive.google.com/file/d/1AS7cYLl2pfhV44oAcqWyvs2f_RbuZkW6/view?usp=sharing",
  },
];

export const education = [
  {
    school: "Rajiv Gandhi University of Knowledge Technologies, Basar",
    degree: "B.Tech, Computer Science & Engineering",
    detail: "May 2026 · Nirmal, Telangana",
    grade: "CGPA: 8.83 / 10.00",
  },
  {
    school: "Pre-University Course (MPC)",
    degree: "Maths, Physics, Chemistry",
    detail: "June 2022",
    grade: "GPA: 9.01 / 10.00",
  },
  {
    school: "ZPHS Girls and Boys, Julapalli",
    degree: "Secondary School Certificate (SSC)",
    detail: "June 2020 · Peddapalli, Telangana",
    grade: "GPA: 10.00 / 10.00",
  },
];

export const certifications = [
  {
    title: "Machine Learning for Business Analytics",
    issuer: "The Wharton School, University of Pennsylvania",
    detail: "with RGUKT Basar & Kakatiya Sandbox · Jul 2024",
    cert: "https://drive.google.com/file/d/1AS7cYLl2pfhV44oAcqWyvs2f_RbuZkW6/view?usp=sharing",
  },
  {
    title: "Organizational Leadership & Innovation Game (OLI)",
    issuer: "The Wharton School, University of Pennsylvania",
    detail: "Leadership & Strategy track · 2024",
    cert: "https://drive.google.com/file/d/1lWk2q49y_I91inhPm1LBwg6Foepsttbu/view?usp=sharing",
  },
];
