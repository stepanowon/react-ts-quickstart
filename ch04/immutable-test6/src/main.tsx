import produce from "immer";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let quiz = {
  students: ["홍길동", "성춘향", "박문수", "변학도"],
  quizlist: [
    {
      question: "한국 프로야구 팀이 아닌것은?",
      options: [
        { no: 1, option: "삼성라이온스" },
        { no: 2, option: "기아타이거스" },
        { no: 3, option: "두산베어스" },
        { no: 4, option: "LA다져스" },
      ],
      answer: 4,
    },
    {
      question: "2018년 크리스마스는 무슨 요일인가?",
      options: [
        { no: 1, option: "월" },
        { no: 2, option: "화" },
        { no: 3, option: "수" },
        { no: 4, option: "목" },
      ],
      answer: 2,
    },
  ],
};

const quiz2 = produce(quiz, (draft) => {
  //상태 트리의 끝단 변경
  draft.quizlist[0].options[0].option = "LG트윈스";
});

//예상결과 : false, false, false, false, false, true
//마지막은 왜 true인가? 변경된 객체 트리의 끝단으로부터 루트로의 경로상이 아닌 것이므로
console.log(quiz === quiz2);
console.log(quiz.quizlist === quiz2.quizlist);
console.log(quiz.quizlist[0] === quiz2.quizlist[0]);
console.log(quiz.quizlist[0].options[0] === quiz2.quizlist[0].options[0]);
console.log(quiz.quizlist[0].options[0].option === quiz2.quizlist[0].options[0].option);
console.log(quiz.students === quiz2.students);
