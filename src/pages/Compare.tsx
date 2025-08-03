import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitCompare, 
  Plus, 
  X, 
  Clock, 
  HardDrive, 
  CheckCircle, 
  XCircle,
  Play,
  BarChart3
} from 'lucide-react';

interface Algorithm {
  id: string;
  name: string;
  category: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  stability: boolean;
  inPlace: boolean;
  recursive: boolean;
  useCases: string[];
  advantages: string[];
  disadvantages: string[];
}

const Compare: React.FC = () => {
  const [selectedAlgorithms, setSelectedAlgorithms] = useState<Algorithm[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [raceResults, setRaceResults] = useState<any[]>([]);
  const [showRace, setShowRace] = useState(false);

  const algorithms: Algorithm[] = [
    {
      id: 'bubble',
      name: 'Bubble Sort',
      category: 'Sorting',
      timeComplexity: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)' },
      spaceComplexity: 'O(1)',
      stability: true,
      inPlace: true,
      recursive: false,
      useCases: ['Educational purposes', 'Small datasets', 'Nearly sorted data'],
      advantages: ['Simple implementation', 'Stable', 'In-place', 'Can detect sorted arrays'],
      disadvantages: ['Poor performance on large datasets', 'Many unnecessary comparisons']
    },
    {
      id: 'quick',
      name: 'Quick Sort',
      category: 'Sorting',
      timeComplexity: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n²)' },
      spaceComplexity: 'O(log n)',
      stability: false,
      inPlace: true,
      recursive: true,
      useCases: ['General-purpose sorting', 'Large datasets', 'When average performance matters'],
      advantages: ['Fast average performance', 'In-place', 'Cache efficient'],
      disadvantages: ['Unstable', 'Poor worst-case performance', 'Not adaptive']
    },
    {
      id: 'merge',
      name: 'Merge Sort',
      category: 'Sorting',
      timeComplexity: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)' },
      spaceComplexity: 'O(n)',
      stability: true,
      inPlace: false,
      recursive: true,
      useCases: ['Stable sorting required', 'Guaranteed O(n log n)', 'External sorting'],
      advantages: ['Stable', 'Guaranteed performance', 'Good for linked lists'],
      disadvantages: ['Not in-place', 'Higher space complexity', 'Not adaptive']
    },
    {
      id: 'heap',
      name: 'Heap Sort',
      category: 'Sorting',
      timeComplexity: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)' },
      spaceComplexity: 'O(1)',
      stability: false,
      inPlace: true,
      recursive: false,
      useCases: ['Memory-constrained environments', 'Guaranteed performance', 'Priority queues'],
      advantages: ['In-place', 'Guaranteed O(n log n)', 'No recursion overhead'],
      disadvantages: ['Unstable', 'Not adaptive', 'Poor cache performance']
    },
    {
      id: 'insertion',
      name: 'Insertion Sort',
      category: 'Sorting',
      timeComplexity: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)' },
      spaceComplexity: 'O(1)',
      stability: true,
      inPlace: true,
      recursive: false,
      useCases: ['Small datasets', 'Nearly sorted data', 'Online algorithms'],
      advantages: ['Stable', 'In-place', 'Adaptive', 'Simple implementation'],
      disadvantages: ['Poor performance on large datasets', 'Many shifts required']
    },
    {
      id: 'linear',
      name: 'Linear Search',
      category: 'Searching',
      timeComplexity: { best: 'O(1)', average: 'O(n)', worst: 'O(n)' },
      spaceComplexity: 'O(1)',
      stability: true,
      inPlace: true,
      recursive: false,
      useCases: ['Unsorted data', 'Small datasets', 'Finding all occurrences'],
      advantages: ['Works on unsorted data', 'Simple implementation', 'No preprocessing'],
      disadvantages: ['Poor performance on large datasets', 'No early termination optimization']
    },
    {
      id: 'binary',
      name: 'Binary Search',
      category: 'Searching',
      timeComplexity: { best: 'O(1)', average: 'O(log n)', worst: 'O(log n)' },
      spaceComplexity: 'O(1)',
      stability: true,
      inPlace: true,
      recursive: false,
      useCases: ['Sorted data', 'Large datasets', 'Repeated searches'],
      advantages: ['Very fast on sorted data', 'Logarithmic time complexity', 'Space efficient'],
      disadvantages: ['Requires sorted data', 'Not suitable for dynamic data', 'More complex implementation']
    }
  ];

  const addAlgorithm = (algorithm: Algorithm) => {
    if (selectedAlgorithms.length < 4 && !selectedAlgorithms.find(a => a.id === algorithm.id)) {
      setSelectedAlgorithms([...selectedAlgorithms, algorithm]);
    }
    setShowAddModal(false);
  };

  const removeAlgorithm = (algorithmId: string) => {
    setSelectedAlgorithms(selectedAlgorithms.filter(a => a.id !== algorithmId));
  };

  const startRace = () => {
    setShowRace(true);
    // Simulate race with different performance characteristics
    const results = selectedAlgorithms.map(algo => {
      let time;
      switch (algo.id) {
        case 'bubble': time = 8.5 + Math.random() * 2; break;
        case 'quick': time = 2.1 + Math.random() * 0.5; break;
        case 'merge': time = 2.8 + Math.random() * 0.4; break;
        case 'heap': time = 3.2 + Math.random() * 0.6; break;
        case 'insertion': time = 6.2 + Math.random() * 1.5; break;
        case 'linear': time = 5.0 + Math.random() * 1.0; break;
        case 'binary': time = 0.1 + Math.random() * 0.05; break;
        default: time = 3.0 + Math.random() * 1.0;
      }
      return { ...algo, time };
    }).sort((a, b) => a.time - b.time);

    setTimeout(() => {
      setRaceResults(results);
    }, 3000);
  };

  const getComplexityColor = (complexity: string) => {
    if (complexity.includes('1') || complexity.includes('log n')) return 'text-green-600';
    if (complexity.includes('n²') || complexity.includes('2^n')) return 'text-red-600';
    return 'text-yellow-600';
  };

  const getComplexityBg = (complexity: string) => {
    if (complexity.includes('1') || complexity.includes('log n')) return 'bg-green-100 dark:bg-green-900/30';
    if (complexity.includes('n²') || complexity.includes('2^n')) return 'bg-red-100 dark:bg-red-900/30';
    return 'bg-yellow-100 dark:bg-yellow-900/30';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8">
          <GitCompare className="h-12 w-12 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Algorithm Comparison
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Compare algorithms side-by-side to understand their strengths, weaknesses, and optimal use cases
        </p>
      </motion.div>

      {/* Selected Algorithms Section */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Selected Algorithms ({selectedAlgorithms.length}/4)
          </h2>
          <div className="flex items-center space-x-4">
            {selectedAlgorithms.length >= 2 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startRace}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                <Play className="h-4 w-4" />
                <span>Performance Race</span>
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddModal(true)}
              disabled={selectedAlgorithms.length >= 4}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Algorithm</span>
            </motion.button>
          </div>
        </div>

        {selectedAlgorithms.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600">
            <GitCompare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Select algorithms to start comparing
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Add Your First Algorithm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {selectedAlgorithms.map((algorithm, index) => (
              <motion.div
                key={algorithm.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 relative"
              >
                <button
                  onClick={() => removeAlgorithm(algorithm.id)}
                  className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {algorithm.name}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {algorithm.category}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Time Complexity */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Time Complexity
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Best:</span>
                        <span className={`font-mono px-2 py-1 rounded ${getComplexityBg(algorithm.timeComplexity.best)} ${getComplexityColor(algorithm.timeComplexity.best)}`}>
                          {algorithm.timeComplexity.best}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Avg:</span>
                        <span className={`font-mono px-2 py-1 rounded ${getComplexityBg(algorithm.timeComplexity.average)} ${getComplexityColor(algorithm.timeComplexity.average)}`}>
                          {algorithm.timeComplexity.average}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Worst:</span>
                        <span className={`font-mono px-2 py-1 rounded ${getComplexityBg(algorithm.timeComplexity.worst)} ${getComplexityColor(algorithm.timeComplexity.worst)}`}>
                          {algorithm.timeComplexity.worst}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Space Complexity */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <HardDrive className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Space Complexity
                      </span>
                    </div>
                    <span className={`font-mono text-xs px-2 py-1 rounded ${getComplexityBg(algorithm.spaceComplexity)} ${getComplexityColor(algorithm.spaceComplexity)}`}>
                      {algorithm.spaceComplexity}
                    </span>
                  </div>

                  {/* Properties */}
                  <div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Properties
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center space-x-1">
                        {algorithm.stability ? <CheckCircle className="h-3 w-3 text-green-500" /> : <XCircle className="h-3 w-3 text-red-500" />}
                        <span>Stable</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {algorithm.inPlace ? <CheckCircle className="h-3 w-3 text-green-500" /> : <XCircle className="h-3 w-3 text-red-500" />}
                        <span>In-place</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {algorithm.recursive ? <CheckCircle className="h-3 w-3 text-green-500" /> : <XCircle className="h-3 w-3 text-red-500" />}
                        <span>Recursive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Detailed Comparison Table */}
      {selectedAlgorithms.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Detailed Comparison
          </h3>
          
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Property
                    </th>
                    {selectedAlgorithms.map((algorithm) => (
                      <th key={algorithm.id} className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {algorithm.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      Best Case
                    </td>
                    {selectedAlgorithms.map((algorithm) => (
                      <td key={algorithm.id} className="px-6 py-4 whitespace-nowrap">
                        <span className={`font-mono text-xs px-2 py-1 rounded ${getComplexityBg(algorithm.timeComplexity.best)} ${getComplexityColor(algorithm.timeComplexity.best)}`}>
                          {algorithm.timeComplexity.best}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      Average Case
                    </td>
                    {selectedAlgorithms.map((algorithm) => (
                      <td key={algorithm.id} className="px-6 py-4 whitespace-nowrap">
                        <span className={`font-mono text-xs px-2 py-1 rounded ${getComplexityBg(algorithm.timeComplexity.average)} ${getComplexityColor(algorithm.timeComplexity.average)}`}>
                          {algorithm.timeComplexity.average}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      Worst Case
                    </td>
                    {selectedAlgorithms.map((algorithm) => (
                      <td key={algorithm.id} className="px-6 py-4 whitespace-nowrap">
                        <span className={`font-mono text-xs px-2 py-1 rounded ${getComplexityBg(algorithm.timeComplexity.worst)} ${getComplexityColor(algorithm.timeComplexity.worst)}`}>
                          {algorithm.timeComplexity.worst}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      Space Complexity
                    </td>
                    {selectedAlgorithms.map((algorithm) => (
                      <td key={algorithm.id} className="px-6 py-4 whitespace-nowrap">
                        <span className={`font-mono text-xs px-2 py-1 rounded ${getComplexityBg(algorithm.spaceComplexity)} ${getComplexityColor(algorithm.spaceComplexity)}`}>
                          {algorithm.spaceComplexity}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      Stability
                    </td>
                    {selectedAlgorithms.map((algorithm) => (
                      <td key={algorithm.id} className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {algorithm.stability ? (
                            <>
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-green-600 text-sm">Stable</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4 text-red-500 mr-2" />
                              <span className="text-red-600 text-sm">Unstable</span>
                            </>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      In-place
                    </td>
                    {selectedAlgorithms.map((algorithm) => (
                      <td key={algorithm.id} className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {algorithm.inPlace ? (
                            <>
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-green-600 text-sm">Yes</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4 text-red-500 mr-2" />
                              <span className="text-red-600 text-sm">No</span>
                            </>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}

      {/* Use Cases and Recommendations */}
      {selectedAlgorithms.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {selectedAlgorithms.map((algorithm, index) => (
            <div key={algorithm.id} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6">
              <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                {algorithm.name} - Use Cases & Analysis
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">✅ Advantages</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {algorithm.advantages.map((advantage, i) => (
                      <li key={i}>• {advantage}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">❌ Disadvantages</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {algorithm.disadvantages.map((disadvantage, i) => (
                      <li key={i}>• {disadvantage}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">🎯 Best Used For</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {algorithm.useCases.map((useCase, i) => (
                      <li key={i}>• {useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Performance Race Modal */}
      <AnimatePresence>
        {showRace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowRace(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Performance Race
                  </h3>
                </div>
                <button
                  onClick={() => setShowRace(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {raceResults.length === 0 ? (
                <div className="text-center space-y-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    Racing algorithms on a dataset of 10,000 elements...
                  </p>
                  <div className="space-y-4">
                    {selectedAlgorithms.map((algo, index) => (
                      <div key={algo.id} className="flex items-center space-x-4">
                        <div className="w-32 text-sm font-medium text-gray-700 dark:text-gray-300">
                          {algo.name}
                        </div>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-6 relative overflow-hidden">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ 
                              duration: 3,
                              ease: "easeInOut",
                              delay: index * 0.2
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      🏁 Race Results
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Performance on 10,000 element dataset
                    </p>
                  </div>
                  
                  {raceResults.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center space-x-4 p-4 rounded-xl ${
                        index === 0 
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-400' 
                          : 'bg-gray-100 dark:bg-gray-700'
                      }`}
                    >
                      <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 w-8">
                        #{index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 dark:text-gray-200">
                          {result.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Time: {result.time.toFixed(3)}s
                        </div>
                      </div>
                      {index === 0 && (
                        <div className="text-yellow-500">
                          🏆 Winner
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => {
                        setRaceResults([]);
                        startRace();
                      }}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors mr-4"
                    >
                      Race Again
                    </button>
                    <button
                      onClick={() => setShowRace(false)}
                      className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Algorithm Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Select Algorithm to Compare
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {algorithms
                  .filter(algo => !selectedAlgorithms.find(selected => selected.id === algo.id))
                  .map((algorithm) => (
                    <motion.button
                      key={algorithm.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => addAlgorithm(algorithm)}
                      className="text-left p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-xl transition-colors"
                    >
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {algorithm.name}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                        {algorithm.category}
                      </p>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Time: {algorithm.timeComplexity.average} | Space: {algorithm.spaceComplexity}
                      </div>
                    </motion.button>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Compare;