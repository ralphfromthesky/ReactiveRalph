import React, { useEffect, useState } from "react";
import { ReusableButtons } from "../reusableComponents/reusableButtons.tsx";

export const QuizzApp = () => {
  const quizQuestions = [
    {
      question: "What is the name of our galaxy?",
      options: {
        a: "Andromeda",
        b: "Milky Way",
        c: "Sombrero",
        d: "Whirlpool",
      },
      answer: "b", // Correct answer
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: {
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
      },
      answer: "b",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: {
        a: "Earth",
        b: "Neptune",
        c: "Jupiter",
        d: "Saturn",
      },
      answer: "c",
    },
    {
      question: "What celestial body is at the center of our solar system?",
      options: {
        a: "Earth",
        b: "Mars",
        c: "The Sun",
        d: "The Moon",
      },
      answer: "c",
    },
    {
      question: "What is the nearest star system to Earth?",
      options: {
        a: "Sirius",
        b: "Alpha Centauri",
        c: "Proxima Centauri",
        d: "Betelgeuse",
      },
      answer: "c",
    },
    {
      question:
        "What is the term for a system of millions or billions of stars, together with gas and dust, held together by gravitational attraction?",
      options: {
        a: "Galaxy",
        b: "Nebula",
        c: "Star Cluster",
        d: "Black Hole",
      },
      answer: "a",
    },
    {
      question: "Which planet is known for its rings?",
      options: {
        a: "Jupiter",
        b: "Mars",
        c: "Saturn",
        d: "Uranus",
      },
      answer: "c",
    },
    {
      question: "What is a supernova?",
      options: {
        a: "A type of black hole",
        b: "A massive explosion of a star",
        c: "A star formation region",
        d: "A type of galaxy",
      },
      answer: "b",
    },
    {
      question: "Which planet has the most moons?",
      options: {
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
      },
      answer: "c",
    },
    {
      question:
        "What is the term for a hypothetical region of space where the gravitational pull is so strong that nothing can escape from it?",
      options: {
        a: "Wormhole",
        b: "Black Hole",
        c: "Neutron Star",
        d: "White Dwarf",
      },
      answer: "b",
    },
  ];

  const [question, setQuestion] = useState<number>(0);
  const [answer, setanswer] = useState<string>("");
  const [rightAnswer, setrightAnswer] = useState<number>(0);
  const [isAnswered, setisAnswered] = useState<boolean>(false);
  const [hasAnswred, sethasAnswred] = useState<boolean>(false);
  const [hideQuestion, sethideQuestion] = useState<boolean>(true);

  const nextQ = () => {
    setisAnswered(false);
    if (!hasAnswred) {
      alert("please select answer");
      return;
    }
    if (question < quizQuestions.length - 1) {
      setQuestion((a) => a + 1);
      setanswer("");
    } else {
      alert("You just finshed the test");
      sethideQuestion(false);
    }
    sethasAnswred(false);
  };

  const add = (a: number, b: number) => ({
    sum: a + b,
  });

  const selectAns = (ans: any) => {
    setanswer(ans);
    sethasAnswred(true);
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
      {hideQuestion && (
        <>
          {/* <img src="https://github.com/ralphfromthesky/images/blob/main/1.jpg?raw=true" /> */}
          <div className="text-center mb-[1rem] text-[2.5rem] font-bold">
            Simple QuizzApp
          </div>
          <div className="flex justify-end">
            {" "}
            question {question} / {quizQuestions.length}
          </div>
          {/* {question} / {quizQuestions.length} - {answer}
          {quizQuestions[question].answer} - {rightAnswer} */}
          <div className="text-[2rem] font-bold">
            {quizQuestions[question].question}
          </div>
          <div>
            {Object.entries(quizQuestions[question].options).map(([a, b]) => (
              <div
                key={a}
                onClick={() => selectAns(a)}
                className={answer === a ? "bg-[#ecebeb]" : ""}
              >
                {a}: {b}
              </div>
            ))}
          </div>
          <div>
            {answer && (
              <ReusableButtons
                title="Next Question"
                bg="blue"
                height="2.5rem"
                width="100%"
                color="white"
                func={nextQ}
              />
            )}
          </div>
        </>
      )}

      {!hideQuestion && (
        <>
          <div className="text-center text-[2rem] font-bold">
            congratulation! <br />
            you got {rightAnswer} out of 10!
            {rightAnswer <= 5 ? (
              <>
                <div className="flex flex-col justify-center">
                  you failed
                  <div className="flex justify-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerNfJr-vJiOL5j90bVNFehH8_y8U2U_DR5g&s"
                      alt=""
                      className="h-[20rem] w-[20rem] "
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center">
                  you pass!
                  <div className="flex justify-center">
                    <img
                      src="https://i.pinimg.com/originals/86/d1/76/86d1767ba3ecb6af8df3e4e5dda376eb.gif"
                      alt=""
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const TodoApss = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, settodoList] = useState<Array<{ content: string }>>([]);

  const addTodo = () => {
    if (todo === "") {
      alert("dont leave vblank");
      return;
    }
    // settodoList((a) => [...a, { content: todo }]);
    const newTodo = [...todoList, { content: todo }];
    settodoList(newTodo);
    setTodo("");
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };

  const handleChange = (index: number, newValue: string) => {
    const updatedTodos = todoList.map((todoItem, i) =>
      i === index ? { ...todoItem, content: newValue } : todoItem
    );
    settodoList(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodos = (content: string) => {
    settodoList((todos) => {
        const updatedTodos = todos.filter((todo) => todo.content !== content);
        localStorage.setItem("todos", JSON.stringify(updatedTodos)); 
        return updatedTodos; 
    });
};

  useEffect(() => {
    const storedTodo = localStorage.getItem("todos");
    if (storedTodo) {
      try {
        settodoList(JSON.parse(storedTodo));
      } catch (error) {
        alert(error);
      }
    }
  }, []);

  return (
    <div>
      <div className="border-2 rounded flex flex-col p-1">
        <div className="text-[2rem] font-bold">Simple todo apps</div>
        <input
          type="text"
          className="border-2 h-[3rem] mt-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-blue h-[2rem] bg-emerald-500 text-white"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col">
        {todoList.map((a, b) => (
          <>
           <div className="flex"> 
            <input
              type="text"
              key={b}
              value={a.content}
              onChange={(e) => handleChange(b, e.target.value)}
            />
            <button onClick={() => deleteTodos(a.content)}>DEL</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
