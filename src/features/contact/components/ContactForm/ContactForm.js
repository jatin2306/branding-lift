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

const WEB3FORMS_ACCESS_KEY = '01e6e60a-6e0e-4f96-b586-668c3d1303b3';

function ContactForm() {
  const { contact, social = [] } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New contact form message from ' + formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-block">
      <div className="contact-block__info">
        <h3 className="contact-block__heading">Contact us</h3>
        <p className="contact-block__lead">
          Have a project in mind? Reach out, we would love to hear from you.
        </p>

        <ul className="contact-block__list">
          {contact.email ? (
            <li>
              <a href={'mailto:' + contact.email} className="contact-block__link">
                <span className="contact-block__icon-wrap" aria-hidden="true">
                  <IconEmail className="contact-block__icon" />
                </span>
                <span className="contact-block__link-text">
                  <span className="contact-block__link-label">Email</span>
                  <span className="contact-block__link-value">{contact.email}</span>
                </span>
              </a>
            </li>
          ) : null}
          {contact.phone2 ? (
            <li>
              <a
                href={'tel:' + contact.phone2.replace(/\s/g, '')}
                className="contact-block__link"
              >
                <span className="contact-block__icon-wrap" aria-hidden="true">
                  <IconPhone className="contact-block__icon" />
                </span>
                <span className="contact-block__link-text">
                  <span className="contact-block__link-label">
                    {contact.phone2Label ? 'Phone (' + contact.phone2Label + ')' : 'Phone'}
                  </span>
                  <span className="contact-block__link-value">{contact.phone2}</span>
                </span>
              </a>
            </li>
          ) : null}
        </ul>

        {social.length > 0 ? (
          <div className="contact-block__social">
            <span className="contact-block__social-label">Follow us</span>
            <div className="contact-block__social-links">
              {social.map((item) => {
                const Icon = socialIcons[item.icon];
                if (!Icon) {
                  return null;
                }
                return (
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
                );
              })}
            </div>
          </div>
        ) : null}
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
              required
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
              required
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
            required
          />
        </div>

        {status === 'success' ? (
          <p className="contact-form__status contact-form__status--success">
            Thanks! Your message has been sent. We will get back to you soon.
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="contact-form__status contact-form__status--error">
            {errorMsg}
          </p>
        ) : null}

        <Button
          type="submit"
          variant="primary"
          className="contact-form__submit"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
