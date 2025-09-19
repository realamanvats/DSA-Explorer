// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Code, 
//   Palette, 
//   Zap, 
//   Globe, 
//   Smartphone, 
//   Monitor,
//   ChevronRight,
//   ExternalLink,
//   HelpCircle,
//   CheckCircle,
//   ChevronDown,
//   ChevronUp,
//   Layers,
//   Database,
//   Shield,
//   Cpu,
//   Settings,
//   BookOpen,
//   Target,
//   Award,
//   Users,
//   TrendingUp
// } from 'lucide-react';

// const About: React.FC = () => {
//   const [expandedTech, setExpandedTech] = useState<string | null>(null);
//   const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

//   const technologies = [
//     {
//       id: "react",
//       category: "Frontend Framework",
//       name: "React 18",
//       version: "^18.3.1",
//       description: "Modern React with hooks, concurrent features, and automatic batching",
//       icon: Code,
//       color: "from-blue-500 to-cyan-500",
//       whyChosen: "React provides excellent component reusability, virtual DOM for performance, and a rich ecosystem. React 18's concurrent features help with smooth animations during algorithm visualizations.",
//       whereUsed: [
//         "Component-based architecture for all UI elements",
//         "State management for algorithm visualizations",
//         "Interactive controls and user interfaces",
//         "Real-time updates during sorting/searching animations"
//       ],
//       benefits: [
//         "Virtual DOM ensures smooth performance during heavy animations",
//         "Component reusability reduces code duplication",
//         "Large community support and extensive documentation",
//         "Excellent developer tools for debugging"
//       ],
//       alternatives: "Vue.js, Angular, Svelte",
//       learningCurve: "Medium - requires understanding of JSX and component lifecycle"
//     },
//     {
//       id: "typescript",
//       category: "Programming Language",
//       name: "TypeScript",
//       version: "^5.5.3",
//       description: "Typed superset of JavaScript providing compile-time type checking",
//       icon: Code,
//       color: "from-blue-600 to-indigo-600",
//       whyChosen: "TypeScript prevents runtime errors, improves code maintainability, and provides better IDE support with autocomplete and refactoring capabilities.",
//       whereUsed: [
//         "All component props and state typing",
//         "Algorithm implementation with proper interfaces",
//         "API response typing and data structures",
//         "Custom hooks and utility functions"
//       ],
//       benefits: [
//         "Catches errors at compile time, reducing bugs",
//         "Better IDE support with intelligent autocomplete",
//         "Improved code documentation through types",
//         "Easier refactoring and maintenance"
//       ],
//       alternatives: "JavaScript, Flow, ReScript",
//       learningCurve: "Medium - requires understanding of type systems"
//     },
//     {
//       id: "vite",
//       category: "Build Tool",
//       name: "Vite",
//       version: "^5.4.2",
//       description: "Next-generation frontend build tool with lightning-fast HMR",
//       icon: Zap,
//       color: "from-yellow-500 to-orange-500",
//       whyChosen: "Vite offers extremely fast development server startup, instant hot module replacement, and optimized production builds using Rollup.",
//       whereUsed: [
//         "Development server with hot reload",
//         "Production build optimization",
//         "Asset bundling and code splitting",
//         "TypeScript compilation and processing"
//       ],
//       benefits: [
//         "Sub-second server startup time",
//         "Instant hot module replacement",
//         "Optimized production builds",
//         "Native ES modules support"
//       ],
//       alternatives: "Create React App, Webpack, Parcel",
//       learningCurve: "Low - minimal configuration required"
//     },
//     {
//       id: "tailwind",
//       category: "CSS Framework",
//       name: "Tailwind CSS",
//       version: "^3.4.1",
//       description: "Utility-first CSS framework for rapid UI development",
//       icon: Palette,
//       color: "from-teal-500 to-green-500",
//       whyChosen: "Tailwind enables rapid prototyping, consistent design systems, and smaller CSS bundles through utility classes and purging unused styles.",
//       whereUsed: [
//         "All component styling and layouts",
//         "Responsive design breakpoints",
//         "Dark mode implementation",
//         "Animation and transition classes"
//       ],
//       benefits: [
//         "Rapid development with utility classes",
//         "Consistent design system",
//         "Smaller CSS bundle sizes",
//         "Easy responsive design"
//       ],
//       alternatives: "Bootstrap, Material-UI, Chakra UI",
//       learningCurve: "Low to Medium - requires learning utility class names"
//     },
//     {
//       id: "framer-motion",
//       category: "Animation Library",
//       name: "Framer Motion",
//       version: "^12.23.12",
//       description: "Production-ready motion library for React with declarative animations",
//       icon: Zap,
//       color: "from-purple-500 to-pink-500",
//       whyChosen: "Framer Motion provides smooth, performant animations with simple declarative syntax, perfect for algorithm visualizations and UI transitions.",
//       whereUsed: [
//         "Algorithm step-by-step animations",
//         "Page transitions and route changes",
//         "Interactive hover effects and micro-interactions",
//         "Loading states and progress indicators"
//       ],
//       benefits: [
//         "Declarative animation syntax",
//         "Excellent performance with 60fps animations",
//         "Built-in gesture support",
//         "Server-side rendering compatibility"
//       ],
//       alternatives: "React Spring, React Transition Group, Lottie",
//       learningCurve: "Medium - requires understanding of animation principles"
//     },
//     {
//       id: "react-router",
//       category: "Routing",
//       name: "React Router DOM",
//       version: "^7.7.1",
//       description: "Declarative routing library for React applications",
//       icon: Globe,
//       color: "from-red-500 to-rose-500",
//       whyChosen: "React Router provides client-side routing with nested routes, code splitting, and excellent TypeScript support for navigation.",
//       whereUsed: [
//         "Navigation between different sections",
//         "Dynamic routing for algorithm topics",
//         "Protected routes and route guards",
//         "URL parameter handling for quiz topics"
//       ],
//       benefits: [
//         "Client-side routing for SPA experience",
//         "Nested routing capabilities",
//         "Code splitting support",
//         "Browser history management"
//       ],
//       alternatives: "Next.js Router, Reach Router, Wouter",
//       learningCurve: "Low to Medium - straightforward API"
//     },
//     {
//       id: "lucide-react",
//       category: "Icon Library",
//       name: "Lucide React",
//       version: "^0.344.0",
//       description: "Beautiful and consistent icon library with 1000+ SVG icons",
//       icon: Target,
//       color: "from-indigo-500 to-blue-500",
//       whyChosen: "Lucide provides consistent, customizable SVG icons that are lightweight, accessible, and perfectly suited for modern web applications.",
//       whereUsed: [
//         "Navigation menu icons",
//         "Feature section illustrations",
//         "Button and action indicators",
//         "Status and feedback icons"
//       ],
//       benefits: [
//         "Lightweight SVG icons",
//         "Consistent design language",
//         "Fully customizable",
//         "Tree-shaking support"
//       ],
//       alternatives: "Heroicons, React Icons, Feather Icons",
//       learningCurve: "Very Low - simple icon components"
//     },
//     {
//       id: "react-hot-toast",
//       category: "Notification System",
//       name: "React Hot Toast",
//       version: "^2.5.2",
//       description: "Lightweight toast notification library with excellent UX",
//       icon: CheckCircle,
//       color: "from-green-500 to-emerald-500",
//       whyChosen: "React Hot Toast provides beautiful, accessible notifications with minimal setup and excellent performance.",
//       whereUsed: [
//         "Success/error feedback for user actions",
//         "Algorithm completion notifications",
//         "Quiz submission confirmations",
//         "Game result announcements"
//       ],
//       benefits: [
//         "Lightweight and performant",
//         "Accessible by default",
//         "Customizable styling",
//         "Promise-based API"
//       ],
//       alternatives: "React Toastify, Sonner, Chakra UI Toast",
//       learningCurve: "Very Low - simple API"
//     }
//   ];

//   const developmentTools = [
//     {
//       name: "ESLint",
//       purpose: "Code linting and quality assurance",
//       benefit: "Maintains code consistency and catches potential bugs"
//     },
//     {
//       name: "PostCSS",
//       purpose: "CSS processing and optimization",
//       benefit: "Enables advanced CSS features and optimizations"
//     },
//     {
//       name: "Autoprefixer",
//       purpose: "Automatic vendor prefix addition",
//       benefit: "Ensures cross-browser CSS compatibility"
//     }
//   ];

//   const interviewQuestions = [
//     {
//       id: "project-overview",
//       category: "Project Overview",
//       questions: [
//         {
//           question: "Can you walk me through your DSA visualization project?",
//           answer: "This is a comprehensive web application built with React and TypeScript that helps users learn Data Structures and Algorithms through interactive visualizations. The project includes sorting algorithms (Bubble, Selection, Insertion, Merge, Quick, Heap), searching algorithms (Linear, Binary), and data structure operations (Stack, Queue). It features step-by-step animations, educational content with multi-language code examples, quiz systems, gamified learning, and algorithm comparison tools. The application is fully responsive with dark/light mode support."
//         },
//         {
//           question: "What was your motivation behind building this project?",
//           answer: "I wanted to create an engaging way to learn algorithms that goes beyond traditional textbook explanations. Many students struggle with understanding how algorithms work internally, so I built interactive visualizations that show step-by-step execution, making complex concepts more accessible. The gamification elements and quiz system add engagement while the comparison tools help users understand when to use different algorithms."
//         },
//         {
//           question: "What makes your project unique compared to other algorithm visualizers?",
//           answer: "My project combines multiple learning approaches: visual animations, educational content, interactive quizzes, games, and comparison tools all in one platform. It supports multiple programming languages, includes complexity analysis, has a modern responsive design with dark mode, and features gamified elements like 'Algorithm Race' and 'Fix the Code' games. The comprehensive nature and production-quality implementation set it apart."
//         }
//       ]
//     },
//     {
//       id: "technical-decisions",
//       category: "Technical Decisions",
//       questions: [
//         {
//           question: "Why did you choose React over other frameworks like Vue or Angular?",
//           answer: "I chose React for several reasons: 1) Component-based architecture allows for excellent reusability, especially important for algorithm visualizations where similar UI patterns repeat. 2) Virtual DOM provides smooth performance during heavy animations. 3) Rich ecosystem with libraries like Framer Motion for animations. 4) Excellent TypeScript support. 5) Large community and extensive documentation. 6) React 18's concurrent features help with smooth user interactions during long-running animations."
//         },
//         {
//           question: "Explain your decision to use TypeScript instead of JavaScript.",
//           answer: "TypeScript was essential for this project because: 1) Algorithm implementations require precise data type handling - TypeScript catches type errors at compile time. 2) Complex state management for visualizations benefits from type safety. 3) Better IDE support with autocomplete helps with development speed. 4) Interface definitions make the code self-documenting. 5) Easier refactoring when adding new algorithms. 6) Prevents runtime errors that could break visualizations mid-execution."
//         },
//         {
//           question: "Why Framer Motion for animations instead of CSS animations or other libraries?",
//           answer: "Framer Motion was ideal because: 1) Declarative syntax makes complex animations easier to manage. 2) Excellent performance with 60fps animations crucial for smooth algorithm visualizations. 3) Built-in gesture support for interactive elements. 4) Easy to coordinate multiple animations (like highlighting comparisons and swaps simultaneously). 5) Great TypeScript support. 6) Handles animation cleanup automatically, preventing memory leaks during repeated algorithm runs."
//         },
//         {
//           question: "How did you handle state management in your application?",
//           answer: "I used React's built-in state management with useState and useEffect hooks, along with custom hooks for complex logic. For the visualization components, I maintained local state for algorithm execution (current step, comparisons, swaps) and used props to communicate with parent components. I avoided external state management libraries like Redux because the application's state is mostly component-local and doesn't require complex global state sharing."
//         }
//       ]
//     },
//     {
//       id: "implementation-challenges",
//       category: "Implementation Challenges",
//       questions: [
//         {
//           question: "What was the most challenging part of implementing the algorithm visualizations?",
//           answer: "The most challenging aspect was creating smooth, step-by-step animations while maintaining algorithm correctness. I had to: 1) Break down algorithms into discrete steps that could be animated. 2) Implement proper timing controls with play/pause/reset functionality. 3) Handle state updates without causing infinite re-renders. 4) Ensure animations remained smooth even with large datasets. 5) Coordinate multiple visual elements (highlighting, swapping, comparing) simultaneously. I solved this using async/await with sleep functions and careful state management."
//         },
//         {
//           question: "How did you implement the drag-and-drop functionality in the 'Fix the Code' game?",
//           answer: "I implemented drag-and-drop using HTML5 Drag and Drop API with React event handlers. The solution involved: 1) Making code blocks draggable with draggable={true}. 2) Handling onDragStart to store the dragged item data. 3) Implementing onDragOver and onDrop on target zones. 4) Managing state to track available blocks and user's arrangement. 5) Adding visual feedback during drag operations. 6) Implementing validation logic to check correct order against the solution. The key was managing state updates properly to reflect UI changes immediately."
//         },
//         {
//           question: "How did you ensure your application is responsive across different devices?",
//           answer: "I used a mobile-first approach with Tailwind CSS: 1) Started with mobile layouts and progressively enhanced for larger screens. 2) Used Tailwind's responsive prefixes (sm:, md:, lg:, xl:) for breakpoint-specific styling. 3) Implemented flexible grid systems that adapt to screen size. 4) Made visualizations scalable by using percentage-based dimensions. 5) Added a collapsible mobile navigation menu. 6) Tested on various devices and adjusted touch targets for mobile usability. 7) Used CSS Grid and Flexbox for flexible layouts."
//         },
//         {
//           question: "How did you implement the dark mode functionality?",
//           answer: "I implemented dark mode using Tailwind CSS's dark mode feature: 1) Configured Tailwind with darkMode: 'class' in the config. 2) Created a custom hook (useDarkMode) that manages theme state and localStorage persistence. 3) Used CSS variables for dynamic color switching. 4) Applied dark: prefixes to all components for dark mode styles. 5) Added system preference detection to set initial theme. 6) Ensured proper contrast ratios for accessibility. 7) Made toast notifications and all interactive elements respect the theme."
//         }
//       ]
//     },
//     {
//       id: "performance-optimization",
//       category: "Performance & Optimization",
//       questions: [
//         {
//           question: "How did you optimize the performance of your algorithm visualizations?",
//           answer: "Several optimization strategies were implemented: 1) Used React.memo for components that don't need frequent re-renders. 2) Implemented proper dependency arrays in useEffect to prevent unnecessary re-runs. 3) Used requestAnimationFrame for smooth animations. 4) Debounced user inputs like speed controls. 5) Lazy loaded components using React.lazy for code splitting. 6) Optimized array operations to minimize memory allocations. 7) Used CSS transforms instead of changing layout properties for animations. 8) Implemented proper cleanup in useEffect to prevent memory leaks."
//         },
//         {
//           question: "How would you handle performance with very large datasets?",
//           answer: "For large datasets, I would implement: 1) Virtualization to render only visible elements. 2) Web Workers for heavy algorithm computations to avoid blocking the UI thread. 3) Pagination or chunking of large arrays. 4) Canvas-based rendering instead of DOM manipulation for better performance. 5) Implement sampling - show representative steps rather than every single operation. 6) Add performance warnings and dataset size limits. 7) Use IndexedDB for caching large datasets. 8) Implement progressive loading with skeleton screens."
//         },
//         {
//           question: "How did you ensure accessibility in your application?",
//           answer: "Accessibility was implemented through: 1) Semantic HTML elements and proper heading hierarchy. 2) ARIA labels and descriptions for interactive elements. 3) Keyboard navigation support for all interactive components. 4) High contrast ratios in both light and dark modes. 5) Screen reader friendly content with descriptive text. 6) Focus management for modal dialogs and navigation. 7) Alternative text for visual elements. 8) Reduced motion preferences for users with vestibular disorders. 9) Proper color coding with additional visual indicators beyond just color."
//         }
//       ]
//     },
//     {
//       id: "testing-deployment",
//       category: "Testing & Deployment",
//       questions: [
//         {
//           question: "How would you test this application?",
//           answer: "I would implement comprehensive testing: 1) Unit tests for algorithm implementations using Jest. 2) Component testing with React Testing Library for UI interactions. 3) Integration tests for complete user flows. 4) Visual regression testing for consistent UI appearance. 5) Performance testing for animation smoothness. 6) Cross-browser testing for compatibility. 7) Accessibility testing with tools like axe-core. 8) User acceptance testing with actual students learning algorithms. 9) Load testing for quiz and game features."
//         },
//         {
//           question: "How would you deploy this application to production?",
//           answer: "For production deployment: 1) Build optimization with Vite for minimal bundle size. 2) Deploy to CDN like Netlify or Vercel for global distribution. 3) Implement CI/CD pipeline with GitHub Actions. 4) Add error monitoring with Sentry. 5) Implement analytics to track user engagement. 6) Set up performance monitoring. 7) Configure proper caching headers. 8) Add security headers and HTTPS. 9) Implement progressive web app features for offline access. 10) Set up automated testing in the deployment pipeline."
//         },
//         {
//           question: "How would you monitor and maintain this application in production?",
//           answer: "Production monitoring would include: 1) Error tracking with Sentry for runtime errors. 2) Performance monitoring with Web Vitals. 3) User analytics to understand feature usage. 4) Uptime monitoring for availability. 5) Bundle size monitoring to prevent bloat. 6) User feedback collection system. 7) A/B testing for feature improvements. 8) Regular dependency updates and security patches. 9) Performance budgets to maintain speed. 10) User session recordings to identify UX issues."
//         }
//       ]
//     },
//     {
//       id: "scalability-future",
//       category: "Scalability & Future Enhancements",
//       questions: [
//         {
//           question: "How would you scale this application to handle more users and content?",
//           answer: "Scaling strategies would include: 1) Implement user authentication and progress tracking with a backend. 2) Add database for storing user progress and quiz results. 3) Implement caching strategies for frequently accessed content. 4) Use CDN for static assets and global distribution. 5) Add more algorithms and data structures based on user demand. 6) Implement collaborative features like sharing visualizations. 7) Add mobile app versions using React Native. 8) Implement real-time features with WebSockets for multiplayer games."
//         },
//         {
//           question: "What additional features would you add to improve the learning experience?",
//           answer: "Future enhancements could include: 1) AI-powered personalized learning paths. 2) Code execution environment for users to test their implementations. 3) Collaborative features for classroom use. 4) Advanced algorithms like graph algorithms, dynamic programming. 5) Integration with coding platforms like LeetCode. 6) Video explanations alongside visualizations. 7) Adaptive difficulty based on user performance. 8) Social features like leaderboards and achievements. 9) Export functionality for presentations. 10) API for educators to integrate into their curricula."
//         },
//         {
//           question: "How would you handle internationalization for global users?",
//           answer: "For internationalization: 1) Implement i18n library like react-i18next. 2) Extract all text strings into translation files. 3) Support RTL languages with proper CSS. 4) Localize number formats and date displays. 5) Translate algorithm explanations and code comments. 6) Consider cultural differences in educational approaches. 7) Implement language detection and switching. 8) Ensure proper font support for different languages. 9) Test with various character sets and text lengths. 10) Provide localized examples and use cases."
//         }
//       ]
//     },
//     {
//       id: "algorithms-concepts",
//       category: "Algorithms & Computer Science Concepts",
//       questions: [
//         {
//           question: "Explain the time complexity analysis you implemented for different algorithms.",
//           answer: "I implemented comprehensive complexity analysis: 1) Time complexity covers best, average, and worst cases for each algorithm. 2) Space complexity analysis including auxiliary space usage. 3) Real-time metrics showing actual comparisons and swaps during execution. 4) Visual representation of how input size affects performance. 5) Comparison tools showing complexity differences side-by-side. For example, Bubble Sort shows O(n²) average case but O(n) best case for nearly sorted arrays, while Merge Sort consistently shows O(n log n) regardless of input."
//         },
//         {
//           question: "How did you ensure the correctness of your algorithm implementations?",
//           answer: "Algorithm correctness was ensured through: 1) Following standard textbook implementations. 2) Testing with various input cases including edge cases (empty arrays, single elements, already sorted, reverse sorted). 3) Comparing outputs with known correct implementations. 4) Implementing invariant checks during execution. 5) Visual verification through step-by-step animations. 6) Unit testing with comprehensive test cases. 7) Peer review of algorithm logic. 8) Testing with different data types and sizes."
//         },
//         {
//           question: "Explain how you implemented the stability concept in sorting algorithms.",
//           answer: "Stability in sorting means equal elements maintain their relative order. I implemented this by: 1) Using proper comparison logic that doesn't swap equal elements unnecessarily. 2) Visual indicators showing original positions of equal elements. 3) Test cases with duplicate values to demonstrate stability. 4) Clear documentation explaining which algorithms are stable (Bubble, Insertion, Merge) vs unstable (Selection, Quick, Heap). 5) Comparison tools highlighting stability as a key differentiator when choosing algorithms."
//         }
//       ]
//     }
//   ];

//   const projectStats = [
//     { icon: Code, label: "Components", value: "25+", description: "Modular React components" },
//     { icon: Zap, label: "Algorithms", value: "15+", description: "Interactive visualizations" },
//     { icon: BookOpen, label: "Languages", value: "4", description: "Code examples provided" },
//     { icon: Users, label: "Quiz Questions", value: "50+", description: "Comprehensive testing" },
//     { icon: Target, label: "Games", value: "3", description: "Gamified learning experiences" },
//     { icon: Award, label: "Topics", value: "8", description: "Major CS concepts covered" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
//       <div className="container mx-auto px-4 py-12">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
//             DSA Explorer: Technical Deep Dive
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             A comprehensive analysis of the technologies, architectural decisions, and implementation 
//             strategies behind this interactive Data Structures and Algorithms learning platform.
//           </p>
//         </motion.div>

//         {/* Project Statistics */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
//             Project Overview
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {projectStats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//                 className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
//               >
//                 <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
//                 <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
//                   {stat.label}
//                 </div>
//                 <div className="text-xs text-gray-500 dark:text-gray-400">
//                   {stat.description}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Technology Stack Deep Dive */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
//             Technology Stack Analysis
//           </h2>
//           <div className="space-y-6">
//             {technologies.map((tech, index) => (
//               <motion.div
//                 key={tech.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 * index }}
//                 className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden"
//               >
//                 <div 
//                   className="p-6 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
//                   onClick={() => setExpandedTech(expandedTech === tech.id ? null : tech.id)}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-4">
//                       <div className={`p-3 bg-gradient-to-r ${tech.color} rounded-xl`}>
//                         <tech.icon className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800 dark:text-white">
//                           {tech.name}
//                         </h3>
//                         <p className="text-sm text-gray-600 dark:text-gray-300">
//                           {tech.category} • Version {tech.version}
//                         </p>
//                         <p className="text-gray-600 dark:text-gray-400 mt-1">
//                           {tech.description}
//                         </p>
//                       </div>
//                     </div>
//                     {expandedTech === tech.id ? (
//                       <ChevronUp className="w-5 h-5 text-gray-500" />
//                     ) : (
//                       <ChevronDown className="w-5 h-5 text-gray-500" />
//                     )}
//                   </div>
//                 </div>

//                 {expandedTech === tech.id && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="px-6 pb-6 border-t border-gray-200/50 dark:border-gray-700/50"
//                   >
//                     <div className="grid md:grid-cols-2 gap-6 mt-6">
//                       <div>
//                         <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
//                           <Target className="w-4 h-4 mr-2 text-blue-600" />
//                           Why We Chose This Technology
//                         </h4>
//                         <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
//                           {tech.whyChosen}
//                         </p>
                        
//                         <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
//                           <Settings className="w-4 h-4 mr-2 text-green-600" />
//                           Where It's Used
//                         </h4>
//                         <ul className="space-y-1">
//                           {tech.whereUsed.map((usage, i) => (
//                             <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
//                               <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                               {usage}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
                      
//                       <div>
//                         <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
//                           <Award className="w-4 h-4 mr-2 text-purple-600" />
//                           Key Benefits
//                         </h4>
//                         <ul className="space-y-1 mb-4">
//                           {tech.benefits.map((benefit, i) => (
//                             <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
//                               <TrendingUp className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
//                               {benefit}
//                             </li>
//                           ))}
//                         </ul>
                        
//                         <div className="space-y-2">
//                           <div>
//                             <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                               Alternatives Considered:
//                             </span>
//                             <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
//                               {tech.alternatives}
//                             </span>
//                           </div>
//                           <div>
//                             <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                               Learning Curve:
//                             </span>
//                             <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
//                               {tech.learningCurve}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Development Tools */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
//             Development Tools & Configuration
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {developmentTools.map((tool, index) => (
//               <motion.div
//                 key={tool.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 * index }}
//                 className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
//               >
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
//                   {tool.name}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
//                   {tool.purpose}
//                 </p>
//                 <div className="flex items-start space-x-2">
//                   <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
//                   <p className="text-gray-600 dark:text-gray-300 text-sm">
//                     {tool.benefit}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Interview Questions */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
//             Interview Preparation Guide
//           </h2>
//           <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
//             Comprehensive questions and detailed answers to help you prepare for technical interviews 
//             about this project. Each answer includes technical depth and practical insights.
//           </p>
          
//           <div className="space-y-6">
//             {interviewQuestions.map((category, categoryIndex) => (
//               <div key={category.id} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
//                 <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-b border-gray-200/50 dark:border-gray-700/50">
//                   <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
//                     <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
//                     {category.category}
//                   </h3>
//                 </div>
                
//                 <div className="p-6 space-y-4">
//                   {category.questions.map((qa, qaIndex) => (
//                     <div key={qaIndex} className="border-l-4 border-blue-500 pl-4">
//                       <div 
//                         className="cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-colors"
//                         onClick={() => setExpandedFaq(expandedFaq === `${category.id}-${qaIndex}` ? null : `${category.id}-${qaIndex}`)}
//                       >
//                         <div className="flex items-start justify-between">
//                           <h4 className="font-semibold text-gray-800 dark:text-white pr-4">
//                             Q: {qa.question}
//                           </h4>
//                           {expandedFaq === `${category.id}-${qaIndex}` ? (
//                             <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
//                           ) : (
//                             <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
//                           )}
//                         </div>
//                       </div>
                      
//                       {expandedFaq === `${category.id}-${qaIndex}` && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="mt-3 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg"
//                         >
//                           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                             <strong className="text-blue-600 dark:text-blue-400">A:</strong> {qa.answer}
//                           </p>
//                         </motion.div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Browser Compatibility & Performance */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
//             Performance & Compatibility
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
//               <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
//                 <Monitor className="w-5 h-5 mr-2 text-green-600" />
//                 Browser Support
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 dark:text-gray-300">Chrome</span>
//                   <span className="text-green-600 font-medium">90+ ✓</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 dark:text-gray-300">Firefox</span>
//                   <span className="text-green-600 font-medium">88+ ✓</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 dark:text-gray-300">Safari</span>
//                   <span className="text-green-600 font-medium">14+ ✓</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 dark:text-gray-300">Edge</span>
//                   <span className="text-green-600 font-medium">90+ ✓</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
//               <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
//                 <Zap className="w-5 h-5 mr-2 text-yellow-600" />
//                 Performance Metrics
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 dark:text-gray-300">Bundle Size</span>
//                   <span className="text-blue-600 font-medium">~2.1MB</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 dark:text-gray-300">First Load</span>
//                   <span className="text-green-600 font-medium">&lt; 3s</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 dark:text-gray-300">Animation FPS</span>
//                   <span className="text-green-600 font-medium">60 FPS</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 dark:text-gray-300">Lighthouse Score</span>
//                   <span className="text-green-600 font-medium">95+</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Call to Action */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 1.0 }}
//           className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl"
//         >
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Explore the Code?
//           </h2>
//           <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
//             This comprehensive technical overview should prepare you for any interview questions 
//             about the project's architecture, implementation, and design decisions.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
//             >
//               View Source Code
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
//             >
//               Live Demo
//             </motion.button>
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default About;






















import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Zap, 
  Globe, 
  Smartphone, 
  Monitor,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Layers,
  Database,
  Shield,
  Cpu,
  Settings,
  BookOpen,
  Target,
  Award,
  Users,
  TrendingUp,
  Sparkles,
  Brain,
  Rocket,
  CpuIcon,
  Code2,
  GitBranch,
  Puzzle
} from 'lucide-react';

const About: React.FC = () => {
  const [expandedTech, setExpandedTech] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [activeBackground, setActiveBackground] = useState(0);

  // Rotate through background gradients
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground(prev => (prev + 1) % 4);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const backgroundGradients = [
    "bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900",
    "bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900",
    "bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900",
    "bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900"
  ];

  const technologies = [
    {
      id: "react",
      category: "Frontend Framework",
      name: "React 18",
      version: "^18.3.1",
      description: "Modern React with hooks, concurrent features, and automatic batching",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      whyChosen: "React provides excellent component reusability, virtual DOM for performance, and a rich ecosystem. React 18's concurrent features help with smooth animations during algorithm visualizations.",
      whereUsed: [
        "Component-based architecture for all UI elements",
        "State management for algorithm visualizations",
        "Interactive controls and user interfaces",
        "Real-time updates during sorting/searching animations"
      ],
      benefits: [
        "Virtual DOM ensures smooth performance during heavy animations",
        "Component reusability reduces code duplication",
        "Large community support and extensive documentation",
        "Excellent developer tools for debugging"
      ],
      alternatives: "Vue.js, Angular, Svelte",
      learningCurve: "Medium - requires understanding of JSX and component lifecycle"
    },
    {
      id: "typescript",
      category: "Programming Language",
      name: "TypeScript",
      version: "^5.5.3",
      description: "Typed superset of JavaScript providing compile-time type checking",
      icon: Code2,
      color: "from-blue-600 to-indigo-600",
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
      whyChosen: "TypeScript prevents runtime errors, improves code maintainability, and provides better IDE support with autocomplete and refactoring capabilities.",
      whereUsed: [
        "All component props and state typing",
        "Algorithm implementation with proper interfaces",
        "API response typing and data structures",
        "Custom hooks and utility functions"
      ],
      benefits: [
        "Catches errors at compile time, reducing bugs",
        "Better IDE support with intelligent autocomplete",
        "Improved code documentation through types",
        "Easier refactoring and maintenance"
      ],
      alternatives: "JavaScript, Flow, ReScript",
      learningCurve: "Medium - requires understanding of type systems"
    },
    {
      id: "vite",
      category: "Build Tool",
      name: "Vite",
      version: "^5.4.2",
      description: "Next-generation frontend build tool with lightning-fast HMR",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
      whyChosen: "Vite offers extremely fast development server startup, instant hot module replacement, and optimized production builds using Rollup.",
      whereUsed: [
        "Development server with hot reload",
        "Production build optimization",
        "Asset bundling and code splitting",
        "TypeScript compilation and processing"
      ],
      benefits: [
        "Sub-second server startup time",
        "Instant hot module replacement",
        "Optimized production builds",
        "Native ES modules support"
      ],
      alternatives: "Create React App, Webpack, Parcel",
      learningCurve: "Low - minimal configuration required"
    },
    {
      id: "tailwind",
      category: "CSS Framework",
      name: "Tailwind CSS",
      version: "^3.4.1",
      description: "Utility-first CSS framework for rapid UI development",
      icon: Palette,
      color: "from-teal-500 to-green-500",
      gradient: "bg-gradient-to-r from-teal-500 to-green-500",
      whyChosen: "Tailwind enables rapid prototyping, consistent design systems, and smaller CSS bundles through utility classes and purging unused styles.",
      whereUsed: [
        "All component styling and layouts",
        "Responsive design breakpoints",
        "Dark mode implementation",
        "Animation and transition classes"
      ],
      benefits: [
        "Rapid development with utility classes",
        "Consistent design system",
        "Smaller CSS bundle sizes",
        "Easy responsive design"
      ],
      alternatives: "Bootstrap, Material-UI, Chakra UI",
      learningCurve: "Low to Medium - requires learning utility class names"
    },
    {
      id: "framer-motion",
      category: "Animation Library",
      name: "Framer Motion",
      version: "^12.23.12",
      description: "Production-ready motion library for React with declarative animations",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      whyChosen: "Framer Motion provides smooth, performant animations with simple declarative syntax, perfect for algorithm visualizations and UI transitions.",
      whereUsed: [
        "Algorithm step-by-step animations",
        "Page transitions and route changes",
        "Interactive hover effects and micro-interactions",
        "Loading states and progress indicators"
      ],
      benefits: [
        "Declarative animation syntax",
        "Excellent performance with 60fps animations",
        "Built-in gesture support",
        "Server-side rendering compatibility"
      ],
      alternatives: "React Spring, React Transition Group, Lottie",
      learningCurve: "Medium - requires understanding of animation principles"
    },
    {
      id: "react-router",
      category: "Routing",
      name: "React Router DOM",
      version: "^7.7.1",
      description: "Declarative routing library for React applications",
      icon: GitBranch,
      color: "from-red-500 to-rose-500",
      gradient: "bg-gradient-to-r from-red-500 to-rose-500",
      whyChosen: "React Router provides client-side routing with nested routes, code splitting, and excellent TypeScript support for navigation.",
      whereUsed: [
        "Navigation between different sections",
        "Dynamic routing for algorithm topics",
        "Protected routes and route guards",
        "URL parameter handling for quiz topics"
      ],
      benefits: [
        "Client-side routing for SPA experience",
        "Nested routing capabilities",
        "Code splitting support",
        "Browser history management"
      ],
      alternatives: "Next.js Router, Reach Router, Wouter",
      learningCurve: "Low to Medium - straightforward API"
    },
    {
      id: "lucide-react",
      category: "Icon Library",
      name: "Lucide React",
      version: "^0.344.0",
      description: "Beautiful and consistent icon library with 1000+ SVG icons",
      icon: Puzzle,
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-r from-indigo-500 to-blue-500",
      whyChosen: "Lucide provides consistent, customizable SVG icons that are lightweight, accessible, and perfectly suited for modern web applications.",
      whereUsed: [
        "Navigation menu icons",
        "Feature section illustrations",
        "Button and action indicators",
        "Status and feedback icons"
      ],
      benefits: [
        "Lightweight SVG icons",
        "Consistent design language",
        "Fully customizable",
        "Tree-shaking support"
      ],
      alternatives: "Heroicons, React Icons, Feather Icons",
      learningCurve: "Very Low - simple icon components"
    },
    {
      id: "react-hot-toast",
      category: "Notification System",
      name: "React Hot Toast",
      version: "^2.5.2",
      description: "Lightweight toast notification library with excellent UX",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
      whyChosen: "React Hot Toast provides beautiful, accessible notifications with minimal setup and excellent performance.",
      whereUsed: [
        "Success/error feedback for user actions",
        "Algorithm completion notifications",
        "Quiz submission confirmations",
        "Game result announcements"
      ],
      benefits: [
        "Lightweight and performant",
        "Accessible by default",
        "Customizable styling",
        "Promise-based API"
      ],
      alternatives: "React Toastify, Sonner, Chakra UI Toast",
      learningCurve: "Very Low - simple API"
    }
  ];

  const developmentTools = [
    {
      name: "ESLint",
      purpose: "Code linting and quality assurance",
      benefit: "Maintains code consistency and catches potential bugs"
    },
    {
      name: "PostCSS",
      purpose: "CSS processing and optimization",
      benefit: "Enables advanced CSS features and optimizations"
    },
    {
      name: "Autoprefixer",
      purpose: "Automatic vendor prefix addition",
      benefit: "Ensures cross-browser CSS compatibility"
    }
  ];

  const interviewQuestions = [
    {
      id: "project-overview",
      category: "Project Overview",
      questions: [
        {
          question: "Can you walk me through your DSA visualization project?",
          answer: "This is a comprehensive web application built with React and TypeScript that helps users learn Data Structures and Algorithms through interactive visualizations. The project includes sorting algorithms (Bubble, Selection, Insertion, Merge, Quick, Heap), searching algorithms (Linear, Binary), and data structure operations (Stack, Queue). It features step-by-step animations, educational content with multi-language code examples, quiz systems, gamified learning, and algorithm comparison tools. The application is fully responsive with dark/light mode support."
        },
        {
          question: "What was your motivation behind building this project?",
          answer: "I wanted to create an engaging way to learn algorithms that goes beyond traditional textbook explanations. Many students struggle with understanding how algorithms work internally, so I built interactive visualizations that show step-by-step execution, making complex concepts more accessible. The gamification elements and quiz system add engagement while the comparison tools help users understand when to use different algorithms."
        },
        {
          question: "What makes your project unique compared to other algorithm visualizers?",
          answer: "My project combines multiple learning approaches: visual animations, educational content, interactive quizzes, games, and comparison tools all in one platform. It supports multiple programming languages, includes complexity analysis, has a modern responsive design with dark mode, and features gamified elements like 'Algorithm Race' and 'Fix the Code' games. The comprehensive nature and production-quality implementation set it apart."
        }
      ]
    },
    {
      id: "technical-decisions",
      category: "Technical Decisions",
      questions: [
        {
          question: "Why did you choose React over other frameworks like Vue or Angular?",
          answer: "I chose React for several reasons: 1) Component-based architecture allows for excellent reusability, especially important for algorithm visualizations where similar UI patterns repeat. 2) Virtual DOM provides smooth performance during heavy animations. 3) Rich ecosystem with libraries like Framer Motion for animations. 4) Excellent TypeScript support. 5) Large community and extensive documentation. 6) React 18's concurrent features help with smooth user interactions during long-running animations."
        },
        {
          question: "Explain your decision to use TypeScript instead of JavaScript.",
          answer: "TypeScript was essential for this project because: 1) Algorithm implementations require precise data type handling - TypeScript catches type errors at compile time. 2) Complex state management for visualizations benefits from type safety. 3) Better IDE support with autocomplete helps with development speed. 4) Interface definitions make the code self-documenting. 5) Easier refactoring when adding new algorithms. 6) Prevents runtime errors that could break visualizations mid-execution."
        },
        {
          question: "Why Framer Motion for animations instead of CSS animations or other libraries?",
          answer: "Framer Motion was ideal because: 1) Declarative syntax makes complex animations easier to manage. 2) Excellent performance with 60fps animations crucial for smooth algorithm visualizations. 3) Built-in gesture support for interactive elements. 4) Easy to coordinate multiple animations (like highlighting comparisons and swaps simultaneously). 5) Great TypeScript support. 6) Handles animation cleanup automatically, preventing memory leaks during repeated algorithm runs."
        },
        {
          question: "How did you handle state management in your application?",
          answer: "I used React's built-in state management with useState and useEffect hooks, along with custom hooks for complex logic. For the visualization components, I maintained local state for algorithm execution (current step, comparisons, swaps) and used props to communicate with parent components. I avoided external state management libraries like Redux because the application's state is mostly component-local and doesn't require complex global state sharing."
        }
      ]
    },
    {
      id: "implementation-challenges",
      category: "Implementation Challenges",
      questions: [
        {
          question: "What was the most challenging part of implementing the algorithm visualizations?",
          answer: "The most challenging aspect was creating smooth, step-by-step animations while maintaining algorithm correctness. I had to: 1) Break down algorithms into discrete steps that could be animated. 2) Implement proper timing controls with play/pause/reset functionality. 3) Handle state updates without causing infinite re-renders. 4) Ensure animations remained smooth even with large datasets. 5) Coordinate multiple visual elements (highlighting, swapping, comparing) simultaneously. I solved this using async/await with sleep functions and careful state management."
        },
        {
          question: "How did you implement the drag-and-drop functionality in the 'Fix the Code' game?",
          answer: "I implemented drag-and-drop using HTML5 Drag and Drop API with React event handlers. The solution involved: 1) Making code blocks draggable with draggable={true}. 2) Handling onDragStart to store the dragged item data. 3) Implementing onDragOver and onDrop on target zones. 4) Managing state to track available blocks and user's arrangement. 5) Adding visual feedback during drag operations. 6) Implementing validation logic to check correct order against the solution. The key was managing state updates properly to reflect UI changes immediately."
        },
        {
          question: "How did you ensure your application is responsive across different devices?",
          answer: "I used a mobile-first approach with Tailwind CSS: 1) Started with mobile layouts and progressively enhanced for larger screens. 2) Used Tailwind's responsive prefixes (sm:, md:, lg:, xl:) for breakpoint-specific styling. 3) Implemented flexible grid systems that adapt to screen size. 4) Made visualizations scalable by using percentage-based dimensions. 5) Added a collapsible mobile navigation menu. 6) Tested on various devices and adjusted touch targets for mobile usability. 7) Used CSS Grid and Flexbox for flexible layouts."
        },
        {
          question: "How did you implement the dark mode functionality?",
          answer: "I implemented dark mode using Tailwind CSS's dark mode feature: 1) Configured Tailwind with darkMode: 'class' in the config. 2) Created a custom hook (useDarkMode) that manages theme state and localStorage persistence. 3) Used CSS variables for dynamic color switching. 4) Applied dark: prefixes to all components for dark mode styles. 5) Added system preference detection to set initial theme. 6) Ensured proper contrast ratios for accessibility. 7) Made toast notifications and all interactive elements respect the theme."
        }
      ]
    },
    {
      id: "performance-optimization",
      category: "Performance & Optimization",
      questions: [
        {
          question: "How did you optimize the performance of your algorithm visualizations?",
          answer: "Several optimization strategies were implemented: 1) Used React.memo for components that don't need frequent re-renders. 2) Implemented proper dependency arrays in useEffect to prevent unnecessary re-runs. 3) Used requestAnimationFrame for smooth animations. 4) Debounced user inputs like speed controls. 5) Lazy loaded components using React.lazy for code splitting. 6) Optimized array operations to minimize memory allocations. 7) Used CSS transforms instead of changing layout properties for animations. 8) Implemented proper cleanup in useEffect to prevent memory leaks."
        },
        {
          question: "How would you handle performance with very large datasets?",
          answer: "For large datasets, I would implement: 1) Virtualization to render only visible elements. 2) Web Workers for heavy algorithm computations to avoid blocking the UI thread. 3) Pagination or chunking of large arrays. 4) Canvas-based rendering instead of DOM manipulation for better performance. 5) Implement sampling - show representative steps rather than every single operation. 6) Add performance warnings and dataset size limits. 7) Use IndexedDB for caching large datasets. 8) Implement progressive loading with skeleton screens."
        },
        {
          question: "How did you ensure accessibility in your application?",
          answer: "Accessibility was implemented through: 1) Semantic HTML elements and proper heading hierarchy. 2) ARIA labels and descriptions for interactive elements. 3) Keyboard navigation support for all interactive components. 4) High contrast ratios in both light and dark modes. 5) Screen reader friendly content with descriptive text. 6) Focus management for modal dialogs and navigation. 7) Alternative text for visual elements. 8) Reduced motion preferences for users with vestibular disorders. 9) Proper color coding with additional visual indicators beyond just color."
        }
      ]
    },
    {
      id: "testing-deployment",
      category: "Testing & Deployment",
      questions: [
        {
          question: "How would you test this application?",
          answer: "I would implement comprehensive testing: 1) Unit tests for algorithm implementations using Jest. 2) Component testing with React Testing Library for UI interactions. 3) Integration tests for complete user flows. 4) Visual regression testing for consistent UI appearance. 5) Performance testing for animation smoothness. 6) Cross-browser testing for compatibility. 7) Accessibility testing with tools like axe-core. 8) User acceptance testing with actual students learning algorithms. 9) Load testing for quiz and game features."
        },
        {
          question: "How would you deploy this application to production?",
          answer: "For production deployment: 1) Build optimization with Vite for minimal bundle size. 2) Deploy to CDN like Netlify or Vercel for global distribution. 3) Implement CI/CD pipeline with GitHub Actions. 4) Add error monitoring with Sentry. 5) Implement analytics to track user engagement. 6) Set up performance monitoring. 7) Configure proper caching headers. 8) Add security headers and HTTPS. 9) Implement progressive web app features for offline access. 10) Set up automated testing in the deployment pipeline."
        },
        {
          question: "How would you monitor and maintain this application in production?",
          answer: "Production monitoring would include: 1) Error tracking with Sentry for runtime errors. 2) Performance monitoring with Web Vitals. 3) User analytics to understand feature usage. 4) Uptime monitoring for availability. 5) Bundle size monitoring to prevent bloat. 6) User feedback collection system. 7) A/B testing for feature improvements. 8) Regular dependency updates and security patches. 9) Performance budgets to maintain speed. 10) User session recordings to identify UX issues."
        }
      ]
    },
    {
      id: "scalability-future",
      category: "Scalability & Future Enhancements",
      questions: [
        {
          question: "How would you scale this application to handle more users and content?",
          answer: "Scaling strategies would include: 1) Implement user authentication and progress tracking with a backend. 2) Add database for storing user progress and quiz results. 3) Implement caching strategies for frequently accessed content. 4) Use CDN for static assets and global distribution. 5) Add more algorithms and data structures based on user demand. 6) Implement collaborative features like sharing visualizations. 7) Add mobile app versions using React Native. 8) Implement real-time features with WebSockets for multiplayer games."
        },
        {
          question: "What additional features would you add to improve the learning experience?",
          answer: "Future enhancements could include: 1) AI-powered personalized learning paths. 2) Code execution environment for users to test their implementations. 3) Collaborative features for classroom use. 4) Advanced algorithms like graph algorithms, dynamic programming. 5) Integration with coding platforms like LeetCode. 6) Video explanations alongside visualizations. 7) Adaptive difficulty based on user performance. 8) Social features like leaderboards and achievements. 9) Export functionality for presentations. 10) API for educators to integrate into their curricula."
        },
        {
          question: "How would you handle internationalization for global users?",
          answer: "For internationalization: 1) Implement i18n library like react-i18next. 2) Extract all text strings into translation files. 3) Support RTL languages with proper CSS. 4) Localize number formats and date displays. 5) Translate algorithm explanations and code comments. 6) Consider cultural differences in educational approaches. 7) Implement language detection and switching. 8) Ensure proper font support for different languages. 9) Test with various character sets and text lengths. 10) Provide localized examples and use cases."
        }
      ]
    },
    {
      id: "algorithms-concepts",
      category: "Algorithms & Computer Science Concepts",
      questions: [
        {
          question: "Explain the time complexity analysis you implemented for different algorithms.",
          answer: "I implemented comprehensive complexity analysis: 1) Time complexity covers best, average, and worst cases for each algorithm. 2) Space complexity analysis including auxiliary space usage. 3) Real-time metrics showing actual comparisons and swaps during execution. 4) Visual representation of how input size affects performance. 5) Comparison tools showing complexity differences side-by-side. For example, Bubble Sort shows O(n²) average case but O(n) best case for nearly sorted arrays, while Merge Sort consistently shows O(n log n) regardless of input."
        },
        {
          question: "How did you ensure the correctness of your algorithm implementations?",
          answer: "Algorithm correctness was ensured through: 1) Following standard textbook implementations. 2) Testing with various input cases including edge cases (empty arrays, single elements, already sorted, reverse sorted). 3) Comparing outputs with known correct implementations. 4) Implementing invariant checks during execution. 5) Visual verification through step-by-step animations. 6) Unit testing with comprehensive test cases. 7) Peer review of algorithm logic. 8) Testing with different data types and sizes."
        },
        {
          question: "Explain how you implemented the stability concept in sorting algorithms.",
          answer: "Stability in sorting means equal elements maintain their relative order. I implemented this by: 1) Using proper comparison logic that doesn't swap equal elements unnecessarily. 2) Visual indicators showing original positions of equal elements. 3) Test cases with duplicate values to demonstrate stability. 4) Clear documentation explaining which algorithms are stable (Bubble, Insertion, Merge) vs unstable (Selection, Quick, Heap). 5) Comparison tools highlighting stability as a key differentiator when choosing algorithms."
        }
      ]
    }
  ];

  const projectStats = [
    { icon: Code, label: "Components", value: "25+", description: "Modular React components" },
    { icon: Zap, label: "Algorithms", value: "15+", description: "Interactive visualizations" },
    { icon: BookOpen, label: "Languages", value: "4", description: "Code examples provided" },
    { icon: Users, label: "Quiz Questions", value: "50+", description: "Comprehensive testing" },
    { icon: Target, label: "Games", value: "3", description: "Gamified learning experiences" },
    { icon: Award, label: "Topics", value: "8", description: "Major CS concepts covered" }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${backgroundGradients[activeBackground]} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: 0
            }}
            animate={{ 
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              scale: [0, Math.random() * 0.5 + 0.3, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.div
            variants={pulse}
            className="inline-block mb-6"
          >
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-6 font-mono tracking-tight">
            DSA <span className="text-white">Explorer</span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            A <span className="font-bold text-cyan-300">comprehensive analysis</span> of the technologies, architectural decisions, and implementation 
            strategies behind this interactive <span className="font-bold text-purple-300">Data Structures and Algorithms</span> learning platform.
          </p>
        </motion.div>

        {/* Project Statistics */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono">
            Project <span className="text-cyan-300">Overview</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:text-cyan-300 transition-colors" />
                </motion.div>
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/80 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-white/60">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack Deep Dive */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono">
            Technology <span className="text-purple-300">Stack Analysis</span>
          </h2>
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden group"
                whileHover={{ 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-white/5 transition-colors"
                  onClick={() => setExpandedTech(expandedTech === tech.id ? null : tech.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className={`p-3 ${tech.gradient} rounded-xl shadow-lg`}
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <tech.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {tech.name}
                        </h3>
                        <p className="text-sm text-white/70">
                          {tech.category} • Version {tech.version}
                        </p>
                        <p className="text-white/80 mt-1">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedTech === tech.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expandedTech === tech.id ? (
                        <ChevronUp className="w-5 h-5 text-white/70" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/70" />
                      )}
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedTech === tech.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6 border-t border-white/10"
                    >
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-white mb-3 flex items-center">
                            <Target className="w-4 h-4 mr-2 text-cyan-400" />
                            Why We Chose This Technology
                          </h4>
                          <p className="text-white/80 text-sm leading-relaxed mb-4">
                            {tech.whyChosen}
                          </p>
                          
                          <h4 className="font-semibold text-white mb-3 flex items-center">
                            <Settings className="w-4 h-4 mr-2 text-green-400" />
                            Where It's Used
                          </h4>
                          <ul className="space-y-1">
                            {tech.whereUsed.map((usage, i) => (
                              <motion.li 
                                key={i} 
                                className="text-white/80 text-sm flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                {usage}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-purple-400" />
                            Key Benefits
                          </h4>
                          <ul className="space-y-1 mb-4">
                            {tech.benefits.map((benefit, i) => (
                              <motion.li 
                                key={i} 
                                className="text-white/80 text-sm flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <TrendingUp className="w-3 h-3 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </motion.li>
                            ))}
                          </ul>
                          
                          <div className="space-y-2">
                            <div>
                              <span className="text-sm font-medium text-white">
                                Alternatives Considered:
                              </span>
                              <span className="text-sm text-white/70 ml-2">
                                {tech.alternatives}
                              </span>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-white">
                                Learning Curve:
                              </span>
                              <span className="text-sm text-white/70 ml-2">
                                {tech.learningCurve}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Development Tools */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono">
            Development <span className="text-green-400">Tools</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {developmentTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/10 group"
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-white/80 text-sm mb-3">
                  {tool.purpose}
                </p>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80 text-sm">
                    {tool.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interview Questions */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono">
            Interview <span className="text-yellow-300">Preparation</span>
          </h2>
          <p className="text-center text-white/80 mb-8 max-w-3xl mx-auto">
            Comprehensive questions and detailed answers to help you prepare for technical interviews 
            about this project. Each answer includes technical depth and practical insights.
          </p>
          
          <div className="space-y-6">
            {interviewQuestions.map((category, categoryIndex) => (
              <motion.div 
                key={category.id} 
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="p-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                    {category.category}
                  </h3>
                </div>
                
                <div className="p-6 space-y-4">
                  {category.questions.map((qa, qaIndex) => (
                    <div key={qaIndex} className="border-l-4 border-blue-500 pl-4">
                      <div 
                        className="cursor-pointer hover:bg-white/5 p-3 rounded-lg transition-colors"
                        onClick={() => setExpandedFaq(expandedFaq === `${category.id}-${qaIndex}` ? null : `${category.id}-${qaIndex}`)}
                      >
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-white pr-4">
                            <span className="text-blue-400">Q:</span> {qa.question}
                          </h4>
                          <motion.div
                            animate={{ rotate: expandedFaq === `${category.id}-${qaIndex}` ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {expandedFaq === `${category.id}-${qaIndex}` ? (
                              <ChevronUp className="w-5 h-5 text-white/70 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-white/70 flex-shrink-0" />
                            )}
                          </motion.div>
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {expandedFaq === `${category.id}-${qaIndex}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-3 p-4 bg-blue-500/20 rounded-lg"
                          >
                            <p className="text-white/90 leading-relaxed">
                              <strong className="text-blue-300">A:</strong> {qa.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Browser Compatibility & Performance */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono">
            Performance <span className="text-rose-400">&</span> Compatibility
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeIn}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Monitor className="w-5 h-5 mr-2 text-green-400" />
                Browser Support
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Chrome</span>
                  <span className="text-green-400 font-medium">90+ ✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Firefox</span>
                  <span className="text-green-400 font-medium">88+ ✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Safari</span>
                  <span className="text-green-400 font-medium">14+ ✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Edge</span>
                  <span className="text-green-400 font-medium">90+ ✓</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Performance Metrics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Bundle Size</span>
                  <span className="text-blue-400 font-medium">~2.1MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">First Load</span>
                  <span className="text-green-400 font-medium">&lt; 3s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Animation FPS</span>
                  <span className="text-green-400 font-medium">60 FPS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Lighthouse Score</span>
                  <span className="text-green-400 font-medium">95+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore the Code?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              This comprehensive technical overview should prepare you for any interview questions 
              about the project's architecture, implementation, and design decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg flex items-center"
              >
                <Code className="w-5 h-5 mr-2" />
                View Source Code
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-colors flex items-center"
              >
                <Globe className="w-5 h-5 mr-2" />
                Live Demo
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
