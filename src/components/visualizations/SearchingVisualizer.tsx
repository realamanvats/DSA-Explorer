import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface SearchingVisualizerProps {
  isPlaying: boolean;
  speed: number;
  algorithm: string;
  onMetricsUpdate: (metrics: any) => void;
  onComplete: () => void;
}

const SearchingVisualizer: React.FC<SearchingVisualizerProps> = ({
  isPlaying,
  speed,
  algorithm,
  onMetricsUpdate,
  onComplete
}) => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [found, setFound] = useState<boolean>(false);
  const [searchRange, setSearchRange] = useState<{ left: number; right: number }>({ left: -1, right: -1 });

  const generateArray = useCallback(() => {
    const newArray = Array.from({ length: 20 }, (_, i) => i * 5 + Math.floor(Math.random() * 5) + 1).sort((a, b) => a - b);
    setArray(newArray);
    setTarget(newArray[Math.floor(Math.random() * newArray.length)]);
    setCurrentIndex(-1);
    setFound(false);
    setSearchRange({ left: -1, right: -1 });
    onMetricsUpdate({ 
      comparisons: 0, 
      swaps: 0, 
      steps: 0, 
      timeComplexity: getTimeComplexity(algorithm), 
      spaceComplexity: 'O(1)' 
    });
  }, [algorithm, onMetricsUpdate]);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const getTimeComplexity = (algo: string) => {
    return algo === 'binary' ? 'O(log n)' : 'O(n)';
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const linearSearch = async () => {
    let comparisons = 0;
    let steps = 0;

    for (let i = 0; i < array.length; i++) {
      if (!isPlaying) return;
      
      setCurrentIndex(i);
      comparisons++;
      steps++;
      onMetricsUpdate({ 
        comparisons, 
        swaps: 0, 
        steps, 
        timeComplexity: getTimeComplexity(algorithm), 
        spaceComplexity: 'O(1)' 
      });
      
      await sleep(1100 - speed);
      
      if (array[i] === target) {
        setFound(true);
        onComplete();
        return;
      }
    }
    
    setCurrentIndex(-1);
    onComplete();
  };

  const binarySearch = async () => {
    let left = 0;
    let right = array.length - 1;
    let comparisons = 0;
    let steps = 0;

    setSearchRange({ left, right });

    while (left <= right) {
      if (!isPlaying) return;
      
      const mid = Math.floor((left + right) / 2);
      setCurrentIndex(mid);
      setSearchRange({ left, right });
      
      comparisons++;
      steps++;
      onMetricsUpdate({ 
        comparisons, 
        swaps: 0, 
        steps, 
        timeComplexity: getTimeComplexity(algorithm), 
        spaceComplexity: 'O(1)' 
      });
      
      await sleep(1100 - speed);
      
      if (array[mid] === target) {
        setFound(true);
        onComplete();
        return;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
      
      await sleep(1100 - speed);
    }
    
    setCurrentIndex(-1);
    setSearchRange({ left: -1, right: -1 });
    onComplete();
  };

  useEffect(() => {
    if (isPlaying && array.length > 0) {
      setFound(false);
      setCurrentIndex(-1);
      setSearchRange({ left: -1, right: -1 });
      
      switch (algorithm) {
        case 'linear':
          linearSearch();
          break;
        case 'binary':
          binarySearch();
          break;
        default:
          linearSearch();
      }
    }
  }, [isPlaying, algorithm, array.length, target]);

  const getBarColor = (index: number) => {
    if (found && index === currentIndex) return 'bg-green-500';
    if (index === currentIndex) return 'bg-red-500';
    if (algorithm === 'binary' && searchRange.left !== -1 && searchRange.right !== -1) {
      if (index >= searchRange.left && index <= searchRange.right) return 'bg-yellow-400';
    }
    return 'bg-blue-400';
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Search
        </h3>
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            <span className="text-gray-600 dark:text-gray-400">Target: </span>
            <span className="font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
              {target}
            </span>
          </div>
          <button
            onClick={generateArray}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-sm"
          >
            Generate New Array
          </button>
        </div>
      </div>
      
      <div className="flex items-end justify-center space-x-2 h-64 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
        {array.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              className={`${getBarColor(index)} rounded transition-colors duration-200 flex items-end justify-center text-white text-xs font-bold pb-1`}
              style={{
                height: `${(value / (Math.max(...array) + 10)) * 200}px`,
                width: '36px',
                minHeight: '30px'
              }}
              initial={{ scale: 1 }}
              animate={{ 
                scale: index === currentIndex ? 1.1 : 1,
                boxShadow: index === currentIndex ? '0 0 20px rgba(59, 130, 246, 0.5)' : '0 0 0px rgba(0,0,0,0)'
              }}
              transition={{ duration: 0.3 }}
            >
              {value}
            </motion.div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {index}
            </div>
          </div>
        ))}
      </div>

      {algorithm === 'binary' && searchRange.left !== -1 && searchRange.right !== -1 && (
        <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-300 text-sm">
            Current search range: [{searchRange.left}, {searchRange.right}]
            {currentIndex !== -1 && ` | Checking middle index: ${currentIndex}`}
          </p>
        </div>
      )}
      
      {found && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg"
        >
          <p className="text-green-800 dark:text-green-300 font-medium">
            🎉 Target {target} found at index {currentIndex}!
          </p>
        </motion.div>
      )}

      {!isPlaying && !found && currentIndex === -1 && array.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-4 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg"
        >
          <p className="text-red-800 dark:text-red-300 font-medium">
            Target {target} not found in the array.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SearchingVisualizer;