import  {LoginFormTestIds, Login} from "../Login";
import {render, fireEvent, act} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from "react-router-dom";

describe('LoginForm', ()=>{
	it('Вызов метода handleSubmit при клике на кнопку Login',()=>{
		const onSubmit = jest.fn();
		const component = render(<Router><Login onSubmit={onSubmit} /></Router>)

		act(()=>{
			fireEvent.click(component.queryByTestId((LoginFormTestIds.submit)))
		})

		expect(onSubmit).toBeCalled();
	})



})
// it('Ввод данных в поле Email'()=>{
//
// })
