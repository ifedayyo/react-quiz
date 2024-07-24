import { useState, useEffect } from "react";

export default function Timer({ index, numQuestions }) {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      <button className="btn btn-ui">{counter}</button>
    </div>
  );
}
