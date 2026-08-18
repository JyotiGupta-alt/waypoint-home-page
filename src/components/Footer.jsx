export default function Footer() {
  return (
    <footer className="pt-10 pb-12.5">
      <div className="max-w-[1180px] mx-auto px-6 flex justify-between items-center flex-wrap gap-3.5 text-[0.82rem] text-[var(--text-faint)] border-t border-[var(--border)] pt-6.5">
        <div>© 2026 Waypoint. Built for teams who'd rather ship than explain what shipped.</div>
        <div className="flex gap-5">
          <a href="#product" className="hover:text-[var(--text-dim)]">Product</a>
          <a href="#features" className="hover:text-[var(--text-dim)]">Features</a>
          <a href="#" className="hover:text-[var(--text-dim)]">Docs</a>
        </div>
      </div>
    </footer>
  )
}
