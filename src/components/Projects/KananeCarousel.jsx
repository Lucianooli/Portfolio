import { useState } from 'react'
import './PlanWinCarousel.css'

import loja1 from '../../assets/projects/Inicio.png'
import loja2 from '../../assets/projects/Roupas.png'
import loja3 from '../../assets/projects/Informações.png'

const images = [
  { src: loja1, title: 'Vitrine da loja' },
  { src: loja2, title: 'Catálogo de produtos' },
  { src: loja3, title: 'Identidade visual da loja' },
]

function KananeCarousel() {
  const [current, setCurrent] = useState(0)

  const previous = () => {
    setCurrent(index => (index - 1 + images.length) % images.length)
  }

  const next = () => {
    setCurrent(index => (index + 1) % images.length)
  }

  return (
    <div
      className="planwin-carousel"
      aria-label="Galeria de imagens da Kanane Store"
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

export default KananeCarousel