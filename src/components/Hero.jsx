import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { gallery } from '../data/gallery'

export default function Hero() {
  const { t } = useLanguage()
  const heroImage = gallery[0].image

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-eyebrow">✦ {t('hero.title')} ✦</p>
        <h1>{t('hero.title')}</h1>
        <p className="hero-sub">{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <Link className="btn btn-gold" to="/history">{t('hero.btnHistory')}</Link>
          <Link className="btn btn-outline" to="/mahfil">{t('hero.btnMahfil')}</Link>
          <Link className="btn btn-outline" to="/gallery">{t('hero.btnGallery')}</Link>
        </div>
      </div>
    </section>
  )
}
