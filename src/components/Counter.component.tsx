import { FC } from "react";
import { useCounter } from "../hooks/useCounter.hook";

interface CounterProps {
  startTime: number;
}

export const Counter: FC<CounterProps> = ({ startTime }) => {
  const { counter } = useCounter({ startTime });
  return <p>Tiempo transcurrido: {counter} segundos</p>;
};
