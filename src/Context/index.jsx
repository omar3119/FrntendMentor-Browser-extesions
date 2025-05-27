import { createContext, useState } from "react";

export const counterContext = createContext();

const CounterContext = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }
    return(
        <counterContext.Provider value={{ counter, setCounter, increment, decrement, reset }}>
            {children}
        </counterContext.Provider>
    )

}

export default CounterContext;