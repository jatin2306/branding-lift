import Header from '@/shared/layout/Header/Header';
import Footer from '@/shared/layout/Footer/Footer';
import FloatingWhatsApp from '@/shared/ui/FloatingWhatsApp/FloatingWhatsApp';

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
