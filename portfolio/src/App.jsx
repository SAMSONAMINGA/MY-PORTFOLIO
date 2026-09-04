import { useState, useEffect } from 'react'
import './App.css'
import certCommonwealth from "./assets/certificates/cert1_commonwealth.png";
import certWalmart from "./assets/certificates/cert2_walmart.png";
import certAngular from "./assets/certificates/cert3_angular.png";
import certRollsRoyce from "./assets/certificates/cert4_rollsroyce.png";
import certProblemSolving from "./assets/certificates/cert5_problemsolving.png";
import certEndpointSecurity from "./assets/certificates/cert6_endpointsecurity.png";
import certsoftwareengineer from "./assets/certificates/cert7_softwareengineer.png";
import certsoftwareengineerintern from "./assets/certificates/cert7_softwareengineerintern.png";

function SectionSwordUnderline() {
  return (
    <svg
      className="sword-underline"
      viewBox="0 0 600 170"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a3a39a" />
          <stop offset="15%" stopColor="#858380" />
          <stop offset="35%" stopColor="#918f8f" />
          <stop offset="62%" stopColor="#a09b9b" />
          <stop offset="85%" stopColor="#666363" />
          <stop offset="100%" stopColor="#a6a4a3" />
        </linearGradient>
        <linearGradient id="swordStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8e8c8c" />
          <stop offset="20%" stopColor="#7d7b78" />
          <stop offset="50%" stopColor="#bbb3b3" />
          <stop offset="80%" stopColor="#6c6967" />
          <stop offset="100%" stopColor="#848180" />
        </linearGradient>
      </defs>

      <g className="ink-stroke" strokeWidth="1.4" opacity="0.85">
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i / 40) * Math.PI * 2;
          const rInner = 26;
          const rOuter = i % 2 === 0 ? 68 : 50;
          const x1 = 462 + Math.cos(angle) * rInner;
          const y1 = 85 + Math.sin(angle) * rInner;
          const x2 = 462 + Math.cos(angle) * rOuter;
          const y2 = 85 + Math.sin(angle) * rOuter;

          return (
            <line
              key={i}
              x1={x1.toFixed(1)}
              y1={y1.toFixed(1)}
              x2={x2.toFixed(1)}
              y2={y2.toFixed(1)}
            />
          )
        })}
      </g>

      <g className="ink">
        <path d="M 20,85 L 65,72 L 380,78 L 380,92 L 65,98 Z" />
        <path d="M 20,85 L 65,72 L 65,98 Z" opacity="0.95" />
      </g>

      <path className="ink-stroke" strokeWidth="1" opacity="0.6" d="M 70,85 L 375,85" />

      <g className="ink">
        <path d="M 388,58 C 396,58 400,64 400,72 L 400,98 C 400,106 396,112 388,112 C 394,100 394,70 388,58 Z" />
        <path d="M 382,60 L 420,74 L 420,96 L 382,110 C 386,98 386,72 382,60 Z" />
      </g>

      <rect className="ink" x="404" y="76" width="34" height="18" rx="3" />

      <g className="ink-stroke" strokeWidth="1" opacity="0.5">
        <line x1="410" y1="76" x2="410" y2="94" />
        <line x1="417" y1="76" x2="417" y2="94" />
        <line x1="424" y1="76" x2="424" y2="94" />
        <line x1="431" y1="76" x2="431" y2="94" />
      </g>

      <circle className="ink" cx="462" cy="85" r="16" />
      <circle cx="462" cy="85" r="9" fill="#faf7f2" />
      <circle className="ink-stroke" cx="462" cy="85" r="9" strokeWidth="1.2" />
      <path className="ink" d="M 478,79 L 492,83 L 492,87 L 478,91 Z" />
    </svg>
  )
}

function SocialIcon({ type }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  if (type === 'github') {
    return (
      <svg {...commonProps}>
        <path d="M9 18c-4 1.2-4-2-5-2m10 4v-3.2a3.1 3.1 0 0 0-.9-2.4c3-.3 6.1-1.5 6.1-6.9A5.3 5.3 0 0 0 18 4.8 5.2 5.2 0 0 0 17.9 1s-1.4.5-3.8 1.7a13.7 13.7 0 0 0-7.2 0C6.5 1.5 5.1 1 5.1 1A5.2 5.2 0 0 0 5 4.8 5.3 5.3 0 0 0 3.8 9c0 5.4 3.1 6.6 6.1 6.9A3.1 3.1 0 0 0 9 18.1V21" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg {...commonProps}>
        <path d="M6.5 8.5A1.5 1.5 0 1 1 6.5 5.5a1.5 1.5 0 0 1 0 3Zm-1.8 1.7h3.6v9.8H4.7zm6.1 0h3.4v1.4h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v5.7h-3.6v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.3H10.8z" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z" />
      <path d="M4.8 7.2 12 12.9l7.2-5.7" />
    </svg>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedMessage = message.trim()
    const subject = encodeURIComponent('Portfolio enquiry')
    const body = encodeURIComponent(
      trimmedMessage || 'Hello Samson, I would love to connect and discuss an opportunity.'
    )

    window.location.href = `mailto:samsonaminga80@gmail.com?subject=${subject}&body=${body}`
  }

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'this-is-me', label: 'THIS IS ME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'proficiency', label: 'PROFICIENCY' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  const projectCards = [
    {
      title: 'PERSONAL-DASHBOARD-ORGANIZER',
      description: 'Personal productivity dashboard for tasks, expenses, and notes (React + Express + SQLite)',
      repo: 'https://github.com/SAMSONAMINGA/Personal-Dashboard-Organizer.git',
    },
    {
      title: 'Webpack-docs-Backend-Pipeline',
      description: 'Based on Google Summer of code webpack documentation project: an automated, human-in-the-loop Webpack documentation pipeline (backend) and its Medieval Dark Knight–themed SvelteKit reading experience (frontend).',
      repo: 'https://github.com/SAMSONAMINGA/Webpack-docs-Backend-Pipeline.git',
    },
    {
      title: 'JPMorgan-Chase-Project-MIDAS-CORE',
      description: 'JPMorgan Chase & Co. Advanced Software Engineering job simulation,. Midas Core is a Spring Boot service that models a tiny banking backend. It ingests transactions from a Kafka topic, applies them to user balances stored in a database, calculates loyalty incentives via a companion microservice, and exposes an HTTP API for querying a user\'s current balance.',
      repo: 'https://github.com/SAMSONAMINGA/Secure-Event-Stream.git',
    },
    {
      title: 'CircuitVerse-LTI-Integration',
      description: 'Built to demonstrate a secure, protocol-correct LTI 1.3 tool combined with deterministic gate-level circuit auto-grading and classroom management for CircuitVerse with team management, auto-grading, and LTI 1.3 integration.',
      repo: 'https://github.com/SAMSONAMINGA/CircuitVerse-LTI-Integration.git',
    },
  ]

  const socialLinks = [
    { label: 'Email', href: 'mailto:samsonaminga80@gmail.com', type: 'email' },
    { label: 'GitHub', href: 'https://github.com/SAMSONAMINGA', type: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samson-aminga-84943b295', type: 'linkedin' },
  ]

  return (
    <div className="app">
      {/* Background paint effect layers */}
      <div className="bg-paint"></div>
      <div className="bg-paint-2"></div>
      <div className="bg-paint-3"></div>
      <div className="bg-paint"></div>
      <div className="bg-paint-2"></div>
      <div className="bg-paint-3"></div>
      {/* Large background robot - visible but non-obstructing */}
      <div className="bg-robot" aria-hidden="true">
        <img src="/robot.png" alt="" />
      </div>

      {/* Navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" width="36" height="36">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#f0f0f0" strokeWidth="2.5" />
              <ellipse cx="20" cy="14" rx="10" ry="4" fill="none" stroke="#f0f0f0" strokeWidth="1.5" />
              <ellipse cx="20" cy="20" rx="12" ry="5" fill="none" stroke="#f0f0f0" strokeWidth="1.5" />
              <ellipse cx="20" cy="26" rx="8" ry="3.5" fill="none" stroke="#f0f0f0" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-black">BLACK</span>
            <span className="logo-vulcan">VULCAN</span>
          </div>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(item.id)
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {item.label}
            </button>
          ))}
          <button className="nav-btn empty" aria-label="Menu"></button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">HELLO, I'M</p>
            <h1 className="name">SAMSON AMINGA</h1>
            <h2 className="title">A FULLSTACK SOFTWARE ENGINEER</h2>

            <div className="statement-block">
              <p className="tagline headline">BUILDING BACKEND SYSTEMS AND</p>
              <p className="tagline headline">SCALABLE SOFTWARE SOLUTIONS</p>
              <p className="tagline headline">FOR THE WEB, CLOUD AND ENTERPRISE.</p>
            </div>

            <div className="statement-block secondary">
              <p className="tagline">I'M NOT JUST ABOUT SHIPPING CODE.</p>
              <p className="tagline">I BUILD SOFTWARE THAT'S SECURE, SOLID,</p>
              <p className="tagline">GENUINELY HELPFUL AND YEAH,</p>
              <p className="tagline">OCCASIONALLY FUN TO USE.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-container">
              <div className="avatar-ring">
                <div className="avatar-ring-inner">
                  <img
                    src="/avatar.png"
                    alt="Samson Aminga"
                    className="avatar-img"
                  />
                </div>
              </div>
              {/* Floating particles around avatar */}
              <span className="particle p1"></span>
              <span className="particle p2"></span>
              <span className="particle p3"></span>
              <span className="particle p4"></span>
            </div>

            <div className="robot">
            </div>
          </div>
        </div>
      </section>

      {/* This Is Me Section */}
      <section id="this-is-me" className="section">
        <h2 className="section-title">THIS IS ME</h2>
        <SectionSwordUnderline />
        <div className="section-content">
          <p>I'M A SOFTWARE ENGINEER WHO BRINGS THE SAME FOCUS TO A PRODUCTION DEPLOYMENT AS I DO TO A 2 AM HOME-LAB EXPERIMENT. </p>
          <p>OUTSIDE CLIENT WORK AND COURSEWORK, <br />I'M CONSTANTLY LEVELING UP TINKERING WITH LABEX AND KUBERNETES CLUSTERS, PUSHING THROUGH LEETCODE AND HACKERRANK CHALLENGES, STACKING UP BADGES, DELIBERATELY BREAKING THINGS IN SANDBOXED ENVIRONMENTS JUST TO FIX THEM, AND GETTING MY HANDS DIRTY WITH SECURITY AND INFRASTRUCTURE.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">MY WORK</h2>
        <SectionSwordUnderline />
        <div className="projects-grid">
          {projectCards.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <a
                  className="project-icon-link"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <SocialIcon type="github" />
                </a>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proficiency Section */}
<section id="proficiency" className="section">
  <h2 className="section-title">PROFICIENCY</h2>
  <SectionSwordUnderline />

  <div className="skills-grid">
    {/* ===== BACKEND ===== */}
    <div className="skill-group">
      <h3 className="skill-category">Backend</h3>
      <div className="skills">
        <div className="skill">
          <span className="skill-name">Java</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Python</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '88%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">C++</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '75%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Spring Boot</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Kafka</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '80%' }}></div></div>
        </div>
      </div>
    </div>
    {/* ===== END BACKEND ===== */}

    {/* ===== FRONTEND ===== */}
    <div className="skill-group">
      <h3 className="skill-category">Frontend</h3>
      <div className="skills">
        <div className="skill">
          <span className="skill-name">Angular</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '80%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">TypeScript</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">React</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">JavaScript</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '92%' }}></div></div>
        </div>
      </div>
    </div>
    {/* ===== END FRONTEND ===== */}

    {/* ===== SKILLS ===== */}
    <div className="skill-group">
      <h3 className="skill-category">Skills</h3>
      <div className="skills">
        <div className="skill">
          <span className="skill-name">Web Development</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Backend Systems Engineering</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">DevOps</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Problem Solving</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '95%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Creative Thinking</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Solutions Architecture</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '88%' }}></div></div>
        </div>
      </div>
    </div>
    {/* ===== END SKILLS ===== */}

    {/* ===== TOOLS ===== */}
    <div className="skill-group">
      <h3 className="skill-category">Tools</h3>
      <div className="skills">
        <div className="skill">
          <span className="skill-name">Docker</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Kubernetes</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '80%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">AWS</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Jira</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Selenium</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '75%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Postman</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '88%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Active Directory</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '78%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Jenkins</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '80%' }}></div></div>
        </div>
      </div>
    </div>
    {/* ===== END TOOLS ===== */}

    {/* ===== DATABASES ===== */}
    <div className="skill-group">
      <h3 className="skill-category">Databases</h3>
      <div className="skills">
        <div className="skill">
          <span className="skill-name">PostgreSQL</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '88%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">MySQL</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">MongoDB</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '82%' }}></div></div>
        </div>
      </div>
    </div>
    {/* ===== END DATABASES ===== */}

    {/* ===== OPERATING SYSTEMS ===== */}
    <div className="skill-group">
      <h3 className="skill-category">Operating Systems</h3>
      <div className="skills">
        <div className="skill">
          <span className="skill-name">Linux (DevOps Security)</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Ubuntu</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '88%' }}></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Windows</span>
          <div className="skill-bar"><div className="skill-fill" style={{ width: '80%' }}></div></div>
        </div>
      </div>
    </div>
    {/* ===== END OPERATING SYSTEMS ===== */}
  </div>

</section>
 {/* Certifications Section */}
<section id="certifications" className="section">
  <h2 className="section-title">CERTIFICATIONS</h2>
  <span className="section-title-underline" aria-hidden="true"></span>
  <div className="certs-strip">
    <div className="cert-card">
      <div className="cert-card-image-wrap">
        <img src={certEndpointSecurity} alt="Endpoint Security Certificate" />
      </div>
      <div className="cert-card-caption">
        <h3 className="cert-card-title">Endpoint Security Certificate</h3>
        <p className="cert-card-issuer">CISCO ACADEMY</p>
      </div>
    </div>
    <div className="cert-card">
      <div className="cert-card-image-wrap">
        <img src={certWalmart} alt="Advanced Software Engineering Certificate" />
      </div>
      <div className="cert-card-caption">
        <h3 className="cert-card-title">Advanced Software Engineering Job Simulation</h3>
        <p className="cert-card-issuer">Wall Mart Global Tech</p>
      </div>
    </div>
    <div className="cert-card">
      <div className="cert-card-image-wrap">
        <img src={certAngular} alt="Angular Intermediate Certificate" />
      </div>
      <div className="cert-card-caption">
        <h3 className="cert-card-title">Angular Intermediate Certificate</h3>
        <p className="cert-card-issuer">HACKER RANK</p>
      </div>
    </div>
    <div className="cert-card">
      <div className="cert-card-image-wrap">
        <img src={certRollsRoyce} alt="Rolls-Royce Certificate" />
      </div>
      <div className="cert-card-caption">
        <h3 className="cert-card-title">Rolls-Royce: Software Engineer</h3>
        <p className="cert-card-issuer">ROLLS ROYCE BY SPRINGPOD</p>
      </div>
    </div>
    <div className="cert-card">
      <div className="cert-card-image-wrap">
        <img src={certProblemSolving} alt="Problem Solving Certificate" />
      </div>
      <div className="cert-card-caption">
        <h3 className="cert-card-title">Problem Solving Intermediate Certificate</h3>
        <p className="cert-card-issuer">HACKER RANK</p>
      </div>
    </div>
    <div className="cert-card">
      <div className="cert-card-image-wrap">
        <img src={certCommonwealth} alt="Tech Explorer Certificate" />
      </div>
      <div className="cert-card-caption">
        <h3 className="cert-card-title">Tech Explorer Job Simulation</h3>
        <p className="cert-card-issuer">COMMON WEALTH BY FORAGE</p>
      </div>
    </div>
    <div className="cert-card">
      <div className="cert-card-image-wrap">
        <img src={certsoftwareengineer} alt="software engineer" />
      </div>
      <div className="cert-card-caption">
        <h3 className="cert-card-title">SOFTWARE ENGINEER</h3>
        <p className="cert-card-issuer">HACKER RANK</p>
      </div>
    </div>
    <div className="cert-card">
      <div className="cert-card-image-wrap">
        <img src={certsoftwareengineerintern} alt="software engineer intern" />
      </div>
      <div className="cert-card-caption">
        <h3 className="cert-card-title">SOFTWARE ENGINEER INTERN</h3>
        <p className="cert-card-issuer">HACKER RANK</p>
      </div>
    </div>
  </div>
</section>

  <section id="contact" className="section contact-section">
    <h2 className="section-title">CONTACT ME</h2>
    <div className="contact-panel">
      <div className="contact-details">
        <a href="tel:+254714475717" className="contact-phone">+254 714475717</a>
        <p className="contact-email">samsonaminga80@gmail.com</p>
      </div>

      <form className="contact-form-wrap" onSubmit={handleSubmit}>
        <label htmlFor="message" className="contact-label">Message</label>
        <textarea
          id="message"
          className="message-field"
          placeholder="Write your message here..."
          rows="7"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit" className="send-button">
          SEND MESSAGE
        </button>
      </form>

      <div className="contact-links">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="social-link"
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={social.label}
            title={social.label}
          >
            <SocialIcon type={social.type} />
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Black Vulcan · Samson Aminga</p>
      </footer>
    </div>
  )
}

export default App
