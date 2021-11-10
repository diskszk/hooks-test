import React from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter: React.FC = () => {
  const { count, handleIncrement } = useCounter();

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleIncrement}>add</button>
    </div>
  );
};
