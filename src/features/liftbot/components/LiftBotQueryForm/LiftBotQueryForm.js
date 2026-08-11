'use client';

import { useState } from 'react';
import Button from '@/shared/ui/Button/Button';
import './LiftBotQueryForm.css';

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

function LiftBotQueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
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
          subject: 'New LiftBot enquiry from ' + formData.name,
          name: formData.name,
          email: formData.email,
          business: formData.business,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', business: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <form className="lb-query-form" onSubmit={handleSubmit}>
      <div className="lb-query-form__row">
        <div className="lb-query-form__field">
          <label htmlFor="lb-name">Name</label>
          <input
            id="lb-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="lb-query-form__field">
          <label htmlFor="lb-email">Email</label>
          <input
            id="lb-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="lb-query-form__field">
        <label htmlFor="lb-business">Business / Website</label>
        <input
          id="lb-business"
          type="text"
          name="business"
          value={formData.business}
          onChange={handleChange}
          placeholder="Your business or website"
        />
      </div>

      <div className="lb-query-form__field">
        <label htmlFor="lb-message">Message</label>
        <textarea
          id="lb-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business and how you'd like LiftBot to help..."
          rows={4}
          required
        />
      </div>

      {status === 'success' ? (
        <p className="lb-query-form__status lb-query-form__status--success">
          Thanks! Our team will reach out to you shortly.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="lb-query-form__status lb-query-form__status--error">
          {errorMsg}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        className="lb-query-form__submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
      </Button>
    </form>
  );
}

export default LiftBotQueryForm;