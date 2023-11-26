import { CounterContext } from "@/utils/counterContext";
import { increment, decrement } from "@/utils/counterSlice";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const count1 = useSelector((state) => state.counter.value);

  const { count, handleIncrement, handleDecrement } =
    useContext(CounterContext);

  return (
    <div>
      <h1>Counter with Redux: {count1}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <h1>Counter with useContex: {count}</h1>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
    </div>
  );
}

export default Counter;