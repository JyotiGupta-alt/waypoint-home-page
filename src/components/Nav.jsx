import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#product', label: 'Product' },
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
]

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-[var(--border)]"
      style={{ background: 'color-mix(in srgb, var(--bg) 82%, transparent)' }}>
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between px-6 py-[18px]">
        <a href="#top" className="flex items-center gap-2 font-[var(--font-display)] font-bold text-lg tracking-tight">
          <span className="w-5 h-5 rounded-[5px] bg-gradient-to-br from-[var(--accent)] to-[var(--success)]" />
          Waypoint
        </a>

        <div className="hidden md:flex gap-8 text-sm text-[var(--text-dim)]">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--text)] transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dim)] flex items-center justify-center hover:text-[var(--text)] hover:border-[var(--accent-dim)] transition-colors"
          >
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <a href="#cta" className="hidden md:inline-flex text-sm font-semibold px-[18px] py-2.5 rounded-lg bg-[var(--accent)] text-[#0B0D12] hover:-translate-y-px transition-transform">
            Get started
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-5 border-b border-[var(--border)] bg-[var(--bg)]">
          {LINKS.concat([{ href: '#cta', label: 'Get started' }]).map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[0.95rem] text-[var(--text-dim)] border-b border-[var(--border)] last:border-none"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
