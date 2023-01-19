import React, { useState } from "react";
import { useRouteMatch, NavLink } from "react-router-dom";
import { getQuiz, getQuestions } from "../utils/staticdata/index";
import Answer from "./Answer";
const ROUTE = "take";

export const Take = () => {
    const { url } = useRouteMatch();
    const quizId = parseInt(url.substring(url.indexOf(ROUTE) + ROUTE.length + 1));

    const thisQuiz = getQuiz(quizId);
    const questionList = getQuestions(quizId);
    const [num, setNum] = useState(1);
    // const [userAnswers, setUserAnswers] = useState([]);
    return(
        <div>
            <header>
                <NavLink to="/">Home</NavLink> / {thisQuiz['name']} / Take
                <h2 className="font-weight-lighter flex-fill">
                    {thisQuiz['name']}
                </h2>
            </header>
            <Answer
                idState={{num, setNum}}
                questionList={questionList}
                userAnswers={[]}
            />
        </div>
    );
}

export default Take;