export default function PublicationCard({ card }) {
  return (
    <article className="card pub-card">
      <div className="pub-icon" aria-hidden="true">📖</div>
      <h3>{card.title}</h3>
      <p className="muted">{card.desc}</p>
    </article>
  )
}
