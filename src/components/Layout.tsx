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
//   Moon
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
//     { path: '/about', label: 'About', icon: Brain },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Navigation */}
//       <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2 group">
//               <motion.div
//                 whileHover={{ rotate: 180 }}
//                 transition={{ duration: 0.3 }}
//                 className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
//               >
//                 <Brain className="h-6 w-6 text-white" />
//               </motion.div>
//               <span className="text-xl font-bold gradient-text">
//                 DSA Explorer
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map(({ path, label, icon: Icon }) => (
//                 <Link
//                   key={path}
//                   to={path}
//                   className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
//                     location.pathname === path
//                       ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
//                       : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
//                   }`}
//                 >
//                   <Icon className="h-4 w-4" />
//                   <span className="font-medium">{label}</span>
//                 </Link>
//               ))}
              
//               {/* Dark Mode Toggle */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={toggleDarkMode}
//                 className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               >
//                 {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//               </motion.button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center space-x-2">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={toggleDarkMode}
//                 className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
//               >
//                 {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//               </motion.button>
              
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
//               >
//                 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
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
//               className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50"
//             >
//               <div className="px-4 py-4 space-y-2">
//                 {navItems.map(({ path, label, icon: Icon }) => (
//                   <Link
//                     key={path}
//                     to={path}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
//                       location.pathname === path
//                         ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
//                         : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
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
//             transition={{ duration: 0.3 }}
//           >
//             {children}
//           </motion.div>
//         </AnimatePresence>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 mt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center">
//             <div className="flex items-center justify-center space-x-2 mb-4">
//               <Brain className="h-6 w-6 text-blue-600" />
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 DSA Explorer
//               </span>
//             </div>
//             <p className="text-gray-600 dark:text-gray-400 mb-4">
//               Master Data Structures and Algorithms through interactive visualizations
//             </p>
//             <div className="flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
//               <span>© 2025 DSA Explorer</span>
//               <span>•</span>
//               <span>Educational Purpose</span>
//               <span>•</span>
//               <span>Open Source</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;



import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Home, 
  BookOpen, 
  Play, 
  Trophy, 
  Gamepad2, 
  GitCompare,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/topics', label: 'Topics', icon: BookOpen },
    { path: '/learn', label: 'Learn', icon: Brain },
    { path: '/quiz', label: 'Quiz', icon: Trophy },
    { path: '/games', label: 'Games', icon: Gamepad2 },
    { path: '/compare', label: 'Compare', icon: GitCompare },
    { path: '/about', label: 'About', icon: Sparkles },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-b border-gray-200/20 dark:border-gray-700/20 sticky top-0 z-50 shadow-lg shadow-blue-500/5 dark:shadow-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group relative">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-700/40 transition-shadow"
              >
                <Brain className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DSA Explorer
              </span>
              <motion.span 
                className="absolute -inset-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all duration-300 group ${
                    location.pathname === path
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 dark:shadow-blue-700/40'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{label}</span>
                  {location.pathname === path && (
                    <motion.div 
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 -z-10"
                      layoutId="activeNavItem"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 shadow-sm"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 shadow-sm"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-t border-gray-200/30 dark:border-gray-700/30 shadow-xl"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      location.pathname === path
                        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-64px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-t border-gray-200/30 dark:border-gray-700/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <motion.div 
              className="flex items-center justify-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DSA Explorer
              </span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
              Master Data Structures and Algorithms through interactive visualizations and engaging content
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <span>© 2025 DSA Explorer</span>
              <span className="hidden sm:inline">•</span>
              <span>Educational Purpose</span>
              <span className="hidden sm:inline">•</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
