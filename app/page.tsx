import Link from "next/link";

const avantages = [
  {
    titre: "Deux relances, écrites pour toi",
    texte:
      "Un premier e-mail peu après l’abandon, un second un peu plus tard. Chacun reprend le prénom du client et les articles laissés dans son panier.",
  },
  {
    titre: "Un code promo, si tu veux",
    texte:
      "Tu peux glisser une réduction dans la seconde relance. C’est facultatif, et tu choisis le montant.",
  },
  {
    titre: "Le chiffre d’affaires récupéré, en euros",
    texte:
      "Un compteur te montre ce que les relances t’ont rapporté. Tu vois tout de suite si tes 29 € sont rentabilisés.",
  },
];

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-8 md:pb-16 md:pt-14">
      <p className="font-titre text-xl font-semibold text-sapin">
        Panier Perdu
      </p>

      <h1 className="font-titre mt-10 text-4xl font-semibold leading-tight text-sapin md:text-5xl">
        Récupère les paniers que tes clients ont abandonnés.
      </h1>
      <p className="mt-5 text-lg leading-relaxed">
        Deux e-mails de relance, écrits et envoyés automatiquement pour ta
        boutique Shopify. 29 € par mois, sans engagement.
      </p>

      <Link
        href="/commencer"
        className="mt-8 hidden w-full items-center justify-center rounded-md bg-brique px-6 py-4 text-lg font-semibold text-white md:flex"
      >
        Commencer — c’est gratuit
      </Link>
      <p className="mt-3 hidden text-sm md:block">
        3 questions, 1 minute, aucun paiement.
      </p>

      <section className="mt-12 rounded-md border-2 border-dashed border-sapin/40 p-5">
        <p className="font-titre text-6xl font-semibold text-brique">7 sur 10</p>
        <p className="mt-2 text-lg font-semibold">
          Près de 7 paniers sont abandonnés avant le paiement.
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          Moyenne du commerce en ligne, d’après le Baymard Institute. Les outils
          de relance classiques sont pensés pour de gros volumes : les petites
          boutiques, elles, ne relancent rien.
        </p>
      </section>

      <section className="mt-12 space-y-8">
        {avantages.map((a) => (
          <div key={a.titre} className="border-t-2 border-sapin pt-4">
            <h2 className="font-titre text-xl font-semibold text-sapin">
              {a.titre}
            </h2>
            <p className="mt-2 leading-relaxed">{a.texte}</p>
          </div>
        ))}
      </section>

      <div className="fixed inset-x-0 bottom-0 border-t border-sapin/20 bg-papier p-4 md:hidden">
        <Link
          href="/commencer"
          className="flex w-full items-center justify-center rounded-md bg-brique px-6 py-4 text-lg font-semibold text-white"
        >
          Commencer — c’est gratuit
        </Link>
        <p className="mt-2 text-center text-xs">
          3 questions, 1 minute, aucun paiement.
        </p>
      </div>
    </main>
  );
}