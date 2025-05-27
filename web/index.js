import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { shopifyApp, LATEST_API_VERSION } from '@shopify/shopify-app-express';
import settingsApi from './routes/api/settings.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Shopify app setup
const shopify = shopifyApp({
  api: {
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    scopes: process.env.SCOPES?.split(',') || ['read_products'],
    hostName: process.env.HOST.replace(/^https?:\/\//, ''),
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: true,
  },
  auth: {
    path: '/auth',
    callbackPath: '/auth/callback',
  },
  webhooks: {
    path: '/api/webhooks',
  },
});

app.use(cors());
app.use(bodyParser.json());

// Shopify OAuth handlers
app.use(shopify);

// Your settings API
app.use('/api/settings', settingsApi);

// Root route
app.get('/', async (req, res) => {
  res.send('COD Advance Payment App is live.');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
