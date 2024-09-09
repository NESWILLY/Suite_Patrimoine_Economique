// backend/routes/patrimoineRoutes.js
import express from 'express';
import { calculatePatrimoine } from '../controllers/patrimoineController.js'; // Assurez-vous que cette fonction est bien exportée

const router = express.Router();

// Route pour calculer le patrimoine
router.get('/', calculatePatrimoine); // Vérifiez que calculatePatrimoine est bien une fonction valide

export default router;
