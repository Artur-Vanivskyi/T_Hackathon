import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/* TODO: separate progress bar in client/src/components/ folder */
function Answer({/*quizName, */ idState, questionList, userAnswers}) {
    const history = useHistory();
    const {num, setNum} = idState;
    const [fixedAnswer, setFixedAnswer] = useState(undefined);
    const getQuestionInfo = (x) => {
        const arr = questionList.filter(elem => elem['id'] === x);
        return arr[0];
    };

    const getIsRequired = (x) => {
        const questionInfo = getQuestionInfo(x);
        return !questionInfo || (
            'required' in questionInfo && questionInfo['required']);
    };
    /*
    const previousIsRequired = (x) => {
        const prevQuestion = questionList.filter(elem => elem['id'] === x-1);
        return (prevQuestion) ? (
            'required' in prevQuestion && prevQuestion['required']) : (false);
    };
    */
    const getIsMC = (x) => {
        const thisInfo = getQuestionInfo(x);
        return 'choices' in thisInfo && thisInfo['choices'];
    }
    const getIsYN = (x) => {
        const thisInfo = getQuestionInfo(x);
        return 'isYesNo' in thisInfo && thisInfo['isYesNo'];
    }

    const getHasNA = (x) => {
        const thisInfo = getQuestionInfo(x);
        return 'has_NA_option' in thisInfo && thisInfo['has_NA_option'];
    }

    const isFreeForm = (x) => { return !(getIsMC(x) || getIsYN(x))};

    const getPreset = (x) => {
        const choicesMC = getIsMC(x) ? (getQuestionInfo(x))['choices'] : "";
        const choicesYN = getIsYN(x) ? ['Yes', 'No'] : "";
        return choicesMC || choicesYN;
    }

    const resetFixedAnswer = () => {
        if(!getPreset(num)) setFixedAnswer((any_str) => undefined);
    }

    // from https://dev.to/collegewap/how-to-work-with-radio-buttons-in-react-3e0o
    const onOptionChange = (e) => {
        setFixedAnswer(e.target.value);
    };

    const radioChoices = (choices) => {
        if(choices.length === 0) return "";
        const inputArr = choices.map((possible) => {
            return (
            <div key={`Q${num}-${possible}`}>
                <input
                    type="radio"
                    id={`Q${num}-radio-${possible}`} /* name={`Q${num}`} */
                    checked={fixedAnswer === possible}
                    value={possible}
                    onChange={onOptionChange}/>
                <label htmlFor={possible}>{possible}</label>
            </div>);
        });
        return <fieldset>
            { inputArr }
        </fieldset>;
    }

    const enableSecondaryFreeForm = (selected) => {
        const hasNA = getHasNA(num);
        if(!(selected || hasNA)) return false;
        const choices = getPreset(num);
        return (getHasNA(num) &&
            selected !== choices[choices.length-1]) || (
                selected.toLowerCase() === 'other');
    }

    const handleBack = (event) => {
        event.preventDefault();
        setNum((x) => x-1);
        resetFixedAnswer();
    }

    const handleNext = (event) => {
        event.preventDefault();
        setNum((x) => x+1);
        resetFixedAnswer();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/");
        /* TODO: 'FINISH & SAVE' or SUBMIT user's set of answers to DB (enforce one answer set per user rule) */
        /* POSSIBLE TODO: direct user to registration form */
    }
    return (
        <div>
            <div className="border p-4 h-100 d-flex flex-column">
                <h3 className={getIsRequired(num) ? "questionRequired" : ""}>
                    {`Question ${num} of ${questionList.length}${
                        getIsRequired(num) ? " (REQUIRED)" : ""}`}
                </h3>
                <p>
                    { (getQuestionInfo(num))['prompt'] }
                </p>
                <div>
                    {(isFreeForm(num)) ? (
                        <textarea id="defaultFree"/>): (
                            radioChoices(getPreset(num)))
                    }
                </div>
                {/* optional add-on feature for questions with pre-set answer choices */}
                <div hidden={isFreeForm(num) || getIsYN(num)}>
                    <textarea
                        id="otherFree"
                        disabled={!enableSecondaryFreeForm(fixedAnswer)}/>
                </div>
                <ul>
                    <li>
                        {/* UNSURE: disable if previous question is required (cannot alter response) */}
                        <button
                            disabled={num === 1/* || previousIsRequired(num) */}
                            // title={previousIsRequired(num) ? "You already answered the prior question" : ""}
                            onClick={handleBack}>
                            Back
                        </button>
                        {/* next / submit */}
                        { (num < questionList.length) ? (
                            <button onClick={handleNext}>Next</button>
                        ) : (
                            <button onClick={handleSubmit}>Finish</button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Answer;