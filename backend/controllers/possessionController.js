// backend/controllers/possessionController.js

import { readFile, writeFile } from '../data/index.js'; // Chemin mis à jour
// Créer une nouvelle possession
const createPossession = async (req, res) => {
  try {
    const { libelle, valeurInitiale, dateDebut, tauxAmortissement } = req.body;
    const fileData = await readFile('./data/data.json');
    const data = JSON.parse(fileData);

    const patrimoineData = data.find(p => p.model === 'Patrimoine');
    if (!patrimoineData) {
      return res.status(404).json({ error: 'Patrimoine non trouvé' });
    }

    const newPossession = {
      possesseur: { nom: 'John Doe' }, // Adaptez ceci en fonction des besoins
      libelle,
      valeur: valeurInitiale,
      dateDebut,
      dateFin: null,
      tauxAmortissement
    };

    patrimoineData.data.possessions.push(newPossession);
    await writeFile('./data/data.json', JSON.stringify(data, null, 2)); // Assurez-vous de convertir les données en JSON
    res.status(201).json(newPossession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une possession
const updatePossession = async (req, res) => {
  try {
    const { libelle, updatedData } = req.body;
    const fileData = await readFile('./data/data.json');
    const data = JSON.parse(fileData);

    const patrimoineData = data.find(p => p.model === 'Patrimoine');
    if (!patrimoineData) {
      return res.status(404).json({ error: 'Patrimoine non trouvé' });
    }

    const possessionIndex = patrimoineData.data.possessions.findIndex(p => p.libelle === libelle);
    if (possessionIndex === -1) {
      return res.status(404).json({ error: 'Possession non trouvée' });
    }

    patrimoineData.data.possessions[possessionIndex] = { ...patrimoineData.data.possessions[possessionIndex], ...updatedData };
    await writeFile('./data/data.json', JSON.stringify(data, null, 2));
    res.status(200).json(patrimoineData.data.possessions[possessionIndex]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une possession
const deletePossession = async (req, res) => {
  try {
    const { libelle } = req.body;
    const fileData = await readFile('./data/data.json');
    const data = JSON.parse(fileData);

    const patrimoineData = data.find(p => p.model === 'Patrimoine');
    if (!patrimoineData) {
      return res.status(404).json({ error: 'Patrimoine non trouvé' });
    }

    const possessionIndex = patrimoineData.data.possessions.findIndex(p => p.libelle === libelle);
    if (possessionIndex === -1) {
      return res.status(404).json({ error: 'Possession non trouvée' });
    }

    patrimoineData.data.possessions.splice(possessionIndex, 1);
    await writeFile('./data/data.json', JSON.stringify(data, null, 2));
    res.status(200).json({ message: 'Possession supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir toutes les possessions
const getAllPossessions = async (req, res) => {
  try {
    const fileData = await readFile('./data/data.json');
    const data = JSON.parse(fileData);

    const patrimoineData = data.find(p => p.model === 'Patrimoine');
    if (!patrimoineData) {
      return res.status(404).json({ error: 'Patrimoine non trouvé' });
    }

    res.status(200).json(patrimoineData.data.possessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir une possession par son libelle
const getPossession = async (req, res) => {
  try {
    const { libelle } = req.params;
    const fileData = await readFile('./data/data.json');
    const data = JSON.parse(fileData);

    const patrimoineData = data.find(p => p.model === 'Patrimoine');
    if (!patrimoineData) {
      return res.status(404).json({ error: 'Patrimoine non trouvé' });
    }

    const possession = patrimoineData.data.possessions.find(p => p.libelle === libelle);
    if (!possession) {
      return res.status(404).json({ error: 'Possession non trouvée' });
    }

    res.status(200).json(possession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Clôturer une possession
const closePossession = async (req, res) => {
  try {
    const { libelle } = req.body;
    const fileData = await readFile('./data/data.json');
    const data = JSON.parse(fileData);

    const patrimoineData = data.find(p => p.model === 'Patrimoine');
    if (!patrimoineData) {
      return res.status(404).json({ error: 'Patrimoine non trouvé' });
    }

    const possession = patrimoineData.data.possessions.find(p => p.libelle === libelle);
    if (!possession) {
      return res.status(404).json({ error: 'Possession non trouvée' });
    }

    possession.dateFin = new Date().toISOString(); // Clôture avec la date actuelle
    await writeFile('./data/data.json', JSON.stringify(data, null, 2));
    res.status(200).json(possession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  createPossession,
  updatePossession,
  deletePossession,
  getAllPossessions,
  getPossession,
  closePossession
};
