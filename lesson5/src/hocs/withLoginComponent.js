import { useState } from "react";
import { auth } from "../services/firebase";

export const withLoginComponent =(Component) => {
	return (props) => {
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		const [error, setError] = useState("");

		const handlePassChange = (e) => {
			setPassword(e.target.value);
		};

		const handleEmailChange = (e) => {
			setEmail(e.target.value);
		};

		const handleSubmit = async (e) => {
			e.preventDefault();
			setError("");

			try {
				await auth.signInWithEmailAndPassword(email, password);
			} catch (error) {
				setError(error.message);
			}
		};

		return (<Component
			handlePassChange={handlePassChange}
			password = {password}
			handleEmailChange={handleEmailChange}
			email={email}
			handleSubmit={handleSubmit}
			error={error}
		/>)
	}
}

