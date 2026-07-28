import ContentSection from '@/shared/ui/ContentSection/ContentSection';
import ContactForm from '@/features/contact/components/ContactForm/ContactForm';

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
