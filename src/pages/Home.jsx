import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import HistoryTimeline from '../components/HistoryTimeline'
import PirCard from '../components/PirCard'
import EducationCard from '../components/EducationCard'
import PublicationCard from '../components/PublicationCard'
import MahfilCard from '../components/MahfilCard'
import Gallery from '../components/Gallery'
import NewsCard from '../components/NewsCard'
import { useLanguage } from '../context/LanguageContext'
import { founder } from '../data/content'
import { gallery } from '../data/gallery'

export default function Home() {
  const { t, lang } = useLanguage()
  const historyItems = t('history.timeline')
  const pirs = t('pirs.items')
  const eduCards = t('madrasa.cards')
  const pubCards = t('publications.cards')
  const newsItems = t('news.items')
  const highlights = t('highlights.items')
  const activities = t('activities.items')

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <SectionTitle title={t('highlights.title')} />
          <div className="grid grid-3">
            {highlights.map((h, i) => (
              <article className="card highlight-card" key={i}>
                <h3>{h.title}</h3>
                <p className="muted">{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="about">
        <div className="container">
          <SectionTitle title={t('about.title')} />
          {t('about.paragraphs').map((p, i) => <p className="lead" key={i}>{p}</p>)}
        </div>
      </section>

      <section className="section" id="history">
        <div className="container">
          <SectionTitle title={t('history.title')} subtitle={t('history.subtitle')} />
          <HistoryTimeline items={historyItems.slice(0, 4)} />
          <div className="center"><Link className="btn btn-gold" to="/history">{t('common.viewAll')}</Link></div>
        </div>
      </section>

      <section className="section alt" id="founder">
        <div className="container founder">
          <img src={founder.image} alt={founder.name[lang]} />
          <div>
            <SectionTitle title={founder.name[lang]} subtitle={founder.role[lang]} />
            <p className="lead">{founder.text[lang]}</p>
            <p className="muted small">{founder.source}</p>
          </div>
        </div>
      </section>

      <section className="section" id="pirs">
        <div className="container">
          <SectionTitle title={t('pirs.title')} />
          <div className="grid grid-3">
            {pirs.map((p, i) => <PirCard pir={p} key={i} />)}
          </div>
          <p className="note">{t('pirs.currentNote')}</p>
        </div>
      </section>

      <section className="section alt" id="madrasa">
        <div className="container">
          <SectionTitle title={t('madrasa.title')} subtitle={t('madrasa.intro')} />
          <div className="grid grid-3">
            {eduCards.map((c, i) => <EducationCard card={c} key={i} />)}
          </div>
          <p className="note">{t('madrasa.note')}</p>
        </div>
      </section>

      <section className="section" id="publications">
        <div className="container">
          <SectionTitle title={t('publications.title')} subtitle={t('publications.intro')} />
          <div className="grid grid-3">
            {pubCards.map((c, i) => <PublicationCard card={c} key={i} />)}
          </div>
          <p className="note">{t('publications.note')}</p>
        </div>
      </section>

      <section className="section alt" id="mahfil">
        <div className="container">
          <SectionTitle title={t('mahfil.title')} />
          <MahfilCard />
        </div>
      </section>

      <section className="section" id="activities">
        <div className="container">
          <SectionTitle title={t('activities.title')} />
          <div className="tags">
            {activities.map((a, i) => <span className="tag" key={i}>{a}</span>)}
          </div>
        </div>
      </section>

      <section className="section heritage" id="heritage">
        <div className="container">
          <SectionTitle title={t('heritage.title')} />
          <p className="lead">{t('heritage.text')}</p>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <SectionTitle title={t('gallery.title')} />
          <Gallery items={gallery.slice(0, 6)} />
          <div className="center"><Link className="btn btn-gold" to="/gallery">{t('common.viewAll')}</Link></div>
        </div>
      </section>

      <section className="section alt" id="news">
        <div className="container">
          <SectionTitle title={t('news.title')} subtitle={t('news.placeholder')} />
          <div className="grid grid-2">
            {newsItems.map((n, i) => <NewsCard item={n} key={i} />)}
          </div>
        </div>
      </section>

      <section className="section" id="location">
        <div className="container">
          <SectionTitle title={t('location.title')} />
          <div className="card location-card">
            <p style={{ whiteSpace: 'pre-line' }}>{t('location.address')}</p>
            <a className="btn btn-gold" href={t('location.mapUrl')} target="_blank" rel="noreferrer">{t('location.mapBtn')}</a>
          </div>
        </div>
      </section>
    </>
  )
}
