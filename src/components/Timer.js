import { useEffect } from "react";

export default function Timer({ dispatch }) {
  //const [counter, setCounter] = useState(60);

  // eslint-disable-next-line no-lone-blocks
  {
    /*useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]); */
  }

  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );

  return <button className="timer">6:00</button>;
}
