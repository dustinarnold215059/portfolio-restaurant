import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

// Lazy load pages
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const Reservations = lazy(() => import('./pages/Reservations'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden max-w-full w-full m-0 p-0">
      <Header />
      <main className="flex-grow overflow-x-hidden w-full max-w-full m-0 p-0">
        <AnimatePresence mode="wait">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
