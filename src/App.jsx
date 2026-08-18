import { motion } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ProductDemo from './components/ProductDemo'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import EggToast from './components/EggToast'
import { useTheme } from './hooks/useTheme'
import { useKonami } from './hooks/useKonami'

export default function App() {
  const { theme, toggle } = useTheme()
  const eggTriggered = useKonami()

  return (
    <motion.div
      animate={eggTriggered ? { scale: 0.98, rotate: -0.4 } : { scale: 1, rotate: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <HowItWorks />
        <ProductDemo />
        <Features />
        <CTA />
      </main>
      <Footer />
      <EggToast show={eggTriggered} />
    </motion.div>
  )
}
