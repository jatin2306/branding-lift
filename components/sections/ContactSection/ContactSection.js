import ContentSection from '@/components/sections/ContentSection/ContentSection';
import ContactForm from '@/components/sections/ContactForm/ContactForm';

export default function ContactSection({ id = 'contact' }) {
  return (
    <ContentSection
      id={id}
      title="Get in touch"
      subtitle="Ready to lift your brand? Say hello."
      headingAlign="center"
    >
      <ContactForm />
    </ContentSection>
  );
}
