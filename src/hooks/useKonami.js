import { useEffect, useState } from 'react'

const SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

// Detects the Konami code and briefly flips a "triggered" flag.
// Hidden on purpose — see the bonus round in the brief.
export function useKonami() {
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    let pos = 0
    const onKeyDown = (e) => {
      pos = e.key === SEQUENCE[pos] ? pos + 1 : 0
      if (pos === SEQUENCE.length) {
        pos = 0
        setTriggered(true)
        setTimeout(() => setTriggered(false), 2600)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return triggered
}
