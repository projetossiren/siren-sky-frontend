import "./RegisterPage.css";
import { BackButton } from "../../components/BackButton/BackButton.jsx";
import axios from "axios";
import { useState } from "react";

export function RegisterPage() {
	const [note, setNote] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		setNote("");

		const formData = new FormData(event.currentTarget);
		const password = formData.get("password");
		const confirmPassword = formData.get("confirmPassword");

		if (password !== confirmPassword) {
			setNote("As senhas não coincidem.");
			return;
		}

		try {
			console.log("Enviando dados para o backend:", {
				name: formData.get("name"),
				email: formData.get("email"),
				password,
			});
			setIsSubmitting(true);
			const response = await axios.post("http://127.0.0.1:8000/cadastrar_usuario", {
				name: formData.get("name"),
				email: formData.get("email"),
				password,
			});
			console.log("Resposta do backend:", response.data);
			setNote("Cadastro realizado com sucesso!");
			
		} catch (erro) {
			const detail = erro.response?.data?.detail;
			setNote(detail || "Não foi possível realizar o cadastro.");
			console.error("Erro ao cadastrar usuário:", erro);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<>
			<BackButton />
			<div className="register-form">
				<h2>Cadastro</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Nome:</label>
						<input type="text" id="name" name="name" required />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Senha:</label>
						<input type="password" id="password" name="password" minLength={8} maxLength={128} required />
					</div>
					<div className="form-group">
						<label htmlFor="confirmPassword">Confirmar senha:</label>
						<input type="password" id="confirmPassword" name="confirmPassword" minLength={8} maxLength={128} required />
					</div>
					<button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Cadastrando..." : "Registrar-se"}
					</button>
				</form>
				{note && <p role="alert">{note}</p>}
			</div>
			<p className="note">Seu login será feito automaticamente após o cadastro.</p>
		</>
	);
}