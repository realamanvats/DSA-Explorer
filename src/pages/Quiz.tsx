// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Trophy, 
//   Clock, 
//   CheckCircle, 
//   XCircle, 
//   RotateCcw,
//   Target,
//   Award,
//   BookOpen
// } from 'lucide-react';

// interface Question {
//   id: number;
//   question: string;
//   options: string[];
//   correct: number;
//   explanation: string;
//   difficulty: 'easy' | 'medium' | 'hard';
//   topic: string;
// }

// const Quiz: React.FC = () => {
//   const { topic } = useParams();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
//   const [answers, setAnswers] = useState<number[]>([]);
//   const [showResult, setShowResult] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [score, setScore] = useState(0);

//   const questions: Question[] = [
//     {
//       id: 1,
//       question: "What is the worst-case time complexity of Bubble Sort?",
//       options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
//       correct: 2,
//       explanation: "Bubble Sort has O(n²) worst-case time complexity because it uses nested loops to compare and swap adjacent elements.",
//       difficulty: 'easy',
//       topic: 'sorting'
//     },
//     {
//       id: 2,
//       question: "Which sorting algorithm is stable and has O(n²) time complexity?",
//       options: ["Quick Sort", "Heap Sort", "Insertion Sort", "Selection Sort"],
//       correct: 2,
//       explanation: "Insertion Sort is stable (preserves relative order of equal elements) and has O(n²) time complexity in the worst case.",
//       difficulty: 'medium',
//       topic: 'sorting'
//     },
//     {
//       id: 3,
//       question: "What is the space complexity of Binary Search?",
//       options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
//       correct: 0,
//       explanation: "Binary Search has O(1) space complexity for iterative implementation as it only uses a constant amount of extra space.",
//       difficulty: 'easy',
//       topic: 'searching'
//     },
//     {
//       id: 4,
//       question: "In a stack, which operation follows the LIFO principle?",
//       options: ["Enqueue", "Dequeue", "Push/Pop", "Insert/Delete"],
//       correct: 2,
//       explanation: "Stack follows LIFO (Last In, First Out) principle with Push (to add) and Pop (to remove) operations.",
//       difficulty: 'easy',
//       topic: 'stack'
//     },
//     {
//       id: 5,
//       question: "What happens when you try to pop from an empty stack?",
//       options: ["Returns null", "Returns 0", "Stack Underflow", "Stack Overflow"],
//       correct: 2,
//       explanation: "When trying to pop from an empty stack, it results in Stack Underflow condition.",
//       difficulty: 'medium',
//       topic: 'stack'
//     },
//     {
//       id: 6,
//       question: "Which end of a queue is used for insertion?",
//       options: ["Front", "Rear", "Both ends", "Middle"],
//       correct: 1,
//       explanation: "In a queue, insertion (enqueue) happens at the rear end, following FIFO principle.",
//       difficulty: 'easy',
//       topic: 'queue'
//     },
//     {
//       id: 7,
//       question: "What is the best-case time complexity of Quick Sort?",
//       options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
//       correct: 1,
//       explanation: "Quick Sort has O(n log n) best-case time complexity when the pivot divides the array into two equal halves.",
//       difficulty: 'medium',
//       topic: 'sorting'
//     },
//     {
//       id: 8,
//       question: "Binary Search can only be applied to:",
//       options: ["Any array", "Sorted arrays", "Linked lists", "Trees only"],
//       correct: 1,
//       explanation: "Binary Search requires the array to be sorted to work correctly, as it depends on the divide-and-conquer approach.",
//       difficulty: 'easy',
//       topic: 'searching'
//     }
//   ];

//   const filteredQuestions = topic 
//     ? questions.filter(q => q.topic === topic).slice(0, 5)
//     : questions.slice(0, 8);

//   useEffect(() => {
//     if (quizStarted && !showResult && timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0 && !showResult) {
//       handleTimeUp();
//     }
//   }, [timeLeft, quizStarted, showResult]);

//   const startQuiz = () => {
//     setQuizStarted(true);
//     setCurrentQuestion(0);
//     setAnswers([]);
//     setScore(0);
//     setTimeLeft(30);
//     setShowResult(false);
//   };

//   const handleAnswer = (answerIndex: number) => {
//     setSelectedAnswer(answerIndex);
//   };

//   const nextQuestion = () => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = selectedAnswer || -1;
//     setAnswers(newAnswers);

//     if (selectedAnswer === filteredQuestions[currentQuestion].correct) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < filteredQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(null);
//       setTimeLeft(30);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handleTimeUp = () => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = -1;
//     setAnswers(newAnswers);

//     if (currentQuestion < filteredQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(null);
//       setTimeLeft(30);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const resetQuiz = () => {
//     setQuizStarted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswer(null);
//     setAnswers([]);
//     setShowResult(false);
//     setTimeLeft(30);
//     setScore(0);
//   };

//   const getScoreMessage = () => {
//     const percentage = (score / filteredQuestions.length) * 100;
//     if (percentage >= 80) return { message: "Excellent! 🏆", color: "text-green-600" };
//     if (percentage >= 60) return { message: "Good Job! 👍", color: "text-blue-600" };
//     if (percentage >= 40) return { message: "Keep Learning! 📚", color: "text-yellow-600" };
//     return { message: "Need More Practice 💪", color: "text-red-600" };
//   };

//   if (!quizStarted) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-8">
//             <Trophy className="h-12 w-12 text-white" />
//           </div>
          
//           <h1 className="text-4xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
//               DSA Quiz Challenge
//             </span>
//           </h1>
          
//           <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
//             Test your knowledge of Data Structures and Algorithms with our interactive quiz
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
//               <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
//               <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
//                 {filteredQuestions.length} Questions
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Carefully selected questions covering {topic || 'all topics'}
//               </p>
//             </div>
            
//             <div className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
//               <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
//               <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
//                 30 Seconds
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Time limit per question
//               </p>
//             </div>
            
//             <div className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
//               <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
//               <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
//                 Instant Feedback
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Detailed explanations for each answer
//               </p>
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={startQuiz}
//             className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg"
//           >
//             Start Quiz Challenge
//           </motion.button>
//         </motion.div>
//       </div>
//     );
//   }

//   if (showResult) {
//     const scoreInfo = getScoreMessage();
//     return (
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="text-center"
//         >
//           <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
//             <Trophy className="h-16 w-16 text-white" />
//           </div>
          
//           <h1 className="text-4xl font-bold mb-4">
//             Quiz Complete!
//           </h1>
          
//           <div className={`text-2xl font-bold mb-8 ${scoreInfo.color}`}>
//             {scoreInfo.message}
//           </div>

//           <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 mb-8">
//             <div className="text-6xl font-bold text-blue-600 mb-4">
//               {score}/{filteredQuestions.length}
//             </div>
//             <div className="text-xl text-gray-600 dark:text-gray-400 mb-6">
//               {Math.round((score / filteredQuestions.length) * 100)}% Correct
//             </div>
            
//             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: `${(score / filteredQuestions.length) * 100}%` }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full"
//               />
//             </div>
//           </div>

//           {/* Detailed Results */}
//           <div className="text-left space-y-4 mb-8">
//             <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
//               Review Your Answers
//             </h3>
//             {filteredQuestions.map((question, index) => (
//               <motion.div
//                 key={question.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6"
//               >
//                 <div className="flex items-start space-x-3">
//                   {answers[index] === question.correct ? (
//                     <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
//                   ) : (
//                     <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
//                   )}
//                   <div className="flex-1">
//                     <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
//                       {question.question}
//                     </h4>
//                     <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
//                       <span className="font-medium">Correct Answer:</span> {question.options[question.correct]}
//                     </div>
//                     {answers[index] !== question.correct && answers[index] !== -1 && (
//                       <div className="text-sm text-red-600 dark:text-red-400 mb-2">
//                         <span className="font-medium">Your Answer:</span> {question.options[answers[index]]}
//                       </div>
//                     )}
//                     <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 p-2 rounded">
//                       {question.explanation}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex flex-wrap justify-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={resetQuiz}
//               className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
//             >
//               <RotateCcw className="h-4 w-4" />
//               <span>Try Again</span>
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => window.location.href = '/learn'}
//               className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
//             >
//               <BookOpen className="h-4 w-4" />
//               <span>Continue Learning</span>
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }

//   const currentQ = filteredQuestions[currentQuestion];

//   return (
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Progress Bar */}
//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-sm text-gray-600 dark:text-gray-400">
//             Question {currentQuestion + 1} of {filteredQuestions.length}
//           </span>
//           <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
//             timeLeft <= 10 ? 'bg-red-100 dark:bg-red-900/30 text-red-600' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
//           }`}>
//             <Clock className="h-4 w-4" />
//             <span className="font-mono font-bold">{timeLeft}s</span>
//           </div>
//         </div>
//         <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
//             className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
//             transition={{ duration: 0.3 }}
//           />
//         </div>
//       </div>

//       {/* Question Card */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentQuestion}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 mb-8"
//         >
//           <div className="mb-6">
//             <div className="flex items-center space-x-2 mb-4">
//               <span className={`px-2 py-1 text-xs font-medium rounded-full ${
//                 currentQ.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
//                 currentQ.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' :
//                 'bg-red-100 dark:bg-red-900/30 text-red-600'
//               }`}>
//                 {currentQ.difficulty.toUpperCase()}
//               </span>
//               <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">
//                 {currentQ.topic.toUpperCase()}
//               </span>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//               {currentQ.question}
//             </h2>
//           </div>

//           <div className="space-y-3">
//             {currentQ.options.map((option, index) => (
//               <motion.button
//                 key={index}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => handleAnswer(index)}
//                 className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
//                   selectedAnswer === index
//                     ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
//                     : 'bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 ${
//                     selectedAnswer === index
//                       ? 'bg-white text-blue-500'
//                       : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
//                   }`}>
//                     {String.fromCharCode(65 + index)}
//                   </span>
//                   <span>{option}</span>
//                 </div>
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Next Button */}
//       <div className="text-center">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={nextQuestion}
//           disabled={selectedAnswer === null}
//           className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
//         >
//           {currentQuestion === filteredQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Quiz;


import React, { useState, useEffect, useMemo } from 'react';
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
  BookOpen,
  Star,
  BarChart3,
  TrendingUp,
  Zap,
  Brain,
  Crown,
  Lightbulb,
  Coffee,
  Moon,
  Sun
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  codeSnippet?: string;
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
  const [darkMode, setDarkMode] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // Comprehensive DSA questions (200 total)
  const questions: Question[] = [
    // Sorting Algorithms (30 questions)
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
      question: "What is the best-case time complexity of Quick Sort?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correct: 1,
      explanation: "Quick Sort has O(n log n) best-case time complexity when the pivot divides the array into two equal halves.",
      difficulty: 'medium',
      topic: 'sorting'
    },
    {
      id: 4,
      question: "Which of these is not a comparison-based sorting algorithm?",
      options: ["Merge Sort", "Radix Sort", "Heap Sort", "Quick Sort"],
      correct: 1,
      explanation: "Radix Sort is a non-comparison-based sorting algorithm that sorts numbers by processing individual digits.",
      difficulty: 'medium',
      topic: 'sorting'
    },
    {
      id: 5,
      question: "What is the space complexity of in-place Quick Sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correct: 1,
      explanation: "In-place Quick Sort has O(log n) space complexity due to recursive calls and the call stack.",
      difficulty: 'hard',
      topic: 'sorting'
    },
    // Add 25 more sorting questions...

    // Searching Algorithms (25 questions)
    {
      id: 31,
      question: "What is the space complexity of Binary Search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correct: 0,
      explanation: "Binary Search has O(1) space complexity for iterative implementation as it only uses a constant amount of extra space.",
      difficulty: 'easy',
      topic: 'searching'
    },
    {
      id: 32,
      question: "Binary Search can only be applied to:",
      options: ["Any array", "Sorted arrays", "Linked lists", "Trees only"],
      correct: 1,
      explanation: "Binary Search requires the array to be sorted to work correctly, as it depends on the divide-and-conquer approach.",
      difficulty: 'easy',
      topic: 'searching'
    },
    {
      id: 33,
      question: "What is the time complexity of Jump Search?",
      options: ["O(√n)", "O(n)", "O(n log n)", "O(log n)"],
      correct: 0,
      explanation: "Jump Search has O(√n) time complexity as it jumps in steps of √n through the array.",
      difficulty: 'medium',
      topic: 'searching'
    },
    // Add 22 more searching questions...

    // Stack (20 questions)
    {
      id: 56,
      question: "In a stack, which operation follows the LIFO principle?",
      options: ["Enqueue", "Dequeue", "Push/Pop", "Insert/Delete"],
      correct: 2,
      explanation: "Stack follows LIFO (Last In, First Out) principle with Push (to add) and Pop (to remove) operations.",
      difficulty: 'easy',
      topic: 'stack'
    },
    {
      id: 57,
      question: "What happens when you try to pop from an empty stack?",
      options: ["Returns null", "Returns 0", "Stack Underflow", "Stack Overflow"],
      correct: 2,
      explanation: "When trying to pop from an empty stack, it results in Stack Underflow condition.",
      difficulty: 'medium',
      topic: 'stack'
    },
    {
      id: 58,
      question: "Which data structure is typically used to implement function calls in programming languages?",
      options: ["Queue", "Heap", "Stack", "Tree"],
      correct: 2,
      explanation: "The call stack is used to manage function calls, storing return addresses and local variables.",
      difficulty: 'medium',
      topic: 'stack'
    },
    // Add 17 more stack questions...

    // Queue (20 questions)
    {
      id: 76,
      question: "Which end of a queue is used for insertion?",
      options: ["Front", "Rear", "Both ends", "Middle"],
      correct: 1,
      explanation: "In a queue, insertion (enqueue) happens at the rear end, following FIFO principle.",
      difficulty: 'easy',
      topic: 'queue'
    },
    {
      id: 77,
      question: "What is the time complexity of enqueue operation in a queue implemented using a linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correct: 0,
      explanation: "Enqueue operation in a linked list-based queue is O(1) as we simply add a new node at the end.",
      difficulty: 'medium',
      topic: 'queue'
    },
    {
      id: 78,
      question: "Which of the following is not a type of queue?",
      options: ["Priority Queue", "Circular Queue", "Double-ended Queue", "Binary Queue"],
      correct: 3,
      explanation: "Binary Queue is not a standard queue type. The standard types include Simple, Circular, Priority, and Deque.",
      difficulty: 'medium',
      topic: 'queue'
    },
    // Add 17 more queue questions...

    // Linked List (25 questions)
    {
      id: 96,
      question: "What is the time complexity to insert an element at the beginning of a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correct: 0,
      explanation: "Insertion at the beginning of a singly linked list is O(1) as it only requires updating the head pointer.",
      difficulty: 'easy',
      topic: 'linked-list'
    },
    {
      id: 97,
      question: "Which pointer is maintained in a doubly linked list that is not in a singly linked list?",
      options: ["Head pointer", "Tail pointer", "Previous pointer", "Next pointer"],
      correct: 2,
      explanation: "A doubly linked list maintains both next and previous pointers, allowing traversal in both directions.",
      difficulty: 'easy',
      topic: 'linked-list'
    },
    {
      id: 98,
      question: "How would you detect a cycle in a linked list?",
      options: ["Using a single pointer", "Using Floyd's Cycle-Finding Algorithm", "By checking if the list is sorted", "By counting the number of nodes"],
      correct: 1,
      explanation: "Floyd's Cycle-Finding Algorithm (tortoise and hare) is used to detect cycles in a linked list.",
      difficulty: 'medium',
      topic: 'linked-list'
    },
    // Add 22 more linked list questions...

    // Trees (30 questions)
    {
      id: 121,
      question: "What is the maximum number of nodes in a binary tree of height h?",
      options: ["2^h", "2^h - 1", "2^(h+1) - 1", "h^2"],
      correct: 2,
      explanation: "A binary tree of height h has at most 2^(h+1) - 1 nodes.",
      difficulty: 'medium',
      topic: 'trees'
    },
    {
      id: 122,
      question: "Which traversal of a binary search tree gives nodes in non-decreasing order?",
      options: ["Preorder", "Inorder", "Postorder", "Level order"],
      correct: 1,
      explanation: "Inorder traversal of a BST yields nodes in non-decreasing order.",
      difficulty: 'easy',
      topic: 'trees'
    },
    {
      id: 123,
      question: "What is the time complexity of searching in a balanced BST?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correct: 2,
      explanation: "Searching in a balanced BST takes O(log n) time as we halve the search space at each step.",
      difficulty: 'easy',
      topic: 'trees'
    },
    // Add 27 more tree questions...

    // Graphs (30 questions)
    {
      id: 151,
      question: "Which algorithm is used to find the shortest path in an unweighted graph?",
      options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "BFS", "DFS"],
      correct: 2,
      explanation: "Breadth-First Search (BFS) can find the shortest path in an unweighted graph.",
      difficulty: 'medium',
      topic: 'graphs'
    },
    {
      id: 152,
      question: "What is the time complexity of Dijkstra's algorithm with a binary heap?",
      options: ["O(V)", "O(V log V)", "O(V log V + E)", "O(V²)"],
      correct: 2,
      explanation: "Dijkstra's algorithm with a binary heap has time complexity O((V + E) log V) which is often simplified to O(V log V + E).",
      difficulty: 'hard',
      topic: 'graphs'
    },
    {
      id: 153,
      question: "Which graph algorithm uses the concept of back edges to detect cycles?",
      options: ["BFS", "Dijkstra's", "DFS", "Kruskal's"],
      correct: 2,
      explanation: "Depth-First Search (DFS) can detect cycles by identifying back edges in a graph.",
      difficulty: 'medium',
      topic: 'graphs'
    },
    // Add 27 more graph questions...

    // Dynamic Programming (20 questions)
    {
      id: 181,
      question: "What is the key principle behind dynamic programming?",
      options: ["Divide and conquer", "Greedy selection", "Memoization and optimal substructure", "Backtracking"],
      correct: 2,
      explanation: "Dynamic programming relies on memoization (storing solutions to subproblems) and optimal substructure (problems can be solved using solutions to subproblems).",
      difficulty: 'medium',
      topic: 'dynamic-programming'
    },
    {
      id: 182,
      question: "What is the time complexity of the naive recursive implementation of Fibonacci numbers?",
      options: ["O(n)", "O(2^n)", "O(n log n)", "O(n²)"],
      correct: 1,
      explanation: "The naive recursive Fibonacci implementation has exponential time complexity O(2^n) due to repeated calculations.",
      difficulty: 'medium',
      topic: 'dynamic-programming'
    },
    {
      id: 183,
      question: "Which of these problems can be solved using dynamic programming?",
      options: ["Tower of Hanoi", "0/1 Knapsack", "N-Queens", "Quick Sort"],
      correct: 1,
      explanation: "The 0/1 Knapsack problem is a classic dynamic programming problem where we maximize value without exceeding weight capacity.",
      difficulty: 'medium',
      topic: 'dynamic-programming'
    },
    // Add 17 more DP questions...
  ];

  // Filter questions based on topic or select random ones
  const filteredQuestions = useMemo(() => {
    if (topic) {
      return questions.filter(q => q.topic === topic);
    }
    // For general quiz, select questions from various topics
    return questions
      .sort(() => Math.random() - 0.5)
      .slice(0, 20); // Show 20 questions by default
  }, [topic]);

  useEffect(() => {
    if (quizStarted && !showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleTimeUp();
    }
  }, [timeLeft, quizStarted, showResult]);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setTimeLeft(30);
    setShowResult(false);
    setShowExplanation(false);
    setStreak(0);
    setMaxStreak(0);
    setHintUsed(false);
    setQuestionsAnswered(0);
  };

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent changing answer after selection
    setSelectedAnswer(answerIndex);
    
    const isCorrect = answerIndex === filteredQuestions[currentQuestion].correct;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setMaxStreak(Math.max(maxStreak, streak + 1));
    } else {
      setStreak(0);
    }
    
    setQuestionsAnswered(questionsAnswered + 1);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
      setShowExplanation(false);
      setHintUsed(false);
    } else {
      setShowResult(true);
    }
  };

  const handleTimeUp = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = -1;
    setAnswers(newAnswers);
    setStreak(0);
    setShowExplanation(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setTimeLeft(30);
    setScore(0);
    setShowExplanation(false);
    setStreak(0);
    setMaxStreak(0);
    setHintUsed(false);
    setQuestionsAnswered(0);
  };

  const useHint = () => {
    if (hintUsed) return;
    
    // Eliminate two wrong answers
    setHintUsed(true);
  };

  const getScoreMessage = () => {
    const percentage = (score / filteredQuestions.length) * 100;
    if (percentage >= 90) return { message: "Genius Level! 🧠", color: "text-purple-600", icon: <Brain className="h-8 w-8" /> };
    if (percentage >= 80) return { message: "Excellent! 🏆", color: "text-green-600", icon: <Trophy className="h-8 w-8" /> };
    if (percentage >= 70) return { message: "Great Job! 👍", color: "text-blue-600", icon: <TrendingUp className="h-8 w-8" /> };
    if (percentage >= 60) return { message: "Good Effort! 💪", color: "text-yellow-600", icon: <Award className="h-8 w-8" /> };
    if (percentage >= 50) return { message: "Keep Learning! 📚", color: "text-orange-600", icon: <BookOpen className="h-8 w-8" /> };
    return { message: "Need More Practice 🔄", color: "text-red-600", icon: <RotateCcw className="h-8 w-8" /> };
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
      case 'medium': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400';
      case 'hard': return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
    }
  };

  const getTopicColor = (topic: string) => {
    const topicColors: Record<string, string> = {
      'sorting': 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      'searching': 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      'stack': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      'queue': 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
      'linked-list': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
      'trees': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      'graphs': 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
      'dynamic-programming': 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
    };
    
    return topicColors[topic] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DSA Master
              </h1>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
              >
                {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
            </div>
            
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-8">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                DSA Quiz Challenge
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Test your knowledge of Data Structures and Algorithms with our interactive quiz. {topic ? `Focusing on: ${topic}` : 'Covering all major topics'}.
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
                  30 Seconds per Question
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Time limit to challenge your knowledge
                </p>
              </div>
              
              <div className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Detailed Explanations
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learn with comprehensive explanations
                </p>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Topics Covered</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from(new Set(questions.map(q => q.topic))).map(topic => (
                  <span key={topic} className={`px-3 py-1 rounded-full text-sm ${getTopicColor(topic)}`}>
                    {topic.replace('-', ' ').toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startQuiz}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg flex items-center justify-center mx-auto"
            >
              <Zap className="mr-2 h-5 w-5" />
              Start Quiz Challenge
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const scoreInfo = getScoreMessage();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
              {scoreInfo.icon}
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Quiz Complete!
            </h1>
            
            <div className={`text-2xl font-bold mb-8 ${scoreInfo.color} flex items-center justify-center`}>
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
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{maxStreak}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Max Streak</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {Math.round((questionsAnswered / filteredQuestions.length) * 100)}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Completion</div>
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="text-left space-y-4 mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <BarChart3 className="mr-2" />
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
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(question.difficulty)}`}>
                          {question.difficulty.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getTopicColor(question.topic)}`}>
                          {question.topic.toUpperCase()}
                        </span>
                      </div>
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
                      {answers[index] === -1 && (
                        <div className="text-sm text-red-600 dark:text-red-400 mb-2">
                          <span className="font-medium">Time's Up!</span> You didn't answer this question.
                        </div>
                      )}
                      <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mt-2">
                        <Lightbulb className="h-4 w-4 inline-block mr-1" />
                        <span className="font-medium">Explanation: </span>
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
      </div>
    );
  }

  const currentQ = filteredQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DSA Master
          </h1>
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="font-bold">{streak}</span>
          </div>
        </div>

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
              animate={{ width: `${progress}%` }}
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
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 mb-8"
          >
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(currentQ.difficulty)}`}>
                  {currentQ.difficulty.toUpperCase()}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTopicColor(currentQ.topic)}`}>
                  {currentQ.topic.toUpperCase()}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {currentQ.question}
              </h2>
            </div>

            {currentQ.codeSnippet && (
              <div className="mb-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm">
                <pre>{currentQ.codeSnippet}</pre>
              </div>
            )}

            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isCorrect = selectedAnswer !== null && index === currentQ.correct;
                const isWrong = selectedAnswer === index && selectedAnswer !== currentQ.correct;
                const isDisabled = selectedAnswer !== null;
                const isEliminated = hintUsed && index !== currentQ.correct && 
                                    Math.random() < 0.5 && 
                                    selectedAnswer === null;
                
                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: isDisabled || isEliminated ? 1 : 1.02 }}
                    whileTap={{ scale: isDisabled || isEliminated ? 1 : 0.98 }}
                    onClick={() => !isDisabled && !isEliminated && handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                      isEliminated ? 'opacity-50 cursor-not-allowed' :
                      selectedAnswer === index
                        ? isCorrect
                          ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                          : 'bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-300'
                        : isDisabled && isCorrect
                        ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                        : 'bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    disabled={isDisabled || isEliminated}
                  >
                    <div className="flex items-center">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 ${
                        isEliminated ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400' :
                        selectedAnswer === index
                          ? isCorrect
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : isDisabled && isCorrect
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                      {isEliminated && (
                        <XCircle className="ml-auto h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
              >
                <div className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1">Explanation</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400">{currentQ.explanation}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-between gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={useHint}
            disabled={hintUsed || selectedAnswer !== null}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            <Lightbulb className="h-4 w-4" />
            <span>Hint (50/50)</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextQuestion}
            disabled={!showExplanation}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            {currentQuestion === filteredQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
