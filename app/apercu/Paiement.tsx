"use client";

import { useCallback, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { creerSessionPaiement } from "../actions/paiement";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function Paiement() {
  const [erreur, setErreur] = useState(false);

  const fetchClientSecret = useCallback(async () => {
    try {
      return await creerSessionPaiement();
    } catch {
      setErreur(true);
      throw new Error("Paiement indisponible");
    }
  }, []);

  if (erreur) {
    return (
      <div className="rounded-md border-2 border-brique p-4 text-sm">
        <p className="font-semibold text-brique">
          Le paiement ne se charge pas.
        </p>
        <p className="mt-1">
          Recharge la page. Si le problème continue, écris-nous : tu n’as pas
          été débité.
        </p>
      </div>
    );
  }

  return (
    <EmbeddedCheckoutProvider
      stripe={stripePromise}
      options={{ fetchClientSecret }}
    >
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  );
}