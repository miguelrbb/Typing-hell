import { useEffect, useState } from "react";

export const useCounter: ({ startTime }: { startTime: number }) => {
  counter: number;
} = ({ startTime }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startTime]);

  return { counter };
};
