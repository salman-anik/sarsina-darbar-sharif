import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { searchIndex } from '../data/content'

export default function SearchModal({ open, onClose }) {
  const { lang, t } = useLanguage()
  const [q, setQ] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => { inputRef.current?.focus() }, [open])
  if (!open) return null

  const results = searchIndex.filter((s) => {
    const hay = (s.bn + ' ' + s.en).toLowerCase()
    return hay.includes(q.toLowerCase()) && q.trim().length > 0
  })

  const go = (to) => { navigate(to); onClose() }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)}
            placeholder={t('common.searchPlaceholder')} aria-label={t('common.search')} />
          <button className="icon-btn" aria-label="Close" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="modal-results">
          {results.length === 0 && q.trim() && <p className="muted">{t('common.noResults')}</p>}
          {results.map((r) => (
            <button key={r.to} className="result-item" onClick={() => go(r.to)}>
              {lang === 'bn' ? r.bn : r.en}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
