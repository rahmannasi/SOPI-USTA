import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSelector from './components/ProblemSelector';
import Footer from './components/Footer';
import MobileContactBar from './components/MobileContactBar';
import WhatsAppButton from './components/WhatsAppButton';
import ServicesModal from './components/ServicesModal';
import PWAInstallAffordance from './components/PWAInstallAffordance';

export default function App() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white selection:bg-[#FFC700] selection:text-[#0B1426] text-[#0B1426] flex flex-col antialiased">
        <PWAInstallAffordance />
        <Header onOpenServices={() => setIsServicesOpen(true)} />
        
        <main className="flex-grow">
          <Hero onOpenServices={() => setIsServicesOpen(true)} />
          <ProblemSelector />
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileContactBar />
        
        <ServicesModal 
          isOpen={isServicesOpen} 
          onClose={() => setIsServicesOpen(false)} 
        />
      </div>
    </LanguageProvider>
  );
}
