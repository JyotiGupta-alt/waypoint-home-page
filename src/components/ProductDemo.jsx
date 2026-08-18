import Reveal from './Reveal'

const STATS = [
  { num: '2m 14s', label: 'avg time to prod' },
  { num: '99.94%', label: 'deploy success rate' },
  { num: '3', label: 'rollbacks this month' },
]

const EVENTS = [
  { state: 'success', title: 'payments-service deployed', time: '2m ago', detail: 'v3.12.0 · triggered by @rina' },
  { state: 'danger', title: 'notifications-worker rolled back', time: '41m ago', detail: 'error budget exceeded at 12% traffic — auto-reverted to v1.8.2', badge: 'rolled back' },
  { state: 'success', title: 'web-frontend deployed', time: '3h ago', detail: 'v9.4.1 · triggered by @devon' },
]

const SERVICES = [
  { name: 'api-gateway', status: 'healthy', ok: true },
  { name: 'payments-service', status: 'healthy', ok: true },
  { name: 'notifications-worker', status: 'watching', ok: false },
  { name: 'web-frontend', status: 'healthy', ok: true },
]

const STATE_COLOR = { success: 'var(--success)', danger: 'var(--danger)' }
const BADGE_STYLE = {
  danger: { color: 'var(--danger)', background: 'color-mix(in srgb, var(--danger) 15%, transparent)' },
}

export default function ProductDemo() {
  return (
    <section id="product" className="py-19">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="max-w-[560px] mb-10">
          <span className="font-[var(--font-mono)] text-[0.76rem] text-[var(--accent)] block mb-3">THE VIEW YOUR TEAM ACTUALLY OPENS</span>
          <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-tight mb-3">Not a status page. A pulse.</h2>
          <p className="text-[1rem] text-[var(--text-dim)] max-w-[52ch]">
            This is the same dashboard your team would see mid-deploy — real service states, real timing, nothing simulated for the pitch.
          </p>
        </Reveal>

        <Reveal className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="flex items-center gap-2 px-[18px] py-[14px] border-b border-[var(--border)] font-[var(--font-mono)] text-[0.76rem] text-[var(--text-faint)]">
            <div className="flex gap-1.5 mr-2">
              <span className="w-[9px] h-[9px] rounded-full bg-[var(--border)]" />
              <span className="w-[9px] h-[9px] rounded-full bg-[var(--border)]" />
              <span className="w-[9px] h-[9px] rounded-full bg-[var(--border)]" />
            </div>
            app.waypoint.dev/pipelines/api-gateway
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px]">
            <div className="p-6 border-b md:border-b-0 md:border-r border-[var(--border)]">
              <div className="flex gap-2.5 flex-wrap mb-5">
                {STATS.map((s) => (
                  <div key={s.label} className="flex-1 min-w-[120px] bg-[var(--surface)] border border-[var(--border)] rounded-[10px] px-3.5 py-3 hover:-translate-y-0.5 hover:border-[var(--accent-dim)] transition-all">
                    <div className="font-[var(--font-mono)] text-[1.3rem] font-medium">{s.num}</div>
                    <div className="text-[0.74rem] text-[var(--text-faint)] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="pl-7 relative">
                {EVENTS.map((e, i) => (
                  <div key={i} className="relative pl-5 py-[11px] border-b border-[var(--border)] last:border-none">
                    <span
                      className="absolute -left-[3px] top-[19px] w-[9px] h-[9px] rounded-full border-2"
                      style={{ borderColor: STATE_COLOR[e.state], background: STATE_COLOR[e.state] }}
                    />
                    <div className="flex justify-between items-baseline gap-2.5">
                      <span className="text-[0.9rem] font-medium">{e.title}</span>
                      <span className="font-[var(--font-mono)] text-[0.72rem] text-[var(--text-faint)] whitespace-nowrap">{e.time}</span>
                    </div>
                    <div className="text-[0.8rem] text-[var(--text-dim)] mt-0.5">{e.detail}</div>
                    {e.badge && (
                      <span className="inline-block font-[var(--font-mono)] text-[0.68rem] px-[7px] py-0.5 rounded mt-1.5" style={BADGE_STYLE[e.state]}>
                        {e.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="font-[var(--font-mono)] text-[0.8rem] text-[var(--text-faint)] mb-3">SERVICES</div>
              {SERVICES.map((s) => (
                <div key={s.name} className="flex justify-between items-center py-2.5 border-b border-[var(--border)] last:border-none text-[0.86rem]">
                  <span className="flex items-center">
                    <span className="w-[7px] h-[7px] rounded-full mr-2" style={{ background: s.ok ? 'var(--success)' : 'var(--warning)' }} />
                    {s.name}
                  </span>
                  <span className="font-[var(--font-mono)] text-[0.72rem] text-[var(--text-faint)]">{s.status}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
