import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Clock, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Target,
  Award,
  BookOpen
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

const Quiz: React.FC = () => {
  const { topic } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the worst-case time complexity of Bubble Sort?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
      correct: 2,
      explanation: "Bubble Sort has O(n²) worst-case time complexity because it uses nested loops to compare and swap adjacent elements.",
      difficulty: 'easy',
      topic: 'sorting'
    },
    {
      id: 2,
      question: "Which sorting algorithm is stable and has O(n²) time complexity?",
      options: ["Quick Sort", "Heap Sort", "Insertion Sort", "Selection Sort"],
      correct: 2,
      explanation: "Insertion Sort is stable (preserves relative order of equal elements) and has O(n²) time complexity in the worst case.",
      difficulty: 'medium',
      topic: 'sorting'
    },
    {
      id: 3,
      question: "What is the space complexity of Binary Search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correct: 0,
      explanation: "Binary Search has O(1) space complexity for iterative implementation as it only uses a constant amount of extra space.",
      difficulty: 'easy',
      topic: 'searching'
    },
    {
      id: 4,
      question: "In a stack, which operation follows the LIFO principle?",
      options: ["Enqueue", "Dequeue", "Push/Pop", "Insert/Delete"],
      correct: 2,
      explanation: "Stack follows LIFO (Last In, First Out) principle with Push (to add) and Pop (to remove) operations.",
      difficulty: 'easy',
      topic: 'stack'
    },
    {
      id: 5,
      question: "What happens when you try to pop from an empty stack?",
      options: ["Returns null", "Returns 0", "Stack Underflow", "Stack Overflow"],
      correct: 2,
      explanation: "When trying to pop from an empty stack, it results in Stack Underflow condition.",
      difficulty: 'medium',
      topic: 'stack'
    },
    {
      id: 6,
      question: "Which end of a queue is used for insertion?",
      options: ["Front", "Rear", "Both ends", "Middle"],
      correct: 1,
      explanation: "In a queue, insertion (enqueue) happens at the rear end, following FIFO principle.",
      difficulty: 'easy',
      topic: 'queue'
    },
    {
      id: 7,
      question: "What is the best-case time complexity of Quick Sort?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correct: 1,
      explanation: "Quick Sort has O(n log n) best-case time complexity when the pivot divides the array into two equal halves.",
      difficulty: 'medium',
      topic: 'sorting'
    },
    {
      id: 8,
      question: "Binary Search can only be applied to:",
      options: ["Any array", "Sorted arrays", "Linked lists", "Trees only"],
      correct: 1,
      explanation: "Binary Search requires the array to be sorted to work correctly, as it depends on the divide-and-conquer approach.",
      difficulty: 'easy',
      topic: 'searching'
    }
  ];

  const filteredQuestions = topic 
    ? questions.filter(q => q.topic === topic).slice(0, 5)
    : questions.slice(0, 8);

  useEffect(() => {
    if (quizStarted && !showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleTimeUp();
    }
  }, [timeLeft, quizStarted, showResult]);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setTimeLeft(30);
    setShowResult(false);
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer || -1;
    setAnswers(newAnswers);

    if (selectedAnswer === filteredQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setShowResult(true);
    }
  };

  const handleTimeUp = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = -1;
    setAnswers(newAnswers);

    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setTimeLeft(30);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / filteredQuestions.length) * 100;
    if (percentage >= 80) return { message: "Excellent! 🏆", color: "text-green-600" };
    if (percentage >= 60) return { message: "Good Job! 👍", color: "text-blue-600" };
    if (percentage >= 40) return { message: "Keep Learning! 📚", color: "text-yellow-600" };
    return { message: "Need More Practice 💪", color: "text-red-600" };
  };

  if (!quizStarted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-8">
            <Trophy className="h-12 w-12 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              DSA Quiz Challenge
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Test your knowledge of Data Structures and Algorithms with our interactive quiz
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {filteredQuestions.length} Questions
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Carefully selected questions covering {topic || 'all topics'}
              </p>
            </div>
            
            <div className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                30 Seconds
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Time limit per question
              </p>
            </div>
            
            <div className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Instant Feedback
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Detailed explanations for each answer
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startQuiz}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg"
          >
            Start Quiz Challenge
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (showResult) {
    const scoreInfo = getScoreMessage();
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
            <Trophy className="h-16 w-16 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            Quiz Complete!
          </h1>
          
          <div className={`text-2xl font-bold mb-8 ${scoreInfo.color}`}>
            {scoreInfo.message}
          </div>

          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-4">
              {score}/{filteredQuestions.length}
            </div>
            <div className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {Math.round((score / filteredQuestions.length) * 100)}% Correct
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(score / filteredQuestions.length) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full"
              />
            </div>
          </div>

          {/* Detailed Results */}
          <div className="text-left space-y-4 mb-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Review Your Answers
            </h3>
            {filteredQuestions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6"
              >
                <div className="flex items-start space-x-3">
                  {answers[index] === question.correct ? (
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                      {question.question}
                    </h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">Correct Answer:</span> {question.options[question.correct]}
                    </div>
                    {answers[index] !== question.correct && answers[index] !== -1 && (
                      <div className="text-sm text-red-600 dark:text-red-400 mb-2">
                        <span className="font-medium">Your Answer:</span> {question.options[answers[index]]}
                      </div>
                    )}
                    <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      {question.explanation}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetQuiz}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Try Again</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/learn'}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Continue Learning</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQ = filteredQuestions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Question {currentQuestion + 1} of {filteredQuestions.length}
          </span>
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
            timeLeft <= 10 ? 'bg-red-100 dark:bg-red-900/30 text-red-600' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
          }`}>
            <Clock className="h-4 w-4" />
            <span className="font-mono font-bold">{timeLeft}s</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 mb-8"
        >
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                currentQ.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                currentQ.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' :
                'bg-red-100 dark:bg-red-900/30 text-red-600'
              }`}>
                {currentQ.difficulty.toUpperCase()}
              </span>
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">
                {currentQ.topic.toUpperCase()}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {currentQ.question}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 ${
                    selectedAnswer === index
                      ? 'bg-white text-blue-500'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next Button */}
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextQuestion}
          disabled={selectedAnswer === null}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
        >
          {currentQuestion === filteredQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </motion.button>
      </div>
    </div>
  );
};

export default Quiz;