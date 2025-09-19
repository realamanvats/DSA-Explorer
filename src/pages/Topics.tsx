// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowUpDown, Search, Layers, Fuel as Queue, TreePine, Network, Hash, Route } from 'lucide-react';

// const Topics: React.FC = () => {
//   const topics = [
//     {
//       id: 'sorting',
//       title: 'Sorting Algorithms',
//       description: 'Visualize Bubble, Selection, Insertion, Merge, Quick, and Heap Sort',
//       icon: ArrowUpDown,
//       color: 'from-blue-500 to-cyan-500',
//       algorithms: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort'],
//       complexity: 'O(n²) to O(n log n)'
//     },
//     {
//       id: 'searching',
//       title: 'Searching Algorithms',
//       description: 'Interactive Linear and Binary Search demonstrations',
//       icon: Search,
//       color: 'from-green-500 to-emerald-500',
//       algorithms: ['Linear Search', 'Binary Search', 'Jump Search', 'Interpolation Search'],
//       complexity: 'O(n) to O(log n)'
//     },
//     {
//       id: 'stack',
//       title: 'Stack Operations',
//       description: 'LIFO operations: Push, Pop, Peek with overflow/underflow handling',
//       icon: Layers,
//       color: 'from-purple-500 to-pink-500',
//       algorithms: ['Push', 'Pop', 'Peek', 'IsEmpty', 'IsFull'],
//       complexity: 'O(1) for all operations'
//     },
//     {
//       id: 'queue',
//       title: 'Queue Operations',
//       description: 'FIFO operations: Enqueue, Dequeue with circular queue variants',
//       icon: Queue,
//       color: 'from-orange-500 to-red-500',
//       algorithms: ['Enqueue', 'Dequeue', 'Front', 'Rear', 'Circular Queue'],
//       complexity: 'O(1) for all operations'
//     },
//     {
//       id: 'tree',
//       title: 'Tree Traversals',
//       description: 'Binary tree traversal algorithms and tree operations',
//       icon: TreePine,
//       color: 'from-teal-500 to-green-500',
//       algorithms: ['Inorder', 'Preorder', 'Postorder', 'Level Order', 'BST Operations'],
//       complexity: 'O(n) for traversals'
//     },
//     {
//       id: 'graph',
//       title: 'Graph Algorithms',
//       description: 'Graph traversal and shortest path algorithms',
//       icon: Network,
//       color: 'from-rose-500 to-pink-500',
//       algorithms: ['DFS', 'BFS', 'Dijkstra', 'Floyd-Warshall', 'Kruskal', 'Prim'],
//       complexity: 'O(V + E) to O(V³)'
//     },
//     {
//       id: 'hashing',
//       title: 'Hashing Techniques',
//       description: 'Hash table operations and collision resolution methods',
//       icon: Hash,
//       color: 'from-indigo-500 to-purple-500',
//       algorithms: ['Linear Probing', 'Quadratic Probing', 'Chaining', 'Double Hashing'],
//       complexity: 'O(1) average case'
//     },
//     {
//       id: 'dynamic',
//       title: 'Dynamic Programming',
//       description: 'Classic DP problems with step-by-step solutions',
//       icon: Route,
//       color: 'from-yellow-500 to-orange-500',
//       algorithms: ['Fibonacci', 'Knapsack', 'LCS', 'Edit Distance', 'Coin Change'],
//       complexity: 'Varies by problem'
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Explore Topics
//           </span>
//         </h1>
//         <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//           Choose a topic to dive into interactive visualizations and learn how algorithms work step by step
//         </p>
//       </motion.div>

//       {/* Topics Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {topics.map((topic, index) => (
//           <motion.div
//             key={topic.id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 * index }}
//             whileHover={{ y: -8, scale: 1.02 }}
//             className="group"
//           >
//             <Link
//               to={`/visualization/${topic.id}`}
//               className="block h-full p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
//             >
//               {/* Icon and Title */}
//               <div className="text-center mb-6">
//                 <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${topic.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                   <topic.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
//                   {topic.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
//                   {topic.description}
//                 </p>
//               </div>

//               {/* Algorithms List */}
//               <div className="mb-6">
//                 <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
//                   Algorithms:
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {topic.algorithms.slice(0, 4).map((algo) => (
//                     <span
//                       key={algo}
//                       className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
//                     >
//                       {algo}
//                     </span>
//                   ))}
//                   {topic.algorithms.length > 4 && (
//                     <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
//                       +{topic.algorithms.length - 4} more
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Complexity */}
//               <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-500 dark:text-gray-400">Complexity:</span>
//                   <span className="text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
//                     {topic.complexity}
//                   </span>
//                 </div>
//               </div>

//               {/* Hover Effect */}
//               <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
//                   <span>Click to explore</span>
//                   <motion.div
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                     className="ml-2"
//                   >
//                     →
//                   </motion.div>
//                 </div>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
//       >
//         <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
//           Can't decide where to start?
//         </h2>
//         <p className="text-gray-600 dark:text-gray-400 mb-6">
//           Try our learning path recommendations based on your experience level
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <Link
//             to="/learn"
//             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
//           >
//             Beginner Path
//           </Link>
//           <Link
//             to="/quiz"
//             className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
//           >
//             Test Knowledge
//           </Link>
//           <Link
//             to="/games"
//             className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
//           >
//             Learn Through Games
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Topics;
































import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  ArrowUpDown,
  Search,
  Layers,
  Fuel as Queue,
  TreePine,
  Network,
  Hash,
  Route,
  ArrowRight,
  BrainCircuit,
  Lightbulb,
  Swords
} from 'lucide-react';

// Re-using the interactive background for consistency
const InteractiveBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px at ${x}px ${y}px, white, transparent)`
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
    <div className="fixed inset-0 bg-gray-900 -z-10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMDgzMzQ0IiBkPSJNMCAzMCBoMiB2MiBIMFYzMHptNCAwIGgyIHYyIEg0VjMwem00IDBoMiB2MiBIOFYzMHptNCAwIGgyIHYyIEgxMlYzMHptNCAwIGgyIHYyIEgxNlYzMHptNCAwIGgyIHYyIEgyMFYzMHptNCAwIGgyIHYyIEgyNFYzMHptNCAwIGgyIHYyIEgyOFYzMHoiLz48L3N2Zz4=')] opacity-30"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-900/70 via-gray-900 to-purple-900/70"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      />
    </div>
  );
};


const Topics: React.FC = () => {
  const topics = [
    {
      id: 'sorting',
      title: 'Sorting Algorithms',
      description: 'Master the art of arranging data. Visualize classic algorithms from Bubble to Quick Sort.',
      icon: ArrowUpDown,
      color: 'from-blue-500 to-cyan-400',
      algorithms: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort'],
      complexity: 'O(n log n)'
    },
    {
      id: 'searching',
      title: 'Searching Algorithms',
      description: 'Efficiently find information. Explore the trade-offs between Linear and Binary search.',
      icon: Search,
      color: 'from-green-500 to-emerald-400',
      algorithms: ['Linear Search', 'Binary Search', 'Jump Search', 'Interpolation Search'],
      complexity: 'O(log n)'
    },
    {
      id: 'stack',
      title: 'Stack',
      description: 'Understand the Last-In, First-Out (LIFO) principle through interactive operations.',
      icon: Layers,
      color: 'from-purple-500 to-pink-400',
      algorithms: ['Push', 'Pop', 'Peek', 'IsEmpty'],
      complexity: 'O(1)'
    },
    {
      id: 'queue',
      title: 'Queue',
      description: 'Explore the First-In, First-Out (FIFO) data structure, the backbone of scheduling.',
      icon: Queue,
      color: 'from-orange-500 to-red-400',
      algorithms: ['Enqueue', 'Dequeue', 'Front', 'Circular Queue'],
      complexity: 'O(1)'
    },
    {
      id: 'tree',
      title: 'Tree Data Structures',
      description: 'Dive into hierarchical data with Binary Search Trees and various traversal methods.',
      icon: TreePine,
      color: 'from-teal-500 to-green-400',
      algorithms: ['Inorder', 'Preorder', 'Postorder', 'BST Operations'],
      complexity: 'O(n)'
    },
    {
      id: 'graph',
      title: 'Graph Algorithms',
      description: 'Navigate complex networks with BFS, DFS, and shortest path algorithms like Dijkstra\'s.',
      icon: Network,
      color: 'from-rose-500 to-fuchsia-400',
      algorithms: ['DFS', 'BFS', 'Dijkstra\'s', 'Kruskal\'s', 'Prim\'s'],
      complexity: 'O(V+E)'
    },
    {
      id: 'hashing',
      title: 'Hashing',
      description: 'Discover the magic of constant-time lookups with hash tables and collision resolution.',
      icon: Hash,
      color: 'from-indigo-500 to-violet-400',
      algorithms: ['Chaining', 'Linear Probing', 'Quadratic Probing'],
      complexity: 'O(1) Avg.'
    },
    {
      id: 'dynamic',
      title: 'Dynamic Programming',
      description: 'Solve complex problems by breaking them down into simpler subproblems.',
      icon: Route,
      color: 'from-yellow-500 to-amber-400',
      algorithms: ['Fibonacci', 'Knapsack', 'LCS', 'Coin Change'],
      complexity: 'Varies'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <div className="min-h-screen text-gray-100 font-sans bg-gray-900">
      <InteractiveBackground />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex justify-center mb-6"
            variants={itemVariants}
          >
            <motion.div 
              className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Network className="h-8 w-8 text-cyan-400" />
            </motion.div>
          </motion.div>
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            Algorithm & Data Structure Library
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Select a topic to enter our interactive visualizer. Deconstruct complex algorithms into simple, animated steps.
          </motion.p>
        </motion.div>

        {/* Topics Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-lg`}></div>
              <Link
                to={`/visualization/${topic.id}`}
                className="relative block h-full p-6 bg-gray-800/80 backdrop-blur-md rounded-2xl border border-cyan-500/20 overflow-hidden"
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-4">
                       <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${topic.color} rounded-xl shadow-lg group-hover:scale-105 group-hover:-rotate-6 transition-transform duration-300`}>
                        <topic.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{topic.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{topic.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.algorithms.slice(0, 3).map((algo) => (
                        <span key={algo} className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                          {algo}
                        </span>
                      ))}
                      {topic.algorithms.length > 3 && (
                        <span className="px-2.5 py-1 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-full border border-gray-600/50">
                          +{topic.algorithms.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="border-t border-cyan-500/20 pt-4 mt-auto">
                     <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Complexity</span>
                      <span className="font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">{topic.complexity}</span>
                    </div>
                     <div className="mt-4 flex items-center justify-end text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Launch</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-24 p-10 relative rounded-3xl border border-cyan-500/20 bg-gray-800/50 backdrop-blur-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 blur-xl -z-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for a Challenge?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Theory is one thing, practice is another. Solidify your understanding by solving problems or engaging in our interactive learning games.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/quiz">
                <motion.button
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center space-x-2.5 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-xl shadow-lg overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-500 group-hover:w-full"></span>
                  <Lightbulb className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Test Your Knowledge</span>
                </motion.button>
              </Link>
              <Link to="/games">
                <motion.button
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center space-x-2.5 px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-xl shadow-lg overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-500 group-hover:w-full"></span>
                  <Swords className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Learn Through Games</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default Topics;
