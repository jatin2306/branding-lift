import { siteConfig } from '@/lib/config/siteConfig';
import Header from '@/shared/layout/Header/Header';
import Footer from '@/shared/layout/Footer/Footer';
import FloatingWhatsApp from '@/shared/ui/FloatingWhatsApp/FloatingWhatsApp';
import LiftBotQueryForm from '../LiftBotQueryForm/LiftBotQueryForm';
import './LiftBotPage.css';

function ProblemIcon({ type }) {
  const icons = {
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
    moon: <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />,
    people: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
    funnel: <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />,
    sad: <><circle cx="12" cy="12" r="9" /><path d="M8 15s1.5-2 4-2 4 2 4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type] || icons.clock}
    </svg>
  );
}

function FeatureIcon({ type }) {
  const icons = {
    chat: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
    filter: <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
    handoff: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M20 8v6M23 11h-6" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 3a15 15 0 010 18 15 15 0 010-18z" /></>,
    shield: <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3zM9 12l2 2 4-4" />,
    brain: <><path d="M9 3a3 3 0 00-3 3v1a3 3 0 000 6v1a3 3 0 003 3M15 3a3 3 0 013 3v1a3 3 0 010 6v1a3 3 0 01-3 3" /></>,
    plug: <><path d="M9 2v4M15 2v4M6 8h12l-1 6a5 5 0 01-10 0z" /><path d="M12 18v4" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type] || icons.chat}
    </svg>
  );
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function LiftBotPage() {
  const { liftbot } = siteConfig;
  const { hero, problem, features, howItWorks, growth, cta, queryForm } = liftbot;

  return (
    <div className="app">
      <Header />
      <main className="liftbot-page">

        {/* ---------- HERO ---------- */}
        <section className="lb-hero" id="liftbot-hero">
          <div className="lb-hero__inner">
            <span className="lb-badge lb-badge--dark">{hero.badge}</span>
            <h1 className="lb-hero__title">
              {hero.headingPlain}<span className="lb-hero__title-highlight">{hero.headingHighlight}</span>
            </h1>
            <p className="lb-hero__subtitle">{hero.subtitle}</p>

            <div className="lb-hero__cta-row">
              <a href={hero.ctaPrimary.href} className="lb-btn lb-btn--primary">
                {hero.ctaPrimary.label}<ArrowIcon />
              </a>
              <a href={hero.ctaSecondary.href} className="lb-btn lb-btn--ghost">
                {hero.ctaSecondary.label}
              </a>
            </div>

            <div className="lb-hero__stats">
              {hero.stats.map((s) => (
                <div className="lb-hero__stat" key={s.label}>
                  <span className="lb-hero__stat-value">{s.value}</span>
                  <span className="lb-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- PROBLEM ---------- */}
        <section className="lb-section" id="liftbot-problem">
          <span className="lb-badge">{problem.badge}</span>
          <h2 className="lb-section__heading">{problem.heading}</h2>
          <p className="lb-section__subtitle">{problem.subtitle}</p>

          <div className="lb-problem__grid">
            {problem.points.map((p) => (
              <div className="lb-problem__card" key={p.title}>
                <span className="lb-problem__icon"><ProblemIcon type={p.icon} /></span>
                <strong>{p.title}</strong>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <div className="lb-problem__stats">
            {problem.stats.map((s) => (
              <div className="lb-problem__stat" key={s.value}>
                <span className="lb-problem__stat-value">{s.value}</span>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- FEATURES ---------- */}
        <section className="lb-section lb-section--dark" id="liftbot-features">
          <span className="lb-badge lb-badge--dark">{features.badge}</span>
          <h2 className="lb-section__heading lb-section__heading--light">{features.heading}</h2>
          <p className="lb-section__subtitle lb-section__subtitle--light">{features.subtitle}</p>

          <div className="lb-features__grid">
            {features.items.map((f) => (
              <div className="lb-feature__card" key={f.title}>
                <span className="lb-feature__icon"><FeatureIcon type={f.icon} /></span>
                <strong>{f.title}</strong>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- HOW IT WORKS ---------- */}
        <section className="lb-section" id="liftbot-how-it-works">
          <span className="lb-badge">{howItWorks.badge}</span>
          <h2 className="lb-section__heading">{howItWorks.heading}</h2>
          <p className="lb-section__subtitle">{howItWorks.subtitle}</p>

          <div className="lb-steps">
            {howItWorks.steps.map((s) => (
              <div className="lb-step" key={s.step}>
                <span className="lb-step__number">{s.step}</span>
                <strong>{s.title}</strong>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- GROWTH STATS ---------- */}
        <section className="lb-section lb-section--dark" id="liftbot-growth">
          <span className="lb-badge lb-badge--dark">{growth.badge}</span>
          <h2 className="lb-section__heading lb-section__heading--light">{growth.heading}</h2>
          <p className="lb-section__subtitle lb-section__subtitle--light">{growth.subtitle}</p>

          <div className="lb-growth__grid">
            {growth.stats.map((s) => (
              <div className="lb-growth__card" key={s.label}>
                <span className="lb-growth__value">{s.value}</span>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- CTA + QUERY FORM ---------- */}
        <section className="lb-section" id="liftbot-query">
          <div className="lb-cta">
            <h2>{cta.heading}</h2>
            <p>{cta.subtitle}</p>
          </div>

          <div className="lb-query">
            <h3>{queryForm.heading}</h3>
            <p>{queryForm.subtitle}</p>
            <LiftBotQueryForm />
          </div>
        </section>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}