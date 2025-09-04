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
  Code2
} from 'lucide-react';

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: Play,
      title: 'Interactive Visualizations',
      description: 'Watch algorithms come to life with step-by-step animations that make complex concepts intuitive',
      color: 'from-sky-400 to-blue-500',
      accent: 'bg-blue-500/10'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Detailed explanations with code examples in multiple languages and real-world applications',
      color: 'from-emerald-400 to-green-500',
      accent: 'bg-green-500/10'
    },
    {
      icon: Trophy,
      title: 'Quiz Challenges',
      description: 'Test your knowledge with interactive quizzes and track your progress as you master each concept',
      color: 'from-amber-400 to-orange-500',
      accent: 'bg-orange-500/10'
    },
    {
      icon: Gamepad2,
      title: 'Gamified Learning',
      description: 'Learn through fun games and interactive challenges that make studying algorithms enjoyable',
      color: 'from-violet-400 to-purple-500',
      accent: 'bg-purple-500/10'
    },
    {
      icon: GitCompare,
      title: 'Algorithm Comparison',
      description: 'Compare algorithms side-by-side with detailed analysis of time and space complexity',
      color: 'from-rose-400 to-pink-500',
      accent: 'bg-pink-500/10'
    },
    {
      icon: Code,
      title: 'Multiple Languages',
      description: 'Code examples in C++, Java, Python, and JavaScript with seamless switching between languages',
      color: 'from-indigo-400 to-blue-500',
      accent: 'bg-indigo-500/10'
    }
  ];

  const stats = [
    { icon: Brain, label: 'Algorithms', value: '20+', sub: 'Visualized' },
    { icon: Users, label: 'Learners', value: '10K+', sub: 'Worldwide' },
    { icon: Award, label: 'Success Rate', value: '95%', sub: 'Completion' },
    { icon: TrendingUp, label: 'Growth', value: '200%', sub: 'This Year' }
  ];

  const actionButtons = [
    { to: '/topics', label: 'Visualize', icon: Play, color: 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700' },
    { to: '/learn', label: 'Learn', icon: BookOpen, color: 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700' },
    { to: '/games', label: 'Play', icon: Gamepad2, color: 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700' },
    { to: '/quiz', label: 'Quiz', icon: Trophy, color: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700' },
    { to: '/compare', label: 'Compare', icon: GitCompare, color: 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700' }
  ];

  // Floating particles background effect
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#34d399' : '#fbbf24'}, transparent)`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <FloatingParticles />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24 relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 opacity-10">
          <Binary size={120} />
        </div>
        <div className="absolute -bottom-10 -left-10 opacity-10">
          <Network size={120} />
        </div>
        
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-8 shadow-lg relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-30"></div>
          <Brain className="h-12 w-12 text-white relative z-10" />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Master DSA
          </span>
          <br />
          <span className="text-gray-800 dark:text-gray-100">Through Experience</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Explore Data Structures and Algorithms through beautiful visualizations, 
          interactive learning experiences, and challenges that make complex concepts intuitive.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {actionButtons.map(({ to, label, icon: Icon, color }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={to}
                className={`inline-flex items-center space-x-2 px-6 py-3 ${color} text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
      >
        {stats.map(({ icon: Icon, label, value, sub }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -6 }}
            className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-4 shadow-md">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">{value}</div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm">{label}</div>
            <div className="text-gray-500 dark:text-gray-500 text-xs mt-1">{sub}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-20 relative"
      >
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-6 w-6 text-blue-500" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Learn by Doing, Not Just Reading
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our interactive approach helps you understand algorithms intuitively through visualization and practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, color, accent }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className={`group p-8 rounded-2xl ${accent} backdrop-blur-sm border border-white/10 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* Accent corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full ${color.replace('from-', 'bg-gradient-to-br from-')} opacity-20`}></div>
              
              <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 ${color} bg-gradient-to-r shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden border border-white/10 mb-16"
        style={{
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(79, 70, 229, 0.9) 50%, rgba(124, 58, 237, 0.9) 100%)'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
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
            Ready to Transform How You Learn Algorithms?
          </h2>
          
          <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join a community of developers who've moved beyond boring textbooks to truly understand how algorithms work through interactive visualization.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/topics"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                <Target className="h-5 w-5" />
                <span>Start Learning Now</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                <Code2 className="h-5 w-5" />
                <span>See How It Works</span>
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
        Made with 💙 by developers who struggled with algorithms too
      </motion.div>
    </div>
  );
};

export default Home;
