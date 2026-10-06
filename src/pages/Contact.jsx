import PageHeader from '../components/PageHeader'
import { MapPin, Globe, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { links } from '../data/content'

export default function Contact() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('contact.title')} subtitle={t('contact.note')} />
      <section className="section">
        <div className="container contact-grid">
          <article className="card contact-card">
            <div className="contact-icon" aria-hidden="true"><MapPin size={22} /></div>
            <h3>{t('contact.addressLabel')}</h3>
            <p className="contact-address" style={{ whiteSpace: 'pre-line' }}>{t('location.address')}</p>
            <a className="btn btn-gold" href={t('location.mapUrl')} target="_blank" rel="noreferrer">
              {t('location.mapBtn')} <ExternalLink size={14} />
            </a>
          </article>

          <article className="card contact-card">
            <div className="contact-icon" aria-hidden="true"><Globe size={22} /></div>
            <h3>{t('contact.websiteLabel')}</h3>
            <p><a href={links.official} target="_blank" rel="noreferrer">{links.official}</a></p>
            <p className="muted small">{t('footer.unofficial')}</p>
          </article>

          <article className="card contact-card">
            <div className="contact-icon" aria-hidden="true">✦</div>
            <h3>{t('contact.title')}</h3>
            <p className="muted">{t('contact.note')}</p>
          </article>
        </div>
      </section>
    </>
  )
}
