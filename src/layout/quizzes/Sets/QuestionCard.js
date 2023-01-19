/*
class for displaying question previews in quiz homepages (cannot view answer choices)
*/
import React from "react";
import truncateText from "../utils/truncateText";

export const QuestionCard = ({ questionObj, browserHistory/*, quizViewUrl*/}) => {
  const isRequired = 'required' in questionObj && questionObj['required'];
  let prompt = `Q${questionObj['id']}. ${truncateText(questionObj['prompt'])}`;
  const handleNext = (event) => {
    event.preventDefault();
    browserHistory.push(`/take/:quizId`);
  }

  return (
    <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
      <div className="border p-4 h-100 d-flex flex-column">
        <p className={isRequired ? "questionRequired" : ""}>
          {`${prompt}${isRequired ? " (REQUIRED)" : ""}`}
        </p>
        <nav>
          <ul>
            <li>
              <button onClick={handleNext}>Answer</button>
            </li>
          </ul>
        </nav>
      </div>
    </article>
)};

export default QuestionCard;