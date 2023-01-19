import quizData from "../../../../data/db.json";

export function allQuizzesEmbedQuestions() {
    const quizArr = [];
    for(let k in quizData['quizzes']) {
        const obj = quizData['quizzes'][k];
        obj['questions'] = quizData['questions'].filter(x => x['quizId'] === obj['id']);
        quizArr.push(obj);
    }
    return quizArr;
}

export function getQuiz(id) {
    const quizArr = quizData['quizzes'].filter(x => x['id'] === id);
    return quizArr[0];
}

export function getQuestions(quizId) {
    return quizData['questions'].filter(x => x['quizId'] === quizId);
}