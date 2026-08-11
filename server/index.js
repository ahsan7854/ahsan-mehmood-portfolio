import express from 'express';
import cors from 'cors';
import { getDbData, saveMessage, isConnected } from './db/connection.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Health & Status
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    service: 'Software Engineer Portfolio API',
    database: isConnected ? 'MySQL Connected' : 'In-Memory Fallback Active',
    timestamp: new Date().toISOString()
  });
});

// Profile endpoint
app.get('/api/profile', async (req, res) => {
  const profile = await getDbData('profile');
  const data = Array.isArray(profile) ? profile[0] : profile;
  res.json(data);
});

// Services endpoint (QA Automation, Full-Stack, AI)
app.get('/api/services', async (req, res) => {
  const services = await getDbData('services');
  res.json(services);
});

// Skills endpoint
app.get('/api/skills', async (req, res) => {
  const skills = await getDbData('skills');
  res.json(skills);
});

// Projects endpoint
app.get('/api/projects', async (req, res) => {
  const projects = await getDbData('projects');
  res.json(projects);
});

// Experience endpoint
app.get('/api/experience', async (req, res) => {
  const experiences = await getDbData('experiences');
  res.json(experiences);
});

// Contact Form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const result = await saveMessage({ name, email, subject, message });
  res.status(201).json({
    message: 'Thank you! Your message has been received.',
    result
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio REST API Server running on http://localhost:${PORT}`);
});
