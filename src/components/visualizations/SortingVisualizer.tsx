import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface SortingVisualizerProps {
  isPlaying: boolean;
  speed: number;
  algorithm: string;
  onMetricsUpdate: (metrics: any) => void;
  onComplete: () => void;
}

const SortingVisualizer: React.FC<SortingVisualizerProps> = ({
  isPlaying,
  speed,
  algorithm,
  onMetricsUpdate,
  onComplete
}) => {
  const [array, setArray] = useState<number[]>([]);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const generateArray = useCallback(() => {
    const newArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * 300) + 10);
    setArray(newArray);
    setComparing([]);
    setSorted([]);
    setCurrentStep(0);
    setIsComplete(false);
    onMetricsUpdate({ comparisons: 0, swaps: 0, steps: 0, timeComplexity: getTimeComplexity(algorithm), spaceComplexity: getSpaceComplexity(algorithm) });
  }, [algorithm, onMetricsUpdate]);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const getTimeComplexity = (algo: string) => {
    const complexities = {
      bubble: 'O(n²)',
      selection: 'O(n²)',
      insertion: 'O(n²)',
      merge: 'O(n log n)',
      quick: 'O(n log n) avg, O(n²) worst',
      heap: 'O(n log n)'
    };
    return complexities[algo as keyof typeof complexities] || 'O(n²)';
  };

  const getSpaceComplexity = (algo: string) => {
    const complexities = {
      bubble: 'O(1)',
      selection: 'O(1)',
      insertion: 'O(1)',
      merge: 'O(n)',
      quick: 'O(log n)',
      heap: 'O(1)'
    };
    return complexities[algo as keyof typeof complexities] || 'O(1)';
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    const arr = [...array];
    let comparisons = 0;
    let swaps = 0;
    let steps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (!isPlaying) return;
        
        setComparing([j, j + 1]);
        comparisons++;
        steps++;
        onMetricsUpdate({ comparisons, swaps, steps, timeComplexity: getTimeComplexity(algorithm), spaceComplexity: getSpaceComplexity(algorithm) });
        
        await sleep(1100 - speed);
        
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swaps++;
          setArray([...arr]);
          onMetricsUpdate({ comparisons, swaps, steps, timeComplexity: getTimeComplexity(algorithm), spaceComplexity: getSpaceComplexity(algorithm) });
          await sleep(1100 - speed);
        }
      }
      setSorted(prev => [...prev, arr.length - 1 - i]);
    }
    setSorted(prev => [...prev, 0]);
    setComparing([]);
    setIsComplete(true);
    onComplete();
  };

  const selectionSort = async () => {
    const arr = [...array];
    let comparisons = 0;
    let swaps = 0;
    let steps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      setComparing([i]);
      
      for (let j = i + 1; j < arr.length; j++) {
        if (!isPlaying) return;
        
        setComparing([i, j, minIdx]);
        comparisons++;
        steps++;
        onMetricsUpdate({ comparisons, swaps, steps, timeComplexity: getTimeComplexity(algorithm), spaceComplexity: getSpaceComplexity(algorithm) });
        
        await sleep(1100 - speed);
        
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        swaps++;
        setArray([...arr]);
        onMetricsUpdate({ comparisons, swaps, steps, timeComplexity: getTimeComplexity(algorithm), spaceComplexity: getSpaceComplexity(algorithm) });
        await sleep(1100 - speed);
      }
      
      setSorted(prev => [...prev, i]);
    }
    setSorted(prev => [...prev, arr.length - 1]);
    setComparing([]);
    setIsComplete(true);
    onComplete();
  };

  const insertionSort = async () => {
    const arr = [...array];
    let comparisons = 0;
    let swaps = 0;
    let steps = 0;
    setSorted([0]);

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      
      setComparing([i]);
      await sleep(1100 - speed);
      
      while (j >= 0 && arr[j] > key) {
        if (!isPlaying) return;
        
        setComparing([j, j + 1]);
        comparisons++;
        steps++;
        onMetricsUpdate({ comparisons, swaps, steps, timeComplexity: getTimeComplexity(algorithm), spaceComplexity: getSpaceComplexity(algorithm) });
        
        await sleep(1100 - speed);
        
        arr[j + 1] = arr[j];
        swaps++;
        setArray([...arr]);
        onMetricsUpdate({ comparisons, swaps, steps, timeComplexity: getTimeComplexity(algorithm), spaceComplexity: getSpaceComplexity(algorithm) });
        
        j--;
        await sleep(1100 - speed);
      }
      
      arr[j + 1] = key;
      setArray([...arr]);
      setSorted(prev => [...prev, i]);
    }
    
    setComparing([]);
    setIsComplete(true);
    onComplete();
  };

  useEffect(() => {
    if (isPlaying && !isComplete) {
      switch (algorithm) {
        case 'bubble':
          bubbleSort();
          break;
        case 'selection':
          selectionSort();
          break;
        case 'insertion':
          insertionSort();
          break;
        default:
          bubbleSort();
      }
    }
  }, [isPlaying, algorithm, array.length]);

  const getBarColor = (index: number) => {
    if (sorted.includes(index)) return 'bg-green-500';
    if (comparing.includes(index)) return 'bg-red-500';
    return 'bg-blue-400';
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort
        </h3>
        <button
          onClick={generateArray}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-sm"
        >
          Generate New Array
        </button>
      </div>
      
      <div className="flex items-end justify-center space-x-1 h-80 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
        {array.map((value, index) => (
          <motion.div
            key={`${index}-${value}`}
            className={`${getBarColor(index)} rounded-t transition-colors duration-200`}
            style={{
              height: `${(value / 300) * 280}px`,
              width: `${Math.max(800 / array.length - 2, 8)}px`,
            }}
            initial={{ height: 0 }}
            animate={{ height: `${(value / 300) * 280}px` }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      
      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg"
        >
          <p className="text-green-800 dark:text-green-300 font-medium">
            🎉 Sorting Complete! Array is now sorted.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SortingVisualizer;