import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipForward, 
  SkipBack,
  Settings,
  Info,
  TrendingUp
} from 'lucide-react';
import SortingVisualizer from '../components/visualizations/SortingVisualizer';
import SearchingVisualizer from '../components/visualizations/SearchingVisualizer';
import StackVisualizer from '../components/visualizations/StackVisualizer';
import QueueVisualizer from '../components/visualizations/QueueVisualizer';

const Visualization: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [showSettings, setShowSettings] = useState(false);
  const [algorithm, setAlgorithm] = useState('');
  const [metrics, setMetrics] = useState({
    comparisons: 0,
    swaps: 0,
    steps: 0,
    timeComplexity: '',
    spaceComplexity: ''
  });

  const getVisualizationInfo = (type: string) => {
    const info = {
      sorting: {
        title: 'Sorting Algorithms',
        description: 'Watch how different sorting algorithms organize data',
        algorithms: ['bubble', 'selection', 'insertion', 'merge', 'quick', 'heap']
      },
      searching: {
        title: 'Searching Algorithms',
        description: 'See how algorithms find elements in data structures',
        algorithms: ['linear', 'binary']
      },
      stack: {
        title: 'Stack Operations',
        description: 'LIFO (Last In, First Out) data structure operations',
        algorithms: ['push', 'pop', 'peek']
      },
      queue: {
        title: 'Queue Operations',
        description: 'FIFO (First In, First Out) data structure operations',
        algorithms: ['enqueue', 'dequeue', 'front', 'rear']
      }
    };
    return info[type as keyof typeof info] || info.sorting;
  };

  const visualizationInfo = getVisualizationInfo(type || 'sorting');

  useEffect(() => {
    if (visualizationInfo.algorithms.length > 0) {
      setAlgorithm(visualizationInfo.algorithms[0]);
    }
  }, [type]);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleReset = () => {
    setIsPlaying(false);
    setMetrics({ comparisons: 0, swaps: 0, steps: 0, timeComplexity: '', spaceComplexity: '' });
  };

  const renderVisualizer = () => {
    const commonProps = {
      isPlaying,
      speed,
      algorithm,
      onMetricsUpdate: setMetrics,
      onComplete: () => setIsPlaying(false)
    };

    switch (type) {
      case 'sorting':
        return <SortingVisualizer {...commonProps} />;
      case 'searching':
        return <SearchingVisualizer {...commonProps} />;
      case 'stack':
        return <StackVisualizer {...commonProps} />;
      case 'queue':
        return <QueueVisualizer {...commonProps} />;
      default:
        return <SortingVisualizer {...commonProps} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          {visualizationInfo.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {visualizationInfo.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Visualization Area */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6"
          >
            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <select
                  value={algorithm}
                  onChange={(e) => setAlgorithm(e.target.value)}
                  className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {visualizationInfo.algorithms.map((algo) => (
                    <option key={algo} value={algo}>
                      {algo.charAt(0).toUpperCase() + algo.slice(1)} 
                      {type === 'sorting' ? ' Sort' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleReset()}
                  className="p-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors"
                  title="Reset"
                >
                  <RotateCcw className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={isPlaying ? handlePause : handlePlay}
                  className={`p-2 rounded-lg transition-colors ${
                    isPlaying 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  title="Settings"
                >
                  <Settings className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            {/* Speed Control */}
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Animation Speed: {1100 - speed}ms delay
                </label>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>Fast</span>
                  <span>Slow</span>
                </div>
              </motion.div>
            )}

            {/* Visualization Component */}
            <div className="min-h-[400px] flex items-center justify-center">
              {renderVisualizer()}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Metrics
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Comparisons:</span>
                <span className="font-mono font-bold text-blue-600">{metrics.comparisons}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Swaps:</span>
                <span className="font-mono font-bold text-green-600">{metrics.swaps}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Steps:</span>
                <span className="font-mono font-bold text-purple-600">{metrics.steps}</span>
              </div>
              {metrics.timeComplexity && (
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Time Complexity:</div>
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {metrics.timeComplexity}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Algorithm Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Info className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Algorithm Info
              </h3>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>
                Current: <span className="font-medium text-gray-800 dark:text-gray-200">
                  {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)}
                  {type === 'sorting' ? ' Sort' : ''}
                </span>
              </p>
              <p>
                Type: <span className="font-medium text-gray-800 dark:text-gray-200">
                  {visualizationInfo.title}
                </span>
              </p>
              <p className="pt-2 text-xs leading-relaxed">
                Watch the step-by-step execution and observe how the algorithm processes the data.
                Use the controls to pause, play, or reset the visualization.
              </p>
            </div>
          </motion.div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              💡 Quick Tips
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>• Use the speed slider to control animation pace</p>
              <p>• Watch the metrics panel for performance insights</p>
              <p>• Try different algorithms to compare behavior</p>
              <p>• Reset anytime to generate new data</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Visualization;