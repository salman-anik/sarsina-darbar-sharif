import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('about.title')} />
      <section className="section">
        <div className="container">
          {t('about.paragraphs').map((p, i) => <p className="lead" key={i}>{p}</p>)}
        </div>
      </section>
    </>
  )
}
