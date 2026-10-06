export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <span className="eyebrow" aria-hidden="true">✦</span>
      <h2>{title}</h2>
      {subtitle && <p className="muted">{subtitle}</p>}
    </div>
  )
}
