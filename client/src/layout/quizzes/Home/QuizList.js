import React from "react";
import { allQuizzesEmbedQuestions } from "../utils/staticdata/index";
import Quiz from "./QuizHome";

export const QuizList = () => {
  const quizArr = allQuizzesEmbedQuestions()
  const list = quizArr.map((quizObj) =>
    <Quiz key={quizObj['id']} quizObj={quizObj} />);

  return (
    <main className="container">
      <section className="row">{list}</section>
    </main>
  );
};

export default QuizList;