"use server";

import Stripe from "stripe";

export async function creerSessionPaiement(): Promise<string> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded_page",
    mode: "subscription",
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merci?session_id={CHECKOUT_SESSION_ID}`,
    locale: "fr",
  });

  if (!session.client_secret) {
    throw new Error("Session de paiement indisponible");
  }

  return session.client_secret;
}