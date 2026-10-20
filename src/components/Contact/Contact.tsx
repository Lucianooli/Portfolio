import './Contact.css'

function Contact() {
  const email = 'lucianoklebertonjr@gmail.com'
  const github = 'https://github.com/Lucianooli'
  const linkedin = 'https://www.linkedin.com/in/luciano-cleberton-ribeiro-leite-junior/'

  return (
    <section id="contact" className="contact">
      <div className="contact__background">
        <span className="contact__glow" />
        <span className="contact__grid" />
      </div>

      <div className="contact__container">
        <div className="contact__eyebrow">
          <span className="contact__eyebrow-line" />
          <span>05 / CONTATO</span>
        </div>

        <div className="contact__content">
          <div className="contact__main">
            <span className="contact__label">
              <span className="contact__label-dot" />
              Vamos conversar?
            </span>

            <h2>
              Tem uma ideia?
              <br />
              <span>Vamos construir.</span>
            </h2>

            <p>
              Estou aberto a oportunidades como desenvolvedor,
              novos projetos e conversas sobre tecnologia.
              Se você procura alguém que gosta de aprender,
              resolver problemas e transformar ideias em código,
              vamos conversar.
            </p>

            <a
              href={`mailto:${email}`}
              className="contact__email"
            >
              <span className="contact__email-icon">@</span>

              <span className="contact__email-text">
                {email}
              </span>

              <span className="contact__email-arrow">↗</span>
            </a>
          </div>

          <nav className="contact__links" aria-label="Links de contato">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__link-icon">
                {'</>'}
              </span>

              <span className="contact__link-content">
                <span className="contact__link-label">
                  GitHub
                </span>

                <span className="contact__link-description">
                  Projetos, código e experimentos
                </span>
              </span>

              <span className="contact__link-arrow">↗</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__link-icon contact__link-icon--linkedin">
                in
              </span>

              <span className="contact__link-content">
                <span className="contact__link-label">
                  LinkedIn
                </span>

                <span className="contact__link-description">
                  Trajetória profissional e oportunidades
                </span>
              </span>

              <span className="contact__link-arrow">↗</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="contact__link"
            >
              <span className="contact__link-icon">
                @
              </span>

              <span className="contact__link-content">
                <span className="contact__link-label">
                  E-mail
                </span>

                <span className="contact__link-description">
                  Entre em contato diretamente
                </span>
              </span>

              <span className="contact__link-arrow">↗</span>
            </a>
          </nav>
        </div>

        <footer className="contact__footer">
          <span className="contact__copyright">
            © {new Date().getFullYear()} Luciano Oliveira
          </span>

          <span className="contact__footer-status">
            <span className="contact__status-dot" />
            Desenvolvido com React
          </span>

          <a
            href="#home"
            className="contact__back-to-top"
            aria-label="Voltar ao início"
          >
            Voltar ao topo <span>↑</span>
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Contact