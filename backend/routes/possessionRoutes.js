// backend/routes/possessionRoutes.js
import express from 'express';
import {
  createPossession,
  updatePossession,
  deletePossession,
  getAllPossessions,
  getPossession,
  closePossession
} from '../controllers/possessionController.js';

const router = express.Router();

// Route pour créer une nouvelle possession
router.post('/', createPossession);

// Route pour mettre à jour une possession existante par son libelle
router.put('/:libelle', updatePossession);

// Route pour supprimer une possession par son libelle
router.delete('/:libelle', deletePossession);

// Route pour obtenir toutes les possessions
router.get('/', getAllPossessions);

// Route pour obtenir une possession spécifique par son libelle
router.get('/:libelle', getPossession);

// Route pour clôturer une possession par son libelle
router.put('/:libelle/close', closePossession);

export default router; // Utilisez export default pour la cohérence avec les imports ECMAScript
