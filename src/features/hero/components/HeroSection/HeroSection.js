'use client';

import { siteConfig } from '@/lib/config/siteConfig';
import { ServiceIcon } from '@/shared/ui/Icons/Icons';
import './HeroSection.css';

function LineChart({ points }) {
  const w = 220, h = 70;
  const max = Math.max(...points), min = Math.min(...points);
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => [i * step, h - ((p - min) / (max - min || 1)) * h]);
  const linePath = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;
  return (
    <svg className="dash-chart" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="dashChartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7b3fe4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7b3fe4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#dashChartFill)" stroke="none" />
      <path d={linePath} fill="none" stroke="#7b3fe4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroSection() {
  const { hero } = siteConfig;
  const { laptop, phone } = hero.dashboard;

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <span className="hero-eyebrow">{hero.eyebrow}</span>

          <h1 className="hero-title">
            {hero.titleLine1}{' '}
            <span className="hero-title-highlight">{hero.titleHighlight}</span>
            <br />
            {hero.titleLine2}
          </h1>

          <p className="hero-subtitle">{hero.subtitle}</p>

          {/* CTA BUTTON */}
          <div className="hero-cta-container">
            <a href="#services" className="hero-cta-btn">
              <span className="hero-cta-shine" aria-hidden />
              <span className="hero-cta-text">Explore Solutions</span>
              <svg className="hero-cta-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* FEATURES — icon box above label, 3-column grid */}
          <div className="hero-features">
            {hero.features.map((f) => (
              <div className="hero-feature" key={f.label}>
                <span className="hero-feature-icon-wrap">
                  <ServiceIcon type={f.icon} className="hero-feature-icon" />
                </span>
                <span className="hero-feature-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Stage */}
        <div className="hero-right">
          <div className="hero-stage">

            {/* Floating cluster badges section */}
            <div className="cluster" aria-hidden>
              <svg className="cluster-lines" viewBox="0 0 600 220">
                <line x1="300" y1="130" x2="150" y2="45" />
                <line x1="300" y1="130" x2="450" y2="45" />
                <line x1="300" y1="130" x2="150" y2="185" />
                <line x1="300" y1="130" x2="450" y2="185" />
                <circle cx="215" cy="80" r="2.5" />
                <circle cx="385" cy="80" r="2.5" />
                <circle cx="215" cy="165" r="2.5" />
                <circle cx="385" cy="165" r="2.5" />
              </svg>

              <div className="cluster-hub">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M15 7h6v6" />
                </svg>
              </div>

              <div className="cluster-badge cluster-badge--tl">
                <span className="cluster-badge-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6M10 22h4M12 2a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 2z" />
                  </svg>
                </span>
                <span>Smart Strategy</span>
              </div>

              <div className="cluster-badge cluster-badge--tr">
                <span className="cluster-badge-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>
                <span>Powerful Technology</span>
              </div>

              <div className="cluster-badge cluster-badge--bl">
                <span className="cluster-badge-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 118 2.83" />
                    <path d="M22 12A10 10 0 0012 2v10z" />
                  </svg>
                </span>
                <span>Data-Driven Decisions</span>
              </div>

              <div className="cluster-badge cluster-badge--br">
                <span className="cluster-badge-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                </span>
                <span>Measurable Results</span>
              </div>
            </div>

            {/* Laptop Section */}
            <div className="laptop-wrapper">
              <div className="laptop">
                <div className="laptop__screen">
                  <span className="laptop__cam" aria-hidden />
                  <span className="dash-kicker">{laptop.kicker}</span>
                  <h3 className="dash-title">
                    {laptop.titlePlain}<em>{laptop.titleHighlight1}</em>{laptop.titleMid}<em>{laptop.titleHighlight2}</em>
                  </h3>
                  <p className="dash-note">{laptop.note1}<br />{laptop.note2}</p>

                  <div className="dash-chart-wrap">
                    <LineChart points={laptop.chartPoints} />
                    <div className="dash-growth-badge">
                      <span className="dash-growth-badge__value">{laptop.growthBadge.value}</span>
                      <span className="dash-growth-badge__label">{laptop.growthBadge.title}<br />{laptop.growthBadge.label}</span>
                    </div>
                  </div>

                  <div className="dash-stats-row">
                    {laptop.stats.map((s) => (
                      <div className="dash-stat" key={s.label}>
                        <span className="dash-stat__value">{s.value}</span>
                        <span className="dash-stat__delta">{s.delta}</span>
                        <span className="dash-stat__label">{s.label}</span>
                      </div>
                    ))}
                    <div className="dash-stat dash-stat--donut">
                      <svg viewBox="0 0 36 36" className="dash-donut">
                        <path className="dash-donut__bg" d="M18 2a16 16 0 110 32 16 16 0 010-32" />
                        <path className="dash-donut__fg" strokeDasharray="98, 100" d="M18 2a16 16 0 110 32 16 16 0 010-32" />
                      </svg>
                      <span className="dash-donut__value">{laptop.donut.value}</span>
                      <span className="dash-stat__label">{laptop.donut.label}</span>
                    </div>
                  </div>
                </div>

                <div className="laptop__hinge" aria-hidden />

                <div className="laptop__base" aria-hidden>
                  <img
                    src="/keyboard-base.png"
                    alt="Laptop Keyboard Base"
                    className="laptop__base-img"
                  />
                </div>
              </div>
            </div>

            {/* iPhone Mockup Frame */}
            <div className="phone-wrapper">
              <div className="phone">
                <div className="phone__notch">
                  <span className="phone__cam" aria-hidden />
                </div>
                <div className="phone__screen">
                  <h4 className="dash-phone__title">{phone.title}</h4>
                  <p className="dash-phone__subtitle">{phone.subtitle}</p>

                  <div className="dash-phone__donut-wrap">
                    <svg viewBox="0 0 36 36" className="dash-phone__donut">
                      <path className="dash-phone__donut-bg" d="M18 2a16 16 0 110 32 16 16 0 010-32" />
                      <path className="dash-phone__donut-fg" strokeDasharray="98, 100" d="M18 2a16 16 0 110 32 16 16 0 010-32" />
                    </svg>
                    <div className="dash-phone__donut-text">
                      <span className="val">98%</span>
                      <span className="lbl">Growth Rate</span>
                    </div>
                  </div>

                  <div className="dash-phone__avatars">
                    {Array.from({ length: phone.avatarsCount }).map((_, i) => (
                      <span key={i} className="dash-phone__avatar" style={{ zIndex: phone.avatarsCount - i }} />
                    ))}
                    <span className="dash-phone__clients">{phone.clientsLabel}</span>
                  </div>
                  <span className="phone__home-bar" aria-hidden />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;