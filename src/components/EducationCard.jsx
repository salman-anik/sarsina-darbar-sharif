export default function EducationCard({ card }) {
  return (
    <article className="card">
      <h3>{card.title}</h3>
      <p className="muted">{card.desc}</p>
    </article>
  )
}
