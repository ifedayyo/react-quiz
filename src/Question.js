export default function Question({ question }) {
  return (
    <div>
      <h4> {question.question}</h4>
      <div>
        {question.options.map((option) => (
          <button className="btn btn-option">{option}</button>
        ))}
      </div>
    </div>
  );
}
