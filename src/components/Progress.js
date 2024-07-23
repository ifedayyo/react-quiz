export default function Progress({ index, numQuestions }) {
  return (
    <div>
      <header className="progress">
        <p>
          Question <strong>{index}</strong>/ {numQuestions}
        </p>
      </header>
    </div>
  );
}
