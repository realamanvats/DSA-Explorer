import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  BookOpen, 
  Trophy, 
  Gamepad2, 
  GitCompare,
  Brain,
  Code,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Play,
      title: 'Interactive Visualizations',
      description: 'Watch algorithms come to life with step-by-step animations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Detailed explanations with code examples in multiple languages',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Trophy,
      title: 'Quiz Challenges',
      description: 'Test your knowledge with interactive quizzes and progress tracking',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Gamepad2,
      title: 'Gamified Learning',
      description: 'Learn through fun games and interactive challenges',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GitCompare,
      title: 'Algorithm Comparison',
      description: 'Compare algorithms side-by-side with detailed analysis',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Code,
      title: 'Multiple Languages',
      description: 'Code examples in C++, Java, Python, and JavaScript',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { icon: Brain, label: 'Algorithms', value: '20+' },
    { icon: Users, label: 'Learners', value: '10K+' },
    { icon: Award, label: 'Success Rate', value: '95%' },
    { icon: TrendingUp, label: 'Growth', value: '200%' }
  ];

  const actionButtons = [
    { to: '/topics', label: 'Visualize', icon: Play, color: 'bg-blue-600 hover:bg-blue-700' },
    { to: '/learn', label: 'Learn', icon: BookOpen, color: 'bg-green-600 hover:bg-green-700' },
    { to: '/games', label: 'Play', icon: Gamepad2, color: 'bg-purple-600 hover:bg-purple-700' },
    { to: '/quiz', label: 'Quiz', icon: Trophy, color: 'bg-orange-600 hover:bg-orange-700' },
    { to: '/compare', label: 'Compare', icon: GitCompare, color: 'bg-red-600 hover:bg-red-700' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-10 shadow-2xl animate-float"
        >
          <Brain className="h-16 w-16 text-white" />
        </motion.div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="gradient-text">
            Master DSA
          </span>
          <br />
          <span className="text-gray-800 dark:text-gray-100">Interactively</span>
        </h1>
        
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Explore Data Structures and Algorithms through beautiful visualizations, 
          interactive learning experiences, and gamified challenges. Perfect for students, 
          developers, and anyone looking to strengthen their problem-solving skills.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {actionButtons.map(({ to, label, icon: Icon, color }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              <Link
                to={to}
                className={`inline-flex items-center space-x-3 px-8 py-4 ${color} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg`}
              >
                <Icon className="h-6 w-6" />
                <span>{label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
      >
        {stats.map(({ icon: Icon, label, value }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="text-center p-8 glass-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-6 shadow-lg">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">{value}</div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold">{label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Why Choose DSA Explorer?
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            Experience the most comprehensive and interactive way to learn algorithms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ icon: Icon, title, description, color }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group glass-card rounded-2xl p-10 shadow-lg card-hover"
            >
              <div className={`inline-flex items-center justify-center p-5 bg-gradient-to-r ${color} rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-16 text-white shadow-2xl relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="relative z-10">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Lightbulb className="h-20 w-20 mx-auto mb-8 opacity-90" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Start Your Journey?
        </h2>
          <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Join thousands of learners who have mastered Data Structures and Algorithms 
          through our interactive platform.
        </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/topics"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl"
          >
              <Target className="h-6 w-6" />
            <span>Start Learning Now</span>
          </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                <BookOpen className="h-6 w-6" />
                <span>Learn More</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;