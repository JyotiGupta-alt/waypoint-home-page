import PipelineCard from './PipelineCard'

export default function Hero() {
  return (
    <section id="top" className="relative pt-22 pb-15 overflow-hidden">
      <div
        className="absolute inset-x-0 -top-10 h-[480px] -z-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--text) 6%, transparent) 1px, transparent 0)',
          backgroundSize: '22px 22px',
          maskImage: 'linear-gradient(180deg, black, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(180deg, black, transparent 85%)',
        }}
      />

      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[0.76rem] text-[var(--text-dim)] border border-[var(--border)] px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
            Live on 3 production pipelines right now
          </span>

          <h1 className="font-[var(--font-display)] font-semibold text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.08] tracking-tight mb-5">
            Every deploy, <span className="text-[var(--accent)]">one timeline</span> you can trust.
          </h1>

          <p className="text-[1.08rem] text-[var(--text-dim)] max-w-[46ch] mb-8">
            Waypoint watches your deploys from push to production — canaries, rollbacks, and
            everything in between — so "did it actually ship?" stops being a Slack thread.
          </p>

          <div className="flex gap-3.5 flex-wrap items-center mb-5">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-[0.88rem] font-semibold px-[18px] py-2.5 rounded-lg bg-[var(--accent)] text-[#0B0D12] hover:-translate-y-px hover:shadow-[0_8px_24px_-8px_var(--accent)] transition-all"
            >
              Connect your first pipeline
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 text-[0.88rem] font-semibold px-[18px] py-2.5 rounded-lg border border-[var(--border)] hover:border-[var(--accent-dim)] hover:bg-[var(--surface)] transition-colors"
            >
              See it in action ↓
            </a>
          </div>
          <p className="text-[0.83rem] text-[var(--text-faint)]">
            Free while in beta · No credit card · 5 minute setup
          </p>
        </div>

        <PipelineCard />
      </div>
    </section>
  )
}
