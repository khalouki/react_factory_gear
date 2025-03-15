import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import Contact_Page from './page/contact_page';
import Home from './page/home';
import Notfound from './page/Notfound';


function App() {
  return (
    <BrowserRouter basename="/react_factory_gear">
      {/* Afficher Header uniquement sur la page Notfound */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact_Page />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      {/* Afficher Footer sur toutes les pages sauf Notfound */}
      <FooterConditional />
    </BrowserRouter>
  );
}

// Composant pour afficher Footer conditionnellement
function FooterConditional() {
  const location = useLocation();

  // Ne pas afficher Footer sur la page Notfound
  if (location.pathname === '*') {
    return null;
  }

  return <Footer />;
}

export default App;
