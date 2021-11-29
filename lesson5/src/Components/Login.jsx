import { useState } from "react";
import { auth, FirebaseLogin } from "../services/firebase";
import { LoginRenderer } from "./LoginRenderer";

export const Login =() => {
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
				await FirebaseLogin(email, password);
			} catch (error) {
				setError(error.message);
			}
		};

		const testSubmit=(text)=>{		}

		return (<LoginRenderer
			password={password}
			setPassword={setPassword}
			email={email}
			setEmail={setEmail}
			error={error}
			setError={setError}
			handleSubmit={handleSubmit}
			testSubmit={testSubmit}
								/>)

}


