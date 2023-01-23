import React from "react";
import PencilSquiggle from "../Home/PencilSquiggle";
import Dummy from "./Dummy";
import ProgressBar from "./ProgressBar";
import "./progress_nav_bar.css";

export default function ProgressNav({numQuestions, viewingQuestion=undefined}) {
    return (
        <nav className="progressNav">
            <PencilSquiggle style={{ order: 0 }}/>
            <ProgressBar
                numQuestions={numQuestions}
                viewingQuestion={viewingQuestion}
                style={{ order: 1 }}/>
            {/* a way of hard-coding to ensure the above two components appear at Left and Center of the bar*/}
            <Dummy/>
        </nav>
    );
}