import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './Styles/PagePatrimoine.css'; // Import du fichier CSS

function PagePatrimoine() {
  const [dateDebut, setDateDebut] = useState(new Date());
  const [dateFin, setDateFin] = useState(new Date());
  const [valeur, setValeur] = useState(0);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    axios.get('/api/patrimoine', {
      params: {
        dateDebut: dateDebut.toISOString().split('T')[0],
        dateFin: dateFin.toISOString().split('T')[0],
        jour: 1 // Modifiez cette valeur selon vos besoins
      }
    })
    .then(response => {
      setValeur(response.data.valeur);
      setError(''); // Réinitialiser l'erreur en cas de succès
    })
    .catch(error => {
      setError('Erreur lors du calcul de la valeur du patrimoine');
      console.error('Erreur:', error);
    });
  };

  return (
    <div className="page-patrimoine">
      <h1>Page du Patrimoine</h1>
      <div>
        <label>
          Date Début:
          <DatePicker selected={dateDebut} onChange={date => setDateDebut(date)} />
        </label>
      </div>
      <div>
        <label>
          Date Fin:
          <DatePicker selected={dateFin} onChange={date => setDateFin(date)} />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculer</button>
      {error && <p className="error-message">{error}</p>}
      <h2>Valeur du Patrimoine: {valeur} FMG</h2>
    </div>
  );
}

export default PagePatrimoine;
