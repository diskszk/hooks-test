import { useCallback, useState } from "react";

export type ReturnType = {
  count: number;
  handleIncrement: () => void;
};

export const useCounter = (): ReturnType => {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return {
    count,
    handleIncrement,
  };
};
