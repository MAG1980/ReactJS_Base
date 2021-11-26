import { initialState, userReducer } from "../reducer";

describe("userReducer", () => {
  it("Вызов редьюсера без экшна верёт initialState", () => {
    const result = userReducer();

    expect(result).toEqual(initialState);
  });
});
