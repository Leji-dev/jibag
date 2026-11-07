import Stripe from "stripe";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return new Response("Requête invalide", { status: 400 });
  }

  const corps = await request.text();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  let evenement: Stripe.Event;
  try {
    evenement = stripe.webhooks.constructEvent(corps, signature, secret);
  } catch {
    return new Response("Signature invalide", { status: 400 });
  }

  switch (evenement.type) {
    case "checkout.session.completed": {
      const session = evenement.data.object as Stripe.Checkout.Session;
      if (session.payment_status === "paid") {
        console.log("Paiement confirmé par Stripe :", session.id);
      }
      break;
    }
    case "customer.subscription.deleted": {
      const abonnement = evenement.data.object as Stripe.Subscription;
      console.log("Abonnement résilié :", abonnement.id);
      break;
    }
  }

  return new Response("ok", { status: 200 });
}