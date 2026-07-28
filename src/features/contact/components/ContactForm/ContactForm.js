'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config/siteConfig';
import Button from '@/shared/ui/Button/Button';
import {
  IconEmail,
  IconPhone,
  IconFacebook,
  IconLinkedIn,
  IconInstagram,
} from '@/shared/ui/Icons/Icons';
import './ContactForm.css';

const socialIcons = {
  facebook: IconFacebook,
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
};

function ContactForm() {
  const { contact, social = [] } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-block">
      <div className="contact-block__info">
        <h3 className="contact-block__heading">Contact us</h3>
        <p className="contact-block__lead">
          Have a project in mind? Reach outâ€”we&apos;d love to hear from you.
        </p>
        <ul className="contact-block__list">
          {contact.email && (
            <li>
              <a href={`mailto:${contact.email}`} className="contact-block__link">
                <span className="contact-block__icon-wrap" aria-hidden>
                  <IconEmail className="contact-block__icon" />
                </span>
                <span className="contact-block__link-text">
                  <span className="contact-block__link-label">Email</span>
                  <span className="contact-block__link-value">{contact.email}</span>
                </span>
              </a>
            </li>
          )}
          {contact.phone2 && (
            <li>
              <a
                href={`tel:${contact.phone2.replace(/\s/g, '')}`}
                className="contact-block__link"
              >
                <span className="contact-block__icon-wrap" aria-hidden>
                  <IconPhone className="contact-block__icon" />
                </span>
                <span className="contact-block__link-text">
                  <span className="contact-block__link-label">
                    Phone{contact.phone2Label ? ` (${contact.phone2Label})` : ''}
                  </span>
                  <span className="contact-block__link-value">{contact.phone2}</span>
                </span>
              </a>
            </li>
          )}
        </ul>
        {social.length > 0 && (
          <div className="contact-block__social">
            <span className="contact-block__social-label">Follow us</span>
            <div className="contact-block__social-links">
              {social.map((item) => {
                const Icon = socialIcons[item.icon];
                return Icon ? (
                  <a
                    key={item.icon}
                    href={item.url}
                    className="contact-block__social-link"
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-phone">Phone</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={5}
          />
        </div>
        <Button type="submit" variant="primary" className="contact-form__submit">
          Send message
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
