import React from "react";
import "./progress_nav_bar.css";

/* viewingQuestion set to 'undefined' by default to allow for simply viewing the quiz without taking it */
function ProgressBar({numQuestions, viewingQuestion=undefined}) {
    if(!Number.isInteger(numQuestions)) return "";
    /* order starts from 0; the question ids start from 1 */
    const orderArr = Array.from(Array(numQuestions).keys());
    return (
        <>
            <div className="progressBarLayout">
                {orderArr.map(k => <div
                    key={k+1}
                    className={(viewingQuestion >= 0 && k+1 === viewingQuestion) ?
                        "questionViewedRectangle" : "questionBlankRectangle"}
                    style={{ order: k }}/>)}
            </div>
        </>
    );
}

export default ProgressBar;