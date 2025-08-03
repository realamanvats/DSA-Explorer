import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

interface StackVisualizerProps {
  isPlaying: boolean;
  speed: number;
  algorithm: string;
  onMetricsUpdate: (metrics: any) => void;
  onComplete: () => void;
}

const StackVisualizer: React.FC<StackVisualizerProps> = ({
  isPlaying,
  speed,
  algorithm,
  onMetricsUpdate,
  onComplete
}) => {
  const [stack, setStack] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [maxSize] = useState<number>(8);
  const [operations, setOperations] = useState<number>(0);
  const [lastOperation, setLastOperation] = useState<string>('');

  useEffect(() => {
    onMetricsUpdate({
      comparisons: 0,
      swaps: 0,
      steps: operations,
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(n)'
    });
  }, [operations, onMetricsUpdate]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const push = async (value: number) => {
    if (stack.length >= maxSize) {
      toast.error('Stack Overflow! Cannot push to full stack.');
      return;
    }

    setLastOperation(`PUSH ${value}`);
    await sleep(1100 - speed);
    
    setStack(prev => [...prev, value]);
    setOperations(prev => prev + 1);
    toast.success(`Pushed ${value} to stack`);
  };

  const pop = async () => {
    if (stack.length === 0) {
      toast.error('Stack Underflow! Cannot pop from empty stack.');
      return;
    }

    const poppedValue = stack[stack.length - 1];
    setLastOperation(`POP ${poppedValue}`);
    await sleep(1100 - speed);
    
    setStack(prev => prev.slice(0, -1));
    setOperations(prev => prev + 1);
    toast.success(`Popped ${poppedValue} from stack`);
  };

  const peek = async () => {
    if (stack.length === 0) {
      toast.error('Stack is empty! Nothing to peek.');
      return;
    }

    const topValue = stack[stack.length - 1];
    setLastOperation(`PEEK ${topValue}`);
    await sleep(1100 - speed);
    
    setOperations(prev => prev + 1);
    toast.success(`Top element is ${topValue}`);
  };

  const handlePush = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      toast.error('Please enter a valid number');
      return;
    }
    push(value);
    setInputValue('');
  };

  const handlePop = () => {
    pop();
  };

  const handlePeek = () => {
    peek();
  };

  const clearStack = () => {
    setStack([]);
    setOperations(0);
    setLastOperation('CLEAR');
    toast.success('Stack cleared');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Stack Operations (LIFO - Last In, First Out)
        </h3>
        
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value"
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePush}
              disabled={stack.length >= maxSize}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
            >
              Push
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePop}
            disabled={stack.length === 0}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            Pop
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePeek}
            disabled={stack.length === 0}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            Peek
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearStack}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            Clear
          </motion.button>
        </div>
      </div>

      {/* Stack Visualization */}
      <div className="relative">
        <div className="flex flex-col items-center">
          {/* Stack Container */}
          <div className="relative border-2 border-gray-400 dark:border-gray-600 border-t-0 rounded-b-lg bg-white dark:bg-gray-800" 
               style={{ width: '200px', height: `${maxSize * 60 + 20}px` }}>
            
            {/* Stack Base */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-300 dark:bg-gray-600 rounded-b-lg"></div>
            
            {/* Stack Elements */}
            <AnimatePresence>
              {stack.map((value, index) => (
                <motion.div
                  key={`${index}-${value}`}
                  initial={{ y: -60, opacity: 0, scale: 0.8 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    boxShadow: index === stack.length - 1 ? '0 0 20px rgba(59, 130, 246, 0.5)' : '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  exit={{ y: -60, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute left-2 right-2 h-12 flex items-center justify-center text-white font-bold rounded-lg ${
                    index === stack.length - 1 ? 'bg-blue-500' : 'bg-gray-500'
                  }`}
                  style={{ 
                    bottom: `${20 + index * 52}px`,
                    zIndex: index + 1
                  }}
                >
                  {value}
                  {index === stack.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -right-16 text-blue-600 dark:text-blue-400 text-sm font-medium"
                    >
                      ← TOP
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Empty Stack Message */}
            {stack.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm"
              >
                Empty Stack
              </motion.div>
            )}
          </div>
          
          {/* Stack Pointer */}
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Size: <span className="font-bold text-blue-600">{stack.length}</span> / {maxSize}
            </div>
            {stack.length > 0 && (
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Top: <span className="font-bold text-green-600">{stack[stack.length - 1]}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Operation Info */}
      {lastOperation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-center"
        >
          <p className="text-blue-800 dark:text-blue-300 font-medium">
            Last Operation: <span className="font-mono">{lastOperation}</span>
          </p>
        </motion.div>
      )}

      {/* Stack Properties */}
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Stack Properties:</h4>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>• <strong>LIFO:</strong> Last In, First Out principle</li>
          <li>• <strong>Push:</strong> Add element to top (O(1))</li>
          <li>• <strong>Pop:</strong> Remove element from top (O(1))</li>
          <li>• <strong>Peek:</strong> View top element without removing (O(1))</li>
          <li>• <strong>Overflow:</strong> Cannot push to full stack</li>
          <li>• <strong>Underflow:</strong> Cannot pop from empty stack</li>
        </ul>
      </div>
    </div>
  );
};

export default StackVisualizer;