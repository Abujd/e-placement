import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();


const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
      };
    
      const handleDecrement = () => {
        setCount(count - 1);
      };

      return (
        <CounterContext.Provider value={{count, handleIncrement, handleDecrement}}>
            {children}
        </CounterContext.Provider>
      );
    
};

export { CounterProvider, CounterContext };

