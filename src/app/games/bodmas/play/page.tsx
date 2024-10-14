"use client"
// components/BodmasGame.tsx
import { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
// import "./bodmas.css"

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;
  height: 100vh;
`;

const Question = styled.div`
  font-size: 24px;
  margin: 20px;
`;

const Timer = styled.div`
  font-size: 18px;
  color: red;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
`;

const BodmasGame: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(1000);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    generateBodmasQuestion();
    setTimeLeft(1000);
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'] as const;
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const newQuestion = `${num1} ${randomOperator} ${num2}`;
    setQuestion(newQuestion);
  };



  const generateBodmasQuestion = ()  => {
    const operators = ['+', '-', '*', '/'] as const;
  
    // Helper function to get a random integer between min and max
    const getRandomInt = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    // Helper function to get a random operator
    const getRandomOperator = (): string => {
      return operators[Math.floor(Math.random() * operators.length)];
    };
  
    // Generate a question with 3-5 terms, including brackets
    let question = '';
    const numberOfTerms = getRandomInt(3, 5);
    for (let i = 0; i < numberOfTerms; i++) {
      const term = getRandomInt(1, 10); // Random number between 1 and 10
  
      // Randomly add a bracket before or after the term (at most one bracket pair)
      if (i === 0 && Math.random() < 0.5) {
        question += `(${term}`;
      } else if (i === numberOfTerms - 1 && question.includes('(') && Math.random() < 0.5) {
        question += ` ${term})`;
      } else {
        question += ` ${term}`;
      }
  
      // Add an operator if it's not the last term
      if (i < numberOfTerms - 1) {
        question += ` ${getRandomOperator()}`;
      }
    }
  
    // Ensure brackets are balanced
    if (question.includes('(') && !question.includes(')')) {
      question += ')';
    }
  
    // return question;
    setQuestion(question);
  };



  const checkAnswer = () => {
    try {
      if (eval(question) === parseFloat(answer)) {
        setScore(score + 1);
      }
    } catch (error) {
      console.error('Error evaluating the expression:', error);
    }
    setAnswer('');
    generateBodmasQuestion();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <GameContainer>
      {!gameOver ? (
        <>
          <Timer>Time Left: {timeLeft} seconds</Timer>
          <Question>Question: {question}</Question>
          <Input
            type="number"
            value={answer}
            onChange={handleInputChange}
            placeholder="Enter your answer"
          />
          <Button onClick={checkAnswer}>Submit Answer</Button>
          <div>Score: {score}</div>
        </>
      ) : (
        <div>
          <h2>Game Over!</h2>
          <p>Your score: {score}</p>
          <Button onClick={() => window.location.reload()}>Play Again</Button>
        </div>
      )}
    </GameContainer>
  );
};

export default BodmasGame;
