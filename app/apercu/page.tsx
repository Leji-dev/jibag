import { redirect } from "next/navigation";

const COMMANDES = [15, 35, 75, 150];
const PANIERS = [25, 45, 80, 130];

// À COMPLÉTER avant la mise en production : ton adresse e-mail de contact.
const EMAIL_CONTACT = "[ton e-mail de contact]";

const faq = [
  {
    q: "Est-ce que ça marche pour ma boutique ?",
    r: "Panier Perdu fonctionne avec Shopify et vise les boutiques qui font quelques dizaines de commandes par mois. WooCommerce n’est pas encore pris en charge.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Environ 10 minutes : tu connectes ta boutique, tu relis les deux e-mails, tu actives. Ensuite, les relances partent toutes seules. Nous sommes en phase de lancement : les premières boutiques démarrent sous 14 jours après le paiement.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Tu résilies quand tu veux, sans préavis ni justification. Et pendant les 30 premiers jours, tu peux aussi te faire rembourser.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À deux relances automatiques pour chaque panier abandonné, sans limite de volume, au code promo facultatif sur la seconde et au compteur de chiffre d’affaires récupéré. Aucune commission sur tes ventes.",
  },
];

const euros = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export default async function Apercu({
  searchParams,
}: {
  searchParams: Promise<{ c?: string; p?: string }>;
}) {
  const { c, p } = await searchParams;
  const commandes = Number(c);
  const panier = Number(p);

  if (!COMMANDES.includes(commandes) || !PANIERS.includes(panier)) {
    redirect("/commencer");
  }

  const abandonnes = Math.round((commandes * 7) / 3);
  const recupere = Math.round((abandonnes * panier * 0.05) / 5) * 5;

  return (
    <main className="mx-auto max-w-xl px-5 py-8">
      <p className="font-titre text-xl font-semibold text-sapin">
        Panier Perdu
      </p>

      <h1 className="font-titre mt-8 text-3xl font-semibold leading-tight text-sapin">
        Voilà tes deux relances, prêtes.
      </h1>
      <p className="mt-3 text-sm">
        Exemple avec une cliente fictive. Chez toi, le prénom, l’article et le
        nom de ta boutique seront ceux de chaque client.
      </p>

      <section className="mt-6 rounded-md border-2 border-dashed border-sapin/40 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brique">
          Relance 1 — peu après l’abandon
        </p>
        <p className="mt-2 font-semibold">
          Objet : Tu as oublié quelque chose, Camille
        </p>
        <p className="mt-3 leading-relaxed">
          Bonjour Camille, tu as laissé « Le cabas en lin » dans ton panier. Il
          t’attend toujours : tu peux finir ta commande en un clic.
        </p>
        <p className="mt-4 inline-block rounded-md bg-sapin px-4 py-2 text-sm font-semibold text-papier">
          Retrouver mon panier
        </p>
      </section>

      <section className="mt-4 rounded-md border-2 border-dashed border-sapin/40 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brique">
          Relance 2 — un peu plus tard
        </p>
        <p className="mt-2 font-semibold">
          Objet : Ton cabas en lin est encore là, Camille
        </p>
        <p className="mt-3 leading-relaxed">
          Bonjour Camille, ton panier est toujours enregistré.
        </p>
        <div className="mt-4 rounded-md border border-sapin/30 bg-sapin/10 p-4 text-sm">
          <p className="font-semibold text-sapin">
            Verrouillé : la suite de cette relance et le code promo facultatif.
          </p>
          <p className="mt-1">Débloqué avec l’abonnement.</p>
        </div>
      </section>

      <section className="mt-10 rounded-md bg-sapin p-5 text-papier">
        <p className="text-sm">D’après tes réponses, tu pourrais récupérer</p>
        <p className="font-titre text-5xl font-semibold">
          +{euros(recupere)}{" "}
          <span className="text-2xl">par mois</span>
        </p>
        <p className="mt-3 leading-relaxed">
          Pour un abonnement de 29 €. Estimation prudente, fondée sur 5 % de
          paniers récupérés.
        </p>
      </section>

      <section id="paiement" className="mt-6 rounded-md border-2 border-sapin p-5">
        <p className="font-titre text-2xl font-semibold text-sapin">
          Panier Perdu
        </p>
        <p className="mt-2">
          <span className="font-titre text-5xl font-semibold">29 €</span>{" "}
          <span>par mois</span>
        </p>
        <p className="text-sm">Soit moins d’1 € par jour, relances illimitées.</p>

        <div className="mt-4 rounded-md bg-sapin/10 p-4">
          <p className="font-semibold text-sapin">
            Satisfait ou remboursé pendant 30 jours.
          </p>
          <p className="mt-1 text-sm leading-relaxed">
            Écris à {EMAIL_CONTACT} avec le mot « Remboursement » : tu es
            remboursé intégralement sous 5 jours ouvrés, sans avoir à te
            justifier.
          </p>
        </div>

        <div className="mt-4 rounded-md border-2 border-dashed border-brique p-4 text-sm">
          Le paiement s’affichera ici à l’étape suivante.
        </div>
        <p className="mt-3 text-sm font-semibold">
          Sans engagement, résiliable à tout moment.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-titre text-2xl font-semibold text-sapin">
          Questions fréquentes
        </h2>
        <div className="mt-4 divide-y divide-sapin/20 border-y border-sapin/20">
          {faq.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer font-semibold text-sapin">
                {f.q}
              </summary>
              <p className="mt-2 leading-relaxed">{f.r}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}