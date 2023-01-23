import React from "react";
import { NavLink } from "react-router-dom";
import { getQuiz, getQuestions } from "../utils/staticdata/index";
import "../../../App.css";
import ProgressNav from "../Questions/ProgressNav";

function QuizViewHome({quiz, browserHistory}) {
    const QUIZ_ID = quiz['id'];
    const QUIZ_URL = `/take/${QUIZ_ID}`
    const QUIZ_QUESTIONS = getQuestions(QUIZ_ID);
    return (
        <div>
            <header>
                <NavLink to="/">Home</NavLink> / {quiz['name']}
            </header>
            {/* border p-4 h-100 */}
        <div className="d-flex flex-column">
            <div>
                <ProgressNav numQuestions={QUIZ_QUESTIONS.length}/>
                <h2 className="font-weight-lighter flex-fill">
                    {quiz['name']}
                </h2>
            </div>
            <p>
                {quiz['description']}
            </p>
            <nav>
                <ul>
                    <li>
                        <button
                            type="button"
                            className="takeQuizButtonBox"
                            onClick={() => {browserHistory.push("/onboarding")}}>
                                <i className="takeQuizText">
                                    Take
                                </i>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
    );
}

export default QuizViewHome;