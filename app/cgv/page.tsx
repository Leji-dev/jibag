import type { Metadata } from "next";
import PageLegale, { Section } from "../legal/PageLegale";
import { INFOS } from "../legal/infos";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Panier Perdu",
};

export default function Cgv() {
  return (
    <PageLegale titre="Conditions générales de vente">
      <Section titre="1. Objet">
        <p>
          Ces conditions régissent l’abonnement au service Panier Perdu, vendu
          par {INFOS.nom} ({INFOS.statut}, SIRET {INFOS.siret}) à des
          professionnels exploitant une boutique en ligne Shopify.
        </p>
      </Section>

      <Section titre="2. Le service">
        <p>
          Panier Perdu lit les paniers abandonnés d’une boutique Shopify
          connectée et envoie deux e-mails de relance espacés et personnalisés
          à chaque client concerné. Un code de réduction facultatif peut être
          ajouté à la seconde relance. Un compteur indique le chiffre
          d’affaires récupéré.
        </p>
        <p>
          Le service est en phase de lancement : les premières boutiques
          démarrent sous 14 jours après le paiement. Si ce délai n’est pas
          tenu, le client peut demander le remboursement intégral.
        </p>
      </Section>

      <Section titre="3. Prix et paiement">
        <p>
          L’abonnement coûte 29 € par mois et par boutique, relances
          illimitées. {INFOS.tva}
        </p>
        <p>
          Le paiement s’effectue par carte, via Stripe. L’abonnement est
          mensuel et se renouvelle chaque mois jusqu’à sa résiliation.
        </p>
      </Section>

      <Section titre="4. Résiliation">
        <p>
          Le client peut résilier à tout moment, sans préavis. La résiliation
          prend effet à la fin de la période mensuelle en cours, qui n’est pas
          remboursée, sauf application de la garantie ci-dessous.
        </p>
      </Section>

      <Section titre="5. Garantie satisfait ou remboursé">
        <p>
          Pendant les 30 jours suivant le premier paiement, le client peut
          demander le remboursement intégral en écrivant à {INFOS.email} avec
          le mot « Remboursement ». Le remboursement est effectué sous 5 jours
          ouvrés, sans justification.
        </p>
      </Section>

      <Section titre="6. Responsabilité">
        <p>
          Panier Perdu s’engage à fournir le service avec soin, mais ne peut
          pas garantir un montant de chiffre d’affaires récupéré : les
          estimations affichées sur le site sont indicatives et dépendent de
          chaque boutique.
        </p>
      </Section>

      <Section titre="7. Données personnelles">
        <p>
          Pour les données des clients finaux de la boutique (e-mail, prénom,
          contenu du panier), le client est responsable de traitement et
          Panier Perdu agit comme sous-traitant, uniquement pour envoyer les
          relances. Les détails figurent dans la politique de confidentialité.
        </p>
      </Section>

      <Section titre="8. Droit applicable">
        <p>
          Ces conditions sont soumises au droit français. En cas de litige, une
          solution amiable est recherchée avant toute action devant les
          tribunaux compétents.
        </p>
      </Section>

      <p className="mt-8 text-sm">Dernière mise à jour : {INFOS.miseAJour}.</p>
    </PageLegale>
  );
}