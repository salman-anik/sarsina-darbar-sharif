import PageHeader from '../components/PageHeader'
import MahfilCard from '../components/MahfilCard'
import { useLanguage } from '../context/LanguageContext'

export default function Mahfil() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('mahfil.title')} subtitle={t('mahfil.history')} />
      <section className="section">
        <div className="container">
          <MahfilCard />
        </div>
      </section>
    </>
  )
}
