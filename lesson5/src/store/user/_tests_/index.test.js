import { initialState, userReducer } from "../reducer";
import { loginUserAction, logOutUserAction } from "../actions";

describe("userReducer", () => {
  it("Вызов редьюсера без экшна верёт initialState", () => {
    const result = userReducer();

    expect(result).toEqual(initialState);
  });

  it("Данные  в store обновляются при логине поьзователя ", () =>{
    const user = {name:"testUser",
    email: "test@test.test"}
    const result = userReducer(undefined, loginUserAction(user))

    expect(result).toEqual( { user: user })
  })

  it ("Вызов редьюсера с logOutUserAction вернёт {user: null}",
    ()=>{
      const result = userReducer(undefined, logOutUserAction);

     expect(result).toEqual({user:null})
    })
});
