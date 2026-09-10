import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PWAInstall from './components/PWAInstall';
import MobileBottomMenu from './components/MobileBottomMenu';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Missions from './pages/Missions';
import Children from './pages/Children';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Prayer from './pages/Prayer';
import Give from './pages/Give';
import Contact from './pages/Contact';

function ServiceWorkerRegistrar() {
  useEffect(() => {
    if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
  }, []);
  return null;
}
export default function App() {
  return <BrowserRouter><ServiceWorkerRegistrar/><LoadingScreen/><div className="min-h-screen flex flex-col"><Navbar/><main className="flex-1"><Routes>
    <Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/ministries" element={<Ministries/>}/><Route path="/missions" element={<Missions/>}/><Route path="/children" element={<Children/>}/><Route path="/events" element={<Events/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/prayer" element={<Prayer/>}/><Route path="/give" element={<Give/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/>
  </Routes></main><Footer/></div><FloatingWhatsApp/><PWAInstall/><MobileBottomMenu/><ScrollToTop/></BrowserRouter>;
}
