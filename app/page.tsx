'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Logo Component
function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="45" fontFamily="Inter" fontSize="42" fontWeight="700" fill="#1A1A1A">taksh</text>
      <circle cx="265" cy="30" r="18" stroke="#2D5BE3" strokeWidth="2" fill="none"/>
      <text x="265" y="36" fontFamily="Inter" fontSize="16" fontWeight="600" fill="#2D5BE3" textAnchor="middle">T</text>
    </svg>
  )
}

// Ambient Mesh Background
function AmbientMesh() {
  return (
    <div className="ambient-mesh" aria-hidden="true">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="streak" style={{ left: '20%', animationDelay: '0s' }}></div>
      <div className="streak" style={{ left: '50%', animationDelay: '-5s' }}></div>
      <div className="streak" style={{ left: '80%', animationDelay: '-10s' }}></div>
    </div>
  )
}

// Custom Cursor
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setHover(true)
      } else {
        setHover(false)
      }
    }
    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div
      className={`cursor ${hover ? 'is-hover' : ''}`}
      style={{ left: position.x, top: position.y }}
    />
  )
}

// Reveal Animation Component
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.2, delay, ease: [0.2, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Navigation
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="absolute inset-0 bg-[#F5F5F3]/40 backdrop-blur-[12px] saturate-[180%] -z-10 border-b border-[#1A1A1A]/5 transition-all" />
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14 flex items-center justify-between h-[76px]">
        <a href="#" className="flex items-center">
          <Logo className="h-7" />
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="relative text-sm font-medium hover:text-[#2D5BE3] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full">Services</a>
          <a href="#process" className="relative text-sm font-medium hover:text-[#2D5BE3] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full">Process</a>
          <a href="#industries" className="relative text-sm font-medium hover:text-[#2D5BE3] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full">Industries</a>
          <a href="#manifesto" className="relative text-sm font-medium hover:text-[#2D5BE3] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full">Manifesto</a>
          <a href="/real-estate" className="relative text-sm font-medium hover:text-[#2D5BE3] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full">Real Estate</a>
        </div>
        <a href="#contact" className="bg-[#1A1A1A] text-[#F5F5F3] px-5 py-2.5 text-sm font-medium hover:bg-[#2D5BE3] transition-all flex items-center gap-2">
          Start a project <span className="transition-transform hover:translate-x-1">→</span>
        </a>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  const [time, setTime] = useState("--:--")

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false }))
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="pt-[156px] pb-20 relative">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <Reveal>
          <div className="flex flex-wrap gap-x-10 gap-y-4 mb-14">
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#888]">Founder</span>
              <span className="text-sm font-medium text-[#1A1A1A]">Rishabh Sharma</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#888]">Studio</span>
              <span className="text-sm font-medium text-[#1A1A1A]">Vrindavan · India</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#888]">Established</span>
              <span className="text-sm font-medium text-[#1A1A1A]">2026 · v1.0</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#888]">Local time</span>
              <span className="text-sm font-medium text-[#1A1A1A] font-mono tabular-nums">{time}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#888]">Status</span>
              <span className="text-sm font-medium text-[#1A1A1A] flex items-center gap-2">
                <span className="pulse-dot"></span>
                Booking Q3 · 2026
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-[clamp(60px,10.5vw,220px)] font-bold leading-[0.88] tracking-tight mb-[60px]">
            Strategy &<br />
            marketing,<br />
            <em>shaped</em> with <span className="text-[#2D5BE3]">intent.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[60px] border-t border-[#E0DDD6] pt-9">
            <div>
              <p className="text-[clamp(20px,1.6vw,26px)] font-medium leading-[1.4] max-w-[640px]">
                Taksh is a strategy & marketing studio for growth-stage businesses — built to help brands think sharper, move faster, and grow with intent.
              </p>
            </div>
            <div className="flex gap-4 justify-end flex-wrap">
              <a href="#contact" className="bg-[#1A1A1A] text-[#F5F5F3] px-[28px] py-[18px] text-sm font-medium hover:bg-[#2D5BE3] transition-all flex items-center gap-3 magnetic-btn">
                Start a project <span>→</span>
              </a>
              <a href="#services" className="border border-[#E0DDD6] text-[#1A1A1A] px-[28px] py-[18px] text-sm font-medium hover:border-[#2D5BE3] hover:text-[#2D5BE3] transition-all magnetic-btn">
                See the work
              </a>
              <button className="border border-[#E0DDD6] text-[#1A1A1A] px-[28px] py-[18px] text-sm font-medium hover:border-[#2D5BE3] hover:text-[#2D5BE3] transition-all magnetic-btn">
                Join waitlist
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  )
}

// Marquee
function Marquee() {
  const items = ['Strategy', 'Positioning', 'Go-to-Market', 'Content', 'Performance', 'Consultancy']

  return (
    <div className="border-t border-b border-[#E0DDD6] overflow-hidden py-7 bg-[#F5F5F3] whitespace-nowrap" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
      <div className="flex animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-16 text-[clamp(28px,4.4vw,64px)] font-semibold tracking-tight flex items-center gap-16">
            {item}
            <span className="blue-tri"></span>
          </span>
        ))}
      </div>
    </div>
  )
}

// Stats Strip
function StatsStrip() {
  const stats = [
    { num: "6+", label: "Years experience" },
    { num: "50+", label: "Projects shipped" },
    { num: "3", label: "Studio focus areas" },
    { num: "0", label: "Retainers — ever" }
  ]

  return (
    <div className="py-10 border-b border-[#E0DDD6]">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-[#2D5BE3] mb-1">{stat.num}</div>
                <div className="text-sm text-[#888] uppercase tracking-wider">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

// Services Section
function Services() {
  const services = [
    { num: "01", title: "Strategy", desc: "Strategic planning, market analysis, competitive positioning, and growth roadmaps tailored to your business stage." },
    { num: "02", title: "Positioning", desc: "Brand identity, messaging architecture, narrative design, and visual identity systems that differentiate you in-market." },
    { num: "03", title: "Content", desc: "Editorial and multimedia content creation — from thought leadership to product storytelling that builds authority." },
    { num: "04", title: "Performance", desc: "Performance marketing, funnel optimization, and data-driven campaigns that convert and scale." }
  ]

  return (
    <section id="services" className="py-[120px] border-t border-[#1A1A1A]">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-12 mb-20">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#888] pt-3">Services · 01</span>
            <h2 className="text-[clamp(36px,5.4vw,84px)] font-bold leading-[1.1] tracking-tight">
              What we<br /><em>actually do.</em>
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-[#E0DDD6]">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="service-item group grid grid-cols-[80px_1fr_2fr_60px] gap-10 py-10 border-b border-[#E0DDD6] cursor-pointer transition-all">
                <span className="service-num text-[14px] tracking-[0.18em] text-[#888] font-variant-numeric tabular-nums">{service.num}</span>
                <h3 className="text-[clamp(28px,4vw,60px)] font-semibold leading-none tracking-tight">{service.title}</h3>
                <p className="service-desc text-[17px] text-[#888] leading-[1.5] max-w-[520px]">{service.desc}</p>
                <span className="service-arrow text-[28px] text-right opacity-30 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-3 transition-all">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Process Section
function Process() {
  const steps = [
    { num: "01", week: "Week 01", title: "Discovery", desc: "Deep dive into your business, market, and competitors. We ask questions you've stopped asking yourself." },
    { num: "02", week: "Week 02", title: "Strategy", desc: "Positioning, narrative, and strategic roadmap. The sentence that holds everything together." },
    { num: "03", week: "Week 03", title: "Execution", desc: "Identity system, content, or campaign creation. Work you can actually use." },
    { num: "04", week: "Week 04", title: "Handoff", desc: "Delivery, GTM plan, and first 90 days mapped. We don't disappear — we calibrate." }
  ]

  const [active, setActive] = useState(0)

  return (
    <section id="process" className="py-[120px] bg-[#F5F5F3] border-y border-[#E0DDD6]">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-12 mb-20">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#888] pt-3">Process · 02</span>
            <h2 className="text-[clamp(36px,5.4vw,84px)] font-bold leading-[1.1] tracking-tight">
              Four weeks to<br /><em>work that works.</em>
            </h2>
          </div>
        </Reveal>

        <div className="relative pt-10">
          <div className="absolute top-10 left-0 w-full h-0.5 bg-[#E0DDD6]"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`process-step relative pt-7 transition-all ${active >= i ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
              >
                <span className="text-[13px] tracking-[0.2em] font-variant-numeric tabular-nums text-[#888] mb-7 block">{step.num}</span>
                <span className="text-[12px] tracking-[0.18em] uppercase text-[#2D5BE3] font-semibold block mb-3.5">{step.week}</span>
                <h3 className="text-[clamp(22px,2vw,30px)] font-semibold leading-none tracking-tight mb-4.5">{step.title}</h3>
                <p className="text-[15px] text-[#888] leading-[1.55]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Industries Section
function Industries() {
  const industries = [
    { num: "01", title: "SaaS", desc: "B2B & B2C software companies looking to sharpen positioning and accelerate growth.", primary: true },
    { num: "02", title: "Fintech", desc: "Financial products and platforms that need trust-building narratives.", primary: false },
    { num: "03", title: "E-commerce", desc: "D2C brands ready to move beyond discount-driven marketing.", primary: false },
    { num: "04", title: "Real Estate", desc: "Developers and property brands building long-term positioning.", primary: false },
    { num: "05", title: "EdTech", desc: "Education platforms scaling their narrative and student acquisition.", primary: false },
    { num: "06", title: "HealthTech", desc: "Wellness and medical tech brands requiring sensitive, credible messaging.", primary: false },
  ]

  return (
    <section id="industries" className="py-[120px]">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-12 mb-20">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#888] pt-3">Industries · 03</span>
            <h2 className="text-[clamp(36px,5.4vw,84px)] font-bold leading-[1.1] tracking-tight">
              Where we've<br /><em>proven it.</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-t border-l border-[#E0DDD6]">
          {industries.map((ind, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className={`industry-card p-9 border-r border-b border-[#E0DDD6] min-h-[240px] flex flex-col transition-all ${ind.primary ? 'bg-white' : 'bg-[#F5F5F3]'}`}>
                <div className="flex justify-between items-center mb-9">
                  <span className="text-[12px] tracking-[0.2em] font-variant-numeric tabular-nums text-[#888] font-medium">{ind.num}</span>
                  {ind.primary && (
                    <span className="w-0 h-0 border-l-[16px] border-r-[16px] border-t-[22px] border-transparent border-t-[#2D5BE3]"></span>
                  )}
                </div>
                <h3 className="text-[clamp(24px,2.4vw,36px)] font-semibold leading-none tracking-tight mt-auto mb-3.5">{ind.title}</h3>
                <p className="text-[14px] text-[#888] leading-[1.5]">{ind.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const faqs = [
    { q: "What's your typical engagement model?", a: "We work on fixed-scope project basis — no retainers. Each engagement is scoped to deliver specific outcomes within a defined timeline and budget. This keeps us aligned on results, not hours." },
    { q: "How do you measure success?", a: "Success metrics are defined upfront based on your goals — whether that's revenue growth, brand awareness, lead volume, or market positioning. We report on what actually moves the needle." },
    { q: "Do you work with early-stage startups?", a: "We focus on growth-stage businesses (Series A and beyond) that have product-market fit and need strategic support to scale. Early-stage ideas need different help — we're happy to point you to the right resources." },
    { q: "What's your availability like?", a: "We're selective about who we work with. Current capacity: 2-3 project slots open for Q3 2026. If we're not the right fit, we'll tell you — and probably point you to someone who is." },
  ]

  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-[120px] bg-[#F5F5F3] border-t border-[#E0DDD6]">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-12 mb-20">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#888] pt-3">FAQ · 05</span>
            <h2 className="text-[clamp(36px,5.4vw,84px)] font-bold leading-[1.1] tracking-tight">
              Answers to<br /><em>what matters.</em>
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-[#E0DDD6]">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className={`faq-item border-b border-[#E0DDD6] ${open === i ? 'is-open' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="grid grid-cols-[60px_1fr_auto] gap-6 py-8 cursor-pointer">
                  <span className="text-[13px] tracking-[0.18em] text-[#888] font-variant-numeric tabular-nums font-medium">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[clamp(20px,1.8vw,28px)] font-medium tracking-tight">{faq.q}</span>
                  <div className={`faq-plus w-[22px] h-[22px] relative transition-transform ${open === i ? 'rotate-45' : ''}`}></div>
                </div>
                {open === i && (
                  <div className="grid grid-cols-[60px_1fr_auto] gap-6 pb-8">
                    <span></span>
                    <p className="text-[17px] text-[#888] leading-[1.65] max-w-[720px]">{faq.a}</p>
                    <span></span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Manifesto Section
function Manifesto() {
  const points = [
    "We don't do generic. Every brand has a point of view — we help you find and own it.",
    "Strategy without execution is just intent. We build things that ship.",
    "We'd rather do four things brilliantly than twelve things poorly.",
    "Your growth is the only metric that matters. We don't confuse activity with progress.",
    "No retainers. No lock-in. We work on projects, not as an expensive permanent employee."
  ]

  return (
    <section id="manifesto" className="py-[120px] bg-[#0D0D0D] text-white">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <Reveal>
          <div className="grid grid-cols-[200px_1fr] gap-12 mb-20">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#888] pt-3">Manifesto · 04</span>
            <h2 className="text-[clamp(36px,5.4vw,84px)] font-bold leading-[1.1] tracking-tight">
              How we<br /><em>actually think.</em>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-8 max-w-2xl">
          {points.map((point, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex gap-6">
                <span className="text-[#2D5BE3] font-bold text-lg">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-lg leading-relaxed">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact CTA
function ContactCTA() {
  return (
    <section id="contact" className="py-[clamp(96px,10vw,150px)] bg-[#0D0D0D] text-white relative overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <Reveal>
          <h2 className="text-[clamp(56px,9vw,180px)] font-bold leading-[0.96] tracking-tight mt-8 max-w-[12ch]">
            Ready to<br /><em>shape intent?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 flex justify-between items-end flex-wrap gap-8 border-t border-[#2A2A2A] pt-9">
            <div className="grid grid-cols-3 gap-[60px] text-white/70">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 block mb-3">Email</span>
                <a href="mailto:hello@taksh.in" className="text-lg hover:text-[#2D5BE3] transition-colors">hello@taksh.in</a>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 block mb-3">Based in</span>
                <span className="text-lg">Vrindavan, India</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 block mb-3">Social</span>
                <div className="flex gap-4">
                  <a href="#" className="text-lg hover:text-[#2D5BE3] transition-colors">LinkedIn</a>
                  <a href="#" className="text-lg hover:text-[#2D5BE3] transition-colors">Twitter</a>
                </div>
              </div>
            </div>
            <a href="mailto:hello@taksh.in" className="bg-[#2D5BE3] text-white px-9 py-[22px] text-base font-medium hover:bg-white hover:text-[#0D0D0D] transition-all flex items-center gap-4 cta-btn">
              Start a project →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white py-[120px] pb-10">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <div className="grid grid-cols-2 gap-20 mb-[140px]">
          <div>
            <h2 className="text-[clamp(48px,6.5vw,110px)] font-bold leading-[0.95] tracking-tight">
              Let's make<br /><em>something.</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-medium mb-8">Navigation</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#services" className="text-xl hover:text-[#2D5BE3] transition-colors">Services</a></li>
                <li><a href="#process" className="text-xl hover:text-[#2D5BE3] transition-colors">Process</a></li>
                <li><a href="#industries" className="text-xl hover:text-[#2D5BE3] transition-colors">Industries</a></li>
                <li><a href="#manifesto" className="text-xl hover:text-[#2D5BE3] transition-colors">Manifesto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-medium mb-8">Contact</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="mailto:hello@taksh.in" className="text-xl hover:text-[#2D5BE3] transition-colors">Email</a></li>
                <li><a href="#" className="text-xl hover:text-[#2D5BE3] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-xl hover:text-[#2D5BE3] transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] pt-10 flex justify-between items-center flex-wrap gap-6">
          <div className="flex items-center gap-4">
            <Logo className="h-6 text-white" />
            <span className="text-sm text-white/80">© 2026 Taksh</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <span>Built on trust</span>
            <span>Grown by work</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F3]">
      <AmbientMesh />
      <CustomCursor />
      <Nav />
      <Hero />
      <Marquee />
      <StatsStrip />
      <Services />
      <Process />
      <Industries />
      <Manifesto />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  )
}