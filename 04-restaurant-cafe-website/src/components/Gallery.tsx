import { useState, useEffect, useCallback } from 'react'
import { galleryImages } from '../data/content'
import { useStaggerReveal } from '../hooks/useGsap'
import './Gallery.css'

export default function Gallery() {
  useStaggerReveal('.gallery-item')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const showPrev = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length))
  }, [])

  const showNext = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev + 1) % galleryImages.length))
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, closeLightbox, showPrev, showNext])

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow reveal">Photo Gallery</span>
          <h2 className="section-title reveal">Moments at the Table</h2>
          <p className="section-subtitle reveal">
            A glimpse into the Ember & Oak experience — the dishes, the room, the light.
            Click any image to view full size.
          </p>
        </div>
        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              className={`gallery-item gallery-item--${i % 6}`}
              onClick={() => setLightbox(i)}
              aria-label={`View ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item__overlay">
                <span className="gallery-item__zoom" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].alt} />
            <p className="lightbox__caption">{galleryImages[lightbox].alt}</p>
            <span className="lightbox__count">{lightbox + 1} / {galleryImages.length}</span>
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
