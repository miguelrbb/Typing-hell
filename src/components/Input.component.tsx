import React, { useState, FC, ChangeEvent } from "react";
import { Counter } from "./Counter.component";

document.addEventListener("keydown", (event) => {
  const input: HTMLInputElement | null = document.getElementById(
    "input"
  ) as HTMLInputElement;
  if (document.activeElement?.id === "input" && input.value) {
    if (event.key === "Backspace") {
      // Se pinta de blanco la letra que tenía el foco cuando se borra
      const letter = document.getElementById(
        "letter-" + (input.value.length - 1)
      );
      if (!letter) return;
      letter.style.color = "white";
    }
  }
});

export const Input: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [inputCurrentIndex, setInputCurrentIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);

  const targetText =
    "write show get now mountain great happy you train for through";
  const targetTextSplited = targetText.split("");
  const startTime = Date.now();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    const targetLength = event.target.value.length;
    if (targetLength > inputText.length) {
      validateLetter(targetValue);
      //  Check how many correct words are there
      //   targetTextSplited;
    }
    setInputText(targetValue);
    setInputCurrentIndex(targetValue.length);
  };

  const validateLetter: (text: string) => void = (text) => {
    const textLetterToCompare = document.getElementById(
      "letter-" + inputCurrentIndex
    );

    if (!textLetterToCompare) return;
    if (text[text.length - 1] === textLetterToCompare?.innerText) {
      textLetterToCompare.style.color = "green";
    } else {
      textLetterToCompare.style.color = "red";
    }
  };

  return (
    <div>
      <button onClick={focusInput}>Press to focus</button>
      <div>
        <input
          id="input"
          type="text"
          autoComplete="off"
          value={inputText}
          onChange={handleInputChange}
          style={{ pointerEvents: "none" }}
        />
      </div>
      <div>
        {targetTextSplited.map((letter, index) => {
          return <Letter letter={letter} letterIndex={index} />;
        })}
        <p>{correctWords}</p>
        <Counter startTime={startTime} />
      </div>
    </div>
  );
};

const Letter: FC<{
  letter: string;
  letterIndex: number;
}> = ({ letter, letterIndex }) => {
  return (
    <span
      id={"letter-" + letterIndex}
      //   style={isFilled ? { backgroundColor: isCorrect ? "green" : "red" } : {}}
    >
      {letter}
    </span>
  );
};

const focusInput = () => {
  const input = document.getElementById("input");
  input?.focus();
};
