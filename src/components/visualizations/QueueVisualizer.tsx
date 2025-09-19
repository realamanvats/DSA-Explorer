// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import toast from 'react-hot-toast';

// interface QueueVisualizerProps {
//   isPlaying: boolean;
//   speed: number;
//   algorithm: string;
//   onMetricsUpdate: (metrics: any) => void;
//   onComplete: () => void;
// }

// const QueueVisualizer: React.FC<QueueVisualizerProps> = ({
//   isPlaying,
//   speed,
//   algorithm,
//   onMetricsUpdate,
//   onComplete
// }) => {
//   const [queue, setQueue] = useState<number[]>([]);
//   const [inputValue, setInputValue] = useState<string>('');
//   const [maxSize] = useState<number>(8);
//   const [operations, setOperations] = useState<number>(0);
//   const [lastOperation, setLastOperation] = useState<string>('');
//   const [front, setFront] = useState<number>(0);
//   const [rear, setRear] = useState<number>(-1);

//   useEffect(() => {
//     onMetricsUpdate({
//       comparisons: 0,
//       swaps: 0,
//       steps: operations,
//       timeComplexity: 'O(1)',
//       spaceComplexity: 'O(n)'
//     });
//   }, [operations, onMetricsUpdate]);

//   const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

//   const enqueue = async (value: number) => {
//     if (queue.length >= maxSize) {
//       toast.error('Queue Overflow! Cannot enqueue to full queue.');
//       return;
//     }

//     setLastOperation(`ENQUEUE ${value}`);
//     await sleep(1100 - speed);
    
//     setQueue(prev => [...prev, value]);
//     setRear(prev => prev + 1);
//     setOperations(prev => prev + 1);
//     toast.success(`Enqueued ${value} to queue`);
//   };

//   const dequeue = async () => {
//     if (queue.length === 0) {
//       toast.error('Queue Underflow! Cannot dequeue from empty queue.');
//       return;
//     }

//     const dequeuedValue = queue[0];
//     setLastOperation(`DEQUEUE ${dequeuedValue}`);
//     await sleep(1100 - speed);
    
//     setQueue(prev => prev.slice(1));
//     if (queue.length === 1) {
//       setFront(0);
//       setRear(-1);
//     }
//     setOperations(prev => prev + 1);
//     toast.success(`Dequeued ${dequeuedValue} from queue`);
//   };

//   const getFront = async () => {
//     if (queue.length === 0) {
//       toast.error('Queue is empty! No front element.');
//       return;
//     }

//     const frontValue = queue[0];
//     setLastOperation(`FRONT ${frontValue}`);
//     await sleep(1100 - speed);
    
//     setOperations(prev => prev + 1);
//     toast.success(`Front element is ${frontValue}`);
//   };

//   const getRear = async () => {
//     if (queue.length === 0) {
//       toast.error('Queue is empty! No rear element.');
//       return;
//     }

//     const rearValue = queue[queue.length - 1];
//     setLastOperation(`REAR ${rearValue}`);
//     await sleep(1100 - speed);
    
//     setOperations(prev => prev + 1);
//     toast.success(`Rear element is ${rearValue}`);
//   };

//   const handleEnqueue = () => {
//     const value = parseInt(inputValue);
//     if (isNaN(value)) {
//       toast.error('Please enter a valid number');
//       return;
//     }
//     enqueue(value);
//     setInputValue('');
//   };

//   const handleDequeue = () => {
//     dequeue();
//   };

//   const handleFront = () => {
//     getFront();
//   };

//   const handleRear = () => {
//     getRear();
//   };

//   const clearQueue = () => {
//     setQueue([]);
//     setOperations(0);
//     setLastOperation('CLEAR');
//     setFront(0);
//     setRear(-1);
//     toast.success('Queue cleared');
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
//           Queue Operations (FIFO - First In, First Out)
//         </h3>
        
//         {/* Controls */}
//         <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
//           <div className="flex items-center space-x-2">
//             <input
//               type="number"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               placeholder="Enter value"
//               className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleEnqueue}
//               disabled={queue.length >= maxSize}
//               className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
//             >
//               Enqueue
//             </motion.button>
//           </div>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleDequeue}
//             disabled={queue.length === 0}
//             className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
//           >
//             Dequeue
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleFront}
//             disabled={queue.length === 0}
//             className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
//           >
//             Front
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleRear}
//             disabled={queue.length === 0}
//             className="px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
//           >
//             Rear
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={clearQueue}
//             className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
//           >
//             Clear
//           </motion.button>
//         </div>
//       </div>

//       {/* Queue Visualization */}
//       <div className="relative">
//         <div className="flex flex-col items-center">
//           {/* Direction Labels */}
//           <div className="flex justify-between w-full max-w-2xl mb-4">
//             <div className="text-sm text-red-600 dark:text-red-400 font-medium">← DEQUEUE (Front)</div>
//             <div className="text-sm text-green-600 dark:text-green-400 font-medium">ENQUEUE (Rear) →</div>
//           </div>
          
//           {/* Queue Container */}
//           <div className="flex items-center justify-center min-h-24 p-4 border-2 border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 overflow-x-auto">
//             {queue.length === 0 ? (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-gray-500 dark:text-gray-400 text-center py-8"
//               >
//                 Empty Queue
//               </motion.div>
//             ) : (
//               <div className="flex items-center space-x-2">
//                 <AnimatePresence>
//                   {queue.map((value, index) => (
//                     <motion.div
//                       key={`${index}-${value}`}
//                       initial={{ x: 60, opacity: 0, scale: 0.8 }}
//                       animate={{ 
//                         x: 0, 
//                         opacity: 1, 
//                         scale: 1,
//                         boxShadow: index === 0 ? '0 0 20px rgba(239, 68, 68, 0.5)' : 
//                                   index === queue.length - 1 ? '0 0 20px rgba(34, 197, 94, 0.5)' : 
//                                   '0 2px 4px rgba(0,0,0,0.1)'
//                       }}
//                       exit={{ x: -60, opacity: 0, scale: 0.8 }}
//                       transition={{ duration: 0.3 }}
//                       className={`relative w-16 h-16 flex items-center justify-center text-white font-bold rounded-lg ${
//                         index === 0 ? 'bg-red-500' : 
//                         index === queue.length - 1 ? 'bg-green-500' : 
//                         'bg-gray-500'
//                       }`}
//                     >
//                       {value}
//                       {index === 0 && queue.length > 1 && (
//                         <motion.div
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           className="absolute -top-8 text-red-600 dark:text-red-400 text-xs font-medium"
//                         >
//                           FRONT
//                         </motion.div>
//                       )}
//                       {index === queue.length - 1 && queue.length > 1 && (
//                         <motion.div
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           className="absolute -bottom-8 text-green-600 dark:text-green-400 text-xs font-medium"
//                         >
//                           REAR
//                         </motion.div>
//                       )}
//                       {queue.length === 1 && (
//                         <motion.div
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           className="absolute -top-8 text-blue-600 dark:text-blue-400 text-xs font-medium"
//                         >
//                           FRONT & REAR
//                         </motion.div>
//                       )}
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             )}
//           </div>
          
//           {/* Queue Info */}
//           <div className="mt-4 text-center">
//             <div className="text-sm text-gray-600 dark:text-gray-400">
//               Size: <span className="font-bold text-blue-600">{queue.length}</span> / {maxSize}
//             </div>
//             {queue.length > 0 && (
//               <div className="flex justify-center space-x-4 mt-2 text-sm">
//                 <div className="text-gray-600 dark:text-gray-400">
//                   Front: <span className="font-bold text-red-600">{queue[0]}</span>
//                 </div>
//                 <div className="text-gray-600 dark:text-gray-400">
//                   Rear: <span className="font-bold text-green-600">{queue[queue.length - 1]}</span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Operation Info */}
//       {lastOperation && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-center"
//         >
//           <p className="text-blue-800 dark:text-blue-300 font-medium">
//             Last Operation: <span className="font-mono">{lastOperation}</span>
//           </p>
//         </motion.div>
//       )}

//       {/* Queue Properties */}
//       <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
//         <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Queue Properties:</h4>
//         <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
//           <li>• <strong>FIFO:</strong> First In, First Out principle</li>
//           <li>• <strong>Enqueue:</strong> Add element to rear (O(1))</li>
//           <li>• <strong>Dequeue:</strong> Remove element from front (O(1))</li>
//           <li>• <strong>Front:</strong> View front element without removing (O(1))</li>
//           <li>• <strong>Rear:</strong> View rear element without removing (O(1))</li>
//           <li>• <strong>Overflow:</strong> Cannot enqueue to full queue</li>
//           <li>• <strong>Underflow:</strong> Cannot dequeue from empty queue</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default QueueVisualizer;










import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { LogIn, LogOut, Eye, History, Trash2, Terminal } from 'lucide-react';

interface QueueVisualizerProps {
  isPlaying: boolean;
  speed: number;
  algorithm: string;
  onMetricsUpdate: (metrics: any) => void;
  onComplete: () => void;
}

const QueueVisualizer: React.FC<QueueVisualizerProps> = ({
  speed,
  onMetricsUpdate,
}) => {
  const [queue, setQueue] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [maxSize] = useState<number>(8);
  const [operations, setOperations] = useState<number>(0);
  const [lastOperation, setLastOperation] = useState<string>('');
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  useEffect(() => {
    onMetricsUpdate({
      comparisons: 0,
      swaps: 0,
      steps: operations,
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(n)',
    });
  }, [operations, onMetricsUpdate]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const operationSpeed = 1100 - speed;

  const enqueue = async (value: number) => {
    if (queue.length >= maxSize) {
      toast.error('Queue Overflow! Cannot enqueue to a full queue.');
      return;
    }

    setLastOperation(`ENQUEUE ${value}`);
    setOperations(prev => prev + 1);
    await sleep(operationSpeed / 2);
    
    setQueue(prev => [...prev, value]);
    toast.success(`Enqueued ${value}`);
  };

  const dequeue = async () => {
    if (queue.length === 0) {
      toast.error('Queue Underflow! Cannot dequeue from an empty queue.');
      return;
    }

    const dequeuedValue = queue[0];
    setLastOperation(`DEQUEUE ${dequeuedValue}`);
    setOperations(prev => prev + 1);
    await sleep(operationSpeed / 2);
    
    setQueue(prev => prev.slice(1));
    toast.success(`Dequeued ${dequeuedValue}`);
  };

  const highlightAndShow = async (index: number, operation: string, message: string) => {
     if (queue.length === 0) {
      toast.error('Queue is empty!');
      return;
    }
    setLastOperation(`${operation} ${queue[index]}`);
    setOperations(prev => prev + 1);
    setHighlightedIndex(index);
    await sleep(operationSpeed);
    toast.success(message);
    setHighlightedIndex(null);
  }

  const handleEnqueue = () => {
    const value = parseInt(inputValue);
    if (isNaN(value) || inputValue.trim() === '') {
      toast.error('Please enter a valid number.');
      return;
    }
    enqueue(value);
    setInputValue('');
  };

  const clearQueue = () => {
    setQueue([]);
    setOperations(0);
    setLastOperation('CLEAR');
    toast.success('Queue cleared');
  };
  
  const renderLastOperation = () => {
    if (!lastOperation) return null;
    const [command, value] = lastOperation.split(' ');
    let color = 'text-cyan-400';
    if (command === 'ENQUEUE') color = 'text-green-400';
    if (command === 'DEQUEUE') color = 'text-red-400';
    if (command === 'CLEAR') color = 'text-yellow-400';

    return (
       <motion.div
        key={lastOperation + operations}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-cyan-500/10"
      >
        <Terminal className="h-5 w-5 text-gray-400"/>
        <p className="font-mono text-sm">
          <span className="text-gray-400">Last Operation: </span>
          <span className={color}>{command}</span>
          {value && <span className="text-white"> {value}</span>}
        </p>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Controls */}
      <div className="p-4 mb-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-cyan-500/10 shadow-lg">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center flex-grow sm:flex-grow-0">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Value..."
              className="w-28 bg-gray-900/50 text-white placeholder-gray-500 border border-gray-600 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleEnqueue}
              disabled={queue.length >= maxSize}
              className="group relative inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-r-lg shadow-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-500 group-hover:w-full"></span>
              <LogIn className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Enqueue</span>
            </motion.button>
          </div>
          
          <motion.button whileTap={{ scale: 0.95 }} onClick={dequeue} disabled={queue.length === 0} className="control-button from-red-500 to-orange-500"><LogOut className="h-4 w-4 relative z-10" /> <span className="relative z-10">Dequeue</span></motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => highlightAndShow(0, 'FRONT', `Front element is ${queue[0]}`)} disabled={queue.length === 0} className="control-button from-blue-500 to-cyan-500"><Eye className="h-4 w-4 relative z-10" /> <span className="relative z-10">Front</span></motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => highlightAndShow(queue.length - 1, 'REAR', `Rear element is ${queue[queue.length-1]}`)} disabled={queue.length === 0} className="control-button from-purple-500 to-violet-500"><History className="h-4 w-4 relative z-10" /> <span className="relative z-10">Rear</span></motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={clearQueue} className="control-button from-gray-500 to-gray-600"><Trash2 className="h-4 w-4 relative z-10" /> <span className="relative z-10">Clear</span></motion.button>
        </div>
      </div>

      {/* Queue Visualization */}
      <div className="relative p-6 bg-gray-900/70 rounded-2xl border border-cyan-500/10 min-h-[200px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyan-500/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
        <div className="w-full">
            <div className="flex justify-between w-full mb-4 px-4">
              <div className="font-mono text-sm text-red-400">← FRONT (DEQUEUE)</div>
              <div className="font-mono text-sm text-green-400">(ENQUEUE) REAR →</div>
            </div>
            
            <div className="flex items-center justify-start min-h-[80px] p-4 bg-black/30 rounded-lg space-x-4 overflow-x-auto">
                <AnimatePresence>
                  {queue.length === 0 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full text-center font-mono text-gray-500">
                      [ QUEUE IS EMPTY ]
                    </motion.div>
                  ) : (
                    queue.map((value, index) => {
                      const isFront = index === 0;
                      const isRear = index === queue.length - 1;
                      const isHighlighted = highlightedIndex === index;
                      
                      let glowClass = '';
                      if (isHighlighted) glowClass = 'shadow-[0_0_20px_theme(colors.yellow.400)] border-yellow-400';
                      else if(isFront) glowClass = 'shadow-[0_0_20px_theme(colors.red.500)] border-red-500/80';
                      else if (isRear) glowClass = 'shadow-[0_0_20px_theme(colors.green.500)] border-green-500/80';
                      
                      return (
                        <motion.div
                          layout
                          key={`${index}-${value}`}
                          initial={{ x: 60, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -60, opacity: 0, scale: 0.8 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          className={`relative shrink-0 w-16 h-16 flex items-center justify-center text-xl font-bold text-white rounded-lg bg-gray-800/50 backdrop-blur-sm border transition-all duration-300 ${glowClass}`}
                        >
                          {value}
                          {(isFront || isRear || isHighlighted) && (
                            <div className={`absolute -top-6 text-xs font-mono
                              ${isHighlighted ? 'text-yellow-400' : isFront ? 'text-red-400' : 'text-green-400'}`}>
                              {isHighlighted ? 'PEEK' : isFront && isRear ? 'FRONT/REAR' : isFront ? 'FRONT' : 'REAR'}
                            </div>
                          )}
                        </motion.div>
                      )
                    })
                  )}
                </AnimatePresence>
            </div>

            <div className="mt-4 text-center font-mono text-sm text-gray-400">
              Size: <span className="font-bold text-cyan-400">{queue.length}</span> / {maxSize}
            </div>
        </div>
      </div>

      {/* Info Panels */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {renderLastOperation()}
        
        <div className="p-4 bg-gray-800/50 rounded-lg border border-cyan-500/10">
          <h4 className="font-semibold text-white mb-2">Queue Properties:</h4>
          <ul className="text-sm text-gray-400 space-y-1 font-mono">
            <li>• <strong className="text-cyan-400">FIFO:</strong> First In, First Out</li>
            <li>• <strong className="text-cyan-400">Time Complexity:</strong> O(1) for all core operations</li>
            <li>• <strong className="text-cyan-400">Use Cases:</strong> Buffers, Schedulers, BFS Traversal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QueueVisualizer;

// Add this to your main CSS file for the control buttons and grid background
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .control-button {
    @apply group relative inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r text-white font-bold rounded-lg shadow-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed;
  }
  .control-button > span {
     @apply absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-500 group-hover:w-full;
  }
}

@layer utilities {
    .bg-grid-cyan-500\/10 {
        background-image: linear-gradient(theme(colors.cyan.500/10) 1px, transparent 1px), linear-gradient(to right, theme(colors.cyan.500/10) 1px, transparent 1px);
        background-size: 2rem 2rem;
    }
}
*/
