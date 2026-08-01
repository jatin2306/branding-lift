import { siteConfig } from '@/lib/config/siteConfig';
import Button from '@/shared/ui/Button/Button';
import './AboutBlock.css';

function StatIcon({ type }) {
  const icons = {
    clients: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
    projects: <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
    countries: <path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20zM2 12h20M4.5 6.5h15M4.5 17.5h15" />,
  };
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type] || icons.clients}
    </svg>
  );
}

function TimelineIcon({ type }) {
  const icons = {
    flag: <path d="M3 3h18v4H3zM5 7v14h14V7" />,
    team: <><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a5 5 0 015-5h4a5 5 0 015 5v2" /></>,
    rocket: <><path d="M4 15l6-6 4 4 6-6" /><path d="M14 3h6v6" /></>,
    star: <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />,
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type] || icons.flag}
    </svg>
  );
}

function DeptIcon({ type }) {
  const icons = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    design: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
    dev: <path d="M9 8L5 12L9 16M15 8L19 12L15 16" />,
    marketing: <path d="M4 10V14H7L13 18V6L7 10H4ZM16 9C17 10 17 14 16 15" />,
    strategy: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></>,
    support: <path d="M3 12a9 9 0 0118 0M4 14v2a3 3 0 003 3M20 14v2a3 3 0 01-3 3M3 12v3a2 2 0 002 2h1v-6H5a2 2 0 00-2 2zM21 12v3a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2z" />,
  };
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type] || icons.grid}
    </svg>
  );
}

function ValueIcon({ type }) {
  const icons = {
    bulb: <path d="M12 2a7 7 0 00-4 12.7c.6.5 1 1.3 1 2.1v1.2h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0012 2zM9 20h6M10 22h4" />,
    pencil: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
    shield: <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3zM9 12l2 2 4-4" />,
    growth: <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />,
  };
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type] || icons.bulb}
    </svg>
  );
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function AboutBlock() {
  const about = siteConfig.about || {};
  const { stats = [], collage = {}, mission = {}, story = {}, devices = {}, coreValues = [] } = about;

  return (
    <div className="about-block">
      {/* ---------- Hero row: intro + collage + mission ---------- */}
      <div className="about-hero-grid">

        <div className="about-intro">
          <span className="about-badge">{about.badge}</span>
          <h2 className="about-heading">
            {about.headingPlain}<span className="about-heading-highlight">{about.headingHighlight}</span>
          </h2>
          <p className="about-subtitle">{about.subtitle}</p>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <span className="about-stat-icon"><StatIcon type={s.icon} /></span>
                <div className="about-stat-text">
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cta-row">
            {about.ctaPrimary && (
              <Button href={about.ctaPrimary.href} variant="primary" className="about-cta-primary">
                {about.ctaPrimary.label}<ArrowIcon />
              </Button>
            )}
            {about.ctaSecondary && (
              <a href={about.ctaSecondary.href} className="about-cta-secondary">
                {about.ctaSecondary.label}<ArrowIcon />
              </a>
            )}
          </div>
        </div>

        <div className="about-collage">
          <span className="about-collage__dots" aria-hidden />
          <div className="about-collage__frame">
            {collage.image && <img src={collage.image} alt={collage.imageAlt || ''} className="about-collage__img" />}
            <span className="about-collage__play"><ArrowIcon /></span>
          </div>
          {collage.tags?.map((tag, i) => (
            <div className={`about-collage__tag about-collage__tag--${i}`} key={tag.title}>
              <img src={tag.avatar} alt="" className="about-collage__avatar" />
              <div>
                <strong>{tag.title}</strong>
                <span>{tag.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="about-mission">
          <div className="about-mission-text">
            <span className="about-badge">{mission.badge}</span>
            <h3 className="about-mission-heading">
              {mission.headingPlain}<span className="about-heading-highlight">{mission.headingHighlight}</span>
            </h3>
            <p className="about-mission-copy">{mission.text}</p>
            {mission.cta && (
              <Button href={mission.cta.href} variant="primary" className="about-mission-cta">
                {mission.cta.label}<ArrowIcon />
              </Button>
            )}
            {mission.trustedLabel && (
              <div className="about-trusted">
                <div className="about-trusted__avatars">
                  {mission.trustedAvatars?.map((src, i) => (
                    <img key={i} src={src} alt="" />
                  ))}
                  <span className="about-trusted__more">+</span>
                </div>
                <span className="about-trusted__label">{mission.trustedLabel}</span>
              </div>
            )}
          </div>

          <div className="about-mission-mockup" aria-hidden>
            <div className="am-card am-card--chat">
              <div className="am-card__header">
                <span>AI Chat Assistant</span>
                <span className="am-card__close">×</span>
              </div>
              <div className="am-card__body">How can I help you today?</div>
            </div>

            <div className="am-card am-card--analytics">
              <div className="am-card__header am-card__header--muted">
                <span>Analytics Overview</span><em>Last 7 days</em>
              </div>
              <div className="am-card__value">24.8K</div>
              <svg className="am-card__spark" viewBox="0 0 100 30" preserveAspectRatio="none">
                <polyline points="0,25 15,18 30,20 45,10 60,14 75,5 100,8" fill="none" stroke="#7b3fe4" strokeWidth="2" />
              </svg>
            </div>

            <div className="am-card am-card--insights">
              <img src={mission.insightImage} alt="" className="am-card__thumb" />
              <div>
                <strong>Deep Insights</strong>
                <p>Understand your audience better with AI</p>
                <span className="am-card__link">View Insights →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Story timeline + devices card ---------- */}
      <div className="about-story-grid">
        <div className="about-story-block">
          <span className="about-badge">{story.badge}</span>
          <h3 className="about-story-heading">{story.heading}</h3>
          <p className="about-story-copy">{story.text}</p>
          {story.cta && (
            <a href={story.cta.href} className="about-cta-secondary about-cta-secondary--dark">
              {story.cta.label}<ArrowIcon />
            </a>
          )}

          <div className="about-timeline">
            {story.timeline?.map((step) => (
              <div className="about-timeline__step" key={step.year}>
                <div className="about-timeline__dot"><TimelineIcon type={step.icon} /></div>
                <span className="about-timeline__year">{step.year}</span>
                <strong className="about-timeline__title">{step.title}</strong>
                <p className="about-timeline__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-devices">
          <h3 className="about-devices__heading">{devices.heading}</h3>

          <div className="about-devices__panel">
            <div className="about-devices__sidebar">
              {devices.departments?.map((d) => (
                <div key={d.label} className={`about-devices__dept ${d.active ? 'is-active' : ''}`}>
                  <DeptIcon type={d.icon} />
                  <span>{d.label}</span>
                </div>
              ))}
            </div>

            <div className="about-devices__tasks">
              <div className="about-devices__tasks-head">
                <span>Today's Tasks</span>
                <span className="about-devices__viewall">View All</span>
              </div>
              {devices.tasks?.map((t) => (
                <div className="about-devices__task" key={t.title}>
                  <div>
                    <strong>{t.title}</strong>
                    <span>{t.time}</span>
                  </div>
                  <div className="about-devices__task-avatars">
                    {devices.taskAvatars?.map((src, i) => (
                      <img key={i} src={src} alt="" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {devices.testimonial && (
            <div className="about-devices__testimonial">
              <img src={devices.testimonial.avatar} alt="" />
              <div>
                <strong>{devices.testimonial.name}</strong>
                <span>{devices.testimonial.role}</span>
                <p>{devices.testimonial.quote}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ---------- Core values ---------- */}
      <div className="about-values-row">
        {coreValues.map((v) => (
          <div className="about-value" key={v.title}>
            <span className="about-value-icon"><ValueIcon type={v.icon} /></span>
            <div>
              <strong>{v.title}</strong>
              <p>{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}