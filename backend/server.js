import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import patrimoineRoutes from './routes/patrimoineRoutes.js';
import possessionRoutes from './routes/possessionRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/patrimoine', patrimoineRoutes);
app.use('/api/possessions', possessionRoutes);

// Commenter ou retirer la connexion MongoDB
// mongoose.connect('mongodb://localhost:27017/patrimoine')
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
