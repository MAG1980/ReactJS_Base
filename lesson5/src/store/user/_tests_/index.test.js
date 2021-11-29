import { initialState, userReducer } from "../reducer";
import { LOGOUT_USER } from "../actions";

describe("userReducer", () => {
  it("Вызов редьюсера без экшна верёт initialState", () => {
    const result = userReducer();

    expect(result).toEqual(initialState);
  });

  it ("Вызов редьюсера с action.type = LOGOUT_USER вернёт {user: null}",
    ()=>{
    const logout = {type:LOGOUT_USER};
    const result = userReducer(initialState, logout);

     expect(result).toEqual({user:null})
    })
});
