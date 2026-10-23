import "./Header.css"
import { Link } from "react-router"
export function Header() {
	return (
		<header className="siren-header">
			<div className="siren-header-logo">
				<img src="../../public/siren-logo.png" alt="Logo do Siren" />
				<h1>SirenSky</h1>
			</div>
			<div className="siren-header-options">
				<Link to="/sirensky">Enviar</Link>
				<Link to="/alert">Alertas</Link>
				<Link to="/history">Histórico</Link>
				<Link to="/about">Sobre</Link>
				<Link to="/" className="siren-header-options-user">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" /></svg>
				</Link>
			</div>
			<div className="siren-header-options-phone">
				<Link to="/">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" /></svg>
				</Link>
			</div>
		</header>
	)
}