export default function NewsCard({ item }) {
  return (
    <article className="card news-card">
      <h3>{item.title}</h3>
      {item.date && <p className="role">{item.date}</p>}
      <p className="muted">{item.body}</p>
    </article>
  )
}
