import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Styles/ListePossessions.css'; // Assurez-vous d'avoir ce fichier CSS

function ListePossessions() {
  const [possessions, setPossessions] = useState([]);

  useEffect(() => {
    axios.get('/api/possessions')
      .then(response => {
        // Assurez-vous que la réponse est un tableau
        if (Array.isArray(response.data)) {
          setPossessions(response.data);
        } else {
          console.error('La réponse n\'est pas un tableau:', response.data);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des possessions:', error);
      });
  }, []);

  const handleCloturer = (libelle) => {
    axios.put(`/api/possessions/${libelle}/close`)
      .then(() => {
        setPossessions(possessions.filter(possession => possession.libelle !== libelle));
      })
      .catch(error => {
        console.error('Erreur lors de la clôture de la possession:', error);
      });
  };

  return (
    <div>
      <h1>Liste des Possessions</h1>
      <Link to="/possession/create">Créer Possession</Link>
      <table>
        <thead>
          <tr>
            <th>Libelle</th>
            <th>Valeur Initiale</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Taux Amortissement</th>
            <th>Valeur actuelle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(possessions) && possessions.map(possession => (
            <tr key={possession.libelle}>
              <td>{possession.libelle}</td>
              <td>{possession.valeurInitiale}</td>
              <td>{possession.dateDebut}</td>
              <td>{possession.dateFin}</td>
              <td>{possession.tauxAmortissement}</td>
              <td>{possession.valeurActuelle}</td>
              <td>
                <Link to={`/possession/${possession.libelle}/update`}>Éditer</Link>
                <button onClick={() => handleCloturer(possession.libelle)}>Clôturer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListePossessions;
