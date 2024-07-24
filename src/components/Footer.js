import Question from "./Question";
import NextButton from "./NextButton";
import Timer from "./Timer";

export default function Footer({
  questions,
  index,
  dispatch,
  answer,
  numQuestions,
}) {
  return (
    <div>
      <Question
        question={questions[index]}
        dispatch={dispatch}
        answer={answer}
      />

      <Timer />

      <NextButton
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />
    </div>
  );
}
