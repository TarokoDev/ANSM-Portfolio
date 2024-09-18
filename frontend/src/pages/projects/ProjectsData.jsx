const data = [
    {
        title: "VisualAlgoFlow",
        shortSummary:
            "An interactive platform that visualizes algorithms like Binary Search and Two Pointers.",
        summary: `VisualAlgoFlow is designed to help users understand fundamental algorithms through visualizations. It showcases the step-by-step process of algorithms such as Binary Search, Two Pointers, and more, making complex concepts more intuitive. The platform is built with a focus on providing clear, interactive experiences, enabling users to follow algorithmic logic in real-time.`,
        keyFeatures: [
            <strong>Algorithm Visualizations</strong>,
            <>
                Visualize core algorithms like Binary Search and Two Pointers,
                with step-by-step explanations to enhance learning.
            </>,
            <strong>Interactive Controls</strong>,
            <>
                Users can manipulate the input values and see how changes affect
                the algorithm in real-time.
            </>,
            <strong>Responsive Design</strong>,
            <>
                Optimized for both mobile and web browsers, ensuring a seamless
                experience across devices.
            </>,
            <strong>Comprehensive Explanations</strong>,
            <>
                Detailed descriptions accompany each visualization, breaking
                down the logic behind every step of the algorithm.
            </>,
            <strong>Multiple Algorithms</strong>,
            <>
                Explore a range of fundamental algorithms including Binary
                Search, Two Pointers, and more, with plans to expand the
                library.
            </>,
        ],
        techStack: [
            <strong>Frontend</strong>,
            "React, Typescript, HTML, JavaScript, Tailwind CSS, Headless UI, HeroIcons, Vite",
            "",
            <strong>CI/CD</strong>,
            "GitHub, Netlify",
            "",
            <strong>Additional Tools</strong>,
            "Chrome Developer Tools, XCode Simulator, Visual Studio Code",
        ],
        link: "https://visualalgoflow.netlify.app",
    },

    {
        title: "TarokoTodo",
        shortSummary:
            "A dynamic todo app with score tracking and localStorage support.",
        summary: `This todo app is designed to practice core React concepts and Fundamentals of HTML/CSS/javascript, such as component architecture, state management with hooks, and the use of localStorage for persistent data. It includes features like score tracking for completed tasks, input limitations, and an info page, providing a well-rounded user experience.`,
        keyFeatures: [
            <strong>Todo Management</strong>,
            <>Add, complete, and delete todos to keep track of your tasks.</>,
            <strong>Score Tracking</strong>,
            <>
                Keep track of completed tasks with a score system to encourage
                productivity.
            </>,
            <strong>LocalStorage Persistence</strong>,
            <>
                All todos and scores are saved to localStorage to retain state
                across browser sessions.
            </>,
            <strong>Input Limitation</strong>,
            <>
                Prevent adding more than a set limit of todos and handle input
                dynamically.
            </>,
            <strong>Designed for Mobile and Web Browsers</strong>,
            <>
                Optimized for both mobile and web browsers, ensuring a
                responsive experience across devices. Dynamically manage input
                limitations, including preventing more than a set limit of
                todos.
            </>,
            <strong>Info Page</strong>,
            <>
                Display additional information and links to the creator's
                portfolio and development updates via an integrated info page.
            </>,
        ],
        techStack: [
            <strong>Frontend</strong>,
            "React, HTML, Tailwind CSS, JavaScript, Next.JS, localStorage",
            "",
            <strong>CI/CD</strong>,
            "GitHub, Netlify",
            "",
            <strong>Additional Tools</strong>,
            "XCode iOS Simulator, Chrome Developer Tools",
        ],
        link: "https://tarokotodo.netlify.app",
    },
    {
        title: "BudgetMaster",
        shortSummary: "Take control of your finances with BudgetMaster",
        summary: `Take control of your finances with BudgetMaster, the all-in-one app designed to help you manage your money effortlessly. Whether you're budgeting for groceries, tracking your spending, or planning for future expenses, BudgetMaster provides the tools you need to stay on top of your finances. Perfect for individuals, families, or anyone looking to improve their financial health.`,
        keyFeatures: [
            <strong>Transaction Tracking</strong>,
            <>Log and categorize income and expenses effortlessly.</>,
            <strong>Budget Management</strong>,
            <>Set and manage budgets, ensuring spending stays within limits.</>,
            <strong>Inflow/Outflow Differentiation</strong>,
            <>
                Automatically handle and present inflow and outflow
                transactions.
            </>,
            <strong>Date Grouping</strong>,
            <>
                View transactions grouped by date for a clear financial
                timeline.
            </>,
            <strong>Editing and Deleting Transactions</strong>,
            <>
                Easily update or remove transactions with warnings to prevent
                accidental deletions.
            </>,
        ],
        techStack: [
            <strong>Frontend</strong>,
            "React, HTML, CSS, JavaScript, Vite",
            "",
            <strong>Backend</strong>,
            "Node.js, Express, MongoDB, Axios",
            "",
            <strong>CI/CD</strong>,
            "GitHub, Netlify, Render",
            "",
            <strong>Testing</strong>,
            "Cypress",
            "",
            <strong>Security</strong>,
            "JSON Web Tokens (JWT), Bcrypt",
            "",
            <strong>Additional Tools</strong>,
            "XCode iOS Simulator, Chrome Developer Tools",
        ],
        link: "https://budgetmasterdev.netlify.app",
    },
    {
        title: "You Are Broke!",
        shortSummary:
            "Streamline personal finance management with You Are Broke! across mobile and web.",
        summary: `You Are Broke! (YAB) is a comprehensive finance tracker and budgeting management application designed to streamline personal financial management across both mobile and web platforms. The app offers seamless account registration, detailed finance tracking, and efficient budget allocation, empowering users to gain full control over their finances.`,
        keyFeatures: [
            <strong>Cross-Platform Accessibility</strong>,
            <>
                Developed for both mobile and web, ensuring users can manage
                their finances on-the-go or from their desktop.
            </>,
            <strong>Secure Data Management</strong>,
            <>
                Incorporates hashed user data storage and JSON Web Tokens (JWT)
                for secure authentication and data protection.
            </>,
            <strong>Optimized Performance</strong>,
            <>
                Utilizes Vite for fast development and efficient building
                processes.
            </>,
            <strong>Continuous Integration and Deployment</strong>,
            <>
                Employs GitHub, Netlify, and Render for rapid CI/CD pipelines,
                ensuring reliable and up-to-date deployments.
            </>,
            <strong>Robust Tech Stack</strong>,
            <>
                Built with MongoDB, Express, React, Node.js, and Vite,
                leveraging the strengths of each technology for a cohesive user
                experience.
            </>,
        ],
        techStack: [
            <strong>Frontend</strong>,
            "React, HTML, CSS, JavaScript, Vite",
            "",
            <strong>Backend</strong>,
            "Node.js, Express, MongoDB, Axios",
            "",
            <strong>CI/CD</strong>,
            "GitHub, Netlify, Render",
            "",
            <strong>Testing</strong>,
            "Cypress",
            "",
            <strong>Security</strong>,
            "JSON Web Tokens (JWT), Bcrypt",
            "",
            <strong>Additional Tools</strong>,
            "XCode iOS Simulator, Chrome Developer Tools",
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
            <strong>Efficient Delivery Coordination</strong>,
            <>
                Streamlines delivery processes for hospitals, enhancing
                operational efficiency.
            </>,
            <strong>User-Friendly Interface</strong>,
            <>
                Designed with a focus on usability for both mobile and web
                platforms.
            </>,
            <strong>Real-Time Tracking</strong>,
            <>
                Allows for real-time tracking of deliveries, improving
                transparency and accountability.
            </>,
            <strong>Secure Data Handling</strong>,
            <>
                Implements robust data security measures to protect sensitive
                information.
            </>,
            <strong>Seamless Integration</strong>,
            <>
                Integrates with existing hospital systems for smooth operation.
            </>,
        ],
        techStack: [
            <strong>Frontend</strong>,
            "React, HTML, CSS, JavaScript, TailwindCSS",
            "",
            <strong>Backend</strong>,
            "Node.js, Express, MongoDB, RESTful API",
            "",
            <strong>CI/CD</strong>,
            "GitHub, Netlify, Render",
            "",
            <strong>Testing</strong>,
            "Manual Testing",
            "",
            <strong>Security</strong>,
            "JSON Web Tokens (JWT), Bcrypt",
            "",
            <strong>Additional Tools</strong>,
            "XCode iOS Simulator, Chrome Developer Tools",
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
            <strong>Custom Movie Database</strong>,
            <>
                Personalized movie tracking and exploring system tailored for
                Jason Statham movies.
            </>,
            <strong>Effortless Search</strong>,
            <>Easy search functionality to find movies quickly.</>,
            <strong>Detailed Movie Views</strong>,
            <>
                Provides detailed views of each movie including ratings and
                reviews.
            </>,
            <strong>One-Click Download Request</strong>,
            <>Allows users to request movie downloads with a single click.</>,
            <strong>Designed for iOS</strong>,
            <>Optimized for iOS devices using React Native and Expo.</>,
        ],
        techStack: [
            <strong>Frontend</strong>,
            "React Native, Expo, JavaScript",
            "",
            <strong>Additional Tools</strong>,
            "TMDB API, XCode iOS Simulator, Chrome Developer Tools",
        ],
        link: "Work in progress",
    },
    {
        title: "Portfolio",
        shortSummary:
            "Explore my journey and showcase of skills in this interactive portfolio.",
        summary: "Portfoliooooception? Explore my Journey.",
        keyFeatures: [
            <strong>Showcase of Skills</strong>,
            <>
                Highlights various projects and skills acquired over the years.
            </>,
            <strong>Responsive Design</strong>,
            <>Ensures optimal viewing experience across different devices.</>,
            <strong>Interactive UI</strong>,
            <>Engages users with interactive elements and animations.</>,
            <strong>Project Portfolio</strong>,
            <>Detailed overview of past and current projects.</>,
            <strong>Built with Modern Technologies</strong>,
            <>
                Utilizes React, HTML, CSS, JavaScript, and Vite for a robust and
                modern web application.
            </>,
        ],
        techStack: [
            <strong>Frontend</strong>,
            "React, HTML, CSS, JavaScript",
            "",
            <strong>CI/CD</strong>,
            "GitHub, Netlify, Render",
            "",
            <strong>Additional Tools</strong>,
            "XCode iOS Simulator, Chrome Developer Tools",
        ],
        link: "https://austinmiranda.netlify.app",
    },
];

export default data;
