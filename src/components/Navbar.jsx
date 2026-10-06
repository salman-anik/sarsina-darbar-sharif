import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Search, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { navTargets } from '../data/content'
import SearchModal from './SearchModal'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">✦</span>
          <span className="brand-text">{lang === 'bn' ? 'ছারছীনা দরবার শরীফ' : 'Sarsina Darbar Sharif'}</span>
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          {navTargets.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {t(`nav.${n.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
            <Search size={18} />
          </button>
          <button
            className="lang-btn"
            aria-label="Toggle language"
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
          >
            <Globe size={16} /> {lang === 'bn' ? 'EN' : 'বাং'}
          </button>
          <button className="icon-btn mobile-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          {navTargets.map((n) => (
            <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {t(`nav.${n.key}`)}
            </NavLink>
          ))}
        </nav>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
