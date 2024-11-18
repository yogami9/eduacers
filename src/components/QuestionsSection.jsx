import React, { useEffect, useState } from 'react';
import './assets/css/questionsSection.css'; // Import your CSS file

const QuestionsSection = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch('https://eduacers-backend.onrender.com/questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error loading questions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);
  
  if (loading) return <p>Loading questions...</p>;

  return (
    <section className="questions-section">
      <div className="container">
        <h2>Questions and Answers</h2>
        <ul>
          {questions.map(question => (
            <li key={question._id}>
              <h3>{question.title}</h3>
              <p>{question.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QuestionsSection;