import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=> dispatch({type: "increment"})} className="border-2 rounded-full px-2 py-1 cursor-pointer">
        Increment
      </button>
      <button onClick={()=> dispatch({type: "decrement"})}  className="border-2 rounded-full px-2 py-1 cursor-pointer">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
