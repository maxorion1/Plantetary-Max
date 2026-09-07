import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Portal‑OS Worker Active (Lane 1)');
});

app.get('/health', (c) => {
  return c.json({ status: 'ok', lane: 1 });
});

export default app;
