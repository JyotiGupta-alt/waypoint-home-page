import Reveal from './Reveal'

const STEPS = [
  { num: '01', title: 'Connect your pipeline', body: "Point Waypoint at your CI provider — GitHub Actions, CircleCI, or a webhook if you've rolled your own." },
  { num: '02', title: 'Watch the timeline live', body: 'Every build, canary, and rollout lands on one feed the moment it happens — no refreshing five tabs.' },
  { num: '03', title: 'Get paged only when it matters', body: "Waypoint routes alerts to whoever owns the service that broke — not the whole team's phones at once." },
]

export default function HowItWorks() {
  return (
    <section id="how" className="pt-5 pb-15">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="max-w-[560px] mb-10">
          <span className="font-[var(--font-mono)] text-[0.76rem] text-[var(--accent)] block mb-3">SETUP, IN ORDER</span>
          <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-tight">Three steps, five minutes.</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[var(--border)]">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 0.08}
              className="py-6 pr-6 md:border-r border-b md:border-b-0 border-[var(--border)] last:border-none"
            >
              <span className="font-[var(--font-mono)] text-[0.78rem] text-[var(--accent)] block mb-2.5">{s.num}</span>
              <h3 className="font-[var(--font-display)] text-[1.02rem] font-semibold mb-2">{s.title}</h3>
              <p className="text-[0.88rem] text-[var(--text-dim)]">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
