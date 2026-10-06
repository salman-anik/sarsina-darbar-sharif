export default function PirCard({ pir }) {
  return (
    <article className="card pir-card">
      <h3>{pir.name}</h3>
      <p className="role">{pir.role}</p>
      <p className="muted">{pir.desc}</p>
    </article>
  )
}
