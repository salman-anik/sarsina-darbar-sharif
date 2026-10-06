import { useLanguage } from '../context/LanguageContext'

export default function HistoryTimeline({ items }) {
  const { t } = useLanguage()
  return (
    <div className="timeline">
      {items.map((it, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-dot" aria-hidden="true" />
          <div className="timeline-card">
            <span className="timeline-period">{it.period}</span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </div>
        </div>
      ))}
      <p className="note">{t('history.disclaimer')}</p>
    </div>
  )
}
