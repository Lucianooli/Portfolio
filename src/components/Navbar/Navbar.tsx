import { useEffect, useState } from 'react'

import { navigation } from '../../data/navigation'

import './Navbar.css'

function Navbar() {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Rolando para baixo
        setIsHidden(true)
      } else {
        // Rolando para cima
        setIsHidden(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`navbar ${isHidden ? 'navbar--hidden' : ''}`}>
      <a className="navbar__logo" href="#">
        Luciano<span>.dev</span>
      </a>

      <nav className="navbar__nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="navbar__contact" href="#contact">
        Vamos conversar
      </a>
    </header>
  )
}

export default Navbar