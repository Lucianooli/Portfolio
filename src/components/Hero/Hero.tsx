import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__background" aria-hidden="true">
        <div className="hero__orb" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__status">
            <span className="hero__status-dot" />
            Aberto a oportunidades em desenvolvimento
          </div>

          <p className="hero__greeting">Olá, eu sou</p>

          <h1>
            Luciano<span>.</span>
          </h1>

          <h2>
            Desenvolvedor <strong>Java &amp; Full Stack</strong>
          </h2>

          <p className="hero__description">
            Desenvolvo aplicações, APIs REST e soluções digitais
            utilizando Java e Spring Boot. Gosto de transformar
            problemas reais em software funcional, com atenção à
            organização do código, segurança e experiência do usuário.
          </p>

          <div className="hero__actions">
            <a
              href="#projects"
              className="hero__button hero__button--primary"
            >
              <span>Conheça meus projetos</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/Lucianooli"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--secondary"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.78 2.05 3.42 1.56.1-.74.39-1.24.7-1.53-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.67.12 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <a href="#projects" className="hero__scroll">
            <span className="hero__scroll-line" />
            Explore meu trabalho
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero__terminal">
          <div className="terminal">
            <div className="terminal__header">
              <div className="terminal__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <span className="terminal__title">
                luciano.dev / profile.java
              </span>

              <span className="terminal__language">JAVA</span>
            </div>

            <div className="terminal__body">
              <div className="terminal__file">
                <span className="terminal__file-icon">◆</span>
                Developer.java
              </div>

              <div className="terminal__code">
                <div className="terminal__line">
                  <span className="terminal__number">01</span>
                  <span>
                    <span className="code-purple">public class</span>{' '}
                    <span className="code-blue">Developer</span> {'{'}
                  </span>
                </div>

                <div className="terminal__line">
                  <span className="terminal__number">02</span>
                  <span className="code-indent">
                    <span className="code-purple">String</span>{' '}
                    <span className="code-cyan">name</span> ={' '}
                    <span className="code-green">"Luciano"</span>;
                  </span>
                </div>

                <div className="terminal__line">
                  <span className="terminal__number">03</span>
                  <span className="code-indent">
                    <span className="code-purple">String</span>{' '}
                    <span className="code-cyan">backend</span> ={' '}
                    <span className="code-green">"Java"</span>;
                  </span>
                </div>

                <div className="terminal__line">
                  <span className="terminal__number">04</span>
                  <span className="code-indent">
                    <span className="code-purple">String</span>{' '}
                    <span className="code-cyan">framework</span> ={' '}
                    <span className="code-green">"Spring Boot"</span>;
                  </span>
                </div>

                <div className="terminal__line">
                  <span className="terminal__number">05</span>
                  <span className="code-indent">
                    <span className="code-purple">String</span>{' '}
                    <span className="code-cyan">focus</span> ={' '}
                    <span className="code-green">"APIs REST"</span>;
                  </span>
                </div>

                <div className="terminal__line">
                  <span className="terminal__number">06</span>
                  <span className="code-indent">
                    <span className="code-purple">boolean</span>{' '}
                    <span className="code-cyan">learning</span> ={' '}
                    <span className="code-orange">true</span>;
                  </span>
                </div>

                <div className="terminal__line">
                  <span className="terminal__number">07</span>
                  <span>{'}'}</span>
                </div>
              </div>

              <div className="terminal__message">
                <span className="terminal__prompt">&gt;</span>
                <span>Construindo, aprendendo e evoluindo.</span>
                <span className="terminal__cursor" />
              </div>
            </div>

            <div className="terminal__footer">
              <span>
                <span className="terminal__online" />
                Pronto para desenvolver
              </span>
              <span className="terminal__footer-right">UTF-8</span>
            </div>
          </div>

          <div className="hero__floating hero__floating--top">
            <span className="hero__floating-icon">⌘</span>
            <span>Clean code</span>
          </div>

          <div className="hero__floating hero__floating--bottom">
            <span className="hero__floating-dot" />
            <span>Em constante evolução</span>
          </div>
        </div>
      </div>

      <div className="hero__features">
        <div className="feature">
          <span className="feature__icon">&lt;/&gt;</span>
          <div>
            <strong>Backend</strong>
            <p>Java &amp; Spring Boot</p>
          </div>
        </div>

        <div className="feature">
          <span className="feature__icon">⌘</span>
          <div>
            <strong>APIs REST</strong>
            <p>Integração e segurança</p>
          </div>
        </div>

        <div className="feature">
          <span className="feature__icon">◈</span>
          <div>
            <strong>Banco de dados</strong>
            <p>SQL e persistência</p>
          </div>
        </div>

        <div className="feature">
          <span className="feature__icon">↗</span>
          <div>
            <strong>Aprendizado contínuo</strong>
            <p>Projetos e evolução técnica</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero