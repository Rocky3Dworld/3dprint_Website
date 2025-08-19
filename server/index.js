
import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4242;
const stripeSecret = process.env.STRIPE_SECRET_KEY || '';
const domain = process.env.DOMAIN || 'http://localhost:5173';

const stripe = new Stripe(stripeSecret || 'sk_test_123', { apiVersion: '2024-06-20' });

app.use(cors());
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const items = req.body.items || [];
    const line_items = items.map((it) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: it.name },
        unit_amount: it.amount,
      },
      quantity: it.quantity,
      adjustable_quantity: { enabled: true, minimum: 1 },
    }));

  const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: items.map(item => ({
    price_data: {
      currency: 'inr',   // 👈 change here
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100, // in paise
    },
    quantity: item.quantity,
  })),
  mode: 'payment',
  success_url: `${process.env.DOMAIN}/success`,
  cancel_url: `${process.env.DOMAIN}/cancel`,
});

    res.json({ url: session.url });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Unable to create checkout session' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
