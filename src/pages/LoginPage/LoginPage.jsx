import "./LoginPage.css";
import { BackButton } from "../../components/BackButton/BackButton.jsx";

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
			<p className="note">Em caso do Email não cadastrado, será feito um registro automático.</p>
		</>
	);
}