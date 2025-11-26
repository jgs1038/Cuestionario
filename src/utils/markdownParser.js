export const parseMarkdownQuestions = (markdown) => {
  const lines = markdown.split('\n');
  const questions = [];
  let currentQuestion = null;
  let options = [];
  let correctAnswer = -1;
  let idCounter = 1;

  // Regex helpers
  const isHeader = (line) => line.startsWith('#');
  const isMeproQuestion = (line) => /^\*\*\d+\./.test(line); // Matches "**1. "
  const isOption = (line) => line.startsWith('- [') || line.startsWith('- ☐') || line.startsWith('- ☑');
  const isCorrectOption = (line) => line.includes('[x]') || line.includes('[X]') || line.includes('☑');

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    // We don't skip empty lines immediately because they might be part of a code block or paragraph.
    // However, if we haven't started a question yet, we can ignore them.

    if (isHeader(trimmedLine) || isMeproQuestion(trimmedLine)) {
      // Save previous question if exists AND has options
      if (currentQuestion && options.length > 0) {
        questions.push({
          id: idCounter++,
          question: currentQuestion.trim(),
          options: options,
          correctAnswer: correctAnswer
        });
      }

      // Start new question
      if (isHeader(trimmedLine)) {
        currentQuestion = trimmedLine.replace(/^#+\s*/, '').trim();
      } else {
        // Remove bold markers for mepro style
        currentQuestion = trimmedLine.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
      }

      options = [];
      correctAnswer = -1;
    } else if (isOption(trimmedLine)) {
      // Option
      const isCorrect = isCorrectOption(trimmedLine);
      // Clean up option text: remove markers like "- [ ]", "- ☐", "a. ", "b. "
      let optionText = trimmedLine
        .replace(/^-\s*\[.?\]\s*/, '') // Remove standard markdown checkbox
        .replace(/^-\s*[☐☑]\s*/, '')   // Remove mepro checkbox
        .replace(/^[a-z]\.\s*/, '')     // Remove "a. ", "b. "
        .trim();

      if (isCorrect) {
        correctAnswer = options.length;
      }
      options.push(optionText);
    } else if (currentQuestion && options.length === 0) {
      // Append text to current question if we haven't started options yet
      // Ignore separator lines or solution lines if they appear before options
      if (!trimmedLine.startsWith('---') && !trimmedLine.startsWith('**✓')) {
        // Use raw line to preserve indentation
        currentQuestion += '\n' + line;
      }
    }
  });

  // Push last question
  if (currentQuestion && options.length > 0) {
    questions.push({
      id: idCounter++,
      question: currentQuestion.trim(),
      options: options,
      correctAnswer: correctAnswer
    });
  }

  return questions;
};
