import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Book, 
  Code, 
  Clock, 
  Zap, 
  CheckCircle,
  ArrowLeft,
  Copy,
  ExternalLink
} from 'lucide-react';
import toast from 'react-hot-toast';

const Learn: React.FC = () => {
  const { topic } = useParams();
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble');

  const algorithms = {
    bubble: {
      name: 'Bubble Sort',
      description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
      timeComplexity: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)' },
      spaceComplexity: 'O(1)',
      stability: 'Stable',
      type: 'Comparison-based',
      pseudocode: `
ALGORITHM BubbleSort(arr[])
BEGIN
    n = length(arr)
    FOR i = 0 TO n-2 DO
        FOR j = 0 TO n-2-i DO
            IF arr[j] > arr[j+1] THEN
                SWAP arr[j] AND arr[j+1]
            END IF
        END FOR
    END FOR
END`,
      code: {
        javascript: `function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        // Flag to optimize - if no swaps occur, array is sorted
        let swapped = false;
        
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // If no swapping occurred, array is already sorted
        if (!swapped) break;
    }
    
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort([...array]));`,
        python: `def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n - 1):
        # Flag to optimize - if no swaps occur, array is sorted
        swapped = False
        
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        # If no swapping occurred, array is already sorted
        if not swapped:
            break
    
    return arr

# Example usage
array = [64, 34, 25, 12, 22, 11, 90]
print("Original array:", array)
print("Sorted array:", bubble_sort(array.copy()))`,
        java: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 0; i < n - 1; i++) {
            // Flag to optimize - if no swaps occur, array is sorted
            boolean swapped = false;
            
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            // If no swapping occurred, array is already sorted
            if (!swapped) break;
        }
    }
    
    public static void main(String[] args) {
        int[] array = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original array: " + Arrays.toString(array));
        
        bubbleSort(array);
        System.out.println("Sorted array: " + Arrays.toString(array));
    }
}`,
        cpp: `#include <iostream>
#include <vector>

void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    
    for (int i = 0; i < n - 1; i++) {
        // Flag to optimize - if no swaps occur, array is sorted
        bool swapped = false;
        
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        
        // If no swapping occurred, array is already sorted
        if (!swapped) break;
    }
}

int main() {
    std::vector<int> array = {64, 34, 25, 12, 22, 11, 90};
    
    std::cout << "Original array: ";
    for (int x : array) std::cout << x << " ";
    std::cout << std::endl;
    
    bubbleSort(array);
    
    std::cout << "Sorted array: ";
    for (int x : array) std::cout << x << " ";
    std::cout << std::endl;
    
    return 0;
}`
      },
      applications: [
        'Educational purposes - easy to understand and implement',
        'Small datasets where simplicity is preferred over efficiency',
        'Situations where memory usage must be minimized (in-place sorting)',
        'When stability is required (preserves relative order of equal elements)'
      ],
      advantages: [
        'Simple implementation and easy to understand',
        'No additional memory space needed (in-place sorting)',
        'Stable sorting algorithm',
        'Can detect if the list is already sorted'
      ],
      disadvantages: [
        'Poor time complexity O(n²) for average and worst cases',
        'More writes compared to other sorting algorithms',
        'Not suitable for large datasets',
        'Generally outperformed by other O(n²) algorithms like insertion sort'
      ]
    },
    // Add more algorithms here...
  };

  const topics = [
    { id: 'sorting', name: 'Sorting Algorithms', algorithms: ['bubble', 'selection', 'insertion', 'merge', 'quick', 'heap'] },
    { id: 'searching', name: 'Searching Algorithms', algorithms: ['linear', 'binary'] },
    { id: 'stack', name: 'Stack Operations', algorithms: ['push', 'pop', 'peek'] },
    { id: 'queue', name: 'Queue Operations', algorithms: ['enqueue', 'dequeue', 'front', 'rear'] }
  ];

  const languages = [
    { id: 'javascript', name: 'JavaScript', color: 'text-yellow-600' },
    { id: 'python', name: 'Python', color: 'text-blue-600' },
    { id: 'java', name: 'Java', color: 'text-red-600' },
    { id: 'cpp', name: 'C++', color: 'text-purple-600' }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Code copied to clipboard!');
  };

  const currentAlgorithm = algorithms[selectedAlgorithm as keyof typeof algorithms] || algorithms.bubble;

  if (!topic) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learn DSA
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive learning materials for Data Structures and Algorithms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topicItem, index) => (
            <motion.div
              key={topicItem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link
                to={`/learn/${topicItem.id}`}
                className="block p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Book className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {topicItem.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Learn about {topicItem.algorithms.length} different algorithms with detailed explanations and code examples.
                </p>
                <div className="flex flex-wrap gap-2">
                  {topicItem.algorithms.slice(0, 3).map((algo) => (
                    <span
                      key={algo}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {algo.charAt(0).toUpperCase() + algo.slice(1)}
                    </span>
                  ))}
                  {topicItem.algorithms.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                      +{topicItem.algorithms.length - 3} more
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const currentTopic = topics.find(t => t.id === topic);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link
          to="/learn"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Topics</span>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          {currentTopic?.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed explanations, code examples, and complexity analysis
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Algorithm Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Select Algorithm
            </h3>
            <div className="space-y-2">
              {currentTopic?.algorithms.map((algo) => (
                <button
                  key={algo}
                  onClick={() => setSelectedAlgorithm(algo)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    selectedAlgorithm === algo
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {algo.charAt(0).toUpperCase() + algo.slice(1)}
                  {topic === 'sorting' && ' Sort'}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-5 w-5 text-orange-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Quick Stats
              </h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Time Complexity</div>
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1">
                  {currentAlgorithm.timeComplexity.average}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Space Complexity</div>
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1">
                  {currentAlgorithm.spaceComplexity}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Stability</div>
                <div className={`text-sm font-medium ${currentAlgorithm.stability === 'Stable' ? 'text-green-600' : 'text-red-600'}`}>
                  {currentAlgorithm.stability}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Algorithm Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Book className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {currentAlgorithm.name}
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {currentAlgorithm.description}
            </p>

            {/* Complexity Table */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Complexity Analysis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Time Complexity</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Best:</span>
                      <span className="font-mono text-green-600">{currentAlgorithm.timeComplexity.best}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Average:</span>
                      <span className="font-mono text-yellow-600">{currentAlgorithm.timeComplexity.average}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Worst:</span>
                      <span className="font-mono text-red-600">{currentAlgorithm.timeComplexity.worst}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Properties</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Space:</span>
                      <span className="font-mono text-blue-600">{currentAlgorithm.spaceComplexity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Stability:</span>
                      <span className={`font-medium ${currentAlgorithm.stability === 'Stable' ? 'text-green-600' : 'text-red-600'}`}>
                        {currentAlgorithm.stability}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Type:</span>
                      <span className="text-gray-700 dark:text-gray-300">{currentAlgorithm.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Try It Button */}
            <div className="text-center">
              <Link
                to={`/visualization/${topic}`}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Try Interactive Visualization</span>
              </Link>
            </div>
          </motion.div>

          {/* Pseudocode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Pseudocode
                </h2>
              </div>
              <button
                onClick={() => copyToClipboard(currentAlgorithm.pseudocode)}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                title="Copy pseudocode"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed">
              <code>{currentAlgorithm.pseudocode}</code>
            </pre>
          </motion.div>

          {/* Code Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Implementation
                </h2>
              </div>
              <button
                onClick={() => copyToClipboard(currentAlgorithm.code[selectedLanguage as keyof typeof currentAlgorithm.code])}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                title="Copy code"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedLanguage === lang.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <span className={lang.color}>{lang.name}</span>
                </button>
              ))}
            </div>
            
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed">
              <code>{currentAlgorithm.code[selectedLanguage as keyof typeof currentAlgorithm.code]}</code>
            </pre>
          </motion.div>

          {/* Applications & Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Advantages */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200/50 dark:border-green-700/50 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                  Advantages
                </h3>
              </div>
              <ul className="space-y-2">
                {currentAlgorithm.advantages.map((advantage, index) => (
                  <li key={index} className="text-green-700 dark:text-green-300 text-sm">
                    • {advantage}
                  </li>
                ))}
              </ul>
            </div>

            {/* Disadvantages */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200/50 dark:border-red-700/50 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
                  Disadvantages
                </h3>
              </div>
              <ul className="space-y-2">
                {currentAlgorithm.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="text-red-700 dark:text-red-300 text-sm">
                    • {disadvantage}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 p-6"
          >
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
              Real-world Applications
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentAlgorithm.applications.map((application, index) => (
                <li key={index} className="text-blue-700 dark:text-blue-300 text-sm">
                  • {application}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Learn;