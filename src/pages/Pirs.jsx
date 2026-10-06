import PageHeader from '../components/PageHeader'
import PirCard from '../components/PirCard'
import { useLanguage } from '../context/LanguageContext'

export default function Pirs() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('pirs.title')} />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {t('pirs.items').map((p, i) => <PirCard pir={p} key={i} />)}
          </div>
          <p className="note">{t('pirs.currentNote')}</p>
        </div>
      </section>
    </>
  )
}
