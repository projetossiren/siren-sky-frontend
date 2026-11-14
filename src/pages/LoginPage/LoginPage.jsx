import "./LoginPage.css";
import { BackButton } from "../../components/BackButton/BackButton.jsx";
import { Link } from "react-router";

export function LoginPage() {
	return (
		<>
			<BackButton />
			<div className="login-form">
				<h2>Login</h2>
				<form>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Senha:</label>
						<input type="password" id="password" name="password" required />
					</div>
					<button type="submit">Login</button>
				</form>
			</div>
			<p className="note">Não possui uma conta? <Link to="/register">Cadastre-se</Link>.</p>
		</>
	);
}