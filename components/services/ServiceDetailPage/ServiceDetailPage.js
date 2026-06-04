import Link from 'next/link';
import { getServiceHelpPoints } from '@/config/siteConfig';
import { ServiceIcon } from '@/components/ui/Icons/Icons';
import Button from '@/components/ui/Button/Button';
import './ServiceDetailPage.css';

export default function ServiceDetailPage({ service }) {
  const { categoryLabel, name, description, image, icon } = service;
  const helpPoints = getServiceHelpPoints(service, categoryLabel);

  return (
    <article className="service-page">
      <div className="service-page__hero">
        <div className="service-page__hero-inner">
          <Link href="/#services" className="service-page__back">
            ← Back to services
          </Link>
          <div className="service-page__hero-meta">
            <span className="service-page__icon-wrap">
              <ServiceIcon type={icon || 'web'} className="service-page__icon" />
            </span>
            <span className="service-page__category">{categoryLabel}</span>
          </div>
          <h1 className="service-page__title">{name}</h1>
        </div>
      </div>

      <div className="service-page__media-wrap">
        <img src={image} alt="" className="service-page__image" />
      </div>

      <div className="service-page__content">
        <section className="service-page__section">
          <h2 className="service-page__section-title">About this service</h2>
          <p className="service-page__overview">{description}</p>
        </section>

        <section className="service-page__section service-page__section--help">
          <h2 className="service-page__section-title">How BrandingLift helps</h2>
          <p className="service-page__section-lead">
            We partner with you end-to-end—strategy through execution—so you get results, not just deliverables.
          </p>
          <ul className="service-page__help-list">
            {helpPoints.map((point, i) => (
              <li key={i} className="service-page__help-item">
                <span className="service-page__help-mark" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="service-page__cta">
          <p className="service-page__cta-text">
            Ready to get started with {name}? Let&apos;s talk about your project.
          </p>
          <Button href="/contact" variant="primary" className="service-page__cta-btn">
            Contact us
          </Button>
        </div>
      </div>
    </article>
  );
}
