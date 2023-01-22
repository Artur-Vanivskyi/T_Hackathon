/*
UI to view the "metadata" of a quiz
*/
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import truncateText from "../utils/truncateText";
import "../../../App.css";

export const Quiz = ({ quizObj }) => {
  const history = useHistory();
  const [quizQuestions, setQuizQuestions] = useState([]);
  useEffect(() => {
    setQuizQuestions(quizObj['questions']);
  }, [quizObj]);

  const BASE_URL = `/take/${quizObj['id']}`;
  return (
    <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="font-weight-lighter flex-fill">
          {quizObj['name']}
        </h2>
        {/* <nav>
          <ul>
            <li>
              {quizQuestions.length} questions
            </li>
          </ul>
        </nav> */}
        <nav>
          <ul>
            <li>
              {truncateText(quizObj['description'])}
            </li>
            <li>
              <button
                type="button"
                onClick={() => {history.push(BASE_URL)}}
                className="takeQuizButtonBox">
                <i className="takeQuizText">
                  Take
                </i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </article>
)};

export default Quiz;