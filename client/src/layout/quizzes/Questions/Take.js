import React, { useState } from "react";
import { /* useRouteMatch, */ NavLink } from "react-router-dom";
import quizData from "../../../data/db.json";
import { getQuiz, getQuestions } from "../utils/staticdata/index";
import Answer from "./Answer";
// const ROUTE = "take";

export const Take = () => {
    const ONBOARDING_QUIZ_ELEM = quizData['quizzes'].filter(
        x => x['name'].toLowerCase() === 'onboarding');
    const ONBOARDING_QUIZ_ID = ONBOARDING_QUIZ_ELEM[0]['id'];
    // const { url } = useRouteMatch();
    // const quizId = parseInt(url.substring(url.indexOf(ROUTE) + ROUTE.length + 1));

    const thisQuiz = getQuiz(ONBOARDING_QUIZ_ID);
    const questionList = getQuestions(ONBOARDING_QUIZ_ID);
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