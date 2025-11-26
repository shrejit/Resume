import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';

// FIX HERE ⬇⬇⬇
import Resume from './components/Resume';  
// ❌ import { Resume } from './components/Resume';

import { Bio } from './components/Bio';
import { Contact } from './components/Contact';

type Page = 'home' | 'resume' | 'bio' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'resume':
        return <Resume />;
      case 'bio':
        return <Bio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="page-transition">
        {renderPage()}
      </main>
    </div>
  );
}
