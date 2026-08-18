import { motion } from 'framer-motion'

const STATE_COLOR = {
  success: 'var(--success)',
  warning: 'var(--warning)',
  danger: 'var(--danger)',
}

const BADGE_STYLE = {
  success: { color: 'var(--success)', background: 'color-mix(in srgb, var(--success) 15%, transparent)' },
  warning: { color: 'var(--warning)', background: 'color-mix(in srgb, var(--warning) 15%, transparent)' },
  danger: { color: 'var(--danger)', background: 'color-mix(in srgb, var(--danger) 15%, transparent)' },
}

function Step({ state, title, time, detail, badge }) {
  return (
    <div className="relative pl-5 py-[11px] border-b border-[var(--border)] last:border-none last:pb-0">
      <span
        className="absolute -left-[3px] top-[19px] w-[9px] h-[9px] rounded-full border-2"
        style={{
          borderColor: state ? STATE_COLOR[state] : 'var(--text-faint)',
          background: state ? STATE_COLOR[state] : 'var(--bg-elevated)',
        }}
      />
      <div className="flex justify-between items-baseline gap-2.5">
        <span className="text-[0.9rem] font-medium">{title}</span>
        <span className="font-[var(--font-mono)] text-[0.72rem] text-[var(--text-faint)] whitespace-nowrap">{time}</span>
      </div>
      {detail && <div className="text-[0.8rem] text-[var(--text-dim)] mt-0.5">{detail}</div>}
      {badge && (
        <span className="inline-block font-[var(--font-mono)] text-[0.68rem] px-[7px] py-0.5 rounded mt-1.5" style={BADGE_STYLE[state]}>
          {badge}
        </span>
      )}
    </div>
  )
}

// The signature element: a live-feeling deploy timeline with a traveling
// "runner" dot. Reused (in more detail) in the ProductDemo section below.
export default function PipelineCard() {
  const steps = [
    { state: 'success', title: 'Build passed', time: '14:02:11', detail: 'main @ 4f9a21c · 48s' },
    { state: 'success', title: 'Canary 5%', time: '14:03:40', detail: 'error rate steady at 0.02%', badge: 'healthy' },
    { state: 'warning', title: 'Canary 25%', time: '14:07:52', detail: 'p95 latency up 40ms', badge: 'watching' },
    { state: 'success', title: 'Full rollout', time: '14:11:03', detail: '100% traffic · all checks green', badge: 'shipped' },
  ]

  return (
    <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-[22px] pb-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className="flex justify-between items-center mb-[18px] font-[var(--font-mono)] text-[0.75rem] text-[var(--text-faint)]">
        <span>waypoint / api-gateway</span>
        <span className="flex items-center gap-1.5 text-[var(--text-dim)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
          production
        </span>
      </div>

      <div className="relative pl-7">
        <div className="absolute left-2 top-1.5 bottom-1.5 w-0.5 bg-[var(--border)]" />
        <motion.div
          className="absolute left-[5px] w-2 h-2 rounded-full"
          style={{ background: 'var(--accent)', boxShadow: '0 0 0 4px color-mix(in srgb, var(--accent) 22%, transparent), 0 0 14px 2px var(--accent)' }}
          animate={{ top: ['4%', '96%'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4.5, times: [0, 0.08, 0.92, 1], repeat: Infinity, ease: 'easeInOut' }}
        />
        {steps.map((s, i) => (
          <Step key={i} {...s} />
        ))}
      </div>
    </div>
  )
}
