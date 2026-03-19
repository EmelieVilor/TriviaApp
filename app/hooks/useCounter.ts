
import { useState, useEffect } from "react";

export function useCounter (initialValue: number, trigger: number) {
    const [counter,setCounter] = useState(initialValue);

   useEffect(() => {
    setCounter(initialValue);

    const interval = setInterval(() => {
      setCounter((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [trigger]);
  
  return counter;
};    