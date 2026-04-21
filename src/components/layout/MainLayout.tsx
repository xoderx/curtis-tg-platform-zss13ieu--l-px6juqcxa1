import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AIWidgets } from '@/components/conversion/AIWidgets';
import { useContentStore } from '@/hooks/use-content';
interface MainLayoutProps {
  children: React.ReactNode;
}
export function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();
  const fetchContent = useContentStore(s => s.fetchContent);
  const aiConfig = useContentStore(s => s.content.aiConfig);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    fetchContent();
  }, [fetchContent]);
  useEffect(() => {
    if (!aiConfig.dialoraClientKey) return;
    // Check if script already exists
    const SCRIPT_URL = "https://app.dialora.ai/widget.js";
    const existingScript = document.querySelector(`script[src="${SCRIPT_URL}"]`);
    if (!existingScript && !window.Dialora) {
      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.dataset.clientKey = aiConfig.dialoraClientKey;
      script.async = true;
      document.head.appendChild(script);
    }
  }, [aiConfig.dialoraClientKey]);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <AIWidgets />
    </div>
  );
}