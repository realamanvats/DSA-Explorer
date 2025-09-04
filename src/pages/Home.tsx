// import React from 'react';
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
//   Award
// } from 'lucide-react';

// const Home: React.FC = () => {
//   const features = [
//     {
//       icon: Play,
//       title: 'Interactive Visualizations',
//       description: 'Watch algorithms come to life with step-by-step animations',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: BookOpen,
//       title: 'Comprehensive Learning',
//       description: 'Detailed explanations with code examples in multiple languages',
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       icon: Trophy,
//       title: 'Quiz Challenges',
//       description: 'Test your knowledge with interactive quizzes and progress tracking',
//       color: 'from-yellow-500 to-orange-500'
//     },
//     {
//       icon: Gamepad2,
//       title: 'Gamified Learning',
//       description: 'Learn through fun games and interactive challenges',
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       icon: GitCompare,
//       title: 'Algorithm Comparison',
//       description: 'Compare algorithms side-by-side with detailed analysis',
//       color: 'from-red-500 to-rose-500'
//     },
//     {
//       icon: Code,
//       title: 'Multiple Languages',
//       description: 'Code examples in C++, Java, Python, and JavaScript',
//       color: 'from-indigo-500 to-blue-500'
//     }
//   ];

//   const stats = [
//     { icon: Brain, label: 'Algorithms', value: '20+' },
//     { icon: Users, label: 'Learners', value: '10K+' },
//     { icon: Award, label: 'Success Rate', value: '95%' },
//     { icon: TrendingUp, label: 'Growth', value: '200%' }
//   ];

//   const actionButtons = [
//     { to: '/topics', label: 'Visualize', icon: Play, color: 'bg-blue-600 hover:bg-blue-700' },
//     { to: '/learn', label: 'Learn', icon: BookOpen, color: 'bg-green-600 hover:bg-green-700' },
//     { to: '/games', label: 'Play', icon: Gamepad2, color: 'bg-purple-600 hover:bg-purple-700' },
//     { to: '/quiz', label: 'Quiz', icon: Trophy, color: 'bg-orange-600 hover:bg-orange-700' },
//     { to: '/compare', label: 'Compare', icon: GitCompare, color: 'bg-red-600 hover:bg-red-700' }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-20"
//       >
//         <motion.div
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-10 shadow-2xl animate-float"
//         >
//           <Brain className="h-16 w-16 text-white" />
//         </motion.div>
        
//         <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
//           <span className="gradient-text">
//             Master DSA
//           </span>
//           <br />
//           <span className="text-gray-800 dark:text-gray-100">Interactively</span>
//         </h1>
        
//         <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
//           Explore Data Structures and Algorithms through beautiful visualizations, 
//           interactive learning experiences, and gamified challenges. Perfect for students, 
//           developers, and anyone looking to strengthen their problem-solving skills.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap justify-center gap-6 mb-16">
//           {actionButtons.map(({ to, label, icon: Icon, color }, index) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 * index }}
//               whileHover={{ y: -2 }}
//             >
//               <Link
//                 to={to}
//                 className={`inline-flex items-center space-x-3 px-8 py-4 ${color} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg`}
//               >
//                 <Icon className="h-6 w-6" />
//                 <span>{label}</span>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Stats Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
//       >
//         {stats.map(({ icon: Icon, label, value }, index) => (
//           <motion.div
//             key={label}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 * index }}
//             whileHover={{ y: -4, scale: 1.02 }}
//             className="text-center p-8 glass-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-6 shadow-lg">
//               <Icon className="h-8 w-8 text-white" />
//             </div>
//             <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">{value}</div>
//             <div className="text-gray-600 dark:text-gray-400 font-semibold">{label}</div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Features Grid */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="mb-16"
//       >
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
//             Why Choose DSA Explorer?
//           </h2>
//           <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
//             Experience the most comprehensive and interactive way to learn algorithms
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {features.map(({ icon: Icon, title, description, color }, index) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 * index }}
//               className="group glass-card rounded-2xl p-10 shadow-lg card-hover"
//             >
//               <div className={`inline-flex items-center justify-center p-5 bg-gradient-to-r ${color} rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                 <Icon className="h-10 w-10 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
//                 {title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
//                 {description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Call to Action */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.7 }}
//         className="text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-16 text-white shadow-2xl relative overflow-hidden"
//       >
//         {/* Background decoration */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
//         <div className="relative z-10">
//           <motion.div
//             animate={{ rotate: [0, 10, -10, 0] }}
//             transition={{ duration: 4, repeat: Infinity }}
//           >
//             <Lightbulb className="h-20 w-20 mx-auto mb-8 opacity-90" />
//           </motion.div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//           Ready to Start Your Journey?
//         </h2>
//           <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
//           Join thousands of learners who have mastered Data Structures and Algorithms 
//           through our interactive platform.
//         </p>
//           <div className="flex flex-wrap justify-center gap-6">
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link
//             to="/topics"
//               className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl"
//           >
//               <Target className="h-6 w-6" />
//             <span>Start Learning Now</span>
//           </Link>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 to="/about"
//                 className="inline-flex items-center space-x-3 px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
//               >
//                 <BookOpen className="h-6 w-6" />
//                 <span>Learn More</span>
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;





import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  BookOpen, 
  Trophy, 
  Gamepad2, 
  GitCompare,
  Brain,
  Code,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  Zap,
  Cpu,
  Binary,
  Network,
  Code2,
  ChevronRight,
  Star,
  Clock,
  BarChart3,
  Puzzle,
  CircuitBoard,
  Rocket
} from 'lucide-react';

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: CircuitBoard,
      title: 'Interactive Visualizations',
      description: 'Watch algorithms come to life with step-by-step animations that make complex concepts intuitive',
      color: 'from-cyan-400 to-blue-500',
      delay: 0.1
    },
    {
      icon: Puzzle,
      title: 'Comprehensive Learning',
      description: 'Detailed explanations with code examples in multiple languages and real-world applications',
      color: 'from-emerald-400 to-green-500',
      delay: 0.2
    },
    {
      icon: Trophy,
      title: 'Quiz Challenges',
      description: 'Test your knowledge with interactive quizzes and track your progress as you master each concept',
      color: 'from-amber-400 to-orange-500',
      delay: 0.3
    },
    {
      icon: Gamepad2,
      title: 'Gamified Learning',
      description: 'Learn through fun games and interactive challenges that make studying algorithms enjoyable',
      color: 'from-violet-400 to-purple-500',
      delay: 0.4
    },
    {
      icon: BarChart3,
      title: 'Algorithm Comparison',
      description: 'Compare algorithms side-by-side with detailed analysis of time and space complexity',
      color: 'from-rose-400 to-pink-500',
      delay: 0.5
    },
    {
      icon: Code,
      title: 'Multiple Languages',
      description: 'Code examples in C++, Java, Python, and JavaScript with seamless switching between languages',
      color: 'from-indigo-400 to-blue-500',
      delay: 0.6
    }
  ];

  const stats = [
    { icon: Brain, label: 'Algorithms', value: '20+', sub: 'Visualized', delay: 0.1 },
    { icon: Users, label: 'Learners', value: '10K+', sub: 'Worldwide', delay: 0.2 },
    { icon: Award, label: 'Success Rate', value: '95%', sub: 'Completion', delay: 0.3 },
    { icon: TrendingUp, label: 'Growth', value: '200%', sub: 'This Year', delay: 0.4 }
  ];

  const actionButtons = [
    { to: '/topics', label: 'Visualize', icon: Play, color: 'from-cyan-500 to-blue-600', delay: 0.1 },
    { to: '/learn', label: 'Learn', icon: BookOpen, color: 'from-emerald-500 to-green-600', delay: 0.2 },
    { to: '/games', label: 'Play', icon: Gamepad2, color: 'from-violet-500 to-purple-600', delay: 0.3 },
    { to: '/quiz', label: 'Quiz', icon: Trophy, color: 'from-amber-500 to-orange-600', delay: 0.4 },
    { to: '/compare', label: 'Compare', icon: GitCompare, color: 'from-rose-500 to-pink-600', delay: 0.5 }
  ];

  // Animated background particles
  const AnimatedBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 4 === 0 ? '#22d3ee' : i % 4 === 1 ? '#a855f7' : i % 4 === 2 ? '#10b981' : '#f59e0b'}, transparent)`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [0, Math.random() * 60 - 30, 0],
              x: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  // Animated code block for hero section
  const AnimatedCodeBlock = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block"
      >
        <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-700/50 w-80">
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="font-mono text-sm text-gray-200">
            <div className="text-purple-400">function</div>
            <div className="text-cyan-400 ml-4">binarySearch</div>
            <div className="text-gray-400 ml-4">// Visualize step-by-step</div>
            <div className="text-yellow-200 ml-8">return</div>
            <div className="text-emerald-400 ml-12">solution</div>
          </div>
          <motion.div 
            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="h-5 w-5 text-white" />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left mb-28 relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-8 shadow-lg relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <Brain className="h-12 w-12 text-white relative z-10" />
                <motion.div 
                  className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-1 shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4 text-amber-900" />
                </motion.div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Master DSA
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-100">Visually & Interactively</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl leading-relaxed">
                Transform how you learn algorithms with immersive visualizations, interactive challenges, and a modern approach to mastering data structures.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-16">
                {actionButtons.map(({ to, label, icon: Icon, color, delay }) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={to}
                      className={`inline-flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r ${color} text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <AnimatedCodeBlock />
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28"
        >
          {stats.map(({ icon: Icon, label, value, sub, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay }}
              whileHover={{ y: -8 }}
              className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-4 shadow-md relative z-10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 relative z-10">{value}</div>
              <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm relative z-10">{label}</div>
              <div className="text-cyan-600 dark:text-cyan-400 text-xs mt-1 relative z-10">{sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-28 relative"
        >
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center justify-center p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-6"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-cyan-500" />
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              The Future of <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Algorithm Learning</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience a revolutionary approach to understanding data structures and algorithms through cutting-edge interactive technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description, color, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 bg-gradient-to-r ${color} shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}>
                  <Icon className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-5 w-5 text-cyan-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden border border-cyan-500/20 mb-16"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(139, 92, 246, 0.9) 100%)'
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2ZTb2tlPSIjZmZmIiBzdHJva2VPcGFjaXR5PSIwLjEiIHN0cm9rZVdpZHRoPSIyIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')] opacity-20"></div>
          
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm"
            >
              <Zap className="h-10 w-10" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Revolutionize Your Algorithm Skills?
            </h2>
            
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers who have transformed how they learn and understand algorithms through our cutting-edge interactive platform.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/topics"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  <Rocket className="h-5 w-5" />
                  <span>Launch Learning Journey</span>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-200"
                >
                  <Code2 className="h-5 w-5" />
                  <span>Explore Features</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-500 dark:text-gray-400 text-sm"
        >
          Crafted with 💙 for developers passionate about mastering algorithms Aman Vats.❤️
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
