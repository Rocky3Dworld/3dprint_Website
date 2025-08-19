
# 3D Print Shop – React + Vite + Tailwind (+ Stripe Checkout)

A ready-to-run storefront template for selling 3D printed products. Includes a cart and Stripe Checkout integration.

## 🚀 Quickstart

```bash
# 1) Install deps
npm install

# 2) Run client (Vite) and server (Express) together
#    (client on :5173, server on :4242, API proxied to /api/*)
npm run dev:all
```

> Before running checkout, set your Stripe secret key:
Create a `.env` file in the root (next to package.json) with:
```
STRIPE_SECRET_KEY=sk_test_...your_key...
DOMAIN=http://localhost:5173
```

Or export env vars directly when starting the server:
```bash
STRIPE_SECRET_KEY=sk_test_... DOMAIN=http://localhost:5173 npm run server
```

### What’s inside
- React + TypeScript + Vite
- Tailwind CSS
- Minimal UI kit (button, card, input, badge, tabs, sheet)
- Cart drawer, product listing, filters, hero, features, testimonials, newsletter, contact
- **Stripe Checkout** via `/api/create-checkout-session`

### Deploy
- Host the client on Vercel/Netlify.
- Host the server on Render/Fly/railway. Set `DOMAIN` to your client URL.
- Update `vite.config.ts` proxy to point to your deployed server in production or swap to full URL in `fetch`.

### Notes
- Prices are defined in the product list in USD and sent to Stripe in cents.
- This demo does not store orders; Stripe’s dashboard shows payments. Add a webhook for fulfillment later.
