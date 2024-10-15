import React, { useState } from "react";
import { ReusableButtons } from "../reusableComponents/reusableButtons.tsx";

const QuizzApp = () => {
  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: {
        A: "Berlin",
        B: "Madrid",
        C: "Paris",
        D: "Rome",
      },
      answer: "C",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: {
        A: "Earth",
        B: "Mars",
        C: "Jupiter",
        D: "Venus",
      },
      answer: "B",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: {
        A: "Charles Dickens",
        B: "Mark Twain",
        C: "William Shakespeare",
        D: "Jane Austen",
      },
      answer: "C",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: {
        A: "Atlantic Ocean",
        B: "Indian Ocean",
        C: "Arctic Ocean",
        D: "Pacific Ocean",
      },
      answer: "D",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: {
        A: "Gold",
        B: "Oxygen",
        C: "Silver",
        D: "Iron",
      },
      answer: "B",
    },
    {
      question: "What is the boiling point of water?",
      options: {
        A: "100°C",
        B: "0°C",
        C: "50°C",
        D: "25°C",
      },
      answer: "A",
    },
    {
      question: "What is the largest mammal in the world?",
      options: {
        A: "Elephant",
        B: "Blue Whale",
        C: "Giraffe",
        D: "Great White Shark",
      },
      answer: "B",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: {
        A: "Oxygen",
        B: "Carbon Dioxide",
        C: "Nitrogen",
        D: "Hydrogen",
      },
      answer: "B",
    },
    {
      question: "What is the capital of Japan?",
      options: {
        A: "Beijing",
        B: "Seoul",
        C: "Tokyo",
        D: "Bangkok",
      },
      answer: "C",
    },
    {
      question:
        "Which organ is responsible for pumping blood in the human body?",
      options: {
        A: "Liver",
        B: "Brain",
        C: "Heart",
        D: "Lungs",
      },
      answer: "C",
    },
  ];

  const [question, setQuestion] = useState<number>(0);
  const [answer, setanswer] = useState<string>("");
  const [rightAnswer, setrightAnswer] = useState<number>(0);
  const [isAnswered, setisAnswered] = useState<boolean>(false);
  const [hasAnswred, sethasAnswred] = useState<boolean>(false)

  const nextQ = () => {
    if(!hasAnswred) {
        alert('please select answer');
        return
    }
    if (question < quizQuestions.length - 1) {
      setQuestion((a) => a + 1);
    } else {
      alert("no more question");
    }
    sethasAnswred(false)
    
  };

  const selectAns = (ans: any) => {
    setanswer(ans);
    sethasAnswred(true)
    if (ans === quizQuestions[question].answer && !isAnswered) {
      setrightAnswer((a) => a + 1);
      setisAnswered(true);
    }
    if (ans !== quizQuestions[question].answer && isAnswered) {
      setrightAnswer((a) => a - 1);
      setisAnswered(false);
    }
  };

  return (
    <div className="mt-[2rem] border-2">
      <div className="text-center mb-[1rem]">QuizzApp</div>
      {question} / {quizQuestions.length} - {answer}{" "}
      {quizQuestions[question].answer} - {rightAnswer}
      <div>{quizQuestions[question].question}</div>
      <div>
        {Object.entries(quizQuestions[question].options).map(([a, b]) => (
          <div key={a} onClick={() => selectAns(a)}>
            {a}: {b}
          </div>
        ))}
      </div>
      <div>
        <ReusableButtons
          title="Next Question"
          bg="blue"
          height="2.5rem"
          width="10rem"
          color="white"
          func={nextQ}
        />
      </div>
    </div>
  );
};

export default QuizzApp;
