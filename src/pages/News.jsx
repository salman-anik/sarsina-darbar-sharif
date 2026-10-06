import PageHeader from '../components/PageHeader'
import NewsCard from '../components/NewsCard'
import { useLanguage } from '../context/LanguageContext'

export default function News() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('news.title')} subtitle={t('news.placeholder')} />
      <section className="section">
        <div className="container grid grid-2">
          {t('news.items').map((n, i) => <NewsCard item={n} key={i} />)}
        </div>
      </section>
    </>
  )
}
