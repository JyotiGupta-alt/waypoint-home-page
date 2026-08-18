import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
