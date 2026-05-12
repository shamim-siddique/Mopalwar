import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from './Container'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/projects', label: 'Projects' },
  { path: '/career', label: 'Career' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    if (isMobileMenuOpen) {
      document.body.style.overflow = ''
    }
  }, [location])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass shadow-lg shadow-navy-900/5 border-b border-cream-200/60'
          : 'bg-transparent'
        }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center shadow-md shadow-gold-500/20 group-hover:shadow-lg group-hover:shadow-gold-500/30 transition-shadow duration-300">
              <span className="text-navy-900 font-bold text-sm font-[var(--font-heading)]">RM</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-navy-900 font-semibold text-base leading-tight block">Radheshyam Mopalwar</span>
              <span className="text-gold-600 text-[10px] uppercase tracking-widest font-medium">IAS Retd.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-250 ${isActive
                      ? 'text-gold-700 bg-gold-500/8'
                      : 'text-gray-600 hover:text-navy-900 hover:bg-cream-100/80'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 rounded-xl bg-cream-100/80 flex items-center justify-center text-navy-900 hover:bg-cream-200 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <span className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-90' : ''}`}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </span>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-navy-900/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 glass border-b border-cream-200/60 shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}
        >
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                      ? 'text-gold-700 bg-gold-500/8'
                      : 'text-gray-700 hover:text-navy-900 hover:bg-cream-100'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}

export default Navbar
