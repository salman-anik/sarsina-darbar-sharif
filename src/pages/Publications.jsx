import PageHeader from '../components/PageHeader'
import PublicationCard from '../components/PublicationCard'
import { useLanguage } from '../context/LanguageContext'

export default function Publications() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('publications.title')} subtitle={t('publications.intro')} />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {t('publications.cards').map((c, i) => <PublicationCard card={c} key={i} />)}
          </div>
          <p className="note">{t('publications.note')}</p>
        </div>
      </section>
    </>
  )
}
