// UI/src/composants/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Styles/Header.css'; // Importez le fichier CSS à partir du chemin correct

function Header() {
  const location = useLocation();
  
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link
              to="/patrimoine"
              className={location.pathname === '/patrimoine' ? 'active' : ''}
              aria-label="Menu Patrimoine"
            >
              Menu Patrimoine
            </Link>
          </li>
          <li>
            <Link
              to="/possession"
              className={location.pathname === '/possession' ? 'active' : ''}
              aria-label="Menu Possessions"
            >
              Menu Possessions
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
