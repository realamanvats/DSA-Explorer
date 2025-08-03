import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpDown, Search, Layers, Fuel as Queue, TreePine, Network, Hash, Route } from 'lucide-react';

const Topics: React.FC = () => {
  const topics = [
    {
      id: 'sorting',
      title: 'Sorting Algorithms',
      description: 'Visualize Bubble, Selection, Insertion, Merge, Quick, and Heap Sort',
      icon: ArrowUpDown,
      color: 'from-blue-500 to-cyan-500',
      algorithms: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort'],
      complexity: 'O(n²) to O(n log n)'
    },
    {
      id: 'searching',
      title: 'Searching Algorithms',
      description: 'Interactive Linear and Binary Search demonstrations',
      icon: Search,
      color: 'from-green-500 to-emerald-500',
      algorithms: ['Linear Search', 'Binary Search', 'Jump Search', 'Interpolation Search'],
      complexity: 'O(n) to O(log n)'
    },
    {
      id: 'stack',
      title: 'Stack Operations',
      description: 'LIFO operations: Push, Pop, Peek with overflow/underflow handling',
      icon: Layers,
      color: 'from-purple-500 to-pink-500',
      algorithms: ['Push', 'Pop', 'Peek', 'IsEmpty', 'IsFull'],
      complexity: 'O(1) for all operations'
    },
    {
      id: 'queue',
      title: 'Queue Operations',
      description: 'FIFO operations: Enqueue, Dequeue with circular queue variants',
      icon: Queue,
      color: 'from-orange-500 to-red-500',
      algorithms: ['Enqueue', 'Dequeue', 'Front', 'Rear', 'Circular Queue'],
      complexity: 'O(1) for all operations'
    },
    {
      id: 'tree',
      title: 'Tree Traversals',
      description: 'Binary tree traversal algorithms and tree operations',
      icon: TreePine,
      color: 'from-teal-500 to-green-500',
      algorithms: ['Inorder', 'Preorder', 'Postorder', 'Level Order', 'BST Operations'],
      complexity: 'O(n) for traversals'
    },
    {
      id: 'graph',
      title: 'Graph Algorithms',
      description: 'Graph traversal and shortest path algorithms',
      icon: Network,
      color: 'from-rose-500 to-pink-500',
      algorithms: ['DFS', 'BFS', 'Dijkstra', 'Floyd-Warshall', 'Kruskal', 'Prim'],
      complexity: 'O(V + E) to O(V³)'
    },
    {
      id: 'hashing',
      title: 'Hashing Techniques',
      description: 'Hash table operations and collision resolution methods',
      icon: Hash,
      color: 'from-indigo-500 to-purple-500',
      algorithms: ['Linear Probing', 'Quadratic Probing', 'Chaining', 'Double Hashing'],
      complexity: 'O(1) average case'
    },
    {
      id: 'dynamic',
      title: 'Dynamic Programming',
      description: 'Classic DP problems with step-by-step solutions',
      icon: Route,
      color: 'from-yellow-500 to-orange-500',
      algorithms: ['Fibonacci', 'Knapsack', 'LCS', 'Edit Distance', 'Coin Change'],
      complexity: 'Varies by problem'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Explore Topics
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Choose a topic to dive into interactive visualizations and learn how algorithms work step by step
        </p>
      </motion.div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <Link
              to={`/visualization/${topic.id}`}
              className="block h-full p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${topic.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <topic.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Algorithms List */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Algorithms:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {topic.algorithms.slice(0, 4).map((algo) => (
                    <span
                      key={algo}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {algo}
                    </span>
                  ))}
                  {topic.algorithms.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
                      +{topic.algorithms.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Complexity */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Complexity:</span>
                  <span className="text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {topic.complexity}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
                  <span>Click to explore</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Can't decide where to start?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Try our learning path recommendations based on your experience level
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/learn"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Beginner Path
          </Link>
          <Link
            to="/quiz"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Test Knowledge
          </Link>
          <Link
            to="/games"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Learn Through Games
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Topics;