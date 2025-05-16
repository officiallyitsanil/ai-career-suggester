import { useState } from "react";

const questions = [
  { id: 1, question: "Which subject do you enjoy the most?", options: ["Math", "Science", "History", "Art"] },
  { id: 2, question: "What excites you more?", options: ["Solving puzzles", "Creating things", "Helping others", "Leading a team"] },
  { id: 3, question: "Choose your personality", options: ["Creative", "Analytical", "Empathetic", "Adventurous"] },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (option) => {
    const currentQuestion = questions[step];
    setAnswers({ ...answers, [currentQuestion.id]: option });
    setStep(step + 1);
  };

  if (step === questions.length) {
    localStorage.setItem("careerQuiz", JSON.stringify(answers));
    window.location.href = "/result";
    return null;
  }

  const current = questions[step];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h2 className="text-3xl font-bold mb-6">{current.question}</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {current.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-all"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}