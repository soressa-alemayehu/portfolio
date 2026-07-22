import { Outlet } from 'react-router-dom';
import { ScrollProgress } from '../components/ScrollProgress';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { usePortfolio } from '../context/PortfolioContext';

export function RootLayout() {
  const { data } = usePortfolio();

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text-primary selection:bg-brand-cyan/30 selection:text-white">
      {/* Scroll indicator at top */}
      <ScrollProgress />

      {/* Header Navbar */}
      <Navbar logoText={data.siteSettings.logoText} />

      {/* Main Router Page Container */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Main Footer */}
      <Footer
        logoText={data.siteSettings.logoText}
        socialLinks={data.socialLinks}
      />

      {/* Back to Top Floating Button */}
      <BackToTop />
    </div>
  );
}
