import { siteConfig } from '@/lib/config/siteConfig';
import './LiftBotHomeSection.css';

function ItemIcon({ type }) {
  const icons = {
    chat: (
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    ),
    filter: (
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </>
    ),
    handoff: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M20 8v6M23 11h-6" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type] || icons.chat}
    </svg>
  );
}

export default function LiftBotHomeSection() {
  const { homeSection } = siteConfig.liftbot;

  return (
    <section id="liftbot-intro" className="lhs-section">
      <div className="lhs-inner">
        <span className="lhs-badge">{homeSection.badge}</span>
        <h2 className="lhs-heading">{homeSection.heading}</h2>

        <div className="lhs-intro">
          {homeSection.intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <h3 className="lhs-subheading">{homeSection.subheading}</h3>

        <div className="lhs-grid">
          {homeSection.items.map((item) => (
            <div className="lhs-card" key={item.title}>
              <span className="lhs-card__icon">
                <ItemIcon type={item.icon} />
              </span>
              <strong className="lhs-card__title">{item.title}</strong>
              <p className="lhs-card__text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="lhs-cta-wrap">
          <a href={homeSection.cta.href} className="lhs-cta">
            {homeSection.cta.label}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <p className="lhs-bottom-tag">{homeSection.bottomTag}</p>
      </div>
    </section>
  );
}