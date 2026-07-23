import React, { useState } from 'react';
import { siteConfig } from '../../../../config/siteConfig';
import Button from '../../../../shared/ui/Button';
import './ContactForm.css';

const CITY_PLACEHOLDER = 'Select City';

function ContactForm() {
  const { contact, cities = [] } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic (e.g. send to API or mailto)
  };

  return (
    <div className="contact-block">
      <div className="contact-block__links">
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        {contact.phone2 && (
          <p>
            <a href={`tel:${contact.phone2.replace(/\s/g, '')}`}>{contact.phone2}</a>
          </p>
        )}
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
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
        <div className="contact-form__field">
          <label htmlFor="contact-phone">Phone</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone"
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-city">City</label>
          <select
            id="contact-city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={!formData.city ? 'contact-form__select--placeholder' : ''}
          >
            <option value="">{CITY_PLACEHOLDER}</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={4}
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
