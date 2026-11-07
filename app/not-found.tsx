import Link from "next/link";

export default function NonTrouvee() {
  return (
    <main className="mx-auto max-w-xl px-5 py-16">
      <p className="font-titre text-6xl font-semibold text-brique">404</p>
      <h1 className="font-titre mt-4 text-3xl font-semibold text-sapin">
        Cette page n’existe pas.
      </h1>
      <p className="mt-3 leading-relaxed">
        Le lien est peut-être erroné, ou la page a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 flex w-full items-center justify-center rounded-md bg-brique px-6 py-4 text-lg font-semibold text-white"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}