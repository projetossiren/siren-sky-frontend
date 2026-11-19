
import "./LoginPage.css";
import { BackButton } from "../../components/BackButton/BackButton.jsx";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

export function LoginPage({ emailLoggedIn, setEmailLoggedIn }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);


	const navigate = useNavigate();

	async function handleLogin(event) {
		event.preventDefault();

		setLoading(true);
		setError("");

		try {
			const response = await axios.post(
				"http://localhost:8000/usuarios/login",
				{ email, password }
			);

			console.log("Login bem-sucedido:", response.data);
			setEmailLoggedIn(response.data.email);

			navigate("/");

		} catch (error) {
			if (error.response?.status === 401) {
				setError(error.response.data.detail);
			} else {
				setError("Não foi possível realizar o login.");
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<BackButton />

			<div className="login-form">
				{emailLoggedIn === "" ? <>
					<h2>Login</h2>
					<form onSubmit={handleLogin}>
						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Senha:</label>
							<input
								type="password"
								id="password"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>

						{error && <p className="error-message">{error}</p>}
						<button type="submit" disabled={loading}>
							{loading ? "Entrando..." : "Login"}
						</button>'
					</form>
				</>
					:
					<>
						<p>Logado na conta {emailLoggedIn}</p>
						<button onClick={() => setEmailLoggedIn("")}>Deslogar</button>
					</>
				}
			</div>

			<p className="note">
				Não possui uma conta? <Link to="/register">Cadastre-se</Link>.
			</p>
		</>
	);
}
