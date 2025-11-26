import React, { useState, useEffect } from 'react';
import questionsData from './questions.json';
import { parseMarkdownQuestions } from './utils/markdownParser';
import { fetchQuestionnaireList, fetchQuestionnaireContent } from './utils/fileFetcher';

function App() {
  const [questions, setQuestions] = useState(questionsData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // New state for file management
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
    if (selectedOption !== null) return;
    setSelectedOption(index);
    const correct = index === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center p-4 font-sans relative">

      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl overflow-y-auto animate-slide-in-right">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Opciones</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Cuestionarios Disponibles</h3>
              {loading ? (
                <p className="text-gray-500">Cargando...</p>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setQuestions(questionsData);
                      setCurrentFileName('Default (JSON)');
                      restartQuiz();
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${currentFileName === 'Default (JSON)' ? 'bg-indigo-100 text-indigo-700 font-medium' : 'hover:bg-gray-100 text-gray-600'}`}
                  >
                    Default (JSON)
                  </button>
                  {availableFiles.map((file, index) => (
                    <button
                      key={index}
                      onClick={() => loadFile(file)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${currentFileName === file ? 'bg-indigo-100 text-indigo-700 font-medium' : 'hover:bg-gray-100 text-gray-600'}`}
                    >
                      {file}
                    </button>
                  ))}
                  {availableFiles.length === 0 && (
                    <p className="text-sm text-gray-400 italic">No se encontraron archivos .md en /questions/</p>
                  )}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-gray-100">
              <button onClick={loadFileList} className="text-indigo-600 text-sm hover:underline flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
                Refrescar lista
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 relative">
        {showScore ? (
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Examen Finalizado!</h2>
            <p className="text-xl text-gray-600 mb-6">Tu nota: <span className="text-indigo-600 font-bold text-2xl">{score}</span> / {questions.length}</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
              <div className="bg-indigo-600 h-4 rounded-full transition-all duration-500" style={{ width: `${(score / questions.length) * 100}%` }}></div>
            </div>
            <button onClick={restartQuiz} className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-bold shadow-lg">Reiniciar Examen</button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center text-sm font-semibold text-gray-500">
              <span>PREGUNTA {currentQuestion + 1} DE {questions.length}</span>
              <span className="text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Puntos: {score}</span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-snug">{questions[currentQuestion].question}</h2>

            <div className="w-full bg-gray-100 h-1.5 mb-8 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full transition-all duration-300" style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}></div>
            </div>

            <div className="space-y-3 mb-8">
              {questions[currentQuestion].options.map((option, index) => {
                let style = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium text-gray-600 hover:bg-indigo-50 hover:border-indigo-300 ";
                if (selectedOption !== null) {
                  if (index === questions[currentQuestion].correctAnswer) style = "w-full text-left p-4 rounded-xl border-2 font-bold bg-green-100 border-green-500 text-green-800 ";
                  else if (index === selectedOption) style = "w-full text-left p-4 rounded-xl border-2 font-bold bg-red-100 border-red-500 text-red-800 ";
                  else style = "w-full text-left p-4 rounded-xl border-2 border-gray-100 text-gray-400 ";
                }
                return (
                  <button key={index} onClick={() => handleAnswerOptionClick(index)} disabled={selectedOption !== null} className={style}>
                    <div className="flex items-center"><span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 mr-3 text-sm font-bold shadow-sm">{String.fromCharCode(97 + index).toUpperCase()}</span>{option}</div>
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4 border-t border-gray-100">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${currentQuestion === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50'}`}
              >
                Anterior
              </button>

              {selectedOption !== null && (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
                >
                  {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
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