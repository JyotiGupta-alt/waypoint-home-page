import { motion, AnimatePresence } from 'framer-motion'

// Bonus round: fires on the Konami code (↑ ↑ ↓ ↓ ← → ← → b a).
export default function EggToast({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-7 left-1/2 z-[100] font-[var(--font-mono)] text-[0.82rem] px-5 py-3 rounded-[10px]"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--accent-dim)',
            color: 'var(--text)',
            boxShadow: '0 20px 60px -20px rgba(0,0,0,0.5)',
          }}
        >
          ▲ Rolled back to factory settings. All systems healthy.
        </motion.div>
      )}
    </AnimatePresence>
  )
}
