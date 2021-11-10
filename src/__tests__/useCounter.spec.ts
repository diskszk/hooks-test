import { act, RenderResult, renderHook } from "@testing-library/react-hooks";
import { useCounter, ReturnType } from "../hooks/useCounter";

describe("useCounter", () => {
  let result: RenderResult<ReturnType>;

  beforeEach(() => {
    result = renderHook(() => useCounter()).result;
  });

  it("countの初期値は0である", () => {
    expect(result.current.count).toBe(0);
  });

  it("handleIncrementを1度呼んだ後、countの値は1である", () => {
    act(() => {
      result.current.handleIncrement();
    });
    expect(result.current.count).toBe(1);
  });
});
