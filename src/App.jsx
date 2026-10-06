import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import History from './pages/History'
import Pirs from './pages/Pirs'
import Madrasa from './pages/Madrasa'
import Publications from './pages/Publications'
import Mahfil from './pages/Mahfil'
import GalleryPage from './pages/GalleryPage'
import News from './pages/News'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/pirs" element={<Pirs />} />
            <Route path="/madrasa" element={<Madrasa />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/mahfil" element={<Mahfil />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </HashRouter>
    </LanguageProvider>
  )
}
