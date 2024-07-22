export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div>
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? `answer` : ""} ${
              hasAnswered ? "correct" : "wrong"
            }`}
            key={option}
            disabled={answer !== null}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
