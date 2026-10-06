import { useState } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Gallery({ items }) {
  const { lang } = useLanguage()
  const [active, setActive] = useState(null)

  return (
    <>
      <div className="gallery-grid">
        {items.map((g, i) => (
          <figure className="gallery-item" key={i}>
            <img src={g.image} alt={g.title[lang]} loading="lazy"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23064e3b"/><text x="50%" y="50%" fill="%23d4af37" font-size="20" text-anchor="middle" font-family="sans-serif">Image unavailable</text></svg>' }}
              onClick={() => setActive(g)} />
            <figcaption>{g.title[lang]} <span className="muted small">· {g.source}</span></figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="icon-btn lightbox-close" aria-label="Close" onClick={() => setActive(null)}>
            <X size={20} />
          </button>
          <img src={active.image} alt={active.title[lang]} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption">{active.title[lang]} · {active.source}</p>
        </div>
      )}
    </>
  )
}
