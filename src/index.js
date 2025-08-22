const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const auth = require('./auth');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

// Warn in production if JWT_SECRET is not set
if (process.env.NODE_ENV === 'production' && JWT_SECRET === 'devsecret') {
  console.warn('WARNING: JWT_SECRET is not set. Set process.env.JWT_SECRET in production for security.');
}

// In-memory user store for scaffold purposes only
const users = new Map(); // email -> { id, email, passwordHash }

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });
  if (users.has(email)) return res.status(409).json({ error: 'User already exists' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = { id: Date.now().toString(), email, passwordHash };
  users.set(email, user);
  res.status(201).json({ id: user.id, email: user.email });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.get(email);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected example route
app.get('/me', auth, (req, res) => {
  res.json({ id: req.user.sub, email: req.user.email });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.info(`FlipScout backend scaffold running on port ${PORT}`);
  });
}

module.exports = app;