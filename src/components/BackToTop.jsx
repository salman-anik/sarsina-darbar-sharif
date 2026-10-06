import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function BackToTop() {
  const { t } = useLanguage()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button className="back-to-top" aria-label={t('common.backToTop')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp size={18} />
    </button>
  )
}
