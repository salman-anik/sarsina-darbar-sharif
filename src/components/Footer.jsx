import { Link } from 'react-router-dom'
import { MapPin, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { navTargets, links } from '../data/content'

export default function Footer() {
  const { t, lang } = useLanguage()
  const quick = navTargets.slice(0, 5)
  const more = navTargets.slice(5)

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand-col">
          <h3 className="footer-brand">
            <span className="brand-mark" aria-hidden="true">✦</span>
            {lang === 'bn' ? 'ছারছীনা দরবার শরীফ' : 'Sarsina Darbar Sharif'}
          </h3>
          <p className="footer-desc">{t('footer.desc')}</p>
          <p className="footer-official">
            <a href={links.official} target="_blank" rel="noreferrer">
              <Globe size={14} /> sarsinadarbarsharif.org
            </a>
          </p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.nav')}</h4>
          <ul>
            {quick.map((n) => (
              <li key={n.to}><Link to={n.to}>{t(`nav.${n.key}`)}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('footer.sections')}</h4>
          <ul>
            {more.map((n) => (
              <li key={n.to}><Link to={n.to}>{t(`nav.${n.key}`)}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('contact.addressLabel')}</h4>
          <p className="footer-address">
            <MapPin size={14} />
            <span style={{ whiteSpace: 'pre-line' }}>{t('location.address')}</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>{t('footer.rights')}</p>
          <p className="muted small">{t('footer.unofficial')}</p>
        </div>
      </div>
    </footer>
  )
}
