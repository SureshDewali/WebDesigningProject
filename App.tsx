import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Types } from './pages/Types';
import { Limbs } from './pages/Limbs';
import { Asanas } from './pages/Asanas';
import { Sanskars } from './pages/Sanskars';
import { Geeta } from './pages/Geeta';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/types" element={<Types />} />
            <Route path="/limbs" element={<Limbs />} />
            <Route path="/asanas" element={<Asanas />} />
            <Route path="/sanskars" element={<Sanskars />} />
            <Route path="/geeta" element={<Geeta />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;