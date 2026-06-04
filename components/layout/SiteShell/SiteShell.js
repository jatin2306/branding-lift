import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp/FloatingWhatsApp';

export default function SiteShell({ children }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
