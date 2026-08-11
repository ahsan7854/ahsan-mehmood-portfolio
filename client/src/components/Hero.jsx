import React, { useState, useEffect } from 'react';
import { ShieldCheck, Code2, Cpu, ArrowRight, Download, Terminal, CheckCircle2 } from 'lucide-react';

export default function Hero({ profile }) {
  const roles = [
    'Senior QA Automation Engineer',
    'Full Stack Developer',
    'Appium & Selenium Architect',
    'API & Rest Assured Specialist'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => fullText.substring(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="about" className="section" style={{ paddingTop: '9rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Hero Copy */}
          <div>
            <div className="section-badge animate-float">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
              Available for Contracts & Roles
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Hi, I'm <span className="gradient-text">{profile?.name || 'Ahsan Mehmood'}</span>
              <br />
              <span style={{ fontSize: '0.65em', fontWeight: 600, color: 'var(--text-muted)' }}>
                Specialized{' '}
              </span>
              <span
                style={{
                  color: 'var(--accent-cyan)',
                  borderBottom: '2px solid var(--accent-cyan)',
                  paddingBottom: '2px',
                  display: 'inline-block',
                  minWidth: '220px',
                }}
              >
                {displayText}
                <span style={{ animation: 'blink 1s infinite' }}>|</span>
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                marginBottom: '2.25rem',
                maxWidth: '580px',
                lineHeight: 1.7,
              }}
            >
              {profile?.bio ||
                'Passionate Software Engineer building resilient web applications, automated QA ecosystems, and intelligent AI models. I engineer high-quality products from architecture to deployment.'}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Quick Core Services Checklist */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={18} color="var(--accent-emerald)" />
                <span>QA Automation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Code2 size={18} color="var(--accent-cyan)" />
                <span>Full Stack Dev</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Cpu size={18} color="var(--accent-violet)" />
                <span>AI Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Terminal / Interactive Card */}
          <div className="glass-card" style={{ padding: '2rem', position: 'relative' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'monospace' }}>engineer_profile.json</span>
            </div>

            <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.8 }}>
              <div>
                <span style={{ color: 'var(--accent-violet)' }}>const</span> <span style={{ color: 'var(--accent-cyan)' }}>engineer</span> = &#123;
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                name: <span style={{ color: 'var(--accent-emerald)' }}>"{profile?.name || 'Ahsan Mehmood'}"</span>,
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                role: <span style={{ color: 'var(--accent-emerald)' }}>"Senior QA Automation Engineer"</span>,
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                education: <span style={{ color: 'var(--accent-emerald)' }}>"BS Software Engineering (UCP)"</span>,
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                coreSkills: [
              </div>
              <div style={{ paddingLeft: '3rem', color: 'var(--accent-cyan)' }}>"Mobile Automation (Appium - iOS/Android)",</div>
              <div style={{ paddingLeft: '3rem', color: 'var(--accent-cyan)' }}>"Web Automation (Selenium, Playwright, Cypress)",</div>
              <div style={{ paddingLeft: '3rem', color: 'var(--accent-cyan)' }}>"API Automation (Rest Assured, Postman)",</div>
              <div style={{ paddingLeft: '3rem', color: 'var(--accent-cyan)' }}>"Full Stack Web (React, Next.js, Node.js)"</div>
              <div style={{ paddingLeft: '1.5rem' }}>],</div>
              <div style={{ paddingLeft: '1.5rem' }}>
                techStack: &#123;
              </div>
              <div style={{ paddingLeft: '3rem', color: 'var(--text-muted)' }}>primaryLang: <span style={{ color: '#fbbf24' }}>"Java, JavaScript, Python"</span>,</div>
              <div style={{ paddingLeft: '3rem', color: 'var(--text-muted)' }}>frameworks: <span style={{ color: '#fbbf24' }}>"TestNG, Cucumber BDD, POM"</span>,</div>
              <div style={{ paddingLeft: '3rem', color: 'var(--text-muted)' }}>fullstack: <span style={{ color: '#fbbf24' }}>"React, Next.js, Node.js, Express"</span>,</div>
              <div style={{ paddingLeft: '3rem', color: 'var(--text-muted)' }}>databases: <span style={{ color: '#fbbf24' }}>"MySQL, PostgreSQL"</span>,</div>
              <div style={{ paddingLeft: '3rem', color: 'var(--text-muted)' }}>ci_cd: <span style={{ color: '#fbbf24' }}>"GitHub Actions, Jenkins, Git"</span></div>
              <div style={{ paddingLeft: '1.5rem' }}>&#125;</div>
              <div>&#125;;</div>
            </div>

            {/* Quick Stats Footer */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '1.75rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-color)',
                textAlign: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>5+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Years Exp.</div>
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>50+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Projects Delivered</div>
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-violet)' }}>99.8%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Test Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
