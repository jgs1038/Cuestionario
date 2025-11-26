import React, { useState, useEffect } from 'react';
import questionsData from './questions.json';
import { parseMarkdownQuestions } from './utils/markdownParser';
import { fetchQuestionnaireList, fetchQuestionnaireContent } from './utils/fileFetcher';

function App() {
  const [questions, setQuestions] = useState(questionsData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState({}); // Store all user answers: { [questionIndex]: optionIndex }
  const [isReviewing, setIsReviewing] = useState(false); // New state for review mode

  // File management
  const [availableFiles, setAvailableFiles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentFileName, setCurrentFileName] = useState('Default (JSON)');

  useEffect(() => {
    loadFileList();
  }, []);

  const loadFileList = async () => {
    const files = await fetchQuestionnaireList();
    setAvailableFiles(files);
  };

  const loadFile = async (filename) => {
    setLoading(true);
    const content = await fetchQuestionnaireContent(filename);
    if (content) {
      const parsedQuestions = parseMarkdownQuestions(content);
      if (parsedQuestions.length > 0) {
        setQuestions(parsedQuestions);
        setCurrentFileName(filename);
        restartQuiz();
        setIsMenuOpen(false);
      } else {
        alert('No valid questions found in this file.');
      }
    }
    setLoading(false);
  };

  const handleAnswerOptionClick = (index) => {
    if (isReviewing) return; // Disable clicking in review mode

    // Save answer
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion]: index
    }));

    // We don't auto-advance anymore, user must click Next
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
    setIsReviewing(false);
  };

  // Helper to determine option style
  const getOptionStyle = (index) => {
    const baseStyle = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium flex items-center ";

    if (isReviewing) {
      const correctIndex = questions[currentQuestion].correctAnswer;
      const userSelected = userAnswers[currentQuestion];

      if (index === correctIndex) {
        // Always highlight correct answer in green in review mode
        return baseStyle + "bg-teal-100 border-teal-500 text-teal-800 font-bold shadow-sm";
      }
      if (index === userSelected && index !== correctIndex) {
        // Highlight wrong user selection in red
        return baseStyle + "bg-red-100 border-red-500 text-red-800 opacity-80";
      }
      return baseStyle + "border-gray-100 text-gray-400 opacity-60";
    }

    // Normal Quiz Mode
    const isSelected = userAnswers[currentQuestion] === index;
    if (isSelected) {
      return baseStyle + "bg-teal-50 border-teal-400 text-teal-700 font-bold shadow-md transform scale-[1.01]";
    }
    return baseStyle + "border-gray-100 text-gray-600 hover:bg-teal-50 hover:border-teal-200 hover:shadow-sm";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 flex items-center justify-center p-4 font-sans relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg border border-white/20 z-10"
        title="Opciones"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end transition-opacity">
          <div className="bg-white/95 w-full max-w-md h-full p-8 shadow-2xl overflow-y-auto animate-slide-in-right border-l border-white/50">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Opciones</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Cuestionarios</h3>
              {loading ? (
                <div className="flex items-center space-x-2 text-teal-600">
                  <div className="w-4 h-4 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>Cargando...</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setQuestions(questionsData);
                      setCurrentFileName('Default (JSON)');
                      restartQuiz();
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${currentFileName === 'Default (JSON)' ? 'bg-teal-50 border-teal-200 text-teal-700 shadow-sm' : 'border-transparent hover:bg-gray-50 text-gray-600'}`}
                  >
                    <div className="font-semibold">Default (JSON)</div>
                    <div className="text-xs text-gray-400 mt-1">Preguntas integradas</div>
                  </button>
                  {availableFiles.map((file, index) => (
                    <button
                      key={index}
                      onClick={() => loadFile(file)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${currentFileName === file ? 'bg-teal-50 border-teal-200 text-teal-700 shadow-sm' : 'border-transparent hover:bg-gray-50 text-gray-600'}`}
                    >
                      <div className="font-semibold">{file}</div>
                      <div className="text-xs text-gray-400 mt-1">Archivo Markdown</div>
                    </button>
                  ))}
                  {availableFiles.length === 0 && (
                    <p className="text-sm text-gray-400 italic p-2">No se encontraron archivos .md en /questions/</p>
                  )}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-gray-100">
              <button onClick={loadFileList} className="text-teal-600 text-sm font-semibold hover:text-teal-700 flex items-center gap-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
                Refrescar lista
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white/95 backdrop-blur-xl w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden p-6 md:p-10 relative border border-white/50">
        {showScore ? (
          <div className="text-center py-10 animate-fade-in">
            <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-2">¡Completado!</h2>
            <p className="text-gray-500 mb-8">Has finalizado el cuestionario</p>

            <div className="flex justify-center items-end gap-2 mb-8">
              <span className="text-6xl font-black text-teal-600">{score}</span>
              <span className="text-2xl text-gray-400 font-medium mb-2">/ {questions.length}</span>
            </div>

            <div className="w-full max-w-xs mx-auto bg-gray-100 rounded-full h-3 mb-10 overflow-hidden">
              <div className="bg-teal-500 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${(score / questions.length) * 100}%` }}></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={startReview} className="px-8 py-4 bg-white border-2 border-teal-100 text-teal-700 rounded-2xl hover:bg-teal-50 hover:border-teal-200 transition-all font-bold shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                Revisar Respuestas
              </button>
              <button onClick={restartQuiz} className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-2xl hover:from-teal-600 hover:to-cyan-700 transition-all font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"></path><path d="M3 3v9h9"></path></svg>
                Intentar de Nuevo
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-teal-600 tracking-wider uppercase mb-1">Pregunta {currentQuestion + 1} de {questions.length}</span>
                {isReviewing && <span className="text-sm font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md w-fit">Modo Revisión</span>}
              </div>
              {!isReviewing && (
                <div className="bg-teal-50 text-teal-700 px-4 py-2 rounded-xl font-bold text-sm shadow-sm border border-teal-100">
                  Puntos: {score}
                </div>
              )}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">{questions[currentQuestion].question}</h2>

            {!isReviewing && (
              <div className="w-full bg-gray-100 h-2 mb-10 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 h-full transition-all duration-500 ease-out" style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}></div>
              </div>
            )}

            <div className="space-y-4 mb-10">
              {questions[currentQuestion].options.map((option, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(index)}
                    disabled={isReviewing}
                    className={getOptionStyle(index)}
                  >
                    <span className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg border mr-4 text-sm font-bold transition-colors ${userAnswers[currentQuestion] === index ? 'bg-teal-500 border-teal-500 text-white' : 'bg-white border-gray-200 text-gray-500'}`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-lg">{option}</span>

                    {/* Icons for review mode */}
                    {isReviewing && index === questions[currentQuestion].correctAnswer && (
                      <svg className="w-6 h-6 ml-auto text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    )}
                    {isReviewing && userAnswers[currentQuestion] === index && index !== questions[currentQuestion].correctAnswer && (
                      <svg className="w-6 h-6 ml-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-gray-100">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${currentQuestion === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                Anterior
              </button>

              {isReviewing ? (
                currentQuestion === questions.length - 1 ? (
                  <button
                    onClick={() => setShowScore(true)}
                    className="px-8 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 flex items-center gap-2"
                  >
                    Finalizar Revisión
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-8 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 flex items-center gap-2"
                  >
                    Siguiente
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                  </button>
                )
              ) : (
                <button
                  onClick={handleNextQuestion}
                  disabled={userAnswers[currentQuestion] === undefined}
                  className={`px-8 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 ${userAnswers[currentQuestion] === undefined ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' : 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-teal-500/30'}`}
                >
                  {currentQuestion === questions.length - 1 ? 'Ver Resultados' : 'Siguiente'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;