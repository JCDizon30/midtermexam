import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

const talentList = [
  "Being On Time",
  "Making An Effort",
  "Being High Energy",
  "Having A Positive Attitude",
  "Being Passionate",
  "Using Good Body Language",
  "Being Coachable",
  "Doing A Little Extra",
  "Being Prepared",
  "Having A Strong Work Ethic"
];

function App() {
  const [displayText, setDisplayText] = useState("10 Things That Require Zero Talent");
  const name = "JOHN CARLO' DIZON - IT3A";

  const handleKeyPress = useCallback((event) => {
    const key = event.key;
    if (key >= 0 && key < 10) {
      setDisplayText(talentList[key]);
    } else if (key === 'r' || key === 'R') {
      setDisplayText("10 Things That Require Zero Talent");
    } else if (key === 'n' || key === 'N') {
      setDisplayText(name.toUpperCase());
    }
  }, [name]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>{displayText}</h2>
    </div>
  );
}

export default App;