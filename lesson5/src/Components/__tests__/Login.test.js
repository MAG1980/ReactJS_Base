import {LoginRenderer, LoginFormTestIds} from "../LoginRenderer"
import {render, fireEvent, act} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from "react-router-dom";

describe('LoginForm', ()=>{

	it('Вызов метода testSubmit при клике на кнопку Login', async ()=>{
		const testSubmit =  jest.fn();
		const component = render(<Router><LoginRenderer testSubmit={testSubmit} /></Router>)

		act(()=>{
			fireEvent.click(component.queryByTestId((LoginFormTestIds.submit)))
		})

		await	expect(testSubmit).toBeCalled();
	})

	it('Ввод данных в поле Email', ()=>{
		const emailValue = 'test@test.ru';
		const setEmail = jest.fn();
		const component = render(
			<Router>
				<LoginRenderer setEmail={setEmail} />
				</Router>)

		const emailField = component.queryByTestId(LoginFormTestIds.emailField);

		act(()=>{
			fireEvent.change(emailField, {

					target: {
						value: emailValue
					}

			})
		})

		expect(setEmail).toHaveBeenCalledWith(emailValue)

	})

	it('Ввод данных в поле Password', ()=>{
		const passwordValue = '123!@#';
		const setPassword = jest.fn();
		const component = render(
			<Router>
				<LoginRenderer setPassword={setPassword} />
			</Router>)

		const passwordField = component.queryByTestId(LoginFormTestIds.passwordField);

		act(()=>{
			fireEvent.change(passwordField, {

				target: {
					value: passwordValue
				}

			})
		})

		expect(setPassword).toHaveBeenCalledWith(passwordValue)

	})
})
