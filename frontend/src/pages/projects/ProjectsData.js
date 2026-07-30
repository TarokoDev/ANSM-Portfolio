const data = [
    {
        title: "QMC — Quote Management System",
        shortSummary:
            "A full-stack quotation system for interior design firms — build, revise, and export client quotes.",
        summary: `I built QMC for a friend who works as an interior designer. Every new client meant rebuilding the same line items by hand in a fresh spreadsheet — slow, easy to get wrong, and impossible to look back on once a price had been edited over. Margins lived in the designer's head rather than in the document, and each round of client haggling quietly destroyed the version before it.

The objective was to turn quoting from a rebuild into a reuse: seed a quote from a master template, adjust the numbers, and export a finished PDF or spreadsheet in minutes instead of an afternoon. Work is organised into folders, categories, and clients, and every client carries its own revision history (R0, R1, ...) so a new round of pricing clones the last one instead of overwriting it — the negotiation trail stays intact.

Cost and selling price are tracked per line item, so profit and margin are computed live on an internal-only Summary tab that the client-facing output never shows. Section, area, and item each carry an inclusion checkbox, letting whole rooms or trades be quoted, held back, or discounted without deleting the work. Numbering is derived from position, so removing an item reflows the rest rather than leaving gaps to fix by hand.

Built with React 19, Express, Prisma, and Supabase (Auth + Postgres), with per-user data scoping so multiple designers can work in the same system without seeing each other's clients. It is currently in UAT with the designer it was built for, and features are still being refined on his feedback.`,
        keyFeatures: [
            {
                title: "Detailed Quote Editor",
                description:
                    "Sections break down into areas of work and line items, each with quantity, unit, cost price, selling price, and profit margin.",
            },
            {
                title: "Revision History & Master Template",
                description:
                    "Every client has independent, persisted revisions cloned from the previous one, plus an org-wide master template to seed new quotes and reset a revision if edits go wrong.",
            },
            {
                title: "PDF & Excel Export",
                description:
                    "Print-styled A4 preview with repeating headers for PDF, and client-side .xlsx generation — both sharing one column contract so output stays consistent.",
            },
            {
                title: "Three-Tier Total Gating",
                description:
                    "Section, area, and line item each carry an inclusion checkbox, so what counts toward totals is controlled at every level. Live numbering reflows automatically when items are deleted.",
            },
            {
                title: "Roles & Admin Dashboard",
                description:
                    "Admin, designer, and demo roles from Supabase app metadata. Admins get a user directory, per-user metrics, a sign-in activity log, and read-only drill-down into any user's quotes.",
            },
            {
                title: "Demo Playground Account",
                description:
                    "A one-click demo login seeds realistic sample data and self-resets on login and logout, so the app can be explored without touching real client data.",
            },
        ],
        techStack: [
            {
                title: "Frontend",
                description:
                    "React 19, TypeScript, Vite, Tailwind CSS v4, DaisyUI, shadcn/ui, react-router-dom, xlsx, Lucide React",
            },
            {
                title: "Backend",
                description:
                    "Node.js, Express 4, TypeScript (ESM), Prisma 6, Zod, jose (JWT/JWKS), RESTful API",
            },
            { title: "Database", description: "Supabase Postgres, Supabase Storage" },
            { title: "Security", description: "Supabase Auth, asymmetric JWT (ES256), per-user data scoping, role-based access control" },
            { title: "CI/CD", description: "GitHub, Netlify, Render" },
            {
                title: "Additional Tools",
                description: "Chrome Developer Tools, XCode iOS Simulator, Visual Studio Code",
            },
        ],
        link: "https://kimchinc-qms-test.netlify.app",
    },

    {
        title: "VisualAlgoFlow",
        shortSummary:
            "An interactive platform that visualizes algorithms like Binary Search and Two Pointers.",
        summary:
            `VisualAlgoFlow is designed to help users understand fundamental algorithms through visualizations. It showcases the step-by-step process of algorithms such as Binary Search, Two Pointers, and more, making complex concepts more intuitive. The platform is built with a focus on providing clear, interactive experiences, enabling users to follow algorithmic logic in real-time.`,
        keyFeatures: [
            {
                title: "Algorithm Visualizations",
                description:
                    "Visualize core algorithms like Binary Search and Two Pointers, with step-by-step explanations to enhance learning.",
            },
            {
                title: "Interactive Controls",
                description:
                    "Users can manipulate the input values and see how changes affect the algorithm in real-time.",
            },
            {
                title: "Responsive Design",
                description:
                    "Optimized for both mobile and web browsers, ensuring a seamless experience across devices.",
            },
            {
                title: "Comprehensive Explanations",
                description:
                    "Detailed descriptions accompany each visualization, breaking down the logic behind every step of the algorithm.",
            },
            {
                title: "Multiple Algorithms",
                description:
                    "Explore a range of fundamental algorithms including Binary Search, Two Pointers, and more, with plans to expand the library.",
            },
        ],
        techStack: [
            {
                title: "Frontend",
                description:
                    "React, Typescript, HTML, JavaScript, Tailwind CSS, Headless UI, HeroIcons, Vite",
            },
            {
                title: "CI/CD",
                description: "GitHub, Netlify",
            },
            {
                title: "Additional Tools",
                description:
                    "Chrome Developer Tools, XCode Simulator, Visual Studio Code",
            },
        ],
        link: "https://visualalgoflow.netlify.app",
    },

    {
        title: "TarokoTodo",
        shortSummary:
            "A dynamic todo app with score tracking and localStorage support.",
        summary: `This todo app is designed to practice core React concepts and Fundamentals of HTML/CSS/javascript, such as component architecture, state management with hooks, and the use of localStorage for persistent data. It includes features like score tracking for completed tasks, input limitations, and an info page, providing a well-rounded user experience.`,
        keyFeatures: [
            {
                title: "Todo Management",
                description: "Add, complete, and delete todos to keep track of your tasks.",
            },
            {
                title: "Score Tracking",
                description:
                    "Keep track of completed tasks with a score system to encourage productivity.",
            },
            {
                title: "LocalStorage Persistence",
                description:
                    "All todos and scores are saved to localStorage to retain state across browser sessions.",
            },
            {
                title: "Input Limitation",
                description:
                    "Prevent adding more than a set limit of todos and handle input dynamically.",
            },
            {
                title: "Designed for Mobile and Web Browsers",
                description:
                    "Optimized for both mobile and web browsers, ensuring a responsive experience across devices. Dynamically manage input limitations, including preventing more than a set limit of todos.",
            },
            {
                title: "Info Page",
                description:
                    "Display additional information and links to the creator's portfolio and development updates via an integrated info page.",
            },
        ],
        techStack: [
            { title: "Frontend", description: "React, HTML, Tailwind CSS, JavaScript, Next.JS, localStorage" },
            { title: "CI/CD", description: "GitHub, Netlify" },
            { title: "Additional Tools", description: "XCode iOS Simulator, Chrome Developer Tools" },
        ],
        link: "https://tarokotodo.netlify.app",
    },
    {
        title: "BudgetMaster",
        shortSummary: "Take control of your finances with BudgetMaster",
        summary: `Take control of your finances with BudgetMaster, the all-in-one app designed to help you manage your money effortlessly. Whether you're budgeting for groceries, tracking your spending, or planning for future expenses, BudgetMaster provides the tools you need to stay on top of your finances. Perfect for individuals, families, or anyone looking to improve their financial health.`,
        keyFeatures: [
            { title: "Transaction Tracking", description: "Log and categorize income and expenses effortlessly." },
            { title: "Budget Management", description: "Set and manage budgets, ensuring spending stays within limits." },
            {
                title: "Inflow/Outflow Differentiation",
                description: "Automatically handle and present inflow and outflow transactions.",
            },
            { title: "Date Grouping", description: "View transactions grouped by date for a clear financial timeline." },
            {
                title: "Editing and Deleting Transactions",
                description: "Easily update or remove transactions with warnings to prevent accidental deletions.",
            },
        ],
        techStack: [
            { title: "Frontend", description: "React, HTML, CSS, JavaScript, Vite" },
            { title: "Backend", description: "Node.js, Express, MongoDB, Axios" },
            { title: "CI/CD", description: "GitHub, Netlify, Render" },
            { title: "Testing", description: "Cypress" },
            { title: "Security", description: "JSON Web Tokens (JWT), Bcrypt" },
            { title: "Additional Tools", description: "XCode iOS Simulator, Chrome Developer Tools" },
        ],
        link: "https://budgetmasterdev.netlify.app",
    },
    {
        title: "You Are Broke!",
        shortSummary:
            "Streamline personal finance management with You Are Broke! across mobile and web.",
        summary: `You Are Broke! (YAB) is a comprehensive finance tracker and budgeting management application designed to streamline personal financial management across both mobile and web platforms. The app offers seamless account registration, detailed finance tracking, and efficient budget allocation, empowering users to gain full control over their finances.`,
        keyFeatures: [
            {
                title: "Cross-Platform Accessibility",
                description:
                    "Developed for both mobile and web, ensuring users can manage their finances on-the-go or from their desktop.",
            },
            {
                title: "Secure Data Management",
                description:
                    "Incorporates hashed user data storage and JSON Web Tokens (JWT) for secure authentication and data protection.",
            },
            {
                title: "Optimized Performance",
                description: "Utilizes Vite for fast development and efficient building processes.",
            },
            {
                title: "Continuous Integration and Deployment",
                description:
                    "Employs GitHub, Netlify, and Render for rapid CI/CD pipelines, ensuring reliable and up-to-date deployments.",
            },
            {
                title: "Robust Tech Stack",
                description:
                    "Built with MongoDB, Express, React, Node.js, and Vite, leveraging the strengths of each technology for a cohesive user experience.",
            },
        ],
        techStack: [
            { title: "Frontend", description: "React, HTML, CSS, JavaScript, Vite" },
            { title: "Backend", description: "Node.js, Express, MongoDB, Axios" },
            { title: "CI/CD", description: "GitHub, Netlify, Render" },
            { title: "Testing", description: "Cypress" },
            { title: "Security", description: "JSON Web Tokens (JWT), Bcrypt" },
            { title: "Additional Tools", description: "XCode iOS Simulator, Chrome Developer Tools" },
        ],
        link: "https://youarebroke.netlify.app",
    },
    {
        title: "Kimchinc",
        shortSummary:
            "Coordinate hospital deliveries efficiently with Kimchinc.",
        summary:
            "Kimchinc is a delivery coordination system for Hospitals. Designed for mobile and web platforms.",
        keyFeatures: [
            {
                title: "Efficient Delivery Coordination",
                description: "Streamlines delivery processes for hospitals, enhancing operational efficiency.",
            },
            {
                title: "User-Friendly Interface",
                description: "Designed with a focus on usability for both mobile and web platforms.",
            },
            {
                title: "Real-Time Tracking",
                description: "Allows for real-time tracking of deliveries, improving transparency and accountability.",
            },
            {
                title: "Secure Data Handling",
                description: "Implements robust data security measures to protect sensitive information.",
            },
            {
                title: "Seamless Integration",
                description: "Integrates with existing hospital systems for smooth operation.",
            },
        ],
        techStack: [
            { title: "Frontend", description: "React, HTML, CSS, JavaScript, TailwindCSS" },
            { title: "Backend", description: "Node.js, Express, MongoDB, RESTful API" },
            { title: "CI/CD", description: "GitHub, Netlify, Render" },
            { title: "Testing", description: "Manual Testing" },
            { title: "Security", description: "JSON Web Tokens (JWT), Bcrypt" },
            { title: "Additional Tools", description: "XCode iOS Simulator, Chrome Developer Tools" },
        ],
        link: "https://kimchinc.netlify.app",
    },
    {
        title: "Pop's Picks",
        shortSummary:
            "Effortlessly explore, search, and track Jason Statham movies.",
        summary:
            "Made for my dad, effortlessly explore, search and track Jason Statham movies, and other movies, with detailed views and a one-click download request feature for convenient movie nights. Designed for iOS.",
        keyFeatures: [
            {
                title: "Custom Movie Database",
                description: "Personalized movie tracking and exploring system tailored for Jason Statham movies.",
            },
            { title: "Effortless Search", description: "Easy search functionality to find movies quickly." },
            {
                title: "Detailed Movie Views",
                description: "Provides detailed views of each movie including ratings and reviews.",
            },
            { title: "One-Click Download Request", description: "Allows users to request movie downloads with a single click." },
            { title: "Designed for iOS", description: "Optimized for iOS devices using React Native and Expo." },
        ],
        techStack: [
            { title: "Frontend", description: "React Native, Expo, JavaScript" },
            { title: "Additional Tools", description: "TMDB API, XCode iOS Simulator, Chrome Developer Tools" },
        ],
        link: "Work in progress",
        inProgress: true,
    },
    {
        title: "Portfolio",
        shortSummary:
            "Explore my journey and showcase of skills in this interactive portfolio.",
        summary: "Portfoliooooception? Explore my Journey.",
        keyFeatures: [
            {
                title: "Showcase of Skills",
                description: "Highlights various projects and skills acquired over the years.",
            },
            { title: "Responsive Design", description: "Ensures optimal viewing experience across different devices." },
            { title: "Interactive UI", description: "Engages users with interactive elements and animations." },
            { title: "Project Portfolio", description: "Detailed overview of past and current projects." },
            {
                title: "Built with Modern Technologies",
                description:
                    "Utilizes React, HTML, CSS, JavaScript, and Vite for a robust and modern web application.",
            },
        ],
        techStack: [
            { title: "Frontend", description: "React, HTML, CSS, JavaScript" },
            { title: "CI/CD", description: "GitHub, Netlify, Render" },
            { title: "Additional Tools", description: "XCode iOS Simulator, Chrome Developer Tools" },
        ],
        link: "https://austinmiranda.netlify.app",
    },
];

export default data;
