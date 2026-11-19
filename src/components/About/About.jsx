import "./About.css"

export function About() {
	return (
		<main className="about">
			<section className="about-intro">
				<p className="about-kicker">Ciência para cuidar do território</p>
				<h1>Poluição muda a vida antes de mudar a paisagem.</h1>
				<p className="about-lead">
					O SirenSky transforma imagens de áreas naturais em informação para que a
					comunidade reconheça resíduos, acompanhe os impactos da poluição e aja
					antes que um problema local se torne um desequilíbrio ecológico.
				</p>
			</section>

			<section className="about-biology" aria-labelledby="biology-title">
				<div className="about-section-heading">
					<p className="about-kicker">Biologia em foco</p>
					<h2 id="biology-title">Cada resíduo interrompe uma relação viva.</h2>
				</div>
				<p>
					Um plástico no solo pode ser levado pela chuva até um rio. No ambiente
					aquático, ele se fragmenta em microplásticos, pode ser ingerido por
					organismos e entrar na cadeia alimentar. A poluição também altera a
					qualidade da água, reduz o habitat disponível e pressiona espécies que já
					dependem de condições muito específicas para sobreviver.
				</p>
			</section>

			<div className="about-topics">
				<article className="about-topic">
					<span className="about-topic-number">01</span>
					<h3>Solo e decomposição</h3>
					<p>
						Resíduos acumulados abafam o solo, contaminam seus nutrientes e
						interferem na ação de fungos, bactérias e invertebrados que reciclam a
						matéria orgânica.
					</p>
				</article>

				<article className="about-topic">
					<span className="about-topic-number">02</span>
					<h3>Água e biodiversidade</h3>
					<p>
						Em rios, lagos e no oceano, o lixo pode causar sufocamento, ingestão e
						ferimentos em animais, além de transportar substâncias tóxicas para
						diferentes níveis da cadeia alimentar.
					</p>
				</article>

				<article className="about-topic">
					<span className="about-topic-number">03</span>
					<h3>Saúde do ecossistema</h3>
					<p>
						A presença e a distribuição dos resíduos revelam hábitos de consumo,
						falhas de manejo e áreas vulneráveis que precisam de recuperação e
						monitoramento contínuo.
					</p>
				</article>
			</div>

			<section className="about-action" aria-labelledby="action-title">
				<div>
					<p className="about-kicker">Da observação à ação</p>
					<h2 id="action-title">Dados locais ajudam a proteger vidas.</h2>
				</div>
				<p>
					Ao enviar imagens, você contribui para identificar pontos de descarte,
					priorizar a limpeza e criar um histórico das mudanças no ambiente. O
					cuidado começa quando conseguimos enxergar o problema com clareza.
				</p>
			</section>
		</main>
	)
}