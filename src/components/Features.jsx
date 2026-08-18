import { GitBranch, RotateCcw, BellRing } from 'lucide-react'
import Reveal from './Reveal'

const FEATURES = [
  { icon: GitBranch, title: 'One timeline, every service', body: 'Every deploy across every service lands on the same feed, in the order it actually happened — not scattered across five CI dashboards.' },
  { icon: RotateCcw, title: 'Rollback in one click', body: 'Spot a bad canary and revert to the last healthy build without leaving the timeline — no separate runbook to dig up.' },
  { icon: BellRing, title: 'Alerts that page the right person', body: 'Waypoint knows who owns which service, so a bad deploy pages the person who can actually fix it — not the whole team.' },
]

export default function Features() {
  return (
    <section id="features" className="py-19">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="max-w-[560px] mb-10">
          <span className="font-[var(--font-mono)] text-[0.76rem] text-[var(--accent)] block mb-3">WHAT IT ACTUALLY DOES</span>
          <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-tight mb-3">Three things, done well.</h2>
          <p className="text-[1rem] text-[var(--text-dim)] max-w-[52ch]">
            Waypoint isn't trying to be your whole observability stack. It's the one screen that answers "what shipped, and is it okay."
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6.5 hover:-translate-y-[3px] hover:border-[var(--accent-dim)] transition-all">
              <div className="w-9.5 h-9.5 rounded-[9px] flex items-center justify-center mb-4" style={{ background: 'color-mix(in srgb, var(--accent) 14%, transparent)', color: 'var(--accent)' }}>
                <f.icon size={18} />
              </div>
              <h3 className="font-[var(--font-display)] text-[1.05rem] font-semibold mb-2">{f.title}</h3>
              <p className="text-[0.9rem] text-[var(--text-dim)]">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
