import { Hono } from 'hono';
import { DurableObject } from 'cloudflare:workers';

// --- Native Durable Objects from Repository ---
export class SubstrateDO extends DurableObject {
  constructor(ctx: DurableObjectState, env: any) {
    super(ctx, env);
  }
}

export class BrokerDO extends DurableObject {
  constructor(ctx: DurableObjectState, env: any) {
    super(ctx, env);
  }
}

// --- Hono Application Setup ---
const app = new Hono<{ Bindings: { DB: D1Database; QAL_SECRET: string } }>();

// Public catalog / substrate route
app.get('/api/catalog', async (c) => {
  try {
    const { results } = await c.env.DB.prepare('SELECT * FROM catalog_items').all();
    return c.json({ success: true, data: results || [] });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// QAL-protected telemetry route
app.get('/api/node/telemetry', async (c) => {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.replace(/^Bearer\s+/i, '');
  
  if (!token || token !== c.env.QAL_SECRET) {
    return c.json({ success: false, error: 'Unauthorized: Valid Bearer token required' }, 401);
  }

  try {
    const { results } = await c.env.DB.prepare('SELECT * FROM subconscious_telemetry_log').all();
    return c.json({ success: true, telemetry: results || [] });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

export default app;
