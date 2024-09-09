// UI/src/composants/CreatePossession.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Styles/CreatePossession.css';


function CreatePossession() {
  const [libelle, setLibelle] = useState('');
  const [valeurInitiale, setValeurInitiale] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [tauxAmortissement, setTauxAmortissement] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!libelle || !valeurInitiale || !dateDebut || !tauxAmortissement) {
      setError('Tous les champs doivent être remplis');
      return;
    }

    // Format data
    const data = {
      libelle,
      valeurInitiale: parseFloat(valeurInitiale),
      dateDebut,
      tauxAmortissement: parseFloat(tauxAmortissement)
    };

    axios.post('/api/possessions', data)
      .then(() => {
        navigate('/possession');
      })
      .catch((err) => {
        setError('Erreur lors de la création de la possession');
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Créer Possession</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>
          Libelle:
          <input
            type="text"
            value={libelle}
            onChange={e => setLibelle(e.target.value)}
          />
        </label>
        <label>
          Valeur Initiale:
          <input
            type="number"
            value={valeurInitiale}
            onChange={e => setValeurInitiale(e.target.value)}
            step="0.01"
          />
        </label>
        <label>
          Date Début:
          <input
            type="date"
            value={dateDebut}
            onChange={e => setDateDebut(e.target.value)}
          />
        </label>
        <label>
          Taux Amortissement:
          <input
            type="number"
            value={tauxAmortissement}
            onChange={e => setTauxAmortissement(e.target.value)}
            step="0.01"
          />
        </label>
        <button type="submit">Créer</button>
      </form>
    </div>
  );
}

export default CreatePossession;
