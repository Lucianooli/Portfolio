import { useState } from 'react'
import './PlanWinCarousel.css'

import contaPedente from '../../assets/projects/ContaPedente.jpeg'
import dashboard from '../../assets/projects/dashboard.jpeg'
import gerenciarContas from '../../assets/projects/GerenciarContas.jpeg'
import outro from '../../assets/projects/outro.jpeg'
import relatorio from '../../assets/projects/Relatorio.jpeg'
import resumoFinanceiro from '../../assets/projects/ResumoFinanceiro.jpeg'
import temaClaro from '../../assets/projects/TemaClaro.jpeg'

const images = [
  { src: contaPedente, title: 'Contas pendentes' },
  { src: dashboard, title: 'Dashboard financeiro' },
  { src: gerenciarContas, title: 'Gerenciamento de contas' },
  { src: outro, title: 'Outras funcionalidades' },
  { src: relatorio, title: 'Relatórios financeiros' },
  { src: resumoFinanceiro, title: 'Resumo financeiro' },
  { src: temaClaro, title: 'Tema claro' },
]

function PlanWinCarousel() {
  const [current, setCurrent] = useState(0)

  const previous = () => {
    setCurrent((index) => (index - 1 + images.length) % images.length)
  }

  const next = () => {
    setCurrent((index) => (index + 1) % images.length)
  }

  return (
    <div
      className="planwin-carousel"
      aria-label="Galeria de imagens do PlanWin"
    >
      <div className="planwin-carousel__viewport">
        <img
          key={images[current].src}
          className="planwin-carousel__image"
          src={images[current].src}
          alt={images[current].title}
        />

        <button
          type="button"
          className="planwin-carousel__arrow planwin-carousel__arrow--left"
          onClick={previous}
          aria-label="Imagem anterior"
        >
          &#8592;
        </button>

        <button
          type="button"
          className="planwin-carousel__arrow planwin-carousel__arrow--right"
          onClick={next}
          aria-label="Próxima imagem"
        >
          &#8594;
        </button>

        <span className="planwin-carousel__counter">
          {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
      </div>

      <div className="planwin-carousel__footer">
        <span className="planwin-carousel__title">
          {images[current].title}
        </span>

        <div className="planwin-carousel__dots">
          {images.map((image, index) => (
            <button
              key={image.title}
              type="button"
              className={`planwin-carousel__dot ${
                index === current ? 'is-active' : ''
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}: ${image.title}`}
              aria-current={index === current ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlanWinCarousel