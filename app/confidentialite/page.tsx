import type { Metadata } from "next";
import PageLegale, { Section } from "../legal/PageLegale";
import { INFOS } from "../legal/infos";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Panier Perdu",
};

export default function Confidentialite() {
  return (
    <PageLegale titre="Politique de confidentialité">
      <Section titre="Qui est responsable de tes données ?">
        <p>
          {INFOS.nom} ({INFOS.statut}, SIRET {INFOS.siret}), joignable à{" "}
          {INFOS.email}.
        </p>
      </Section>

      <Section titre="Quelles données, et pourquoi ?">
        <p>
          Quand tu t’abonnes : ton e-mail et les informations de paiement
          transmises à Stripe, pour gérer ton abonnement. Nous ne voyons jamais
          le numéro de ta carte.
        </p>
        <p>
          Quand tu connectes ta boutique : les paniers abandonnés (e-mail et
          prénom du client, articles, montant), pour envoyer les relances et
          calculer le chiffre d’affaires récupéré. Pour ces données, tu es
          responsable de traitement et nous agissons comme sous-traitant.
        </p>
        <p>
          Sur le site : une mesure d’audience anonyme, sans cookie, pour
          savoir combien de visiteurs deviennent clients.
        </p>
      </Section>

      <Section titre="Qui reçoit ces données ?">
        <p>
          Nos prestataires techniques : Stripe (paiement), Vercel
          (hébergement), Supabase (base de données) et Resend (envoi des
          e-mails). Certains sont situés hors de l’Union européenne ; les
          transferts reposent sur les garanties prévues par le RGPD.
        </p>
      </Section>

      <Section titre="Combien de temps ?">
        <p>
          Les données de paniers sont conservées le temps nécessaire aux
          relances et au calcul du chiffre d’affaires récupéré, puis supprimées
          ou anonymisées à la résiliation. Les données de facturation sont
          conservées pendant la durée légale.
        </p>
      </Section>

      <Section titre="Tes droits">
        <p>
          Tu peux demander l’accès, la rectification ou la suppression de tes
          données en écrivant à {INFOS.email}. Tu peux aussi saisir la CNIL
          (cnil.fr) si tu estimes que tes droits ne sont pas respectés.
        </p>
      </Section>

      <Section titre="Cookies">
        <p>
          Le site n’utilise aucun cookie de suivi. Le formulaire de paiement de
          Stripe peut déposer des cookies techniques nécessaires à la sécurité
          du paiement.
        </p>
      </Section>

      <p className="mt-8 text-sm">Dernière mise à jour : {INFOS.miseAJour}.</p>
    </PageLegale>
  );
}