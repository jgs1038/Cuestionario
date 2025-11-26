import React, { useState } from 'react';
import questionsData from './questions.json';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [questions] = useState(questionsData);

  const handleAnswerOptionClick = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    const correct = index === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8">
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
            <div className="space-y-3">
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
          </>
        )}
      </div>
    </div>
  );
}
export default App;