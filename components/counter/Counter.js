import {increment, decrement } from '@/utils/counterSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    

    console.log("count",count);
    return (
        <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    );
}

export default Counter;