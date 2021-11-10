import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  renderHook,
  cleanup,
  RenderResult,
} from "@testing-library/react-hooks";
import { ReturnType, useTextInput } from "../hooks/useTextInput";

describe("UseTextInput", () => {
  let result: RenderResult<ReturnType>;
  beforeEach(() => {
    result = renderHook(() => useTextInput(10)).result;
  });

  afterEach(() => {
    cleanup();
  });
  test("初期値は空文字である", () => {
    const [value] = result.current;
    expect(value).toBe("");
  });

  test("入力値が反映される", () => {
    const { container } = render(<input type="text" {...[result.current]} />);

    const input = container.querySelector("input");

    fireEvent.change(input!, { target: { value: "test" } });

    expect(input!.value).toBe("test");
  });
});
