import React, { JSX } from "react";
import { Question as QuestionType } from "../../types";
import styles from "./Question.module.css"

export function Question({
  question,
}: {
  question: QuestionType;
}): JSX.Element {
  const isCorrectInitial = question.answers.reduce(
    (acc, answer) => {
      acc[answer.id] = false;
      return acc;
    },
    {} as Record<number, boolean>,
  );

  const [answerId, setAnswerId] = React.useState<number | null>(null);
  const [isCorrect, setIsCorrect] = React.useState<Record<number, boolean>>(
    isCorrectInitial as Record<number, boolean>,
  );
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(question.answers);
    const correctAnswer = question.answers.find((answer) => answer.correct);
    if (!answerId) {
      return;
    }
    if (correctAnswer?.id === answerId) {
      setIsCorrect((prev) => {
        prev[answerId] = true;
        return prev;
      });
    }
    setSubmitted(true);
  };

  return (
    <div className={styles.slay}>
      <h4>{question.text}</h4>
      <form onSubmit={onSubmit}>
        <ul>
          {question.answers.map((answer) => {
            return (
              <li key={answer.id}>
                <input
                  type="radio"
                  name="answer"
                  value={answer.id}
                  onChange={() => setAnswerId(answer.id)}
                />
                {answer.text}{"-"}
                {submitted ? (isCorrect[answer.id] ? "CORRECT!!" : "INCORRECT...") : ""}
              </li>
            );
          })}
        </ul>
        <button>Svara</button>
      </form>
    </div>
  );
}
