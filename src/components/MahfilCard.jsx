import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function MahfilCard() {
  const { t } = useLanguage()
  return (
    <article className="card mahfil-card">
      <h3>{t('mahfil.eventTitle')}</h3>
      <p>{t('mahfil.desc')}</p>
      <p className="note">{t('mahfil.schedule')}</p>
      <Link className="btn btn-gold" to="/gallery">{t('mahfil.cta')}</Link>
    </article>
  )
}
