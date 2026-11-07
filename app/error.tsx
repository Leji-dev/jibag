"use client";

import Link from "next/link";

export default function Erreur({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-xl px-5 py-16">
      <h1 className="font-titre text-3xl font-semibold text-sapin">
        Un problème est survenu de notre côté.
      </h1>
      <p className="mt-3 leading-relaxed">
        Ce n’est pas ta faute. Si tu étais en train de payer, tu n’as pas été
        débité tant que tu n’as pas vu la page de confirmation.
      </p>
      <button
        onClick={reset}
        className="mt-8 flex w-full items-center justify-center rounded-md bg-brique px-6 py-4 text-lg font-semibold text-white"
      >
        Réessayer
      </button>
      <Link href="/" className="mt-4 block text-center underline">
        Retour à l’accueil
      </Link>
    </main>
  );
}