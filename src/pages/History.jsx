import PageHeader from '../components/PageHeader'
import HistoryTimeline from '../components/HistoryTimeline'
import { useLanguage } from '../context/LanguageContext'

export default function History() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('history.title')} subtitle={t('history.subtitle')} />
      <section className="section">
        <div className="container">
          <HistoryTimeline items={t('history.timeline')} />
        </div>
      </section>
    </>
  )
}
