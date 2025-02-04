import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

//this is the reducer function from the useReducer hook
//action is an object that describes how to update state
function reducer(state, action) {
  //console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unkown action");
  }
}

//it is common to use a switch statement in a useReducer hook
//if (action.type === "inc") return state + 1;
//if (action.type === "dec") return state - 1;
//if (action.type === "setCount") return action.payload;

function DateCounter() {
  //const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);
  //destructuring the state above
  //the dispatch function triggers state updates, by sending actions from event handlers to the reducer
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" }); //we are going to create an "action", something we do when we work with
    // setCount((count) => count - 1);
    //setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    //setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    //setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    //setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    //setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
