import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagePatrimoine from './composants/PagePatrimoine';
import ListePossessions from './composants/ListePossessions';
import CreatePossession from './composants/CreatePossession';
import UpdatePossession from './composants/UpdatePossession';
import Header from './composants/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PagePatrimoine />} /> {/* Route ajoutée pour la racine */}
        <Route path="/patrimoine" element={<PagePatrimoine />} />
        <Route path="/possession" element={<ListePossessions />} />
        <Route path="/possession/create" element={<CreatePossession />} />
        <Route path="/possession/:libelle/update" element={<UpdatePossession />} />
      </Routes>
    </Router>
  );
}

export default App;
