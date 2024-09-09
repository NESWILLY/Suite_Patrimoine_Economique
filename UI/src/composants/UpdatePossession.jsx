import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Styles/UpdatePossession.css'; // Import du fichier CSS

function UpdatePossession() {
  const { libelle } = useParams();
  const [possession, setPossession] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/possessions/${libelle}`)
      .then(response => {
        setPossession(response.data);
        setError(''); // Réinitialiser l'erreur en cas de succès
      })
      .catch(() => {
        setError('Erreur lors du chargement de la possession');
      });
  }, [libelle]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`/api/possessions/${libelle}`, possession)
      .then(() => {
        navigate('/possession');
      })
      .catch(() => {
        setError('Erreur lors de la mise à jour de la possession');
      });
  };

  const handleChange = (e) => {
    setPossession({
      ...possession,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="update-possession">
      <h1>Mettre à jour Possession</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleUpdate}>
        <label>
          Libelle:
          <input
            type="text"
            name="libelle"
            value={possession.libelle || ''}
            onChange={handleChange}
            disabled
          />
        </label>
        <label>
          Date Fin:
          <input
            type="date"
            name="dateFin"
            value={possession.dateFin || ''}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default UpdatePossession;
