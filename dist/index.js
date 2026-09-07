// Portal‑OS v4.4 — Worker Bundle (dist/index.js)

import { Hono } from "hono";

const app = new Hono();

// Lane 1 — Root
app.get("/", (c) => {
  return c.html(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Portal‑OS</title>
  </head>
  <body>
    <h1>Portal‑OS Lane 1</h1>
    <p>Worker-only runtime active.</p>
  </body>
</html>`);
});

// Lane 2 — Interactive UI
app.get("/interactive", (c) => {
  return c.html(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Portal‑OS Interactive</title>
  </head>
  <body>
    <h1>Portal‑OS Lane 2 UI</h1>
    <script>
      console.log("Portal‑OS Lane 2 UI Loaded");
    </script>
  </body>
</html>`);
});

// Static assets passthrough
app.get("/public/*", async (c) => {
  const path = c.req.path.replace("/public/", "");
  const file = await c.env.PORTAL_BUCKET.get(path);
  if (!file) return c.notFound();
  return new Response(file.body, { headers: { "Content-Type": "application/octet-stream" } });
});

// Durable Objects (placeholder bindings)
export default {
  fetch: app.fetch,
  async scheduled(event, env, ctx) {},
};
