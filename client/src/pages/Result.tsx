import { useEffect, useState } from "react";

export default function Result() {
  const [career, setCareer] = useState(null);

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("careerQuiz") || "{}");

    async function fetchCareer() {
      const res = await fetch("http://localhost:3001/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      const data = await res.json();
      setCareer(data);
    }

    fetchCareer();
  }, []);

  if (!career) return <div className="text-white text-center mt-20">Thinking 🤔...</div>;

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center bg-black px-6">
      <h2 className="text-4xl font-bold mb-4">Your Ideal Career Path</h2>
      <p className="text-2xl mb-6">{career.title}</p>
      <p className="mb-4">{career.description}</p>
      <a href={`/career/${career.slug}`} className="underline text-indigo-400">See more details →</a>
    </div>
  );
}