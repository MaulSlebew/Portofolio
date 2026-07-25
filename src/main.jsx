import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'

const initAOS = () => {
  if (typeof window === 'undefined') return

  window.history.scrollRestoration = 'manual'
  window.scrollTo(0, 0)

  requestAnimationFrame(() => {
    window.scrollTo(0, 0)

    window.setTimeout(() => {
      AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        mirror: false,
      })

      window.setTimeout(() => {
        AOS.refresh()
      }, 120)
    }, 40)
  })
}

initAOS()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
