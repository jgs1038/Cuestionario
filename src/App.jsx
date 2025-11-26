import React, { useState, useEffect, useRef } from 'react';
// import questionsData from './questions.json'; // Removed default JSON logic
import { parseMarkdownQuestions } from './utils/markdownParser';
import { fetchQuestionnaireList, fetchQuestionnaireContent } from './utils/fileFetcher';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-sql';

// --- Theme Configuration ---
const themes = {
  default: {
    id: 'default',
    name: 'Obsidiana',
    bg: 'bg-black',
    accent: 'teal',
    accentHex: '#14b8a6',
    blob1: 'bg-purple-900/20',
    blob2: 'bg-teal-900/20',
    text: 'text-white',
    textMuted: 'text-gray-300', // Brightened from 400
    border: 'border-white/10',
    glass: 'bg-white/5',
    glassHover: 'hover:bg-white/10',
    activeBg: 'bg-teal-500/20',
    activeText: 'text-teal-100',
    activeBorder: 'border-teal-500/50',
    correctBg: 'bg-green-500/20',
    correctText: 'text-green-100',
    incorrectBg: 'bg-red-500/20',
    incorrectText: 'text-red-100',
    shadow: 'text-shadow',
    codeBg: 'bg-gray-900',
    codeText: 'text-gray-200',
    gridCurrentBg: 'bg-teal-600',
    gridCurrentText: 'text-white',
    gridPastBg: 'bg-gray-800',
    gridPastText: 'text-gray-300',
  },
  turquoise: {
    id: 'turquoise',
    name: 'Turquesa',
    bg: 'bg-teal-950',
    accent: 'cyan',
    accentHex: '#06b6d4',
    blob1: 'bg-teal-600/20',
    blob2: 'bg-cyan-600/20',
    text: 'text-teal-50',
    textMuted: 'text-teal-100', // Brightened from 200
    border: 'border-teal-200/10',
    glass: 'bg-teal-500/5',
    glassHover: 'hover:bg-teal-500/10',
    activeBg: 'bg-cyan-500/20',
    activeText: 'text-cyan-50',
    activeBorder: 'border-cyan-400/50',
    correctBg: 'bg-green-500/20',
    correctText: 'text-green-100',
    incorrectBg: 'bg-red-500/20',
    incorrectText: 'text-red-100',
    shadow: 'text-shadow',
    codeBg: 'bg-teal-900/50',
    codeText: 'text-teal-100',
    gridCurrentBg: 'bg-cyan-600',
    gridCurrentText: 'text-white',
    gridPastBg: 'bg-teal-800', // Slightly lighter for visibility
    gridPastText: 'text-teal-100',
  },
  white: {
    id: 'white',
    name: 'Hielo',
    bg: 'bg-slate-50',
    accent: 'blue',
    accentHex: '#3b82f6',
    blob1: 'bg-blue-200/50',
    blob2: 'bg-indigo-200/50',
    text: 'text-slate-900',
    textMuted: 'text-slate-600',
    border: 'border-slate-200',
    glass: 'bg-white/70',
    glassHover: 'hover:bg-white/90',
    activeBg: 'bg-blue-100',
    activeText: 'text-blue-900',
    activeBorder: 'border-blue-300',
    correctBg: 'bg-green-100',
    correctText: 'text-green-900',
    incorrectBg: 'bg-red-100',
    incorrectText: 'text-red-900',
    shadow: '',
    codeBg: 'bg-slate-200',
    codeText: 'text-slate-800',
    gridCurrentBg: 'bg-blue-600',
    gridCurrentText: 'text-white',
    gridPastBg: 'bg-slate-300',
    gridPastText: 'text-slate-800',
  }
};

// --- Helper: Markdown Renderer ---
const FormattedText = ({ text, theme, className = "" }) => {
  const codeBlockRef = useRef(null);

  useEffect(() => {
    if (codeBlockRef.current) {
      Prism.highlightAllUnder(codeBlockRef.current);
    }
  }, [text]);

  if (!text) return null;

  // 1. Split by Code Blocks (``` ... ```)
  const blockParts = text.split(/(```[\s\S]*?```)/g);

  return (
    <div className={`${className} w-full`} ref={codeBlockRef}>
      {blockParts.map((part, index) => {
        if (part.startsWith('```') && part.endsWith('```')) {
          // Render Code Block
          let codeContent = part.slice(3, -3);
          let language = 'javascript'; // Default language

          // Check for language identifier (e.g., "java\n")
          // FIX: Handle CRLF and loose whitespace
          const firstLineMatch = codeContent.match(/^\s*([a-zA-Z0-9]+)\r?\n/);
          if (firstLineMatch) {
            language = firstLineMatch[1].toLowerCase();
            codeContent = codeContent.substring(firstLineMatch[0].length);
          }

          return (
            <div key={index} className={`my-4 rounded-lg overflow-hidden border ${theme.border} shadow-lg w-full`}>
              <div className={`px-3 py-1 text-xs font-bold ${theme.textMuted} ${theme.glass} border-b ${theme.border}`}>
                {language.toUpperCase()}
              </div>
              <div className={`p-4 overflow-x-auto`} style={{
                backgroundColor: theme.id === 'white' ? '#f5f5f5' : '#1e1e1e'
              }}>
                <pre className={`language-${language} !bg-transparent !m-0 !p-0`}>
                  <code className={`language-${language}`}>{codeContent.trim()}</code>
                </pre>
              </div>
            </div>
          );
        }

        // 2. Process Inline Code (` ... `) and Bold/Italic within non-block parts
        const inlineParts = part.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);

        return (
          <span key={index} className="whitespace-pre-wrap">
            {inlineParts.map((subPart, subIndex) => {
              if (subPart.startsWith('`') && subPart.endsWith('`')) {
                // Render Inline Code
                const inlineContent = subPart.slice(1, -1);
                return (
                  <code key={subIndex} className={`font-mono text-sm px-2 py-1 rounded mx-0.5 border ${theme.border} align-middle`} style={{
                    backgroundColor: theme.id === 'white' ? '#f0f0f0' : '#2d2d2d',
                    color: theme.id === 'white' ? '#c7254e' : '#e06c75'
                  }}>
                    {inlineContent}
                  </code>
                );
              } else if (subPart.startsWith('**') && subPart.endsWith('**')) {
                // Render Bold Text
                const boldContent = subPart.slice(2, -2);
                return <strong key={subIndex}>{boldContent}</strong>;
              } else if (subPart.startsWith('*') && subPart.endsWith('*') && !subPart.startsWith('**')) {
                // Render Italic Text
                const italicContent = subPart.slice(1, -1);
                return <em key={subIndex}>{italicContent}</em>;
              }
              // Regular Text
              return subPart;
            })}
          </span>
        );
      })}
    </div>
  );
};

// --- UI Components ---

const MagneticButton = ({ children, onClick, className = "", disabled = false, active = false, correct = false, incorrect = false, theme }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!btnRef.current || disabled) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Extremely subtle magnetism (0.02)
    const moveX = (x - centerX) * 0.02;
    const moveY = (y - centerY) * 0.02;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setOpacity(0);
    setPosition({ x: 0, y: 0 });
  };

  // Dynamic Styles based on Theme and State
  let baseClasses = `relative rounded-xl border transition-all duration-300 ease-out font-medium backdrop-blur-sm overflow-hidden ${theme.border} `;

  if (disabled) {
    baseClasses += "cursor-not-allowed opacity-60 ";
    if (correct) baseClasses += `${theme.correctBg} border-green-400/30 ${theme.correctText} `;
    else if (incorrect) baseClasses += `${theme.incorrectBg} border-red-400/30 ${theme.incorrectText} `;
    else baseClasses += `${theme.glass} ${theme.textMuted} `;
  } else {
    if (active) baseClasses += `${theme.activeBg} ${theme.activeBorder} ${theme.activeText} shadow-sm `;
    else baseClasses += `${theme.glass} ${theme.text} opacity-90 ${theme.glassHover} `;
  }

  return (
    <div className="relative group" style={{ perspective: '1000px' }}>
      <button
        ref={btnRef}
        onClick={onClick}
        disabled={disabled}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 1.005 : 1})`,
          transition: isHovering ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
        className={`${baseClasses} ${className} z-10`}
      >
        {/* Spotlight Gradient */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-xl"
          style={{
            opacity,
            background: `radial-gradient(300px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${theme.id === 'white' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)'}, transparent 40%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center w-full">
          {children}
        </div>
      </button>
    </div>
  );
};

// --- Icon Button with Magnetic Effects ---
const IconButton = ({ children, onClick, className = "", theme, title }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) * 0.02;
    const moveY = (y - centerY) * 0.02;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setOpacity(0);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative group/icon" style={{ perspective: '1000px' }}>
      <button
        ref={btnRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title={title}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 1.15 : 1})`,
          transition: isHovering ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
        className={`relative p-2 transition-all duration-300 ease-out ${theme.text} opacity-70 hover:opacity-100 z-10 ${className}`}
      >
        {/* Icon Content */}
        <div className="relative z-10">
          {children}
        </div>
      </button>
    </div>
  );
};

// --- Quiz Card Component ---
const QuizCard = ({ file, theme, onLoadNormal, onLoadRandom }) => {
  return (
    <div className={`relative rounded-xl border ${theme.border} ${theme.glass} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-${theme.accent}-400/30 group`}>
      <div className="p-6">
        {/* Header with MD badge and Icons */}
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-bold px-2 py-1 rounded ${theme.activeBg} ${theme.activeText} border ${theme.activeBorder}`}>
            MD
          </span>

          {/* Action Icons */}
          <div className="flex gap-2">
            <IconButton onClick={onLoadNormal} theme={theme} title="Iniciar cuestionario normal">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </IconButton>

            <IconButton onClick={onLoadRandom} theme={theme} title="Iniciar cuestionario aleatorio">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/>
                <path d="M2 6h1.4c1.3 0 2.5.6 3.3 1.7l6.1 8.6c.7 1.1 2 1.7 3.3 1.7H22"/>
                <path d="M18 2l4 4-4 4"/>
                <path d="M18 14l4 4-4 4"/>
              </svg>
            </IconButton>
          </div>
        </div>

        {/* Quiz Title */}
        <div className={`font-bold text-xl mb-2 ${theme.text} leading-tight`} title={file}>
          {file.replace('.md', '').replace(/_/g, ' ')}
        </div>

        {/* Quiz Description */}
        <div className={`text-sm ${theme.textMuted}`}>Cuestionario de práctica</div>
      </div>
    </div>
  );
};

// --- Main App ---

function App() {
  const [view, setView] = useState('home'); // 'home', 'quiz'
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [isReviewing, setIsReviewing] = useState(false);

  // Config State
  const [instantFeedback, setInstantFeedback] = useState(false);
  const [strictMode, setStrictMode] = useState(true);
  const [feedbackRevealed, setFeedbackRevealed] = useState({});
  const [currentTheme, setCurrentTheme] = useState('default');
  const [fontScale, setFontScale] = useState(1); // Scale: 1 = normal
  const [randomizeQuestions, setRandomizeQuestions] = useState(false);
  const [randomizeAnswers, setRandomizeAnswers] = useState(false);

  // File management
  const [availableFiles, setAvailableFiles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentFileName, setCurrentFileName] = useState('Default (JSON)');

  // Grid View State
  const [showGrid, setShowGrid] = useState(false);

  const theme = themes[currentTheme];

  useEffect(() => {
    loadFileList();
  }, []);

  // Shuffle function (Fisher-Yates)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const loadFileList = async () => {
    const files = await fetchQuestionnaireList();
    setAvailableFiles(files);
  };

  const loadFile = async (filename, randomize = false) => {
    setLoading(true);
    const content = await fetchQuestionnaireContent(filename);
    if (content) {
      let parsedQuestions = parseMarkdownQuestions(content);
      if (parsedQuestions.length > 0) {
        // Randomize questions if enabled or if randomize parameter is true
        if (randomizeQuestions || randomize) {
          parsedQuestions = shuffleArray(parsedQuestions);
        }

        // Randomize answers if enabled or if randomize parameter is true
        if (randomizeAnswers || randomize) {
          parsedQuestions = parsedQuestions.map(q => {
            const indices = q.options.map((_, i) => i);
            const shuffledIndices = shuffleArray(indices);

            return {
              ...q,
              options: shuffledIndices.map(i => q.options[i]),
              correctAnswer: shuffledIndices.indexOf(q.correctAnswer)
            };
          });
        }

        setQuestions(parsedQuestions);
        setCurrentFileName(filename);
        setView('quiz');
        restartQuiz();
        setIsMenuOpen(false);
      } else {
        alert('No valid questions found in this file.');
      }
    }
    setLoading(false);
  };

  const handleAnswerOptionClick = (index) => {
    if (isReviewing) return;

    if (feedbackRevealed[currentQuestion] && strictMode) return;

    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion]: index
    }));

    if (instantFeedback) {
      setFeedbackRevealed(prev => ({
        ...prev,
        [currentQuestion]: true
      }));
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      calculateScore();
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const startReview = () => {
    setIsReviewing(true);
    setShowScore(false);
    setCurrentQuestion(0);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers({});
    setFeedbackRevealed({});
    setIsReviewing(false);
    setShowGrid(false);
  };

  const goHome = () => {
    setView('home');
    setQuestions([]);
    setScore(0);
    setShowScore(false);
    setIsMenuOpen(false);
  };

  const getGridButtonStyle = (index) => {
    const isCurrent = currentQuestion === index;
    const isAnswered = userAnswers[index] !== undefined;
    const isCorrect = isAnswered && userAnswers[index] === questions[index].correctAnswer;
    const isFeedbackShown = isReviewing || feedbackRevealed[index];

    let style = `w-10 h-10 rounded-lg font-bold text-sm flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${theme.border} `;

    if (isCurrent) {
      return style + `${theme.gridCurrentBg} ${theme.gridCurrentText} shadow-md scale-110 z-10`;
    }

    if (isFeedbackShown) {
      if (isAnswered) {
        return style + (isCorrect ? `${theme.correctBg} ${theme.correctText} border-green-400/30` : `${theme.incorrectBg} ${theme.incorrectText} border-red-400/30`);
      }
    } else {
      if (isAnswered) {
        return style + `${theme.gridPastBg} ${theme.gridPastText} border-${theme.accent}-400/20`;
      }
    }

    return style + `${theme.glass} ${theme.textMuted} ${theme.glassHover}`;
  };

  return (
    <div
      className={`min-h-screen ${theme.bg} flex items-center justify-center p-4 font-sans relative overflow-hidden transition-colors duration-700`}
      style={{
        '--font-scale': fontScale,
        fontSize: `calc(1rem * var(--font-scale))`
      }}
    >

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] ${theme.blob1} rounded-full blur-[150px] animate-float transition-colors duration-700`} style={{ animationDuration: '15s' }}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] ${theme.blob2} rounded-full blur-[150px] animate-float transition-colors duration-700`} style={{ animationDuration: '18s', animationDelay: '2s' }}></div>
      </div>

      {/* Menu Button */}
      {view === 'quiz' && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`absolute top-6 right-6 z-20 p-3 rounded-full ${theme.glass} ${theme.border} backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${theme.textMuted} group-hover:${theme.text}`}>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      )}

      {/* Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className={`relative w-full max-w-md h-full ${theme.id === 'white' ? 'bg-white/90' : 'bg-black/90'} backdrop-blur-xl border-l ${theme.border} p-8 shadow-2xl animate-slide-in-right overflow-y-auto`}>
            <div className="flex justify-between items-center mb-10">
              <h2 className={`text-3xl font-bold ${theme.text} tracking-tight ${theme.shadow}`}>Opciones</h2>
              <button onClick={() => setIsMenuOpen(false)} className={`${theme.textMuted} hover:${theme.text} transition-colors p-2 hover:bg-white/10 rounded-full`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Theme Selector */}
            <div className="mb-10">
              <h3 className={`text-xs font-bold ${theme.textMuted} uppercase tracking-widest mb-6 ml-1`}>Tema</h3>
              <div className="flex gap-3">
                {Object.keys(themes).map((key) => (
                  <button
                    key={key}
                    onClick={() => setCurrentTheme(key)}
                    className={`flex-1 p-3 rounded-xl border transition-all duration-300 ${currentTheme === key ? '' : `${theme.border} ${theme.glass}`}`}
                    style={currentTheme === key ? {
                      borderColor: themes[key].accentHex,
                      backgroundColor: `${themes[key].accentHex}1A` // 1A = 10% opacity in hex
                    } : {}}
                  >
                    <div className={`w-6 h-6 rounded-full mx-auto mb-2 border-2 border-white/20`} style={{ background: themes[key].accentHex }}></div>
                    <div className={`text-xs font-medium text-center ${currentTheme === key ? theme.text : theme.textMuted}`}>{themes[key].name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size Control */}
            <div className="mb-10">
              <h3 className={`text-xs font-bold ${theme.textMuted} uppercase tracking-widest mb-6 ml-1`}>Tamaño de Fuente</h3>
              <div className={`${theme.glass} p-4 rounded-2xl`}>
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setFontScale(Math.max(0.75, fontScale - 0.1))}
                    disabled={fontScale <= 0.75}
                    className={`w-10 h-10 rounded-lg border transition-all duration-300 flex items-center justify-center font-bold text-xl ${fontScale <= 0.75 ? 'opacity-30 cursor-not-allowed' : `${theme.border} ${theme.glass} ${theme.glassHover} ${theme.text}`}`}
                  >
                    −
                  </button>
                  <div className="flex flex-col items-center">
                    <span className={`text-2xl font-bold ${theme.text}`}>{Math.round(fontScale * 100)}%</span>
                    <span className={`text-xs ${theme.textMuted} mt-1`}>Tamaño actual</span>
                  </div>
                  <button
                    onClick={() => setFontScale(Math.min(1.5, fontScale + 0.1))}
                    disabled={fontScale >= 1.5}
                    className={`w-10 h-10 rounded-lg border transition-all duration-300 flex items-center justify-center font-bold text-xl ${fontScale >= 1.5 ? 'opacity-30 cursor-not-allowed' : `${theme.border} ${theme.glass} ${theme.glassHover} ${theme.text}`}`}
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => setFontScale(0.75)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${fontScale === 0.75 ? `${theme.activeBg} ${theme.activeText} border ${theme.activeBorder}` : `${theme.glass} ${theme.textMuted} ${theme.glassHover}`}`}
                  >
                    Pequeño
                  </button>
                  <button
                    onClick={() => setFontScale(1)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${fontScale === 1 ? `${theme.activeBg} ${theme.activeText} border ${theme.activeBorder}` : `${theme.glass} ${theme.textMuted} ${theme.glassHover}`}`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => setFontScale(1.25)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${fontScale === 1.25 ? `${theme.activeBg} ${theme.activeText} border ${theme.activeBorder}` : `${theme.glass} ${theme.textMuted} ${theme.glassHover}`}`}
                  >
                    Grande
                  </button>
                  <button
                    onClick={() => setFontScale(1.5)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${fontScale === 1.5 ? `${theme.activeBg} ${theme.activeText} border ${theme.activeBorder}` : `${theme.glass} ${theme.textMuted} ${theme.glassHover}`}`}
                  >
                    Muy Grande
                  </button>
                </div>
              </div>
            </div>

            {/* Config Section */}
            <div className="mb-10">
              <h3 className={`text-xs font-bold ${theme.textMuted} uppercase tracking-widest mb-6 ml-1`}>Configuración</h3>
              <div className="space-y-4">
                <div className={`${theme.glass} p-4 rounded-2xl flex items-center justify-between group ${theme.glassHover} transition-colors`}>
                  <div>
                    <div className={`font-semibold ${theme.text}`}>Corrección Inmediata</div>
                    <div className={`text-xs ${theme.textMuted} mt-1`}>Ver respuesta al instante</div>
                  </div>
                  <button
                    onClick={() => setInstantFeedback(!instantFeedback)}
                    className="relative w-12 h-6 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: instantFeedback ? theme.accentHex : 'rgba(107, 114, 128, 0.3)'
                    }}
                  >
                    <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${instantFeedback ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>

                {instantFeedback && (
                  <div className={`${theme.glass} p-4 rounded-2xl flex items-center justify-between animate-fade-in group ${theme.glassHover} transition-colors`}>
                    <div>
                      <div className={`font-semibold ${theme.text}`}>Modo Estricto</div>
                      <div className={`text-xs ${theme.textMuted} mt-1`}>Bloquear respuesta tras contestar</div>
                    </div>
                    <button
                      onClick={() => setStrictMode(!strictMode)}
                      className="relative w-12 h-6 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor: strictMode ? theme.accentHex : 'rgba(107, 114, 128, 0.3)'
                      }}
                    >
                      <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${strictMode ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                  </div>
                )}

                <div className={`${theme.glass} p-4 rounded-2xl flex items-center justify-between group ${theme.glassHover} transition-colors`}>
                  <div>
                    <div className={`font-semibold ${theme.text}`}>Aleatorizar Preguntas</div>
                    <div className={`text-xs ${theme.textMuted} mt-1`}>Orden aleatorio de preguntas</div>
                  </div>
                  <button
                    onClick={() => setRandomizeQuestions(!randomizeQuestions)}
                    className="relative w-12 h-6 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: randomizeQuestions ? theme.accentHex : 'rgba(107, 114, 128, 0.3)'
                    }}
                  >
                    <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${randomizeQuestions ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>

                <div className={`${theme.glass} p-4 rounded-2xl flex items-center justify-between group ${theme.glassHover} transition-colors`}>
                  <div>
                    <div className={`font-semibold ${theme.text}`}>Aleatorizar Respuestas</div>
                    <div className={`text-xs ${theme.textMuted} mt-1`}>Orden aleatorio de opciones</div>
                  </div>
                  <button
                    onClick={() => setRandomizeAnswers(!randomizeAnswers)}
                    className="relative w-12 h-6 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: randomizeAnswers ? theme.accentHex : 'rgba(107, 114, 128, 0.3)'
                    }}
                  >
                    <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${randomizeAnswers ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <MagneticButton onClick={goHome} className="p-4 w-full justify-center" theme={theme}>
                <span className="font-bold">Volver al Inicio</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      )}

      {view === 'home' ? (
        <div className="relative z-10 w-full max-w-4xl px-4 animate-fade-in">
          <div className={`${theme.id === 'white' ? 'bg-white/60' : 'bg-black/20'} backdrop-blur-lg border ${theme.border} shadow-2xl rounded-3xl p-8 md:p-12 text-center`}>
            <h1 className={`text-4xl md:text-6xl font-bold ${theme.text} mb-6 ${theme.shadow} tracking-tight`}>
              Cuestionarios
            </h1>
            <p className={`text-xl ${theme.textMuted} mb-12 max-w-2xl mx-auto`}>
              Selecciona un cuestionario para comenzar a practicar.
            </p>

            {loading ? (
              <div className={`flex justify-center items-center space-x-3 text-${theme.accent}-400 p-8`}>
                <div className={`w-8 h-8 border-4 border-${theme.accent}-400 border-t-transparent rounded-full animate-spin`}></div>
                <span className="text-lg font-medium">Cargando cuestionarios...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {availableFiles.length === 0 && (
                  <div className={`col-span-full text-center ${theme.textMuted} p-8`}>
                    No se encontraron cuestionarios en la carpeta /questions
                  </div>
                )}
                {availableFiles.map((file, index) => (
                  <QuizCard
                    key={index}
                    file={file}
                    theme={theme}
                    onLoadNormal={() => loadFile(file, false)}
                    onLoadRandom={() => loadFile(file, true)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Main Card */
        <div className="w-full max-w-4xl relative z-10 px-4">
          <div className={`${theme.id === 'white' ? 'bg-white/60' : 'bg-black/20'} backdrop-blur-lg border ${theme.border} shadow-2xl rounded-3xl p-8 md:p-12 transition-all duration-500`}>
            {showScore ? (
              <div className="text-center py-12 animate-fade-in">
                <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-tr from-${theme.accent}-400 to-purple-500 p-[1px] shadow-lg`}>
                  <div className={`w-full h-full rounded-full ${theme.id === 'white' ? 'bg-white/50' : 'bg-black/40'} backdrop-blur-xl flex items-center justify-center`}>
                    <span className={`text-5xl font-bold ${theme.text}`}>{Math.round((score / questions.length) * 100)}%</span>
                  </div>
                </div>

                <h2 className={`text-4xl font-bold ${theme.text} mb-2 ${theme.shadow}`}>¡Completado!</h2>
                <p className={`${theme.textMuted} mb-10 text-lg`}>Has finalizado el cuestionario</p>

                <div className="flex justify-center items-end gap-3 mb-12">
                  <span className={`text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-${theme.accent}-400 to-purple-400`}>{score}</span>
                  <span className={`text-3xl ${theme.textMuted} font-medium mb-3`}>/ {questions.length}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <MagneticButton onClick={startReview} className="px-8 py-4 justify-center" theme={theme}>
                    <span className="font-bold text-lg">Revisar Respuestas</span>
                  </MagneticButton>
                  <MagneticButton onClick={restartQuiz} className="px-8 py-4 justify-center" theme={theme}>
                    <span className="font-bold text-lg">Intentar de Nuevo</span>
                  </MagneticButton>
                  <MagneticButton onClick={goHome} className="px-8 py-4 justify-center" theme={theme}>
                    <span className="font-bold text-lg">Volver al Inicio</span>
                  </MagneticButton>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="mb-10 flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setShowGrid(!showGrid)}
                      className={`flex items-center gap-2 text-sm font-bold text-${theme.accent}-400 tracking-widest uppercase hover:text-${theme.accent}-300 transition-colors`}
                    >
                      <span className={theme.text}>
                        Pregunta {currentQuestion + 1} / {questions.length}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showGrid ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                    <div className="flex gap-2">
                      {isReviewing && <span className="text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-1 rounded-md">Modo Revisión</span>}
                      {instantFeedback && !isReviewing && <span className="text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-md">Corrección Inmediata</span>}
                    </div>
                  </div>
                  {!isReviewing && !instantFeedback && (
                    <div className={`${theme.glass} px-4 py-2 rounded-xl font-bold ${theme.textMuted} shadow-inner`}>
                      Puntos: {score}
                    </div>
                  )}
                </div>

                {/* Grid */}
                {showGrid && (
                  <div className={`mb-8 p-6 ${theme.id === 'white' ? 'bg-white/50' : 'bg-black/40'} rounded-2xl border ${theme.border} animate-fade-in max-h-60 overflow-y-auto custom-scrollbar`}>
                    <div className="flex flex-wrap gap-3">
                      {questions.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentQuestion(index);
                            setShowGrid(false);
                          }}
                          className={getGridButtonStyle(index)}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Question */}
                <h2 className={`font-bold ${theme.text} mb-10 leading-relaxed ${theme.shadow}`} style={{ fontSize: `${1.5 * fontScale}rem` }}>
                  <FormattedText text={questions[currentQuestion].question} theme={theme} />
                </h2>

                {/* Progress Bar */}
                {!isReviewing && !showGrid && (
                  <div className={`w-full ${theme.glass} h-1 mb-12 rounded-full overflow-hidden`}>
                    <div className={`bg-gradient-to-r from-${theme.accent}-400 to-purple-500 h-full transition-all duration-700 ease-out shadow-lg`} style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}></div>
                  </div>
                )}

                {/* Options */}
                <div className="space-y-4 mb-12">
                  {questions[currentQuestion].options.map((option, index) => {
                    const isFeedbackShown = isReviewing || feedbackRevealed[currentQuestion];
                    const userSelected = userAnswers[currentQuestion];
                    const isCorrect = index === questions[currentQuestion].correctAnswer;
                    const isSelected = userSelected === index;

                    // Determine status for styling
                    let status = 'default';
                    if (isFeedbackShown && userSelected !== undefined) {
                      if (isCorrect) status = 'correct';
                      else if (isSelected) status = 'incorrect';
                    } else if (isSelected) {
                      status = 'active';
                    }

                    return (
                      <MagneticButton
                        key={index}
                        onClick={() => handleAnswerOptionClick(index)}
                        disabled={isReviewing || (isFeedbackShown && strictMode)}
                        active={status === 'active'}
                        correct={status === 'correct'}
                        incorrect={status === 'incorrect'}
                        theme={theme}
                        className="p-5 w-full text-left group"
                      >
                        <span className={`flex-shrink-0 flex items-center justify-center rounded-lg border mr-5 font-bold transition-all duration-300 ${status === 'active' ? `${theme.activeBg} ${theme.activeText} ${theme.activeBorder}` :
                          status === 'correct' ? 'bg-green-500 text-white border-green-400' :
                            status === 'incorrect' ? 'bg-red-500 text-white border-red-400' :
                              `${theme.glass} ${theme.border} ${theme.textMuted} group-hover:${theme.text}`
                          }`} style={{ width: `${2 * fontScale}rem`, height: `${2 * fontScale}rem`, fontSize: `${0.875 * fontScale}rem` }}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="leading-snug" style={{ fontSize: `${1.125 * fontScale}rem` }}>
                          <FormattedText text={option} theme={theme} />
                        </span>

                        {status === 'correct' && (
                          <svg className="w-6 h-6 ml-auto text-green-400 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        )}
                        {status === 'incorrect' && (
                          <svg className="w-6 h-6 ml-auto text-red-400 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                        )}
                      </MagneticButton>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className={`flex justify-between pt-8 border-t ${theme.border}`}>
                  <button
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                    className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${currentQuestion === 0 ? 'opacity-30 cursor-not-allowed' : `${theme.textMuted} hover:${theme.text} hover:bg-white/5`}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    Anterior
                  </button>

                  {isReviewing ? (
                    currentQuestion === questions.length - 1 ? (
                      <MagneticButton onClick={() => setShowScore(true)} className="px-8 py-3" theme={theme}>
                        <span className="flex items-center gap-2">
                          Finalizar Revisión
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                        </span>
                      </MagneticButton>
                    ) : (
                      <MagneticButton onClick={handleNextQuestion} className="px-8 py-3" theme={theme}>
                        <span className="flex items-center gap-2">
                          Siguiente
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                        </span>
                      </MagneticButton>
                    )
                  ) : (
                    <MagneticButton
                      onClick={handleNextQuestion}
                      disabled={userAnswers[currentQuestion] === undefined}
                      className={`px-8 py-3 ${userAnswers[currentQuestion] === undefined ? 'opacity-50 cursor-not-allowed' : ''}`}
                      theme={theme}
                    >
                      <span className="flex items-center gap-2">
                        {currentQuestion === questions.length - 1 ? 'Ver Resultados' : 'Siguiente'}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                      </span>
                    </MagneticButton>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;