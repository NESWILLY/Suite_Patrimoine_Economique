// backend/controllers/patrimoineController.js
import Patrimoine from '../models/Patrimoine.js';
import Possession from '../models/possessions/Possession.js';
import { readFile, writeFile } from '../data/index.js'; // Vérifiez si vous avez aussi besoin de cette importation ici

const calculatePatrimoine = async (req, res) => {
  const { dateFin } = req.query;
  const parsedDateFin = dateFin ? new Date(dateFin) : new Date();

  try {
    const fileData = await readFile('./data/data.json');
    const data = fileData.data;

    const personne = data.find(p => p.model === 'Personne');
    const patrimoineData = data.find(p => p.model === 'Patrimoine');

    if (!personne || !patrimoineData) {
      return res.status(404).json({ error: 'Données non trouvées' });
    }

    const patrimoine = new Patrimoine(
      personne.data.nom,
      patrimoineData.data.possessions.map(p => new Possession(p))
    );

    const valeur = patrimoine.getValeur(parsedDateFin);
    res.json({ valeur });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { calculatePatrimoine };

