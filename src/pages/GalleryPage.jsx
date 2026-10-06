import PageHeader from '../components/PageHeader'
import Gallery from '../components/Gallery'
import { useLanguage } from '../context/LanguageContext'
import { gallery } from '../data/gallery'

export default function GalleryPage() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('gallery.title')} />
      <section className="section">
        <div className="container">
          <Gallery items={gallery} />
        </div>
      </section>
    </>
  )
}
