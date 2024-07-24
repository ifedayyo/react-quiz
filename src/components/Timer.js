import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  //const [counter, setCounter] = useState(60);

  // eslint-disable-next-line no-lone-blocks
  {
    /*useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]); */
  }

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      //the below is a cleanup function to prevent the timer from running till eternityy
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <button className="timer">
      {" "}
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </button>
  );
}
