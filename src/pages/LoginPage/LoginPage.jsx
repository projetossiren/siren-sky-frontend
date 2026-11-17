import "./LoginPage.css";
import { BackButton } from "../../components/BackButton/BackButton.jsx";
import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";

export function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleLogin(event) {
		event.preventDefault();

		try{
			const response = await axios.post("http://localhost:8000/usuarios/login", {
				email: email,
				password: password
			});
			console.log("Login bem-sucedido:", response.data);
		}

		catch (error) {
            console.error("Falha no login:", error);
        }
	}

	return (
		<>
			<BackButton />
			<div className="login-form">
				<h2>Login</h2>
				<form onSubmit={handleLogin}>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="form-group">
						<label htmlFor="password">Senha:</label>
						<input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
					</div>
					<button type="submit">Login</button>
				</form>
			</div>
			<p className="note">Não possui uma conta? <Link to="/register">Cadastre-se</Link>.</p>
		</>
	);
}