'use client'

import { useState, useEffect } from 'react'

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

// Navigation
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F5F5F3]/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14 flex items-center justify-between h-[76px]">
        <a href="#" className="flex items-center">
          <Logo className="h-7" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-[#2D5BE3] transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium hover:text-[#2D5BE3] transition-colors">Process</a>
          <a href="#industries" className="text-sm font-medium hover:text-[#2D5BE3] transition-colors">Industries</a>
          <a href="#manifesto" className="text-sm font-medium hover:text-[#2D5BE3] transition-colors">Manifesto</a>
          <a href="/real-estate" className="text-sm font-medium hover:text-[#2D5BE3] transition-colors">Real Estate</a>
        </div>
        <a href="#contact" className="bg-[#2D5BE3] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1E4ABF] transition-all flex items-center gap-2">
          Start a project <span>→</span>
        </a>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  const [time, setTime] = useState("--")

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
    <header className="min-h-screen flex items-center pt-20">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10">
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#888] mb-1">Founder</span>
                <span className="text-sm font-medium">Rishabh Sharma</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#888] mb-1">Studio</span>
                <span className="text-sm font-medium">Vrindavan · India</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#888] mb-1">Established</span>
                <span className="text-sm font-medium">2026 · v1.0</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#888] mb-1">Local time</span>
                <span className="text-sm font-medium font-mono tabular-nums">{time}</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#888] mb-1">Status</span>
                <span className="text-sm font-medium flex items-center gap-2">
                  <span className="pulse-dot"></span>
                  Booking Q3 · 2026
                </span>
              </div>
            </div>

            <h1 className="text-[clamp(48px,10vw,160px)] font-bold leading-[0.92] tracking-tight mb-10">
              Strategy &<br />
              marketing,<br />
              <em>shaped</em> with <span className="text-[#2D5BE3]">intent.</span>
            </h1>

            <p className="text-lg text-[#888] max-w-md mb-10 leading-relaxed">
              Taksh is a strategy & marketing studio for growth-stage businesses — built to help brands think sharper, move faster, and grow with intent.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-[#2D5BE3] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1E4ABF] transition-all inline-flex items-center gap-2">
                Start a project <span>→</span>
              </a>
              <a href="#services" className="border border-[#E0DDD6] text-[#1A1A1A] px-6 py-3 text-sm font-medium hover:border-[#2D5BE3] hover:text-[#2D5BE3] transition-all inline-flex">
                See the work
              </a>
              <button className="border border-[#E0DDD6] text-[#1A1A1A] px-6 py-3 text-sm font-medium hover:border-[#2D5BE3] hover:text-[#2D5BE3] transition-all">
                Join waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Marquee
function Marquee() {
  const items = ['Strategy', 'Positioning', 'Go-to-Market', 'Content', 'Performance', 'Consultancy']
  return (
    <div className="overflow-hidden py-6 border-y border-[#E0DDD6] bg-[#F5F5F3]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm uppercase tracking-widest text-[#888] flex items-center gap-3">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D5BE3]"></span>
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
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl font-bold text-[#2D5BE3] mb-1">{stat.num}</div>
              <div className="text-sm text-[#888] uppercase tracking-wider">{stat.label}</div>
            </div>
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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <div className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#888]">Services · 01</span>
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold mt-4 leading-tight">
            What we<br /><em>actually do.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 border border-[#E0DDD6] hover:border-[#2D5BE3] transition-all cursor-pointer">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#2D5BE3] font-semibold">{service.num}</span>
              <h3 className="text-2xl font-semibold mt-3 mb-4">{service.title}</h3>
              <p className="text-[#888] leading-relaxed">{service.desc}</p>
            </div>
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

  return (
    <section id="process" className="py-24 bg-[#F5F5F3] border-y border-[#E0DDD6]">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <div className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#888]">Process · 02</span>
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold mt-4 leading-tight">
            Four weeks to<br /><em>work that works.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="w-12 h-12 rounded-full border border-[#E0DDD6] flex items-center justify-center mb-6">
                <span className="text-[11px] font-semibold">{step.num}</span>
              </div>
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#2D5BE3] font-semibold block mb-2">{step.week}</span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Industries Section
function Industries() {
  const industries = [
    { title: "SaaS", desc: "B2B & B2C software companies looking to sharpen positioning and accelerate growth." },
    { title: "Fintech", desc: "Financial products and platforms that need trust-building narratives." },
    { title: "E-commerce", desc: "D2C brands ready to move beyond discount-driven marketing." },
    { title: "Real Estate", desc: "Developers and property brands building long-term positioning." },
    { title: "EdTech", desc: "Education platforms scaling their narrative and student acquisition." },
    { title: "HealthTech", desc: "Wellness and medical tech brands requiring sensitive, credible messaging." }
  ]

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <div className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#888]">Industries · 03</span>
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold mt-4 leading-tight">
            Where we've<br /><em>proven it.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="p-6 border border-[#E0DDD6]">
              <h3 className="text-xl font-semibold mb-3">{ind.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{ind.desc}</p>
            </div>
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
    <section id="manifesto" className="py-24 bg-[#0D0D0D] text-white">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14">
        <div className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#888]">Manifesto · 04</span>
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold mt-4 leading-tight">
            How we<br /><em>actually think.</em>
          </h2>
        </div>

        <div className="space-y-8 max-w-2xl">
          {points.map((point, i) => (
            <div key={i} className="flex gap-6">
              <span className="text-[#2D5BE3] font-bold text-lg">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section id="contact" className="py-24 bg-[#2D5BE3] text-white">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14 text-center">
        <h2 className="text-[clamp(36px,5vw,72px)] font-bold mb-6">
          Ready to<br /><em>shape intent?</em>
        </h2>
        <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
          Drop your details and we'll be in touch within 48 hours.
        </p>
        <a href="mailto:hello@taksh.in" className="inline-block bg-white text-[#2D5BE3] px-8 py-4 text-lg font-semibold hover:bg-[#F5F5F3] transition-all">
          Start a project →
        </a>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-[#F5F5F3] border-t border-[#E0DDD6]">
      <div className="max-w-[1480px] mx-auto px-5 lg:px-14 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Logo className="h-6" />
          <span className="text-sm text-[#888]">© 2026 Taksh</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-[#2D5BE3] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#2D5BE3] transition-colors">Twitter</a>
          <a href="mailto:hello@taksh.in" className="hover:text-[#2D5BE3] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F3]">
      <Nav />
      <Hero />
      <Marquee />
      <StatsStrip />
      <Services />
      <Process />
      <Industries />
      <Manifesto />
      <CTA />
      <Footer />
    </main>
  )
}