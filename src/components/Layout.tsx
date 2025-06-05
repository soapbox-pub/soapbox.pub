import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}