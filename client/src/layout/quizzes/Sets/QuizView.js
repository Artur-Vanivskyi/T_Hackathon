import React/*, { useEffect, useState }*/ from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { getQuiz, getQuestions } from "../utils/staticdata/index";
import QuestionCard from "./QuestionCard";
import QuizViewHome from "./QuizViewHome";

export const QuizView = () => {
    const history = useHistory();
    const { url } = useRouteMatch();
    const QUIZ_VIEW_URL = url.substring(url.indexOf("quizzes") - 1);
    
    const params = useParams();
    const quizId = parseInt(params['quizId']);
    const thisQuiz = getQuiz(quizId);
    const questions = getQuestions(quizId);

    const questionComponents = questions.map((questionObj) =>
        <QuestionCard key={questionObj['id']}
            questionObj={questionObj}
            browserHistory={history}
            quizViewUrl={QUIZ_VIEW_URL}/>);
    return (
        /* col-12 col-md-6 col-xl-3 my-2 */
        <article className="align-self-stretch">
            <div className="border p-4 h-100 d-flex flex-column">
                <QuizViewHome
                    quiz={thisQuiz}
                    browserHistory={history}/>
            </div>
            <h2>{`Quiz: ${thisQuiz['name']}`}</h2>
            <section className="row">{questionComponents}</section>
        </article>
    )};

export default QuizView;