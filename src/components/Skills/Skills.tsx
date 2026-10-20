import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__background">
        <span className="skills__glow" />
      </div>

      <div className="skills__container">
        <header className="skills__header">
          <span className="skills__eyebrow">
            <span className="skills__eyebrow-line" />
            04 / SKILLS
          </span>

          <h2>
            Tecnologias para
            <br />
            <span>transformar ideias.</span>
          </h2>

          <p>
            Ferramentas que utilizo para desenvolver aplicações,
            construir APIs e criar soluções web. Sempre buscando
            escrever código claro, funcional e de fácil manutenção.
          </p>
        </header>

        <div className="skills__content">
          {/* Backend principal */}
          <article className="skills__group skills__group--main">
            <div className="skills__group-header">
              <span className="skills__group-number">01</span>

              <div>
                <span className="skills__group-label">
                  Minha especialidade
                </span>
                <h3>Backend</h3>
              </div>

              <span className="skills__group-symbol">{'</>'}</span>
            </div>

            <div className="skills__list">
              <div className="skill">
                <div className="skill__icon skill__icon--java">
                  ☕
                </div>

                <div className="skill__info">
                  <strong>Java</strong>
                  <span>Lógica e desenvolvimento de aplicações</span>
                </div>

                <span className="skill__arrow">↗</span>
              </div>

              <div className="skill">
                <div className="skill__icon skill__icon--spring">
                  S
                </div>

                <div className="skill__info">
                  <strong>Spring Boot</strong>
                  <span>APIs REST, serviços e autenticação</span>
                </div>

                <span className="skill__arrow">↗</span>
              </div>

              <div className="skill">
                <div className="skill__icon skill__icon--python">
                  Py
                </div>

                <div className="skill__info">
                  <strong>Python</strong>
                  <span>Programação e desenvolvimento web</span>
                </div>

                <span className="skill__arrow">↗</span>
              </div>
            </div>

            <div className="skills__card-footer">
              <span className="skills__status-dot" />
              Foco em aplicações e APIs
            </div>
          </article>

          {/* Frontend */}
          <article className="skills__group">
            <div className="skills__group-header">
              <span className="skills__group-number">02</span>

              <div>
                <span className="skills__group-label">Experiência web</span>
                <h3>Frontend</h3>
              </div>
            </div>

            <p className="skills__group-description">
              Interfaces responsivas e componentes reutilizáveis
              para aplicações web.
            </p>

            <div className="skills__tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Vite</span>
            </div>
          </article>

          {/* Banco de dados */}
          <article className="skills__group">
            <div className="skills__group-header">
              <span className="skills__group-number">03</span>

              <div>
                <span className="skills__group-label">Persistência</span>
                <h3>Banco de dados</h3>
              </div>
            </div>

            <p className="skills__group-description">
              Modelagem e persistência de dados em aplicações
              relacionais e projetos Android.
            </p>

            <div className="skills__tags">
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>SQLite</span>
            </div>
          </article>

          {/* Ferramentas e práticas */}
          <article className="skills__group">
            <div className="skills__group-header">
              <span className="skills__group-number">04</span>

              <div>
                <span className="skills__group-label">Dia a dia</span>
                <h3>Ferramentas</h3>
              </div>
            </div>

            <p className="skills__group-description">
              Ferramentas que apoiam o desenvolvimento,
              o versionamento e a execução dos projetos.
            </p>

            <div className="skills__tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Docker</span>
              <span>Django</span>
            </div>
          </article>
        </div>

        <footer className="skills__footer">
          <span className="skills__footer-line" />

          <span className="skills__footer-message">
            <span className="skills__cursor">_</span>
            evoluindo a cada projeto
          </span>

          <span className="skills__footer-line" />
        </footer>
      </div>
    </section>
  )
}

export default Skills