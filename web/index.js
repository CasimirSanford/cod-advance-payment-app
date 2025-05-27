import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import settingsApi from './routes/api/settings.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/settings', settingsApi);

app.get('/', (req, res) => res.send('COD Advance Payment App is running.'));
app.listen(3000, () => console.log('Server running on http://localhost:3000'));