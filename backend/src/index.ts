import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import auth from './auth';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

// In-memory user store for scaffold purposes only
const users = new Map<string, { id: string; email: string; passwordHash: string }>(); // email -> { id, email, passwordHash }

app.post('/register', async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });
  if (users.has(email)) return res.status(409).json({ error: 'User already exists' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = { id: Date.now().toString(), email, passwordHash };
  users.set(email, user);
  res.status(201).json({ id: user.id, email: user.email });
});

app.post('/login', async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  const user = users.get(email);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected example route
app.get('/me', auth, (req: express.Request, res: express.Response) => {
  res.json({ id: (req as any).user.sub, email: (req as any).user.email });
});

app.listen(PORT, () => {
  console.log(`FlipScout backend scaffold running on port ${PORT}`);
});
