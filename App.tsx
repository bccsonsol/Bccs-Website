import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Utility from './pages/Utility';
import Collection from './pages/Collection';
import Lore from './pages/Lore';
import DigiBeatz from './pages/DigiBeatz';
import Partnerships from './pages/Partnerships';
import Learn from './pages/Learn';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="utility" element={<Utility />} />
          <Route path="collection" element={<Collection />} />
          <Route path="lore" element={<Lore />} />
          <Route path="digibeatz" element={<DigiBeatz />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="learn" element={<Learn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;