import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Services", "About", "Contact"];

const SERVICES = [
  {
    icon: "📋",
    title: "Return Filing",
    subtitle: "GST · ITR · TDS · FSSAI",
    desc: "Expert-led filing across all tax types. Fast, accurate, compliant.",
    color: "#00C2A8",
  },
  {
    icon: "⚖️",
    title: "Assessment & Notices",
    subtitle: "Income Tax · GST · Customs",
    desc: "We draft replies, handle scrutiny, and resolve disputes seamlessly.",
    color: "#F59E0B",
  },
  {
    icon: "🏢",
    title: "Registrations",
    subtitle: "GST · Trademark · MSME · MCA",
    desc: "End-to-end company incorporation and compliance filings.",
    color: "#6366F1",
  },
  {
    icon: "🌐",
    title: "Virtual Office",
    subtitle: "Pan-India Presence",
    desc: "Professional address for GST/MCA with courier handling & instant setup.",
    color: "#EC4899",
  },
  {
    icon: "💡",
    title: "Consultancy",
    subtitle: "Tax · Business · Startups",
    desc: "Strategic advice, pitch decks, compliance monitoring, and growth guidance.",
    color: "#10B981",
  },
  {
    icon: "📊",
    title: "Virtual Accounting",
    subtitle: "Cloud-based Bookkeeping",
    desc: "Real-time reports, monthly reconciliation, data confidentiality assured.",
    color: "#3B82F6",
  },
  {
    icon: "🏦",
    title: "Loan Assistance",
    subtitle: "Business · Home · Personal",
    desc: "Expert matching, documentation support, and smooth approval processing.",
    color: "#F97316",
  },
  {
    icon: "📈",
    title: "Financial Planning",
    subtitle: "Wealth · Investments · SIPs",
    desc: "Goal-based planning, ELSS, mutual funds, and SEBI-registered advisory.",
    color: "#8B5CF6",
  },
];

const STATS = [
  { value: "50+", label: "Expert CA Freelancers" },
  { value: "10K+", label: "Happy Clients" },
  { value: "4.78★", label: "Average Rating" },
  { value: "A+", label: "Compliance Rating" },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    text: "TaxSafar handled my GST registration and filing so smoothly. Saved me hours every month!",
    avatar: "PS",
  },
  {
    name: "Rahul Mehta",
    role: "Startup Founder",
    text: "From company incorporation to tax compliance — they've been our one-stop partner since day one.",
    avatar: "RM",
  },
  {
    name: "Ananya Iyer",
    role: "Freelancer",
    text: "Finally, ITR filing without the stress. The team is responsive and truly expert.",
    avatar: "AI",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(6,14,35,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "none",
      transition: "all 0.4s ease",
      padding: "0 5vw",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "72px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: 36, height: 36, borderRadius: "10px",
          background: "linear-gradient(135deg, #D4AF37, #F5D060)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, fontWeight: 900, color: "#060E23",
        }}>T</div>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 700, fontSize: "1.4rem",
          color: "#fff", letterSpacing: "0.02em",
        }}>
          Tax<span style={{ color: "#D4AF37" }}>Safar</span>
        </span>
      </div>

      {/* Desktop nav */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
        {NAV_LINKS.map(l => (
          <a key={l} href="#" style={{
            color: "rgba(255,255,255,0.75)", textDecoration: "none",
            fontSize: "0.92rem", fontWeight: 500, letterSpacing: "0.03em",
            fontFamily: "'DM Sans', sans-serif",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => e.target.style.color = "#D4AF37"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
          >{l}</a>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <a href="#" style={{
          color: "#D4AF37", border: "1px solid rgba(212,175,55,0.5)",
          padding: "8px 20px", borderRadius: "8px",
          textDecoration: "none", fontSize: "0.87rem", fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.25s",
        }}
          onMouseEnter={e => { e.target.style.background = "rgba(212,175,55,0.1)"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; }}
        >Login</a>
        <a href="#" style={{
          background: "linear-gradient(135deg, #D4AF37, #F5D060)",
          color: "#060E23", padding: "8px 20px", borderRadius: "8px",
          textDecoration: "none", fontSize: "0.87rem", fontWeight: 700,
          fontFamily: "'DM Sans', sans-serif",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => e.target.style.opacity = "0.9"}
          onMouseLeave={e => e.target.style.opacity = "1"}
        >Get Started</a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "none", flexDirection: "column", gap: "5px", padding: "4px",
        }} className="hamburger">
          {[0,1,2].map(i => <span key={i} style={{ display:"block", width:22, height:2, background:"#D4AF37", borderRadius:2 }} />)}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 72, left: 0, right: 0,
          background: "rgba(6,14,35,0.98)", padding: "24px 5vw",
          display: "flex", flexDirection: "column", gap: "20px",
          borderBottom: "1px solid rgba(212,175,55,0.2)",
        }}>
          {NAV_LINKS.map(l => (
            <a key={l} href="#" style={{
              color: "#fff", textDecoration: "none",
              fontSize: "1.1rem", fontFamily: "'DM Sans', sans-serif",
            }}>{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const words = ["Taxes", "Compliance", "GST Filings", "Bookkeeping"];
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wi];
    let timeout;
    if (!deleting && ci < current.length) {
      timeout = setTimeout(() => {
        setTyped(current.slice(0, ci + 1));
        setCi(ci + 1);
      }, 80);
    } else if (!deleting && ci === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && ci > 0) {
      timeout = setTimeout(() => {
        setTyped(current.slice(0, ci - 1));
        setCi(ci - 1);
      }, 45);
    } else if (deleting && ci === 0) {
      setDeleting(false);
      setWi((wi + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [ci, deleting, wi]);

  return (
    <section style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: "linear-gradient(160deg, #060E23 0%, #0B1A3E 60%, #0E2244 100%)",
      display: "flex", alignItems: "center",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Animated grid background */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.07,
        backgroundImage: `repeating-linear-gradient(0deg, #D4AF37 0px, transparent 1px, transparent 80px, #D4AF37 81px),
          repeating-linear-gradient(90deg, #D4AF37 0px, transparent 1px, transparent 80px, #D4AF37 81px)`,
      }} />

      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "15%", right: "8%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        width: 350, height: 350, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 5vw 80px", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          <div style={{ width: 40, height: 2, background: "#D4AF37" }} />
          <span style={{
            color: "#D4AF37", fontSize: "0.85rem", fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase",
          }}>India's Trusted Tax Partner</span>
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 700, lineHeight: 1.1, color: "#fff",
          marginBottom: "12px", maxWidth: 720,
        }}>
          We Simplify Your<br />
          <span style={{
            color: "#D4AF37",
            borderBottom: "3px solid rgba(212,175,55,0.4)",
            paddingBottom: "4px",
          }}>
            {typed}<span style={{ opacity: Math.random() > 0.5 ? 1 : 0, animation: "blink 1s infinite" }}>|</span>
          </span>
        </h1>

        <p style={{
          color: "rgba(255,255,255,0.65)", fontSize: "clamp(1rem, 2vw, 1.2rem)",
          maxWidth: 540, lineHeight: 1.75, marginBottom: "48px", marginTop: "20px",
        }}>
          Tech-driven consultancy that keeps your business compliant, profitable, and stress-free.
          50+ CA experts, 10,000+ happy clients across India.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#" style={{
            background: "linear-gradient(135deg, #D4AF37, #F5D060)",
            color: "#060E23", padding: "16px 36px", borderRadius: "12px",
            textDecoration: "none", fontWeight: 700, fontSize: "1rem",
            boxShadow: "0 8px 32px rgba(212,175,55,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
            display: "inline-block",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(212,175,55,0.5)"; }}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 8px 32px rgba(212,175,55,0.35)"; }}
          >Get Free Consultation →</a>
          <a href="#services" style={{
            color: "#fff", border: "1px solid rgba(255,255,255,0.2)",
            padding: "16px 36px", borderRadius: "12px",
            textDecoration: "none", fontWeight: 500, fontSize: "1rem",
            background: "rgba(255,255,255,0.05)",
            transition: "background 0.2s",
            display: "inline-block",
          }}
            onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.1)"; }}
            onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.05)"; }}
          >Explore Services</a>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "clamp(24px, 4vw, 56px)",
          marginTop: "72px", flexWrap: "wrap",
        }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700, color: "#D4AF37", lineHeight: 1,
              }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", marginTop: "4px", letterSpacing: "0.04em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }`}</style>
    </section>
  );
}

function ServiceCard({ s, i }) {
  const [hov, setHov] = useState(false);
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      background: hov ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
      border: hov ? `1px solid ${s.color}55` : "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px", padding: "32px 28px",
      transition: "all 0.35s ease",
      cursor: "pointer",
      transform: inView ? "translateY(0)" : "translateY(32px)",
      opacity: inView ? 1 : 0,
      transitionDelay: `${(i % 4) * 0.07}s`,
      transitionProperty: "all",
      position: "relative", overflow: "hidden",
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: hov ? `linear-gradient(90deg, ${s.color}, transparent)` : "transparent",
        transition: "all 0.35s",
      }} />
      <div style={{
        width: 52, height: 52, borderRadius: "14px",
        background: `${s.color}18`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.6rem", marginBottom: "20px",
        border: `1px solid ${s.color}30`,
        transition: "transform 0.3s",
        transform: hov ? "scale(1.08)" : "scale(1)",
      }}>{s.icon}</div>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "4px",
      }}>{s.title}</div>
      <div style={{
        fontSize: "0.78rem", color: s.color, fontWeight: 600,
        letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "14px",
      }}>{s.subtitle}</div>
      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.65 }}>{s.desc}</div>
      <div style={{
        marginTop: "20px", color: s.color, fontSize: "0.85rem", fontWeight: 600,
        display: "flex", alignItems: "center", gap: "6px",
        opacity: hov ? 1 : 0.5, transition: "opacity 0.3s",
      }}>
        Learn More <span style={{ fontSize: "1.1em" }}>→</span>
      </div>
    </div>
  );
}

function Services() {
  const [ref, inView] = useInView();
  return (
    <section id="services" style={{
      background: "#080F28",
      padding: "100px 5vw",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} style={{
          textAlign: "center", marginBottom: "64px",
          transform: inView ? "none" : "translateY(24px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.6s ease",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: "100px", padding: "6px 18px", marginBottom: "20px",
          }}>
            <span style={{ color: "#D4AF37", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Services</span>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700, color: "#fff",
            marginBottom: "16px", lineHeight: 1.2,
          }}>Everything Your Business Needs</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            From registration to ongoing compliance — we handle it all so you can focus on what matters.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: "20px",
        }}>
          {SERVICES.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const [ref, inView] = useInView();
  const features = [
    { icon: "🔒", title: "Secure & Confidential", desc: "Bank-level data protection for all your financial information." },
    { icon: "⚡", title: "Fast Turnaround", desc: "Most filings completed within 24–48 hours of document submission." },
    { icon: "👨‍💼", title: "Expert CAs", desc: "50+ chartered accountants and financial specialists on demand." },
    { icon: "📱", title: "Digital-First", desc: "Manage everything online — no office visits needed." },
    { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges. Know exactly what you pay before starting." },
    { icon: "🤝", title: "Dedicated Support", desc: "Your personal relationship manager available via call or chat." },
  ];
  return (
    <section style={{
      background: "linear-gradient(160deg, #060E23 0%, #0B1A3E 100%)",
      padding: "100px 5vw",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px",
          alignItems: "center",
        }} className="why-grid">
          {/* Left */}
          <div ref={ref} style={{
            transform: inView ? "none" : "translateX(-32px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)",
              borderRadius: "100px", padding: "6px 18px", marginBottom: "20px",
            }}>
              <span style={{ color: "#D4AF37", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Why TaxSafar</span>
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "24px",
            }}>Your Growth Is Our Compliance</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "32px" }}>
              We combine technology and human expertise to deliver tax and compliance services
              that are fast, accurate, and completely hassle-free for Indian businesses of all sizes.
            </p>
            <div style={{
              display: "flex", gap: "16px", padding: "20px 24px",
              background: "rgba(212,175,55,0.07)", borderRadius: "16px",
              border: "1px solid rgba(212,175,55,0.15)",
            }}>
              <div style={{ fontSize: "2rem" }}>📞</div>
              <div>
                <div style={{ color: "#fff", fontWeight: 600, marginBottom: "4px" }}>Free Expert Consultation</div>
                <a href="tel:+919784818899" style={{ color: "#D4AF37", textDecoration: "none", fontWeight: 700, fontSize: "1.1rem" }}>+91 97848 18899</a>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px",
            transform: inView ? "none" : "translateX(32px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease 0.15s",
          }}>
            {features.map(f => (
              <div key={f.title} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px", padding: "20px",
              }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{f.icon}</div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: "6px" }}>{f.title}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .why-grid{ grid-template-columns:1fr !important; gap:48px !important; } }`}</style>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();
  return (
    <section style={{
      background: "#080F28", padding: "100px 5vw",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)",
          borderRadius: "100px", padding: "6px 18px", marginBottom: "20px",
        }}>
          <span style={{ color: "#D4AF37", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Testimonials</span>
        </div>
        <h2 ref={ref} style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700, color: "#fff", marginBottom: "56px",
          transform: inView ? "none" : "translateY(24px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.6s ease",
        }}>Trusted by Thousands</h2>

        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px", padding: "clamp(32px, 6vw, 56px)",
          position: "relative",
        }}>
          <div style={{ fontSize: "3rem", color: "#D4AF37", opacity: 0.3, lineHeight: 1, marginBottom: "24px" }}>"</div>
          <p style={{
            color: "rgba(255,255,255,0.8)", fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.8, marginBottom: "36px", fontStyle: "italic",
          }}>{TESTIMONIALS[active].text}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "linear-gradient(135deg, #D4AF37, #F5D060)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#060E23", fontWeight: 700, fontSize: "0.9rem",
            }}>{TESTIMONIALS[active].avatar}</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#fff", fontWeight: 600 }}>{TESTIMONIALS[active].name}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>{TESTIMONIALS[active].role}</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "28px" }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 28 : 10, height: 10,
              borderRadius: 5, border: "none", cursor: "pointer",
              background: i === active ? "#D4AF37" : "rgba(255,255,255,0.15)",
              transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [ref, inView] = useInView();

  const handle = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const submit = () => { if (form.name && form.email) setSent(true); };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px",
    padding: "14px 18px", color: "#fff", fontSize: "0.95rem",
    fontFamily: "'DM Sans', sans-serif", outline: "none",
    boxSizing: "border-box", transition: "border 0.2s",
  };

  return (
    <section style={{
      background: "linear-gradient(160deg, #060E23 0%, #0B1A3E 100%)",
      padding: "100px 5vw",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.2fr",
          gap: "80px", alignItems: "center",
        }} className="contact-grid">
          {/* Left */}
          <div ref={ref} style={{
            transform: inView ? "none" : "translateY(32px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)",
              borderRadius: "100px", padding: "6px 18px", marginBottom: "20px",
            }}>
              <span style={{ color: "#D4AF37", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Get In Touch</span>
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "20px",
            }}>Let's Talk About Your Business</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "40px" }}>
              Fill in the form or reach us directly. Our experts respond within one business day.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { icon: "📧", label: "Email", val: "support@taxsafar.com" },
                { icon: "📞", label: "Phone", val: "+91 97848 18899" },
                { icon: "📍", label: "Pan-India", val: "Serving clients across all states" },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "12px",
                    background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem", flexShrink: 0,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginBottom: "2px" }}>{c.label}</div>
                    <div style={{ color: "#fff", fontWeight: 500 }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div style={{
              background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "24px", padding: "56px 40px", textAlign: "center",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: "1.8rem", marginBottom: "12px" }}>We'll Be In Touch!</h3>
              <p style={{ color: "rgba(255,255,255,0.55)" }}>Thanks {form.name}! Our team will contact you within one business day.</p>
            </div>
          ) : (
            <div style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px", padding: "clamp(28px, 5vw, 48px)",
              transform: inView ? "none" : "translateY(32px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.7s ease 0.15s",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                <input placeholder="Your Name *" value={form.name} onChange={e => handle("name", e.target.value)} style={inputStyle} onFocus={e => e.target.style.borderColor = "#D4AF37"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"} />
                <input placeholder="Email Address *" value={form.email} onChange={e => handle("email", e.target.value)} style={inputStyle} onFocus={e => e.target.style.borderColor = "#D4AF37"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                <input placeholder="Mobile Number" value={form.phone} onChange={e => handle("phone", e.target.value)} style={inputStyle} onFocus={e => e.target.style.borderColor = "#D4AF37"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"} />
                <select value={form.service} onChange={e => handle("service", e.target.value)} style={{ ...inputStyle, color: form.service ? "#fff" : "rgba(255,255,255,0.4)" }}>
                  <option value="" disabled>Select Service</option>
                  {SERVICES.map(s => <option key={s.title} value={s.title} style={{ background: "#0B1A3E" }}>{s.title}</option>)}
                </select>
              </div>
              <textarea placeholder="Your message or query..." rows={4} value={form.message} onChange={e => handle("message", e.target.value)} style={{ ...inputStyle, resize: "vertical", marginBottom: "20px", display: "block" }} onFocus={e => e.target.style.borderColor = "#D4AF37"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"} />
              <button onClick={submit} style={{
                width: "100%", background: "linear-gradient(135deg, #D4AF37, #F5D060)",
                color: "#060E23", padding: "16px", borderRadius: "12px", border: "none",
                fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 6px 24px rgba(212,175,55,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 10px 32px rgba(212,175,55,0.45)"; }}
                onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 6px 24px rgba(212,175,55,0.3)"; }}
              >Send Message →</button>
            </div>
          )}
        </div>
      </div>
      <style>{`@media(max-width:768px){ .contact-grid{ grid-template-columns:1fr !important; gap:48px !important; } }`}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: "#04091A",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "64px 5vw 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px", marginBottom: "56px",
        }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: 36, height: 36, borderRadius: "10px",
                background: "linear-gradient(135deg, #D4AF37, #F5D060)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 900, color: "#060E23",
              }}>T</div>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700, fontSize: "1.4rem", color: "#fff",
              }}>Tax<span style={{ color: "#D4AF37" }}>Safar</span></span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.8, fontSize: "0.9rem", maxWidth: 280 }}>
              India's trusted one-stop tax and compliance platform. Simplifying finance for 10,000+ businesses.
            </p>
          </div>
          {[
            { title: "Services", links: ["Return Filing", "GST Registration", "Virtual Accounting", "Consultancy"] },
            { title: "Company", links: ["About Us", "Blog", "FAQs", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Payment Policy", "Help Center"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ color: "#fff", fontWeight: 600, marginBottom: "20px", fontSize: "0.95rem" }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map(l => (
                  <a key={l} href="#" style={{
                    color: "rgba(255,255,255,0.4)", textDecoration: "none",
                    fontSize: "0.88rem", transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.target.style.color = "#D4AF37"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
                  >{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "28px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px",
        }}>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>© 2026 TaxSafar. All rights reserved.</div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>Made with ♥ for Indian businesses</div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .footer-grid{ grid-template-columns:1fr 1fr !important; } }`}</style>
    </footer>
  );
}

export default function TaxSafar() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#060E23", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}