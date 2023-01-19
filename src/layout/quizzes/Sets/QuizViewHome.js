import React from "react";
import { NavLink } from "react-router-dom";

function QuizViewHome({quiz, browserHistory}) {
    const QUIZ_URL = `/take/${quiz['id']}`
    return (
        <div>
            <header>
                <NavLink to="/">Home</NavLink> / {quiz['name']}
            </header>
            {/* border p-4 h-100 */}
        <div className="d-flex flex-column">
            <h2 className="font-weight-lighter flex-fill">
                {quiz['name']}
            </h2>
            <p>
                {quiz['description']}
            </p>
            <nav>
                <ul>
                    <li>
                        <button
                            type="button"
                            onClick={() => {browserHistory.push(QUIZ_URL)}}>
                            Take
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
    );
}

export default QuizViewHome;