import { ArrowUpRight, Bot, Globe2, Mail, Phone, Sparkles } from 'lucide-react'

const services = [
  { icon: Globe2, label: 'Websites for businesses and anyone who needs one' },
  { icon: Bot, label: 'AI chatbots' },
  { icon: Sparkles, label: 'Turning your wants and needs into reality' },
]

export default function Page() {
  return (
    <main className="calling-card-page">
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />

      <section className="calling-card" aria-labelledby="brand-name">
        <header className="card-header">
          <a className="wordmark" href="https://vividdev.io" aria-label="VividDev website">
            <span className="wordmark-mark" aria-hidden="true">V</span>
            <span>VividDev</span>
          </a>
          <span className="card-index">PERSONAL CALLING CARD</span>
        </header>

        <div className="card-content">
          <p className="eyebrow"><span className="eyebrow-line" /> YOUR IDEAS, ONLINE</p>
          <h1 id="brand-name">Let&apos;s make<br /><span>it vivid.</span></h1>
          <p className="intro">
            I build websites for companies, small businesses, and anyone who needs a website. I also build AI chatbots and make your wants and needs a reality.
          </p>

          <div className="services" aria-label="What I do">
            {services.map(({ icon: Icon, label }, index) => (
              <div className="service" key={label}>
                <span className="service-icon"><Icon size={17} strokeWidth={1.7} aria-hidden="true" /></span>
                <span className="service-number">0{index + 1}</span>
                <span className="service-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <footer className="card-footer">
          <div className="contact-heading">
            <span className="contact-kicker">HAVE A PROJECT IN MIND?</span>
            <span className="contact-title">Get in touch.</span>
          </div>
          <nav className="contact-links" aria-label="Contact VividDev">
            <a className="contact-link" href="mailto:hello@vividdev.io">
              <span className="contact-icon"><Mail size={16} aria-hidden="true" /></span>
              <span>hello@vividdev.io</span>
              <ArrowUpRight size={14} className="link-arrow" aria-hidden="true" />
            </a>
            <a className="contact-link" href="tel:3139032770">
              <span className="contact-icon"><Phone size={16} aria-hidden="true" /></span>
              <span>313-903-2770</span>
              <ArrowUpRight size={14} className="link-arrow" aria-hidden="true" />
            </a>
            <a className="contact-link" href="https://vividdev.io" target="_blank" rel="noreferrer">
              <span className="contact-icon"><Globe2 size={16} aria-hidden="true" /></span>
              <span>vividdev.io</span>
              <ArrowUpRight size={14} className="link-arrow" aria-hidden="true" />
            </a>
          </nav>
        </footer>
      </section>

      <p className="page-note">VividDev <span>·</span> Websites &amp; AI chatbots</p>
    </main>
  )
}

