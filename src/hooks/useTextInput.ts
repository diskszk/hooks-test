import React, { useCallback, useState } from "react";

export type ReturnType = [
  string,
  (ev: React.ChangeEvent<HTMLInputElement>) => void
];

export const useTextInput = (maxLength: number): ReturnType => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      if (value.length >= maxLength) {
        return;
      }
      setValue(ev.target.value);
    },
    [value, maxLength]
  );

  return [value, handleChange];
};
