import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Target, 
  Puzzle, 
  Zap,
  Play,
  RotateCcw,
  Trophy
} from 'lucide-react';

const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [gameScore, setGameScore] = useState(0);

  const games = [
    {
      id: 'guess-algorithm',
      title: 'Guess the Algorithm',
      description: 'Watch the visualization and guess which sorting algorithm is being used',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'Easy',
      points: 100
    },
    {
      id: 'fix-code',
      title: 'Fix the Code',
      description: 'Drag and drop code blocks to fix broken algorithm implementations',
      icon: Puzzle,
      color: 'from-green-500 to-emerald-500',
      difficulty: 'Medium',
      points: 200
    },
    {
      id: 'algorithm-race',
      title: 'Algorithm Race',
      description: 'Choose your algorithm and race against others to sort the array fastest',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      difficulty: 'Hard',
      points: 300
    }
  ];

  const GuessAlgorithmGame: React.FC = () => {
    const [currentRound, setCurrentRound] = useState(1);
    const [score, setScore] = useState(0);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);
    const [correctAnswer] = useState('bubble'); // This would be dynamic
    const [showResult, setShowResult] = useState(false);

    const algorithms = ['bubble', 'selection', 'insertion', 'merge', 'quick'];

    const handleGuess = () => {
      if (selectedAlgorithm === correctAnswer) {
        setScore(score + 100);
      }
      setShowResult(true);
    };

    const nextRound = () => {
      setCurrentRound(currentRound + 1);
      setSelectedAlgorithm(null);
      setShowResult(false);
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Guess the Algorithm
          </h3>
          <div className="flex justify-center space-x-6 text-sm">
            <span>Round: {currentRound}/5</span>
            <span>Score: {score}</span>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-8 text-center">
          <div className="h-48 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500 dark:text-gray-400"
            >
              🎬 Algorithm Visualization Playing...
            </motion.div>
          </div>
        </div>

        {!showResult ? (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Which sorting algorithm is this?
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {algorithms.map((algo) => (
                <button
                  key={algo}
                  onClick={() => setSelectedAlgorithm(algo)}
                  className={`p-3 rounded-lg font-medium transition-all ${
                    selectedAlgorithm === algo
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {algo.charAt(0).toUpperCase() + algo.slice(1)} Sort
                </button>
              ))}
            </div>
            <button
              onClick={handleGuess}
              disabled={!selectedAlgorithm}
              className="w-full py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors"
            >
              Submit Guess
            </button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className={`text-2xl font-bold ${
              selectedAlgorithm === correctAnswer ? 'text-green-600' : 'text-red-600'
            }`}>
              {selectedAlgorithm === correctAnswer ? '🎉 Correct!' : '❌ Wrong!'}
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              The correct answer was: <strong>{correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1)} Sort</strong>
            </p>
            {currentRound < 5 ? (
              <button
                onClick={nextRound}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Next Round
              </button>
            ) : (
              <div className="space-y-2">
                <div className="text-xl font-bold text-purple-600">
                  Game Complete! Final Score: {score}/500
                </div>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  Play Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const FixCodeGame: React.FC = () => {
    const [draggedBlock, setDraggedBlock] = useState<string | null>(null);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [codeBlocks, setCodeBlocks] = useState([
      'for (int i = 0; i < n-1; i++)',
      'if (arr[j] > arr[j+1])',
      'swap(arr[j], arr[j+1])',
      'for (int j = 0; j < n-1-i; j++)'
    ]);
    const [correctOrder] = useState([
      'for (int i = 0; i < n-1; i++)',
      'for (int j = 0; j < n-1-i; j++)',
      'if (arr[j] > arr[j+1])',
      'swap(arr[j], arr[j+1])'
    ]);
    const [userOrder, setUserOrder] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleDragStart = (block: string, index: number) => {
      setDraggedBlock(block);
      setDraggedIndex(index);
    };

    const handleDrop = (targetIndex: number) => {
      if (draggedBlock && draggedIndex !== null) {
        const newOrder = [...userOrder];
        newOrder[targetIndex] = draggedBlock;
        
        // Remove the dragged block from available blocks
        const newCodeBlocks = [...codeBlocks];
        newCodeBlocks.splice(draggedIndex, 1);
        setCodeBlocks(newCodeBlocks);
        
        setDraggedBlock(null);
        setDraggedIndex(null);
      }
    };

    const handleRemoveFromOrder = (index: number) => {
      const removedBlock = userOrder[index];
      if (removedBlock) {
        const newOrder = [...userOrder];
        newOrder[index] = '';
        setUserOrder(newOrder);
        setCodeBlocks([...codeBlocks, removedBlock]);
      }
    };

    const checkSolution = () => {
      const correct = userOrder.every((block, index) => block === correctOrder[index]);
      setIsCorrect(correct);
      setShowResult(true);
    };

    const resetGame = () => {
      setCodeBlocks([
        'for (int i = 0; i < n-1; i++)',
        'if (arr[j] > arr[j+1])',
        'swap(arr[j], arr[j+1])',
        'for (int j = 0; j < n-1-i; j++)'
      ]);
      setUserOrder(['', '', '', '']);
      setShowResult(false);
      setIsCorrect(false);
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Fix the Code
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Drag the code blocks to the correct positions to fix the Bubble Sort algorithm
          </p>
        </div>

        {!showResult ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Available Blocks */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Available Code Blocks:</h4>
            <div className="space-y-2">
              {codeBlocks.map((block, index) => (
                <motion.div
                  key={block}
                  draggable
                  onDragStart={(e) => {
                    handleDragStart(block, index);
                    e.dataTransfer.effectAllowed = 'move';
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-200 rounded-xl cursor-move font-mono text-sm border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {block}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Target Area */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Correct Order:</h4>
            <div className="space-y-2">
              {userOrder.map((block, index) => (
                <div
                  key={index}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleDrop(index);
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                  }}
                  className={`p-4 border-2 border-dashed rounded-xl min-h-[60px] flex items-center justify-between font-mono text-sm transition-all duration-200 ${
                    block 
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 shadow-sm'
                      : 'bg-gray-50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
                >
                  <span>{block || `Drop code block ${index + 1} here`}</span>
                  {block && (
                    <button
                      onClick={() => handleRemoveFromOrder(index)}
                      className="ml-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            {userOrder.every(block => block !== '') && (
              <button
                onClick={checkSolution}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Check Solution
              </button>
            )}
          </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`p-8 rounded-2xl ${
                isCorrect 
                  ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700'
                  : 'bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 border-2 border-red-300 dark:border-red-700'
              }`}
            >
              <div className="text-6xl mb-4">
                {isCorrect ? '🎉' : '❌'}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
              }`}>
                {isCorrect ? 'Excellent! You fixed the algorithm!' : 'Not quite right. Try again!'}
              </h3>
              <p className={`text-lg mb-6 ${
                isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
              }`}>
                {isCorrect 
                  ? 'You successfully arranged the Bubble Sort algorithm in the correct order!'
                  : 'The code blocks are not in the correct order. Review the algorithm logic and try again.'
                }
              </p>
              
              {!isCorrect && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Hint:</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Bubble Sort uses nested loops. The outer loop controls the number of passes, 
                    and the inner loop compares adjacent elements and swaps them if needed.
                  </p>
                </div>
              )}
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Correct Order:</h4>
                {correctOrder.map((block, index) => (
                  <div key={index} className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200">
                    {index + 1}. {block}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <button
              onClick={resetGame}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    );
  };

  const AlgorithmRaceGame: React.FC = () => {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);
    const [raceStarted, setRaceStarted] = useState(false);
    const [raceResults, setRaceResults] = useState<any[]>([]);

    const algorithms = [
      { name: 'bubble', speed: 1, color: 'bg-red-500' },
      { name: 'selection', speed: 1.2, color: 'bg-blue-500' },
      { name: 'insertion', speed: 1.5, color: 'bg-green-500' },
      { name: 'merge', speed: 3, color: 'bg-purple-500' },
      { name: 'quick', speed: 2.8, color: 'bg-yellow-500' }
    ];

    const startRace = () => {
      if (!selectedAlgorithm) return;
      setRaceStarted(true);
      
      // Simulate race results
      setTimeout(() => {
        const results = algorithms
          .map(algo => ({
            ...algo,
            time: (Math.random() * 2 + 1) / algo.speed,
            position: Math.floor(Math.random() * 5) + 1
          }))
          .sort((a, b) => a.time - b.time)
          .map((algo, index) => ({ ...algo, position: index + 1 }));
        
        setRaceResults(results);
      }, 3000);
    };

    if (!raceStarted) {
      return (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Algorithm Race
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Choose your algorithm and watch them race to sort an array!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {algorithms.map((algo) => (
              <button
                key={algo.name}
                onClick={() => setSelectedAlgorithm(algo.name)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedAlgorithm === algo.name
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div className={`w-full h-4 ${algo.color} rounded mb-2`}></div>
                <div className="font-semibold text-gray-800 dark:text-gray-200">
                  {algo.name.charAt(0).toUpperCase() + algo.name.slice(1)} Sort
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Speed: {algo.speed}x
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={startRace}
            disabled={!selectedAlgorithm}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold text-lg rounded-xl transition-all"
          >
            🏁 Start Race!
          </button>
        </div>
      );
    }

    if (raceResults.length === 0) {
      return (
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Race in Progress...
          </h3>
          <div className="space-y-4">
            {algorithms.map((algo) => (
              <div key={algo.name} className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {algo.name.charAt(0).toUpperCase() + algo.name.slice(1)}
                </div>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-8 relative overflow-hidden">
                  <motion.div
                    className={`${algo.color} h-full rounded-full`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ 
                      duration: 3,
                      ease: "easeInOut",
                      delay: Math.random() * 0.5
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            🏁 Race Results!
          </h3>
        </div>

        <div className="space-y-3">
          {raceResults.map((result, index) => (
            <motion.div
              key={result.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center space-x-4 p-4 rounded-xl ${
                result.name === selectedAlgorithm
                  ? 'bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-400'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                #{result.position}
              </div>
              <div className={`w-6 h-6 ${result.color} rounded`}></div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 dark:text-gray-200">
                  {result.name.charAt(0).toUpperCase() + result.name.slice(1)} Sort
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Time: {result.time.toFixed(2)}s
                </div>
              </div>
              {result.position === 1 && <Trophy className="h-6 w-6 text-yellow-500" />}
              {result.name === selectedAlgorithm && (
                <div className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                  Your Pick
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => {
            setRaceStarted(false);
            setRaceResults([]);
            setSelectedAlgorithm(null);
          }}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Race Again
        </button>
      </div>
    );
  };

  const renderGame = () => {
    switch (selectedGame) {
      case 'guess-algorithm':
        return <GuessAlgorithmGame />;
      case 'fix-code':
        return <FixCodeGame />;
      case 'algorithm-race':
        return <AlgorithmRaceGame />;
      default:
        return null;
    }
  };

  if (selectedGame) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setSelectedGame(null)}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              ← Back to Games
            </button>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Trophy className="h-4 w-4" />
              <span>Score: {gameScore}</span>
            </div>
          </div>
          
          {renderGame()}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
          <Gamepad2 className="h-12 w-12 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Learning Games
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Make learning DSA fun and interactive through engaging games and challenges
        </p>
      </motion.div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group cursor-pointer"
            onClick={() => setSelectedGame(game.id)}
          >
            <div className="h-full p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${game.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <game.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {game.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {game.description}
                </p>
              </div>

              {/* Game Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Difficulty:</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    game.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                    game.difficulty === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' :
                    'bg-red-100 dark:bg-red-900/30 text-red-600'
                  }`}>
                    {game.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Points:</span>
                  <span className="text-sm font-bold text-purple-600">{game.points}</span>
                </div>
              </div>

              {/* Play Button */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center text-purple-600 dark:text-purple-400 font-medium">
                  <Play className="h-4 w-4 mr-2" />
                  <span>Play Game</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Why Learn Through Games?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-3">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Interactive Learning</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Engage with algorithms through hands-on activities that make complex concepts easier to understand
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl mb-3">
              <Trophy className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Progress Tracking</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Earn points and track your progress as you master different algorithms and data structures
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-3">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Instant Feedback</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get immediate feedback on your choices and learn from mistakes in a fun, low-pressure environment
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Games;