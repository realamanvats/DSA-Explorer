import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Visualization from './pages/Visualization';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Games from './pages/Games';
import Compare from './pages/Compare';
import About from './pages/About';
import { DarkModeProvider } from './hooks/useDarkMode';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-all duration-500">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/visualization/:type" element={<Visualization />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/learn/:topic" element={<Learn />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz/:topic" element={<Quiz />} />
              <Route path="/games" element={<Games />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--toast-border)',
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              },
            }}
          />
          <style>{`
            :root {
              --toast-bg: rgba(255, 255, 255, 0.95);
              --toast-color: #1f2937;
              --toast-border: rgba(229, 231, 235, 0.8);
            }
            .dark {
              --toast-bg: rgba(31, 41, 55, 0.95);
              --toast-color: #f9fafb;
              --toast-border: rgba(75, 85, 99, 0.8);
            }
          `}</style>
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;