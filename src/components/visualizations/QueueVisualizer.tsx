import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

interface QueueVisualizerProps {
  isPlaying: boolean;
  speed: number;
  algorithm: string;
  onMetricsUpdate: (metrics: any) => void;
  onComplete: () => void;
}

const QueueVisualizer: React.FC<QueueVisualizerProps> = ({
  isPlaying,
  speed,
  algorithm,
  onMetricsUpdate,
  onComplete
}) => {
  const [queue, setQueue] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [maxSize] = useState<number>(8);
  const [operations, setOperations] = useState<number>(0);
  const [lastOperation, setLastOperation] = useState<string>('');
  const [front, setFront] = useState<number>(0);
  const [rear, setRear] = useState<number>(-1);

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

  const enqueue = async (value: number) => {
    if (queue.length >= maxSize) {
      toast.error('Queue Overflow! Cannot enqueue to full queue.');
      return;
    }

    setLastOperation(`ENQUEUE ${value}`);
    await sleep(1100 - speed);
    
    setQueue(prev => [...prev, value]);
    setRear(prev => prev + 1);
    setOperations(prev => prev + 1);
    toast.success(`Enqueued ${value} to queue`);
  };

  const dequeue = async () => {
    if (queue.length === 0) {
      toast.error('Queue Underflow! Cannot dequeue from empty queue.');
      return;
    }

    const dequeuedValue = queue[0];
    setLastOperation(`DEQUEUE ${dequeuedValue}`);
    await sleep(1100 - speed);
    
    setQueue(prev => prev.slice(1));
    if (queue.length === 1) {
      setFront(0);
      setRear(-1);
    }
    setOperations(prev => prev + 1);
    toast.success(`Dequeued ${dequeuedValue} from queue`);
  };

  const getFront = async () => {
    if (queue.length === 0) {
      toast.error('Queue is empty! No front element.');
      return;
    }

    const frontValue = queue[0];
    setLastOperation(`FRONT ${frontValue}`);
    await sleep(1100 - speed);
    
    setOperations(prev => prev + 1);
    toast.success(`Front element is ${frontValue}`);
  };

  const getRear = async () => {
    if (queue.length === 0) {
      toast.error('Queue is empty! No rear element.');
      return;
    }

    const rearValue = queue[queue.length - 1];
    setLastOperation(`REAR ${rearValue}`);
    await sleep(1100 - speed);
    
    setOperations(prev => prev + 1);
    toast.success(`Rear element is ${rearValue}`);
  };

  const handleEnqueue = () => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      toast.error('Please enter a valid number');
      return;
    }
    enqueue(value);
    setInputValue('');
  };

  const handleDequeue = () => {
    dequeue();
  };

  const handleFront = () => {
    getFront();
  };

  const handleRear = () => {
    getRear();
  };

  const clearQueue = () => {
    setQueue([]);
    setOperations(0);
    setLastOperation('CLEAR');
    setFront(0);
    setRear(-1);
    toast.success('Queue cleared');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Queue Operations (FIFO - First In, First Out)
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
              onClick={handleEnqueue}
              disabled={queue.length >= maxSize}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
            >
              Enqueue
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDequeue}
            disabled={queue.length === 0}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            Dequeue
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFront}
            disabled={queue.length === 0}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            Front
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRear}
            disabled={queue.length === 0}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            Rear
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearQueue}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            Clear
          </motion.button>
        </div>
      </div>

      {/* Queue Visualization */}
      <div className="relative">
        <div className="flex flex-col items-center">
          {/* Direction Labels */}
          <div className="flex justify-between w-full max-w-2xl mb-4">
            <div className="text-sm text-red-600 dark:text-red-400 font-medium">← DEQUEUE (Front)</div>
            <div className="text-sm text-green-600 dark:text-green-400 font-medium">ENQUEUE (Rear) →</div>
          </div>
          
          {/* Queue Container */}
          <div className="flex items-center justify-center min-h-24 p-4 border-2 border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 overflow-x-auto">
            {queue.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 dark:text-gray-400 text-center py-8"
              >
                Empty Queue
              </motion.div>
            ) : (
              <div className="flex items-center space-x-2">
                <AnimatePresence>
                  {queue.map((value, index) => (
                    <motion.div
                      key={`${index}-${value}`}
                      initial={{ x: 60, opacity: 0, scale: 0.8 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1, 
                        scale: 1,
                        boxShadow: index === 0 ? '0 0 20px rgba(239, 68, 68, 0.5)' : 
                                  index === queue.length - 1 ? '0 0 20px rgba(34, 197, 94, 0.5)' : 
                                  '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                      exit={{ x: -60, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className={`relative w-16 h-16 flex items-center justify-center text-white font-bold rounded-lg ${
                        index === 0 ? 'bg-red-500' : 
                        index === queue.length - 1 ? 'bg-green-500' : 
                        'bg-gray-500'
                      }`}
                    >
                      {value}
                      {index === 0 && queue.length > 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute -top-8 text-red-600 dark:text-red-400 text-xs font-medium"
                        >
                          FRONT
                        </motion.div>
                      )}
                      {index === queue.length - 1 && queue.length > 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute -bottom-8 text-green-600 dark:text-green-400 text-xs font-medium"
                        >
                          REAR
                        </motion.div>
                      )}
                      {queue.length === 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute -top-8 text-blue-600 dark:text-blue-400 text-xs font-medium"
                        >
                          FRONT & REAR
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
          
          {/* Queue Info */}
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Size: <span className="font-bold text-blue-600">{queue.length}</span> / {maxSize}
            </div>
            {queue.length > 0 && (
              <div className="flex justify-center space-x-4 mt-2 text-sm">
                <div className="text-gray-600 dark:text-gray-400">
                  Front: <span className="font-bold text-red-600">{queue[0]}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Rear: <span className="font-bold text-green-600">{queue[queue.length - 1]}</span>
                </div>
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

      {/* Queue Properties */}
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Queue Properties:</h4>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>• <strong>FIFO:</strong> First In, First Out principle</li>
          <li>• <strong>Enqueue:</strong> Add element to rear (O(1))</li>
          <li>• <strong>Dequeue:</strong> Remove element from front (O(1))</li>
          <li>• <strong>Front:</strong> View front element without removing (O(1))</li>
          <li>• <strong>Rear:</strong> View rear element without removing (O(1))</li>
          <li>• <strong>Overflow:</strong> Cannot enqueue to full queue</li>
          <li>• <strong>Underflow:</strong> Cannot dequeue from empty queue</li>
        </ul>
      </div>
    </div>
  );
};

export default QueueVisualizer;