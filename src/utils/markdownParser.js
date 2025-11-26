export const parseMarkdownQuestions = (markdown) => {
  const lines = markdown.split('\n');
  const questions = [];
  let currentQuestion = null;
  let options = [];
  let correctAnswer = -1;
  let idCounter = 1;

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (!trimmedLine) return;

    if (trimmedLine.startsWith('#')) {
      // Save previous question if exists
      if (currentQuestion) {
        questions.push({
          id: idCounter++,
          question: currentQuestion,
          options: options,
          correctAnswer: correctAnswer
        });
      }
      // Start new question (remove # and trim)
      currentQuestion = trimmedLine.replace(/^#+\s*/, '').trim();
      options = [];
      correctAnswer = -1;
    } else if (trimmedLine.startsWith('- [')) {
      // Option
      const isCorrect = trimmedLine.includes('[x]') || trimmedLine.includes('[X]');
      const optionText = trimmedLine.replace(/-\s*\[.?\]\s*/, '').trim();
      
      if (isCorrect) {
        correctAnswer = options.length;
      }
      options.push(optionText);
    }
  });

  // Push last question
  if (currentQuestion) {
    questions.push({
      id: idCounter++,
      question: currentQuestion,
      options: options,
      correctAnswer: correctAnswer
    });
  }

  return questions;
};
