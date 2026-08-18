export default function CTA() {
  return (
    <section
      id="cta"
      className="border-y border-[var(--border)] py-16 text-center"
      style={{ background: 'linear-gradient(180deg, transparent, color-mix(in srgb, var(--accent) 5%, transparent))' }}
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3.4vw,2.3rem)] tracking-tight mb-3.5">
          Stop asking "did it ship?" in Slack.
        </h2>
        <p className="text-[var(--text-dim)] mb-7">Connect a pipeline in about five minutes. Free during the beta.</p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-[0.88rem] font-semibold px-[18px] py-2.5 rounded-lg bg-[var(--accent)] text-[#0B0D12] hover:-translate-y-px hover:shadow-[0_8px_24px_-8px_var(--accent)] transition-all"
        >
          Connect your first pipeline
        </a>
      </div>
    </section>
  )
}
