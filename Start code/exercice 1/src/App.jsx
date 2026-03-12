import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    const maxScore = 10; 
    
    // 1- Compute width
    const percentage = Math.min(Math.max((score / maxScore) * 100, 0), 100);
    const scoreWidth = '' + percentage + '%';

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if (percentage >= 80) {
      scoreColor = '#52c41a';
    } else if (percentage >= 50) {
      scoreColor = '#faad14';
    }

    // 3 - Return the style object
   return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
  <>
    <div className="score-panel">
      <h1>My Score in React</h1>

      <small>Enter a score (0 to 10): </small>
      <input
        type="number"
        min="0"
        max="10"
        onChange={(e) => setScore(Number(e.target.value))}
      ></input>

      <div className="score-bar">
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  </>
);
}