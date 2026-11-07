"use client";

import Link from "next/link";
import { useState } from "react";

type Option = { label: string; valeur: number };

const questions: { titre: string; options: Option[] }[] = [
  {
    titre: "Combien de commandes reçois-tu par mois ?",
    options: [
      { label: "Moins de 20", valeur: 15 },
      { label: "20 à 50", valeur: 35 },
      { label: "50 à 100", valeur: 75 },
      { label: "Plus de 100", valeur: 150 },
    ],
  },
  {
    titre: "Quel est ton panier moyen ?",
    options: [
      { label: "Moins de 30 €", valeur: 25 },
      { label: "30 à 60 €", valeur: 45 },
      { label: "60 à 100 €", valeur: 80 },
      { label: "Plus de 100 €", valeur: 130 },
    ],
  },
  {
    titre: "Que fais-tu aujourd’hui pour les paniers abandonnés ?",
    options: [
      { label: "Rien du tout", valeur: 0 },
      { label: "Le mail automatique de Shopify", valeur: 1 },
      { label: "Je relance à la main", valeur: 2 },
    ],
  },
];

const habitudes = [
  "Aujourd’hui, tu ne relances personne : ces paniers sont perdus.",
  "Aujourd’hui, tu t’appuies sur le mail automatique de Shopify : un message générique, sans suite.",
  "Aujourd’hui, tu relances à la main : ça te prend du temps, et tu en oublies forcément.",
];

const euros = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export default function Commencer() {
  const [etape, setEtape] = useState(0);
  const [reponses, setReponses] = useState<number[]>([]);

  const termine = etape >= questions.length;

  function choisir(valeur: number) {
    setReponses([...reponses, valeur]);
    setEtape(etape + 1);
  }

  function retour() {
    setReponses(reponses.slice(0, -1));
    setEtape(etape - 1);
  }

  if (termine) {
    const [commandes, panier, habitude] = reponses;
    const abandonnes = Math.round((commandes * 7) / 3);
    const perdu = Math.round((abandonnes * panier) / 10) * 10;
    const recupere = Math.round((abandonnes * panier * 0.05) / 5) * 5;

    return (
      <main className="mx-auto min-h-dvh max-w-xl px-5 py-8">
        <p className="font-titre text-xl font-semibold text-sapin">
          Panier Perdu
        </p>
        <h1 className="font-titre mt-8 text-3xl font-semibold leading-tight text-sapin">
          Voilà ce que tes paniers abandonnés te coûtent.
        </h1>

        <p className="mt-6 leading-relaxed">
          Tu reçois environ <strong>{commandes} commandes</strong> par mois,
          avec un panier moyen d’environ <strong>{euros(panier)}</strong>.
          Environ <strong>{abandonnes} paniers</strong> sont donc abandonnés
          chaque mois.
        </p>

        <section className="mt-6 rounded-md border-2 border-dashed border-sapin/40 p-5">
          <p className="text-sm">Laissé sur la table chaque mois</p>
          <p className="font-titre text-5xl font-semibold text-brique">
            {euros(perdu)}
          </p>
          <p className="mt-3 leading-relaxed">{habitudes[habitude]}</p>
        </section>

        <section className="mt-6 rounded-md bg-sapin p-5 text-papier">
          <p className="text-sm">Avec Panier Perdu, en récupérant 5 % seulement</p>
          <p className="font-titre text-5xl font-semibold">
            +{euros(recupere)} <span className="text-2xl">par mois</span>
          </p>
          <p className="mt-3 leading-relaxed">
            Contre 29 € d’abonnement. C’est une estimation prudente : le
            résultat réel dépend de ta boutique.
          </p>
        </section>

        <Link
          href={`/apercu?c=${commandes}&p=${panier}&h=${habitude}`}
          className="mt-8 flex w-full items-center justify-center rounded-md bg-brique px-6 py-4 text-lg font-semibold text-white"
        >
          Voir mes deux relances
        </Link>
      </main>
    );
  }

  const q = questions[etape];

  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col px-5 py-8">
      <div className="flex items-center justify-between">
        <p className="font-titre text-xl font-semibold text-sapin">
          Panier Perdu
        </p>
        <p className="text-sm">
          Question {etape + 1} sur {questions.length}
        </p>
      </div>

      <div
        className="mt-4 h-2 w-full rounded-full bg-sapin/15"
        role="progressbar"
        aria-valuenow={etape + 1}
        aria-valuemin={1}
        aria-valuemax={questions.length}
      >
        <div
          className="h-2 rounded-full bg-sapin transition-all"
          style={{ width: `${((etape + 1) / questions.length) * 100}%` }}
        />
      </div>

      <h1 className="font-titre mt-10 text-3xl font-semibold leading-tight text-sapin">
        {q.titre}
      </h1>

      <div className="mt-8 space-y-3">
        {q.options.map((o) => (
          <button
            key={o.label}
            onClick={() => choisir(o.valeur)}
            className="w-full rounded-md border-2 border-sapin bg-papier px-5 py-4 text-left text-lg font-semibold text-sapin active:bg-sapin active:text-papier"
          >
            {o.label}
          </button>
        ))}
      </div>

      {etape > 0 && (
        <button onClick={retour} className="mt-8 text-left text-sm underline">
          ← Retour
        </button>
      )}
    </main>
  );
}