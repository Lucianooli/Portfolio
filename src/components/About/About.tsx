import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__header">
          <span className="about__eyebrow">
            01 / SOBRE MIM
          </span>

          <h2>
            Mais do que código.
            <br />
            <span>Construo soluções.</span>
          </h2>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p className="about__intro">
              Sou desenvolvedor Backend com foco em Java e
              Spring Boot, apaixonado por transformar problemas
              em soluções digitais.
            </p>

            <p>
              Atualmente curso Ciência da Computação e venho
              desenvolvendo minha experiência através de projetos
              profissionais, freelas e desafios acadêmicos.
            </p>

            <p>
              Tenho experiência com desenvolvimento de APIs REST,
              bancos de dados relacionais e aplicações web. Também
              trabalho com React e JavaScript, buscando sempre
              entender o produto de ponta a ponta.
            </p>

            <p>
              Gosto de escrever código organizado, aprender novas
              tecnologias e encontrar soluções simples para
              problemas complexos.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <strong>Java</strong>
                <span>Backend</span>
              </div>

              <div className="about__stat">
                <strong>Spring</strong>
                <span>APIs & Backend</span>
              </div>

              <div className="about__stat">
                <strong>React</strong>
                <span>Frontend</span>
              </div>
            </div>
          </div>

          <div className="about__terminal">
            <div className="about-terminal">
              <div className="about-terminal__header">
                <div className="about-terminal__dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="about-terminal__title">
                  developer.ts
                </span>
              </div>

              <div className="about-terminal__body">
                <div className="about-terminal__line">
                  <span className="about-terminal__number">
                    1
                  </span>

                  <span>
                    <span className="keyword">const</span>{' '}
                    <span className="variable">
                      developer
                    </span>{' '}
                    = {'{'}
                  </span>
                </div>

                <div className="about-terminal__line">
                  <span className="about-terminal__number">
                    2
                  </span>

                  <span>
                    <span className="property">
                      name
                    </span>
                    :{' '}
                    <span className="string">
                      "Luciano Oliveira"
                    </span>
                    ,
                  </span>
                </div>

                <div className="about-terminal__line">
                  <span className="about-terminal__number">
                    3
                  </span>

                  <span>
                    <span className="property">
                      role
                    </span>
                    :{' '}
                    <span className="string">
                      "Backend Developer"
                    </span>
                    ,
                  </span>
                </div>

                <div className="about-terminal__line">
                  <span className="about-terminal__number">
                    4
                  </span>

                  <span>
                    <span className="property">
                      backend
                    </span>
                    : [
                    <span className="string">
                      "Java"
                    </span>
                    ,{' '}
                    <span className="string">
                      "Spring Boot"
                    </span>
                    ],
                  </span>
                </div>

                <div className="about-terminal__line">
                  <span className="about-terminal__number">
                    5
                  </span>

                  <span>
                    <span className="property">
                      frontend
                    </span>
                    : [
                    <span className="string">
                      "React"
                    </span>
                    ,{' '}
                    <span className="string">
                      "JavaScript"
                    </span>
                    ],
                  </span>
                </div>

                <div className="about-terminal__line">
                  <span className="about-terminal__number">
                    6
                  </span>

                  <span>
                    <span className="property">
                      databases
                    </span>
                    : [
                    <span className="string">
                      "MySQL"
                    </span>
                    ,{' '}
                    <span className="string">
                      "PostgreSQL"
                    </span>
                    ],
                  </span>
                </div>

                <div className="about-terminal__line">
                  <span className="about-terminal__number">
                    7
                  </span>

                  <span>
                    <span className="property">
                      tools
                    </span>
                    : [
                    <span className="string">
                      "Docker"
                    </span>
                    ,{' '}
                    <span className="string">
                      "Git"
                    </span>
                    ],
                  </span>
                </div>

                <div className="about-terminal__line">
                  <span className="about-terminal__number">
                    8
                  </span>

                  <span>{'};'}</span>
                </div>

                <div className="about-terminal__cursor">
                  <span>▋</span>
                </div>
              </div>

              <div className="about-terminal__footer">
                <span>
                  <span className="about-terminal__online" />
                  available
                </span>

                <span>~/developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About