import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './screens/Home';
import Cv from './components/Cv';
import Formulaire from './components/Formulaire';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800 min-h-screen font-sans flex flex-col">
        {/* Barre de navigation */}
        <nav className="bg-gray-800 text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-center space-x-8">
            <NavLink
              to="/"
              className="hover:text-gray-300 transition duration-200 ease-in-out"
            >
              Accueil
            </NavLink>
            <NavLink
              to="/cv"
              className="hover:text-gray-300 transition duration-200 ease-in-out"
            >
              CV
            </NavLink>
            <NavLink
              to="/formulaire"
              className="hover:text-gray-300 transition duration-200 ease-in-out"
            >
              Formulaire
            </NavLink>
          </div>
        </nav>

        {/* Contenu principal */}
        <div className="container mx-auto p-8 flex-1 flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/formulaire" element={<Formulaire />} />
          </Routes>
        </div>

        {/* Pied de page */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <div>&copy; 2024 LEMGHARI Hiba. Tous droits réservés.</div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
