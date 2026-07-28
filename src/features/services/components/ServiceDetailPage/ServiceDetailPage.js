import Link from 'next/link';
import { getServiceHelpPoints } from '@/lib/config/siteConfig';
import { ServiceIcon } from '@/shared/ui/Icons/Icons';
import RemoteImage from '@/shared/ui/RemoteImage/RemoteImage';
import Button from '@/shared/ui/Button/Button';
import './ServiceDetailPage.css';

export default function ServiceDetailPage({ service }) {
  const { categoryLabel, name, description, image, icon } = service;
  const helpPoints = getServiceHelpPoints(service, categoryLabel);

  return (
    <article className="service-page">
      <header className="service-page__header">
        <div className="service-page__container">
          <Link href="/#services" className="service-page__back">
            <span className="service-page__back-icon" aria-hidden>←</span>
            Back to services
          </Link>

          <div className="service-page__header-grid">
            <div className="service-page__intro">
              <div className="service-page__meta">
                <span className="service-page__icon-wrap">
                  <ServiceIcon type={icon || 'web'} className="service-page__icon" />
                </span>
                <span className="service-page__category">{categoryLabel}</span>
              </div>
              <h1 className="service-page__title">{name}</h1>
              <p className="service-page__lead">{description}</p>
            </div>

            <div className="service-page__visual">
              <RemoteImage src={image} alt={name} className="service-page__image" loading="eager" />
              <div className="service-page__visual-overlay" aria-hidden />
            </div>
          </div>
        </div>
      </header>

      <div className="service-page__container service-page__layout">
        <div className="service-page__main">
          <section className="service-page__card service-page__card--help">
            <div className="service-page__card-head">
              <h2 className="service-page__section-title">How BrandingLift helps</h2>
              <p className="service-page__section-lead">
                We partner with you end-to-end—strategy through execution—so you get results, not just deliverables.
              </p>
            </div>
            <ol className="service-page__help-list">
              {helpPoints.map((point, i) => (
                <li key={i} className="service-page__help-item">
                  <span className="service-page__help-num" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="service-page__help-text">{point}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="service-page__aside">
          <div className="service-page__sticky">
            <div className="service-page__cta">
              <span className="service-page__cta-label">Get started</span>
              <p className="service-page__cta-text">
                Ready to move forward with {name}? Tell us about your goals and we&apos;ll reply within one business day.
              </p>
              <Button href="/contact" variant="primary">
                Contact us
              </Button>
              <Link href="/#services" className="service-page__cta-link">
                Browse all services
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
