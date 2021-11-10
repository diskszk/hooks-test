import React from "react";
import { useTextInput } from "../hooks/useTextInput";

export const TextInput: React.FC = () => {
  const [firstName, handleChangeFirstName] = useTextInput(8);
  const [lastName, handleChangeLastName] = useTextInput(6);

  return (
    <div>
      <input type="text" value={firstName} onChange={handleChangeFirstName} />
      <input type="text" value={lastName} onChange={handleChangeLastName} />
    </div>
  );
};
