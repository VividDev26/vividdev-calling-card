import { ArrowUpRight, Bot, Code2, Gauge, Globe2, Mail, Phone, ShoppingBag, Smartphone, Headset } from 'lucide-react'

const services = [
  { icon: Code2, title: 'Web design', description: 'Custom UI from Figma to pixel-perfect code. No templates.' },
  { icon: Globe2, title: 'Full-stack dev', description: 'Frontend, backend, APIs, databases, and deployments.' },
  { icon: ShoppingBag, title: 'E-commerce', description: 'Custom carts, Stripe payments, and order management.' },
  { icon: Bot, title: 'AI integrations', description: 'Custom AI chatbots and LLM-powered tools built into your product.' },
  { icon: Gauge, title: 'Speed & SEO', description: 'Lighthouse 100. Core Web Vitals. Ranked and fast.' },
  { icon: Smartphone, title: 'Mobile-first', description: 'Every build is responsive and tested across all screens.' },
  { icon: Headset, title: 'Retainers', description: 'Ongoing support, updates, and new features as you grow.' },
]

export default function Page() {
  return (
    <main className="calling-card-page">
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />

      <section className="calling-card" aria-labelledby="brand-name">
        <header className="card-header">
          <a className="wordmark" href="https://vividdev.io" aria-label="VividDev website">
            <span className="wordmark-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="m5.5 11.5 4.1 5L18.5 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="wordmark-name">VividDev</span>
          </a>
          <span className="card-index">PERSONAL CALLING CARD</span>
        </header>

        <div className="card-content">
          <p className="eyebrow"><span className="eyebrow-line" /> WHAT WE DO</p>
          <h1 id="brand-name">Let&apos;s make<br /><span>it vivid.</span></h1>
          <p className="intro">
            I build websites for companies, small businesses, and anyone who needs a website. I also build AI chatbots and make your wants and needs a reality.
          </p>

          <section className="services" aria-label="What we do">
            {services.map(({ icon: Icon, title, description }, index) => (
              <article className="service" key={title}>
                <span className="service-icon"><Icon size={17} strokeWidth={1.7} aria-hidden="true" /></span>
                <span className="service-number">0{index + 1}</span>
                <h2 className="service-title">{title}</h2>
                <p className="service-description">{description}</p>
              </article>
            ))}
          </section>
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

