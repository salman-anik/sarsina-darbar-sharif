import PageHeader from '../components/PageHeader'
import EducationCard from '../components/EducationCard'
import { useLanguage } from '../context/LanguageContext'

export default function Madrasa() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('madrasa.title')} subtitle={t('madrasa.intro')} />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {t('madrasa.cards').map((c, i) => <EducationCard card={c} key={i} />)}
          </div>
          <p className="note">{t('madrasa.note')}</p>
        </div>
      </section>
    </>
  )
}
