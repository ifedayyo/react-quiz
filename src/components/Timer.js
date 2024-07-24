import { useState, useEffect } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return <button className="timer">{counter}</button>;
}
