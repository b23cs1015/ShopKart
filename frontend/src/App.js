import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Developers from './pages/Developers';
import SubCategoryPage from './pages/subcategories/SubCategoryPage';
import { HashLoader } from 'react-spinners';

const AppContent = () => {
  const location = useLocation();
  const showHeader = location.pathname === '/';
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setLoading(true);
    setFade(true);
    const timer1 = setTimeout(() => setFade(false), 600); // start fade-out
    const timer2 = setTimeout(() => setLoading(false), 1000); // fully hide loader
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          background: 'rgba(255, 255, 255, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          opacity: fade ? 1 : 0,
          transition: 'opacity 400ms ease'
        }}>
          <HashLoader color="#3498db" size={70} />
        </div>
      )}

      {!loading && (
        <>
          {showHeader && <Header />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/subcategory/:name" element={<SubCategoryPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
