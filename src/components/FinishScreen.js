export default function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points} </strong> out of all the {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}
