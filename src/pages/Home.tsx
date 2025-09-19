

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Play, 
//   BookOpen, 
//   Trophy, 
//   Gamepad2, 
//   GitCompare,
//   Brain,
//   Code,
//   Lightbulb,
//   Target,
//   TrendingUp,
//   Users,
//   Award,
//   Sparkles,
//   Zap,
//   Cpu,
//   Binary,
//   Network,
//   Code2,
//   ChevronRight,
//   Star,
//   Clock,
//   BarChart3,
//   Puzzle,
//   CircuitBoard,
//   Rocket
// } from 'lucide-react';

// const Home: React.FC = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const features = [
//     {
//       icon: CircuitBoard,
//       title: 'Interactive Visualizations',
//       description: 'Watch algorithms come to life with step-by-step animations that make complex concepts intuitive',
//       color: 'from-cyan-400 to-blue-500',
//       delay: 0.1
//     },
//     {
//       icon: Puzzle,
//       title: 'Comprehensive Learning',
//       description: 'Detailed explanations with code examples in multiple languages and real-world applications',
//       color: 'from-emerald-400 to-green-500',
//       delay: 0.2
//     },
//     {
//       icon: Trophy,
//       title: 'Quiz Challenges',
//       description: 'Test your knowledge with interactive quizzes and track your progress as you master each concept',
//       color: 'from-amber-400 to-orange-500',
//       delay: 0.3
//     },
//     {
//       icon: Gamepad2,
//       title: 'Gamified Learning',
//       description: 'Learn through fun games and interactive challenges that make studying algorithms enjoyable',
//       color: 'from-violet-400 to-purple-500',
//       delay: 0.4
//     },
//     {
//       icon: BarChart3,
//       title: 'Algorithm Comparison',
//       description: 'Compare algorithms side-by-side with detailed analysis of time and space complexity',
//       color: 'from-rose-400 to-pink-500',
//       delay: 0.5
//     },
//     {
//       icon: Code,
//       title: 'Multiple Languages',
//       description: 'Code examples in C++, Java, Python, and JavaScript with seamless switching between languages',
//       color: 'from-indigo-400 to-blue-500',
//       delay: 0.6
//     }
//   ];

//   const stats = [
//     { icon: Brain, label: 'Algorithms', value: '20+', sub: 'Visualized', delay: 0.1 },
//     { icon: Users, label: 'Learners', value: '10K+', sub: 'Worldwide', delay: 0.2 },
//     { icon: Award, label: 'Success Rate', value: '95%', sub: 'Completion', delay: 0.3 },
//     { icon: TrendingUp, label: 'Growth', value: '200%', sub: 'This Year', delay: 0.4 }
//   ];

//   const actionButtons = [
//     { to: '/topics', label: 'Visualize', icon: Play, color: 'from-cyan-500 to-blue-600', delay: 0.1 },
//     { to: '/learn', label: 'Learn', icon: BookOpen, color: 'from-emerald-500 to-green-600', delay: 0.2 },
//     { to: '/games', label: 'Play', icon: Gamepad2, color: 'from-violet-500 to-purple-600', delay: 0.3 },
//     { to: '/quiz', label: 'Quiz', icon: Trophy, color: 'from-amber-500 to-orange-600', delay: 0.4 },
//     { to: '/compare', label: 'Compare', icon: GitCompare, color: 'from-rose-500 to-pink-600', delay: 0.5 }
//   ];

//   // Animated background particles
//   const AnimatedBackground = () => {
//     return (
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//         {/* Gradient orbs */}
//         <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
//         {/* Floating particles */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               background: `radial-gradient(circle, ${i % 4 === 0 ? '#22d3ee' : i % 4 === 1 ? '#a855f7' : i % 4 === 2 ? '#10b981' : '#f59e0b'}, transparent)`,
//               width: `${Math.random() * 15 + 5}px`,
//               height: `${Math.random() * 15 + 5}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: Math.random() * 0.3 + 0.1,
//             }}
//             animate={{
//               y: [0, Math.random() * 60 - 30, 0],
//               x: [0, Math.random() * 60 - 30, 0],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 15,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>
//     );
//   };

//   // Animated code block for hero section
//   const AnimatedCodeBlock = () => {
//     return (
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.8, duration: 0.5 }}
//         className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block"
//       >
//         <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-700/50 w-80">
//           <div className="flex space-x-2 mb-4">
//             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//           </div>
//           <div className="font-mono text-sm text-gray-200">
//             <div className="text-purple-400">function</div>
//             <div className="text-cyan-400 ml-4">binarySearch</div>
//             <div className="text-gray-400 ml-4">// Visualize step-by-step</div>
//             <div className="text-yellow-200 ml-8">return</div>
//             <div className="text-emerald-400 ml-12">solution</div>
//           </div>
//           <motion.div 
//             className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg"
//             animate={{ y: [0, -5, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <Rocket className="h-5 w-5 text-white" />
//           </motion.div>
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="min-h-screen overflow-hidden">
//       <AnimatedBackground />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center lg:text-left mb-28 relative"
//         >
//           <div className="flex flex-col lg:flex-row items-center justify-between">
//             <div className="lg:w-1/2">
//               <motion.div
//                 initial={{ scale: 0.8, rotate: -10 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
//                 className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-8 shadow-lg relative group"
//               >
//                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
//                 <Brain className="h-12 w-12 text-white relative z-10" />
//                 <motion.div 
//                   className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-1 shadow-lg"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <Sparkles className="h-4 w-4 text-amber-900" />
//                 </motion.div>
//               </motion.div>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
//                 <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Master DSA
//                 </span>
//                 <br />
//                 <span className="text-gray-800 dark:text-gray-100">Visually & Interactively</span>
//               </h1>
              
//               <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl leading-relaxed">
//                 Transform how you learn algorithms with immersive visualizations, interactive challenges, and a modern approach to mastering data structures.
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-wrap gap-4 mb-16">
//                 {actionButtons.map(({ to, label, icon: Icon, color, delay }) => (
//                   <motion.div
//                     key={label}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay }}
//                     whileHover={{ y: -4, scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Link
//                       to={to}
//                       className={`inline-flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r ${color} text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group`}
//                     >
//                       <Icon className="h-5 w-5" />
//                       <span>{label}</span>
//                       <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
            
//             <AnimatedCodeBlock />
//           </div>
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28"
//         >
//           {stats.map(({ icon: Icon, label, value, sub, delay }) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay }}
//               whileHover={{ y: -8 }}
//               className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-4 shadow-md relative z-10">
//                 <Icon className="h-6 w-6 text-white" />
//               </div>
//               <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 relative z-10">{value}</div>
//               <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm relative z-10">{label}</div>
//               <div className="text-cyan-600 dark:text-cyan-400 text-xs mt-1 relative z-10">{sub}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="mb-28 relative"
//         >
//           <div className="text-center mb-16">
//             <motion.div 
//               className="inline-flex items-center justify-center p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-6"
//               initial={{ rotate: 0 }}
//               animate={{ rotate: 360 }}
//               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//             >
//               <Sparkles className="h-6 w-6 text-cyan-500" />
//             </motion.div>
//             <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
//               The Future of <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Algorithm Learning</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Experience a revolutionary approach to understanding data structures and algorithms through cutting-edge interactive technology
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map(({ icon: Icon, title, description, color, delay }) => (
//               <motion.div
//                 key={title}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="group p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
//                 <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 bg-gradient-to-r ${color} shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}>
//                   <Icon className="h-8 w-8 text-white" />
//                   <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
//                   {title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                   {description}
//                 </p>
//                 <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <ChevronRight className="h-5 w-5 text-cyan-500" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           className="rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden border border-cyan-500/20 mb-16"
//           style={{
//             background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(139, 92, 246, 0.9) 100%)'
//           }}
//         >
//           {/* Animated background elements */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2ZTb2tlPSIjZmZmIiBzdHJva2VPcGFjaXR5PSIwLjEiIHN0cm9rZVdpZHRoPSIyIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')] opacity-20"></div>
          
//           <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
//           <div className="relative z-10">
//             <motion.div
//               animate={{ 
//                 rotate: [0, 5, -5, 0],
//                 scale: [1, 1.05, 1]
//               }}
//               transition={{ duration: 6, repeat: Infinity }}
//               className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm"
//             >
//               <Zap className="h-10 w-10" />
//             </motion.div>
            
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to Revolutionize Your Algorithm Skills?
//             </h2>
            
//             <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
//               Join thousands of developers who have transformed how they learn and understand algorithms through our cutting-edge interactive platform.
//             </p>
            
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link
//                   to="/topics"
//                   className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
//                 >
//                   <Rocket className="h-5 w-5" />
//                   <span>Launch Learning Journey</span>
//                 </Link>
//               </motion.div>
              
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link
//                   to="/about"
//                   className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-200"
//                 >
//                   <Code2 className="h-5 w-5" />
//                   <span>Explore Features</span>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer note */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="text-center text-gray-500 dark:text-gray-400 text-sm"
//         >
//           Crafted with 💙 for developers passionate about mastering algorithms Aman Vats.❤️
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  Play,
  BookOpen,
  Trophy,
  Gamepad2,
  GitCompare,
  BrainCircuit, // Changed from Brain for a more techy feel
  Code2, // Changed from Code for consistency
  Lightbulb,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  Zap,
  Cpu,
  Binary,
  Network,
  ChevronRight,
  Rocket,
  PenTool, // New icon
  ShieldCheck // New icon
} from 'lucide-react';

// A custom hook for the animated counter
const useAnimatedCounter = (target: number, duration = 1.5) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(Math.round(latest));
      }
    });
    return () => controls.stop();
  }, [target, duration]);

  return count;
};

// Sub-component for the stats counter to make it cleaner
const StatCounter = ({ value, sub }: { value: string, sub: string }) => {
  const isPercentage = value.includes('%');
  const targetValue = parseInt(value.replace('+', '').replace('%', ''));
  const animatedValue = useAnimatedCounter(targetValue);
  
  return (
    <>
      <div className="text-3xl font-bold text-gray-100 mb-1 relative z-10">
        {animatedValue}{isPercentage ? '%' : '+'}
      </div>
      <div className="text-cyan-400 text-xs mt-1 relative z-10">{sub}</div>
    </>
  );
};


const Home: React.FC = () => {

  const features = [
    {
      icon: BrainCircuit,
      title: 'Neural Visualizations',
      description: 'Watch algorithms come to life with step-by-step animations that make complex concepts intuitive.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: BookOpen,
      title: 'Curated Learning Paths',
      description: 'Follow guided paths from basic to advanced topics, ensuring a solid foundation and deep understanding.',
      color: 'from-emerald-400 to-green-500',
    },
    {
      icon: Trophy,
      title: 'Competitive Challenges',
      description: 'Test your knowledge with timed quizzes and coding challenges to rank up and earn achievements.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Gamepad2,
      title: 'Gamified Experience',
      description: 'Learn through fun, interactive games that make mastering complex data structures enjoyable.',
      color: 'from-violet-400 to-purple-500',
    },
    {
      icon: GitCompare,
      title: 'Performance Analysis',
      description: 'Compare algorithms side-by-side with detailed analysis of their time and space complexity.',
      color: 'from-rose-400 to-pink-500',
    },
    {
      icon: Code2,
      title: 'Multi-Language IDE',
      description: 'Write, run, and test code in C++, Java, Python, and JavaScript directly in your browser.',
      color: 'from-indigo-400 to-blue-500',
    }
  ];

  const stats = [
    { icon: Cpu, label: 'Algorithms', value: '50+', sub: 'Visualized & Explained' },
    { icon: Users, label: 'Active Learners', value: '25K+', sub: 'Growing Daily' },
    { icon: ShieldCheck, label: 'Success Rate', value: '98%', sub: 'In Interviews' },
    { icon: TrendingUp, label: 'Engagement', value: '300%', sub: 'Year Over Year' }
  ];

  const actionButtons = [
    { to: '/topics', label: 'Start Visualizing', icon: Play, color: 'from-cyan-500 to-blue-600' },
    { to: '/learn', label: 'View Learning Paths', icon: BookOpen, color: 'from-emerald-500 to-green-600' },
  ];

  // A more interactive and less generic background
  const InteractiveBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const maskImage = useTransform(
      [mouseX, mouseY],
      ([x, y]) => `radial-gradient(300px at ${x}px ${y}px, white, transparent)`
    );
    
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
      <div className="absolute inset-0 bg-gray-900 -z-10">
        {/* The underlying grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMDgzMzQ0IiBkPSJNMCAzMCBoMiB2MiBIMFYzMHptNCAwIGgyIHYyIEg0VjMwem00IDBoMiB2MiBIOFYzMHptNCAwIGgyIHYyIEgxMlYzMHptNCAwIGgyIHYyIEgxNlYzMHptNCAwIGgyIHYyIEgyMFYzMHptNCAwIGgyIHYyIEgyNFYzMHptNCAwIGgyIHYyIEgyOFYzMHoiLz48L3N2Zz4=')] opacity-30"></div>
        {/* The interactive spotlight mask */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-gray-900 to-purple-900"
          style={{
            maskImage,
            WebkitMaskImage: maskImage,
          }}
        />
      </div>
    );
  };

  const AnimatedCodeBlock = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: 5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px] group"
      >
        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-cyan-500/20">
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <pre className="font-mono text-sm text-gray-300">
            <code className="flex flex-col">
              <span><span className="text-purple-400">function</span> <span className="text-cyan-300">visualizeSort</span>(<span className="text-orange-300">arr</span>) {'{'}</span>
              <span>  <span className="text-gray-500">// Watch the magic happen...</span></span>
              <span className="flex items-center">    arr.<span className="text-cyan-300">forEach</span>(step {'=>'} {'{'}
                <motion.div 
                  className="w-1.5 h-4 bg-yellow-300 ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              </span>
              <span>      <span className="text-purple-400">animate</span>(step);</span>
              <span>    {'}'});</span>
              <span>  <span className="text-purple-400">return</span> <span className="text-emerald-400">'Sorted!'</span>;</span>
              <span>{'}'}</span>
            </code>
          </pre>
          <motion.div
            className="absolute -bottom-5 -right-5 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full shadow-lg shadow-cyan-500/30"
            animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Rocket className="h-6 w-6 text-white" />
          </motion.div>
        </div>
      </motion.div>
    );
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };


  return (
    <div className="min-h-screen overflow-x-hidden text-gray-100 font-sans bg-gray-900">
      <InteractiveBackground />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Hero Section */}
        <section className="text-center lg:text-left mb-32 relative pt-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center lg:items-start"
              >
                <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                  <Sparkles className="h-5 w-5 text-cyan-400" />
                  <span className="font-medium text-cyan-300 text-sm">Next-Gen Learning Platform</span>
                </motion.div>
                
                <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tighter">
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Visualize.
                  </span>
                  <span className="block text-gray-200">
                    Master. Conquer.
                  </span>
                </motion.h1>
                
                <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                  Unlock the world of Data Structures and Algorithms. Go from novice to expert with our interactive, gamified, and visually stunning platform.
                </motion.p>
                
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {actionButtons.map(({ to, label, icon: Icon, color }) => (
                    <motion.div
                      key={label}
                      whileHover={{ y: -4, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={to}
                        className={`group relative inline-flex items-center space-x-2.5 px-7 py-3.5 bg-gradient-to-r ${color} text-white font-bold text-base rounded-xl transition-all duration-300 shadow-lg overflow-hidden`}
                      >
                         <span className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                         <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-500 group-hover:w-full"></span>
                         <Icon className="h-5 w-5 relative z-10" />
                         <span className="relative z-10">{label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            <AnimatedCodeBlock />
          </div>
        </section>

        {/* Stats Section */}
        <motion.section 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map(({ icon: Icon, label, value, sub }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="group relative text-center p-6 bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-4 shadow-md relative z-10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <StatCounter value={value} sub={sub} />
              <div className="text-gray-400 font-semibold text-sm relative z-10">{label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Features Grid */}
        <section className="mb-32">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
             <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              The Ultimate <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">DSA Toolkit</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Everything you need to master algorithms, all in one place. Built with cutting-edge tech for a revolutionary learning experience.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map(({ icon: Icon, title, description, color }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-gray-800/60 backdrop-blur-md border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-md`}></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center p-4 rounded-xl mb-6 bg-gradient-to-r ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-3">{title}</h3>
                  <p className="text-gray-400 leading-relaxed">{description}</p>
                  <ChevronRight className="absolute top-8 right-8 h-6 w-6 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-cyan-500/20 bg-gray-800/50 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-500/30 blur-xl -z-10"></div>
          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-8"
            >
              <Zap className="h-10 w-10 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Forge Your Future?
            </h2>
            
            <p className="text-lg text-gray-300 opacity-90 mb-10 max-w-3xl mx-auto">
              Stop memorizing, start understanding. Join thousands of developers building elite problem-solving skills on our interactive platform.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/topics"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-xl hover:bg-gray-200 transition-all duration-200 shadow-lg"
              >
                <Rocket className="h-5 w-5" />
                <span>Launch Your Learning Journey</span>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-8">
        <p>Crafted with 💙 by Aman Vats for the next generation of engineers.</p>
      </footer>
    </div>
  );
};

export default Home;
