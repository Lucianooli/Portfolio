import PlanWinCarousel from './PlanWinCarousel'
import KananeCarousel from './KananeCarousel'
import './Projects.css'

const projects = [
  {
    number: '01',
    type: 'APLICATIVO ANDROID',
    title: 'PlanWin',
    subtitle: 'Controle financeiro pessoal e familiar',
    description:
      'Aplicativo financeiro offline desenvolvido em Java para organizar contas, registrar rendas e acompanhar o resumo financeiro. Os dados são armazenados localmente, permitindo utilizar o aplicativo sem depender de conexão com a internet.',
    tags: ['Java', 'Android', 'SQLite', 'XML'],
    link: 'https://github.com/Lucianooli/PlanWin',
    featured: true,
  },
  {
    number: '02',
    type: 'PROJETO REAL · E-COMMERCE',
    title: 'Kanane Store',
    subtitle: 'Uma loja virtual conectada às redes sociais',
    description:
      'Loja virtual criada para um negócio real, com catálogo de roupas, preços e tamanhos, conectando os clientes ao Instagram e WhatsApp. O projeto funcionou por um período prolongado como canal de vendas e fonte de renda.',
    tags: ['React', 'JavaScript', 'CSS', 'Vite'],
    link: 'https://github.com/Lucianooli/kananestore',
    demo: 'https://lucianooli.github.io/kananestore/',
    featured: false,
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <header className="projects__header">
          <span className="projects__eyebrow">
            <span className="projects__eyebrow-dot" />
            02 / PROJETOS EM DESTAQUE
          </span>

          <h2>
            Ideias que viram
            <br />
            <span>soluções reais.</span>
          </h2>

          <p>
            Do desenvolvimento Android à criação de uma loja virtual
            para um negócio real: projetos que mostram minha evolução
            técnica e minha capacidade de transformar necessidades
            em soluções funcionais.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-card ${
                project.featured ? 'project-card--featured' : ''
              }`}
            >
              <div className="project-card__visual">
                {project.title === 'PlanWin' && <PlanWinCarousel />}
                {project.title === 'Kanane Store' && <KananeCarousel />}
              </div>

              <div className="project-card__main">
                <div className="project-card__top">
                  <span className="project-card__number">
                    PROJETO {project.number}
                  </span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__github-icon"
                    aria-label={`Ver ${project.title} no GitHub`}
                    title="Ver código no GitHub"
                  >
                    ↗
                  </a>
                </div>

                <div className="project-card__content">
                  <span className="project-card__type">
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>

                  <h4>{project.subtitle}</h4>

                  <p>{project.description}</p>
                </div>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button project-button--primary"
                  >
                    <span>Explorar código</span>
                    <span aria-hidden="true">↗</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button project-button--secondary"
                    >
                      <span>Visitar loja</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="projects__footer">
          <div className="projects__footer-text">
            <span className="projects__footer-label">
              QUER VER MAIS?
            </span>
            <p>Confira outros códigos e projetos no meu GitHub.</p>
          </div>

          <a
            href="https://github.com/Lucianooli"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__github"
          >
            <span>Meu GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Projects