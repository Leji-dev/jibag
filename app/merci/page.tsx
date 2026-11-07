import Link from "next/link";
import Stripe from "stripe";

export default async function Merci({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  let paye = false;

  if (session_id && /^cs_(test|live)_[A-Za-z0-9]+$/.test(session_id)) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
      const session = await stripe.checkout.sessions.retrieve(session_id);
      paye = session.payment_status === "paid";
    } catch {
      paye = false;
    }
  }

  return (
    <main className="mx-auto max-w-xl px-5 py-8">
      <p className="font-titre text-xl font-semibold text-sapin">
        Panier Perdu
      </p>

      {paye ? (
        <>
          <h1 className="font-titre mt-8 text-3xl font-semibold leading-tight text-sapin">
            Merci, ton paiement est confirmé.
          </h1>
          <p className="mt-4 leading-relaxed">
            Je t’écris très vite à l’adresse e-mail utilisée pour le paiement
            afin de brancher ta boutique Shopify. Les premières boutiques
            démarrent sous 14 jours.
          </p>
          <p className="mt-4 leading-relaxed">
            Tu es couvert par la garantie satisfait ou remboursé pendant 30
            jours.
          </p>
        </>
      ) : (
        <>
          <h1 className="font-titre mt-8 text-3xl font-semibold leading-tight text-sapin">
            Le paiement n’a pas abouti.
          </h1>
          <p className="mt-4 leading-relaxed">
            Tu n’as pas été débité. Tu peux réessayer en revenant à l’offre.
          </p>
        </>
      )}

      <Link
        href="/"
        className="mt-8 flex w-full items-center justify-center rounded-md bg-sapin px-6 py-4 text-lg font-semibold text-papier"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}