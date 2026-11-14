import "./RegisterPage.css";
import { BackButton } from "../../components/BackButton/BackButton.jsx";

export function RegisterPage() {
	return (
		<>
			<BackButton />
			<div className="register-form">
				<h2>Cadastro</h2>
				<form>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Senha:</label>
						<input type="password" id="password" name="password" required />
					</div>
					<div className="form-group">
						<label htmlFor="confirmPassword">Confirmar senha:</label>
						<input type="password" id="confirmPassword" name="confirmPassword" required />
					</div>
					<button type="submit">Registrar-se</button>
				</form>
			</div>
			<p className="note">Seu login será feito automaticamente após o cadastro.</p>
		</>
	);
}