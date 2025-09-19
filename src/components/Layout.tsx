// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Brain, 
//   Home, 
//   BookOpen, 
//   Play, 
//   Trophy, 
//   Gamepad2, 
//   GitCompare,
//   Menu,
//   X,
//   Sun,
//   Moon,
//   Sparkles
// } from 'lucide-react';
// import { useDarkMode } from '../hooks/useDarkMode';

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { isDark, toggleDarkMode } = useDarkMode();
//   const location = useLocation();

//   const navItems = [
//     { path: '/', label: 'Home', icon: Home },
//     { path: '/topics', label: 'Topics', icon: BookOpen },
//     { path: '/learn', label: 'Learn', icon: Brain },
//     { path: '/quiz', label: 'Quiz', icon: Trophy },
//     { path: '/games', label: 'Games', icon: Gamepad2 },
//     { path: '/compare', label: 'Compare', icon: GitCompare },
//     { path: '/about', label: 'About', icon: Sparkles },
//   ];

//   return (
//     <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
//       {/* Navigation */}
//       <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-b border-gray-200/20 dark:border-gray-700/20 sticky top-0 z-50 shadow-lg shadow-blue-500/5 dark:shadow-blue-900/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2 group relative">
//               <motion.div
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.5, type: "spring" }}
//                 className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-700/40 transition-shadow"
//               >
//                 <Brain className="h-6 w-6 text-white" />
//               </motion.div>
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 DSA Explorer
//               </span>
//               <motion.span 
//                 className="absolute -inset-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileHover={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.2 }}
//               />
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-4">
//               {navItems.map(({ path, label, icon: Icon }) => (
//                 <Link
//                   key={path}
//                   to={path}
//                   className={`relative flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all duration-300 group ${
//                     location.pathname === path
//                       ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 dark:shadow-blue-700/40'
//                       : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
//                   }`}
//                 >
//                   <Icon className="h-4 w-4" />
//                   <span className="font-medium">{label}</span>
//                   {location.pathname === path && (
//                     <motion.div 
//                       className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 -z-10"
//                       layoutId="activeNavItem"
//                       transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                     />
//                   )}
//                 </Link>
//               ))}
              
//               {/* Dark Mode Toggle */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={toggleDarkMode}
//                 className="p-2.5 rounded-xl bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm"
//               >
//                 {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//               </motion.button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center space-x-3">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={toggleDarkMode}
//                 className="p-2.5 rounded-xl bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 shadow-sm"
//               >
//                 {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//               </motion.button>
              
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2.5 rounded-xl bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 shadow-sm"
//               >
//                 {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-t border-gray-200/30 dark:border-gray-700/30 shadow-xl"
//             >
//               <div className="px-4 py-4 space-y-2">
//                 {navItems.map(({ path, label, icon: Icon }) => (
//                   <Link
//                     key={path}
//                     to={path}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
//                       location.pathname === path
//                         ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md'
//                         : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
//                     }`}
//                   >
//                     <Icon className="h-5 w-5" />
//                     <span className="font-medium">{label}</span>
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Main Content */}
//       <main className="min-h-[calc(100vh-64px)]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={location.pathname}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           >
//             {children}
//           </motion.div>
//         </AnimatePresence>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-t border-gray-200/30 dark:border-gray-700/30 mt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center">
//             <motion.div 
//               className="flex items-center justify-center space-x-2 mb-4"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
//                 <Brain className="h-5 w-5 text-white" />
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 DSA Explorer
//               </span>
//             </motion.div>
//             <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
//               Master Data Structures and Algorithms through interactive visualizations and engaging content
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500 dark:text-gray-400">
//               <span>© 2025 DSA Explorer</span>
//               <span className="hidden sm:inline">•</span>
//               <span>Educational Purpose</span>
//               <span className="hidden sm:inline">•</span>
//               <span>Open Source</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;


















import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import {
  BrainCircuit, // Changed from Brain
  Home,
  BookOpen,
  Trophy,
  Gamepad2,
  GitCompare,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  Github,
  Linkedin,
} from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode'; // Assuming this hook exists

// Background component is now part of the Layout for persistence
const InteractiveBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(500px at ${x}px ${y}px, white, transparent)`
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
    <div className="fixed inset-0 bg-gray-900 -z-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMDgzMzQ0IiBkPSJNMCAzMCBoMiB2MiBIMFYzMHptNCAwIGgyIHYyIEg0VjMwem00IDBoMiB2MiBIOFYzMHptNCAwIGgyIHYyIEgxMlYzMHptNCAwIGgyIHYyIEgxNlYzMHptNCAwIGgyIHYyIEgyMFYzMHptNCAwIGgyIHYyIEgyNFYzMHptNCAwIGgyIHYyIEgyOFYzMHoiLz48L3N2Zz4=')] opacity-30"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-900/70 via-gray-900 to-purple-900/70"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      />
    </div>
  );
};

// A more stylish theme toggle
const ThemeToggle = ({ isDark, toggleDarkMode }: { isDark: boolean, toggleDarkMode: () => void }) => (
  <motion.button
    onClick={toggleDarkMode}
    className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isDark ? 'bg-cyan-500/20 justify-end' : 'bg-gray-500/20 justify-start'}`}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 700, damping: 30 }}
      className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
    >
      {isDark ? <Moon className="h-4 w-4 text-cyan-400" /> : <Sun className="h-4 w-4 text-yellow-500" />}
    </motion.div>
  </motion.button>
);


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/topics', label: 'Topics', icon: BookOpen },
    { path: '/learn', label: 'Learn', icon: BrainCircuit },
    { path: '/quiz', label: 'Quiz', icon: Trophy },
    { path: '/games', label: 'Games', icon: Gamepad2 },
    { path: '/compare', label: 'Compare', icon: GitCompare },
    { path: '/about', label: 'About', icon: Sparkles },
  ];
  
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.05 }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, when: "afterChildren" }
    }
  };
  
  const mobileLinkVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -15, opacity: 0 }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-transparent text-gray-800 dark:text-gray-100 min-h-screen">
        <InteractiveBackground />
        
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-cyan-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="p-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl shadow-lg shadow-cyan-500/20"
                >
                  <BrainCircuit className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  DSA Explorer
                </span>
                 <div className="absolute -inset-2.5 rounded-lg bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      location.pathname === path
                        ? 'text-cyan-300'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {label}
                    {location.pathname === path && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                        layoutId="activeNavItem"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                 <div className="hidden md:block">
                  <ThemeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
                </div>
                
                {/* Mobile menu button */}
                <div className="md:hidden">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2.5 rounded-lg bg-gray-500/10 text-gray-300"
                  >
                    <AnimatePresence mode="wait">
                       <motion.div
                         key={isMenuOpen ? 'x' : 'menu'}
                         initial={{ rotate: -90, opacity: 0 }}
                         animate={{ rotate: 0, opacity: 1 }}
                         exit={{ rotate: 90, opacity: 0 }}
                         transition={{ duration: 0.2 }}
                       >
                         {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                       </motion.div>
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 pt-2 pb-4 space-y-2 border-t border-cyan-500/10">
                  {navItems.map(({ path, label, icon: Icon }) => (
                    <motion.div key={path} variants={mobileLinkVariants}>
                       <Link
                        to={path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                          location.pathname === path
                            ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-md'
                            : 'text-gray-300 hover:text-white hover:bg-gray-500/10'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{label}</span>
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={mobileLinkVariants} className="pt-4 px-4 flex justify-between items-center">
                    <span className="font-semibold text-gray-300">Switch Theme</span>
                    <ThemeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content */}
        <main className="min-h-[calc(100vh-80px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="mt-16 bg-black/30 backdrop-blur-xl border-t border-cyan-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                 <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl shadow-lg">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  DSA Explorer
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto text-sm">
                A modern, open-source platform designed to make learning Data Structures and Algorithms intuitive and engaging.
              </p>
              <div className="flex justify-center items-center space-x-6 mb-6">
                {[
                  { icon: Github, href: 'https://github.com/amanvats2000' }, 
                  { icon: Linkedin, href: '#' }
                ].map((item, index) => (
                   <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors group">
                    <item.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              <p className="text-gray-500 text-xs">
                 © 2025 DSA Explorer &bull; Crafted with 💙 by Aman Vats
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
